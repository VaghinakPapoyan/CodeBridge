import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    const { name, phone, email, timestamp } = await request.json();

    // Create transporter (you'll need to configure this with your email provider)
    const transporter = nodemailer.createTransport({
      service: "gmail", // or your preferred email service
      auth: {
        user: process.env.SMTP_USER, // Your email
        pass: process.env.SMTP_PASS, // Your app password
      },
    });

    // Format the date
    const formattedDate = new Date(timestamp).toLocaleString("hy-AM", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });

    // Email HTML template
    const htmlTemplate = `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #3399ff, #ff9933); color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0; }
        .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 8px 8px; }
        .field { margin-bottom: 15px; padding: 15px; background: white; border-radius: 5px; border-left: 4px solid #3399ff; }
        .label { font-weight: bold; color: #3399ff; margin-bottom: 5px; }
        .value { font-size: 16px; }
        .footer { text-align: center; margin-top: 20px; color: #666; font-size: 14px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>🎓 Նոր Գրանցում CodeBridge-ում</h1>
        </div>
        <div class="content">
          <div class="field">
            <div class="label">👤 Անուն:</div>
            <div class="value">${name}</div>
          </div>
          <div class="field">
            <div class="label">📞 Հեռախոսահամար:</div>
            <div class="value">${phone}</div>
          </div>
          <div class="field">
            <div class="label">📧 Էլ. փոստ:</div>
            <div class="value">${email}</div>
          </div>
          <div class="field">
            <div class="label">🕐 Գրանցման ամսաթիվ:</div>
            <div class="value">${formattedDate}</div>
          </div>
        </div>
        <div class="footer">
          <p>Այս նամակը ուղարկվել է CodeBridge գրանցման ֆորմից</p>
        </div>
      </div>
    </body>
    </html>
    `;

    // Send email
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: process.env.RECIPIENT_EMAIL, // Your Gmail where you want to receive registrations
      subject: `🎓 Նոր գրանցում CodeBridge-ում - ${name}`,
      html: htmlTemplate,
      text: `
Նոր գրանցում CodeBridge-ում

Անուն: ${name}
Հեռախոսահամար: ${phone}
Էլ. փոստ: ${email}
Գրանցման ամսաթիվ: ${formattedDate}
      `,
    });

    return NextResponse.json(
      { message: "Registration sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { message: "Failed to send registration" },
      { status: 500 }
    );
  }
}
