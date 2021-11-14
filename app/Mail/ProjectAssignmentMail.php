<?php

namespace App\Mail;

use App\Models\Appointees;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class ProjectAssignmentMail extends Mailable
{
    use Queueable, SerializesModels;

    public $appoint;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct(Appointees $appoint)
    {
        $this->appoint = $appoint;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->subject("Proje ataması hakkında.")->view('mail.project-assignment-mail')->with(["appoint" => $this->appoint]);
    }
}
