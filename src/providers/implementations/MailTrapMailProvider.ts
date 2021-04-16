import { IMailProvider, IMessage } from '../IMailProvider';
import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';

export class MailTrapMailProvider implements IMailProvider {

  private transporter: Mail;

  constructor(){
    this.transporter = nodemailer.createTransport({
      host: "smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: "dc4f091989a5a9",
        pass: "b2caa6a8363910"
      }
    })

  }

  async sendMail(message: IMessage): Promise<void>{
    await this.transporter.sendMail({
      to: {
        name: message.to.name,
        address: message.to.email,
      },
      from: {
        name: message.from.name,
        address: message.from.email,
      },
      subject: message.subject,
      html: message.body,
    })
  }
}