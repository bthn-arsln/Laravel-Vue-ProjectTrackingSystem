<?php

namespace App\Http\Controllers;

use App\Models\SiteSetting;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class SiteSettingController extends Controller
{
    public function getSettings()
    {
        $settings = SiteSetting::find(1);
        return response($settings);
    }

    public function postSettings(Request $request)
    {
        $control = SiteSetting::find(1);
        if ($control) {
            if ($request->hasFile("logo")) {
                $fileName = Str::slug($request->title) . "-logo." . $request->logo->extension();
                $fileNameWithUpload = "/uploads/setting/" . $fileName;
                $request->logo->move(public_path("uploads/setting"), $fileName);
                $request->merge([
                    "logo" => $fileNameWithUpload,
                ]);
            }
            if ($request->hasFile("favicon")) {
                $fileName = Str::slug($request->title) . "-favicon." . $request->favicon->extension();
                $fileNameWithUpload = "/uploads/setting/" . $fileName;
                $request->favicon->move(public_path("uploads/setting"), $fileName);
                $request->merge([
                    "favicon" => $fileNameWithUpload,
                ]);
            }
            $settings = SiteSetting::find(1)->update($request->post());
            return response($settings);
        } else {
            if ($request->hasFile("logo")) {
                $fileName = Str::slug($request->title) . "-logo." . $request->logo->extension();
                $fileNameWithUpload = "/uploads/setting/" . $fileName;
                $request->logo->move(public_path("uploads/setting"), $fileName);
                $request->merge([
                    "logo" => $fileNameWithUpload,
                ]);
            }
            if ($request->hasFile("favicon")) {
                $fileName = Str::slug($request->title) . "-favicon." . $request->favicon->extension();
                $fileNameWithUpload = "/uploads/setting/" . $fileName;
                $request->favicon->move(public_path("uploads/setting"), $fileName);
                $request->merge([
                    "favicon" => $fileNameWithUpload,
                ]);
            }
            $settings = SiteSetting::create($request->post());
            return response($settings);
        }
    }
}
