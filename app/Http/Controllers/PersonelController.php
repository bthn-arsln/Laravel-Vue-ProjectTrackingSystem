<?php

namespace App\Http\Controllers;

use App\Models\Project;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class PersonelController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $users = User::with("role")->where("role_id", 2);
        if (request()->get("name")) {
            $users = $users->where("name", "LIKE", "%" . request()->get("name") . "%");
        }
        $users = $users->orderBy("created_at", "DESC")->get();
        return response($users);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $user = new User;
        $user->role_id = $request->role_id;
        $user->name = $request->name;
        $user->slug = Str::slug($request->name);
        $user->email = $request->email;
        $user->phone = $request->phone;
        $user->password = Hash::make($request->password);
        $user->save();
        return response()->json($user);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($slug)
    {
        $user = User::with("role")->where("slug", $slug)->first();
        $totalProject = User::where("slug", $slug)->first()->projects()->count();
        $finishCount =
            User::where("slug", $slug)->first()->finishProjects()->count();
        $urgentCount =
            User::where("slug", $slug)->first()->urgentProjects()->count();
        $insignificantCount =
            User::where("slug", $slug)->first()->insignificantProjects()->count();
        $response = [
            "user" => $user,
            "totalProject" => $totalProject,
            "finishCount" => $finishCount,
            "urgentCount" => $urgentCount,
            "insignificantCount" => $insignificantCount,
        ];
        return response($response);
    }

    public function projects($slug)
    {
        $projects = User::where("slug", $slug)->first()->projects()->with("team")->paginate(6);
        return response($projects);
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
        $user = User::with("role")->find($id);
        $user->name = $request->name;
        $user->slug = Str::slug($request->name);
        $user->email = $request->email;
        $user->phone = $request->phone;
        if ($request->password !== 'null') {
            $user->password = Hash::make($request->password);
        }

        if ($request->hasFile("image")) {
            $fileName = uniqid() . "." . $request->image->extension();
            $request->image->move(public_path("uploads/account"), $fileName);
            $user->image = "/uploads/account/" . $fileName;
        }
        $user->save();

        $token = $user->createToken('edit-user-token')->plainTextToken;

        $response = [
            'user' => $user,
            'token' => $token
        ];

        return response($response);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        User::find($id)->delete();
        return response(null);
    }
}
