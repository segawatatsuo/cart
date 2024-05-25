<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class ContactSendmail extends Mailable
{
    use Queueable;
    use SerializesModels;

    private $email;
    private $contact;
    private $name;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($contact)
    {
        $this->name = $contact['name'];
        $this->email = $contact['email'];
        $this->contact = $contact['contact'];
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this
        ->from($this->email)
        ->subject('チームウェアページお問い合わせ')
        ->view('contact.mail')
        ->with([
            'name' => $this->name,
            'email' => $this->email,
            'contact' => $this->contact,
        ]);
    }
}
