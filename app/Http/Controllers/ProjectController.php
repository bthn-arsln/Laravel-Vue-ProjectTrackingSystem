<?php

namespace App\Http\Controllers;

use App\Mail\ProjectAssignmentMail;
use App\Mail\ProjectChangeStatusMail;
use App\Mail\ProjectUnassignMail;
use App\Models\Project;
use App\Models\Appointees;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Str;

class ProjectController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $projectsDay = Project::with("creator")->orderBy("created_at", "DESC")->whereDay("finished_date", "=", Carbon::now())->get();
        $projectsMonth = Project::with("creator")->orderBy("created_at", "DESC")->whereMonth("finished_date", date("m"))->paginate(5);

        $projects = Project::with("creator");
        if (request()->get("title")) {
            $projects = $projects->where("title", "LIKE", "%" . request()->get("title") . "%");
        }
        if (request()->get("status")) {
            $projects = $projects->where("status", request()->get("status"));
        }
        if (request()->get("urgency")) {
            $projects = $projects->where("urgency", request()->get("urgency"));
        }

        $projects = $projects->orderBy("created_at", "DESC")->paginate(10);

        $modalProjects = Project::orderBy("created_at", "DESC")->get();

        $finishCount = Project::finishCount();
        $urgentCount = Project::urgentCount();
        $insignificantCount = Project::insignificantCount();

        $response = [
            "projectsDay" => $projectsDay,
            "projectsMonth" => $projectsMonth,
            "projects" => $projects,
            "modalProjects" => $modalProjects,
            "totalProject" => $projects->total(),
            "finishCount" => $finishCount,
            "urgentCount" => $urgentCount,
            "insignificantCount" => $insignificantCount
        ];
        return response($response);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        if ($request->hasFile("image")) {
            $fileName = Str::slug($request->title) . "." . $request->image->extension();
            $fileNameWithUpload = "/uploads/project/" . $fileName;
            $request->image->move(public_path("uploads/project"), $fileName);
            $request->merge([
                "image" => $fileNameWithUpload,
            ]);
        }
        $project = Project::create($request->post());
        return response($project);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($slug)
    {
        $project = Project::with("team.role")->where("slug", $slug)->first();
        $todoCount = Project::where("slug", $slug)->first()->todos()->count();
        $noteCount = Project::where("slug", $slug)->first()->notes()->count();
        $team = Project::where("slug", $slug)->first()->team()->get();
        $teamCount = Project::where("slug", $slug)->first()->teamCount();

        $response = [
            "project" => $project,
            "todoCount" => $todoCount,
            "noteCount" => $noteCount,
            "team" => $team,
            "teamCount" => $teamCount,
        ];
        return response($response);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $project = Project::find($id);
        if ($request->hasFile("image")) {
            @unlink($project->image);
            $fileName = Str::slug($request->title) . "." . $request->image->extension();
            $request->image->move(public_path("uploads/project"), $fileName);
            $project->image = "/uploads/project/" . $fileName;
        }
        $project->title = $request->title;
        $project->slug = Str::slug($request->title);
        $project->description = $request->description;
        $project->specification = $request->specification;
        $project->urgency = $request->urgency;
        if ($request->status !== "Durum Seç") {
            $project->status = $request->status;
        }
        $project->starting_date = $request->starting_date;
        $project->finished_date = $request->finished_date;
        $project->save();
        return response($project);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        Project::find($id)->delete();
        return response(["success" => "Proje başarıyla silindi"]);
    }

    public function addProjectUser(Request $request)
    {
        $control = Appointees::where('user_id', $request->user_id)->where('project_id', $request->project_id)->count();
        if ($control) {
            $unassign = Appointees::where('user_id', $request->user_id)->where('project_id', $request->project_id)->first();
            Mail::to($unassign->user->email)->send(new ProjectUnassignMail($unassign));
            $unassign->delete();
            return response(["status" => 0]);
        } else {
            $appoint = Appointees::create($request->post());
            Mail::to($appoint->user->email)->send(new ProjectAssignmentMail($appoint));
            return response(["appoint" => $appoint, "status" => 1]);
        }
    }

    public function statusChange(Request $request, $id)
    {
        $project = Project::find($id);
        $project->status = $request->status;
        $project->save();
        Mail::to("admin@admin.com")->send(new ProjectChangeStatusMail($project));
        return response($project);
    }
}
