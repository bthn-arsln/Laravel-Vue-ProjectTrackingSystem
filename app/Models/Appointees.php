<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Appointees extends Model
{
    use HasFactory;

    protected $fillable = ["project_id", "user_id", "assignment_date"];

    protected $dates = ["assignment_date"];

    public $timestamps = false;

    public function user()
    {
        return $this->belongsTo("App\Models\User", "user_id");
    }

    public function project()
    {
        return $this->belongsTo("App\Models\Project", "project_id");
    }
}
