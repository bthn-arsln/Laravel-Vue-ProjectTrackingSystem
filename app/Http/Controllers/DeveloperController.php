<?php

namespace App\Http\Controllers;

use App\Models\User;
use Carbon\Carbon;
use Illuminate\Http\Request;

class DeveloperController extends Controller
{
    public function index($id)
    {
        $projects = User::find($id)->projects()->with("creator")->with("team")->paginate(10);

        $projectsDay = User::find($id)->projects()->with("creator")->orderBy("created_at", "DESC")->whereDay("finished_date", "=", Carbon::now())->get();

        $projectsMonth = User::find($id)->projects()->with("creator")->orderBy("created_at", "DESC")->whereMonth("finished_date", date("m"))->paginate(5);

        $totalProject = User::find($id)->projects()->with("creator")->with("team")->count();
        $finishCount =
            User::find($id)->finishProjects()->count();
        $urgentCount =
            User::find($id)->urgentProjects()->count();
        $insignificantCount =
            User::find($id)->insignificantProjects()->count();

        $response = [
            "projects" => $projects,
            "projectsDay" => $projectsDay,
            "projectsMonth" => $projectsMonth,
            "totalProject" => $totalProject,
            "finishCount" => $finishCount,
            "urgentCount" => $urgentCount,
            "insignificantCount" => $insignificantCount
        ];
        return response($response);
    }

    public function workflow($id)
    {
        $workflow = User::find($id)->projects()->with("creator");
        if (request()->get("title")) {
            $workflow = $workflow->where("title", "LIKE", "%" . request()->get("title") . "%");
        }
        $workflow = $workflow->orderBy("created_at", "DESC")->get();
        return response($workflow);
    }
}
