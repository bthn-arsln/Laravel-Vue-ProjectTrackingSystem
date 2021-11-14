<?php

namespace App\Mail;

use App\Models\Appointees;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class ProjectUnassignMail extends Mailable
{
    use Queueable, SerializesModels;

    public $unassign;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct(Appointees $unassign)
    {
        $this->unassign = $unassign;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->subject("Projeden çıkarıldınız")->view('mail.project-unassign-mail')->with(["unassign" => $this->unassign]);
    }
}
