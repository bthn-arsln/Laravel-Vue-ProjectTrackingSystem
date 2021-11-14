<?php

namespace App\Mail;

use App\Models\Note;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class AddNoteMail extends Mailable
{
    use Queueable, SerializesModels;

    public $note;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct(Note $note)
    {
        $this->note = $note;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->subject("Bir projeye not eklendi")->view('mail.add-note-mail')->with(["note" => $this->note]);
    }
}
