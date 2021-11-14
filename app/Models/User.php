<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use Cviebrock\EloquentSluggable\Sluggable;
use Illuminate\Support\Facades\Hash;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable, Sluggable;

    /**
     * The attributes that are mass assignable.
     *
     * @var string[]
     */
    protected $fillable = [
        "role_id",
        'name',
        'slug',
        'image',
        'email',
        'phone',
        'password',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array
     */
    protected $hidden = [
        'password',
    ];

    public function projects()
    {
        return $this->belongsToMany("App\Models\Project", "appointees")->orderBy("created_at", "DESC");
    }

    public function role()
    {
        return $this->belongsTo("App\Models\Role");
    }

    public function todos()
    {
        return $this->hasMany("App\Models\Todo", "author_id")->orderBy("created_at", "DESC");
    }

    public function notes()
    {
        return $this->hasMany("App\Models\Note", "author_id")->orderBy("created_at", "DESC");
    }

    public function finishProjects()
    {
        return $this->projects()->where("status", "finish");
    }

    public function urgentProjects()
    {
        return $this->projects()->where("urgency", "urgent");
    }

    public function insignificantProjects()
    {
        return $this->projects()->where("urgency", "insignificant");
    }

    public function sluggable(): array
    {
        return [
            'slug' => [
                'source' => 'name'
            ]
        ];
    }
}
