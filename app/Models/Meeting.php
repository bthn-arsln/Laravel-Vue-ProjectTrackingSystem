<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Meeting extends Model
{
    use HasFactory;

    protected $fillable = [
        "user_id",
        "company_id",
        "result",
        "note",
        "meeting_date",
    ];

    protected $dates = ["meeting_date"];
}
