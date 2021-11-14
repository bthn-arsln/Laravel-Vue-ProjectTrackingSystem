<?php

namespace App\Http\Controllers;

use App\Mail\AddTodoMail;
use App\Mail\EditTodoMail;
use App\Models\Project;
use App\Models\Todo;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class TodoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index($slug)
    {
        $todos = Project::where("slug", $slug)->first()->todos()->with("author");
        if (request()->get("todo")) {
            $todos = $todos->where("text", "LIKE", "%" . request()->get("todo") . "%");
        }
        $todos = $todos->orderBy("created_at", "DESC")->paginate(10);
        return response($todos);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request, $slug)
    {
        $todo = Project::whereSlug($slug)->first()->todos()->with("project")->create($request->post());
        Mail::to("admin@admin.com")->send(new AddTodoMail($todo));
        return response($todo);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $todo = Todo::find($id);
        return response($todo);
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
        $todo = Todo::find($id)->update($request->post());
        $editTodo = Todo::with("project")->find($id);
        Mail::to("admin@admin.com")->send(new EditTodoMail($editTodo));
        return response($todo);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        Todo::find($id)->delete();
        return response(null);
    }

    public function changeStatus(Request $request, $id)
    {
        $todo = Todo::find($id);
        $todo->status = $request->status;
        $todo->save();
        return response($todo);
    }
}
