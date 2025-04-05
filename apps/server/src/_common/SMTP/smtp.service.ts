import { ExecResultItf } from '@superfit/types/fetcher';
import { Injectable } from '@nestjs/common';
import { createTransport } from 'nodemailer';

@Injectable()
export class SmtpService {
  constructor() {
    //
  }

  async emilAuthSMTP({ email, authNum }: { email: string; authNum: string }): Promise<ExecResultItf> {
    let smtp = undefined;
    if (typeof smtp !== 'undefined') {
      return null;
    }
    smtp = await createTransport({
      service: 'gmail',
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: 'hilsm3814@gmail.com',
        pass: process.env.SMTP_KEY,
      },
    });

    // send mail with defined transport object
    const info = await smtp.sendMail({
      from: 'Eight <hilsm3814@gmail.com>',
      to: email,
      text: `Eight 회원가입 인증번호 [${authNum}]`,
      //   html: '<b>Hello world?</b>',
    });
    if (!info) {
      return { result: 'success' };
    }
    return { result: 'fail' };
  }
}
