import { MailAdapter, SendMailData } from '../mail-adapter';
import nodemailer from 'nodemailer';

const transport = nodemailer.createTransport({
  host: 'smtp.mailtrap.io',
  port: 2525,
  auth: {
    user: 'a351346327c9cd',
    pass: '77ef570f085709',
  },
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {
    await transport.sendMail({
      from: 'Equipe Feedget <feedget@gmail.com>',
      to: 'Lorenzo Patto <lorenzoqdpatto@gmail.com>',
      subject,
      html: body,
    });
  }
}
