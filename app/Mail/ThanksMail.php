<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class ThanksMail extends Mailable
{
    use Queueable, SerializesModels;

    public $content;
    /**
     * Create a new message instance.
     */
    public function __construct(array $content)
    {
        $this->content = $content;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->from('segawa82@nifty.com') // 送信元
        ->subject('ご注文ありがとうございます') // メールタイトル
        ->view('mail.thanks') // どのテンプレートを呼び出すか
        ->with(['content' => $this->content]); // withオプションでセットしたデータをテンプレートへ受け渡す
    }


    /**
     * Get the message envelope.
     */
    /*
    public function envelope(): Envelope
    {
        return new Envelope(
            subject: 'Thanks Mail',
        );
    }
    */
    /**
     * Get the message content definition.
     */
    /*
    public function content(): Content
    {

    }
    */
    /**
     * Get the attachments for the message.
     *
     * @return array<int, \Illuminate\Mail\Mailables\Attachment>
     */
    public function attachments(): array
    {
        return [];
    }
}
