<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Cviebrock\EloquentSluggable\Sluggable;

class Project extends Model
{
    use HasFactory, Sluggable;

    protected $fillable = [
        "creator_id",
        "title",
        "slug",
        "image",
        "description",
        "specification",
        "urgency",
        "status",
        "starting_date",
        "finished_date"
    ];

    protected $dates = [
        "starting_date",
        "finished_date"
    ];

    public function creator()
    {
        return $this->belongsTo("App\Models\User");
    }

    public function team()
    {
        return $this->belongsToMany("App\Models\User", "appointees");
    }

    public function teamCount()
    {
        return $this->belongsToMany("App\Models\User", "appointees")->count();
    }

    public function todos()
    {
        return $this->hasMany("App\Models\Todo");
    }

    public function notes()
    {
        return $this->hasMany("App\Models\Note");
    }

    public function scopefinishCount($query)
    {
        return $query->where("status", "finish")->count();
    }

    public function scopeurgentCount($query)
    {
        return $query->where("urgency", "urgent")->count();
    }

    public function scopeinsignificantCount($query)
    {
        return $query->where("urgency", "insignificant")->count();
    }

    public function sluggable(): array
    {
        return [
            'slug' => [
                'source' => 'title'
            ]
        ];
    }
}
