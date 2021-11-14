<?php

namespace App\Http\Controllers;

use App\Mail\AddNoteMail;
use App\Mail\EditNoteMail;
use App\Models\Note;
use App\Models\Project;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class NoteController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index($slug)
    {
        $project = Project::where("slug", $slug)->first();

        $team = Project::where("slug", $slug)->first()->team()->with(["notes" => function ($query) use ($project) {
            $query->where("project_id", $project->id);
        }, "notes.author"])->orderBy("created_at", "DESC")->paginate(2);

        $notes = Project::where("slug", $slug)->first()->notes()->with("author")->whereHas("author", function ($query) {
            $query->where("role_id", 1);
        })->orderBy("created_at", "DESC")->get();

        $response = [
            "notes" => $notes,
            "team" => $team
        ];
        return response($response);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request, $slug)
    {
        $note = Project::whereSlug($slug)->first()->notes()->with("proejct")->create($request->post());
        Mail::to("admin@admin.com")->send(new AddNoteMail($note));
        return response($note);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $note = Note::find($id);
        return response($note);
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
        $note = Note::find($id)->update($request->post());
        $editNote = Note::with("project")->find($id);
        Mail::to("admin@admin.com")->send(new EditNoteMail($editNote));
        return response($note);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        Note::find($id)->delete();
        return response(null);
    }
}
