<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Appointment extends Model
{
    use HasFactory;

    protected $fillable = [
        "user_id",
        "company_id",
        "note",
        "appointment_date",
    ];

    protected $dates = ["appointment_date"];
}
