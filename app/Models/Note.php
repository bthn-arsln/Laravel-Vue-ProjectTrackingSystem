<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Note extends Model
{
    use HasFactory;

    protected $fillable = ["author_id", "project_id", "title", "description"];

    public function project()
    {
        return $this->belongsTo("App\Models\Project");
    }

    public function author()
    {
        return $this->belongsTo("App\Models\User");
    }
}
