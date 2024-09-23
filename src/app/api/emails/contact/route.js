import { NextResponse, NextRequest } from "next/server";
const nodemailer = require("nodemailer");

export async function POST(request) {
  try {
    const requestBody = await request.text();
    const bodyJSON = JSON.parse(requestBody);

    const {
      name,
      email,
      phone,
      company,
      description,
      goals,
      time,
      timeline,
      budget,
      additional,
      method,
    } = bodyJSON;

    console.log("Received data:", bodyJSON); // Added logging

    // Configure nodemailer with Gmail SMTP
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // Your Gmail email
        pass: process.env.EMAIL_PASS, // Your Gmail password or app password
      },
      tls: {
        rejectUnauthorized: false, // This bypasses the certificate validation
      },
    });

    // Set up email data for the recipient
    const mailOptionsRecipient = {
      from: '"Spectrum Consults" <noreply@spectrumconsults.io>', // Sender address
      to: "noreply@spectrumconsults.io", // Change to your recipient's email
      subject: "New Contact Request",
      text: `
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Company: ${company}
        Description: ${description}
        Goals: ${goals}
        Preferred Contact Method: ${method}
        Preferred Contact Time: ${time}
        Project Timeline: ${timeline}
        Budget Range: ${budget}
        Additional Information: ${additional}
      `,
    };

    // Set up email data for the client
    const mailOptionsClient = {
      from: '"Spectrum Consults" <noreply@spectrumconsults.io>', // Sender address
      to: email, // Client's email
      subject: "Request received - We're here to help!",
      html: `
        <table width="640" style="border-collapse: collapse; margin: 0 auto; font-style: sans-serif">
  <thead>
    <tr>
      <td>
        <img style="width: 100%" src="https://cms.spectrumconsults.io/wp-content/uploads/2024/07/Group-1597880594.png" />
      </td>
    </tr>
  </thead>
  <tbody style="background: #F5F7F9;">
                <tr>
                  <td style="padding: 40px">
                    <h2 style="text-align: left; font-size: 20px">Dear ${name},</h2>
                    <p style="text-align: left; font-size: 16px">
                       We appreciate you reaching out to Spectrum Consults for your consulting needs! Your request has been received, and we are looking forward to assisting you. Our team will review your information and contact you soon to discuss the details.<br><br>

                      In the meantime, if you have any further details or specific preferences to share, please do not hesitate to let us know.<br><br>
                      Thank you for choosing Spectrum Consults. We are dedicated to providing outstanding results tailored to your requirements.
                    </p>
            
                    <h2 style="text-align: left; font-size: 16px">
                        Kind regards,<br />
                        The Spectrum Consults Team
                    </h2>
                  </td>
        </tr>
      </tbody>
      <tfoot>
        <td style="padding: 24px; background-color: #8C4CF5; color: #fff; font-size: 20px; text-align: center;font-weight: 600;">
            Thanks for using
          <a href="https://spectrumconsults.io" style="text-decoration: underline; color: #fff; font-size: 20px; font-weight: 600;">spectrumconsults.io</a>
        </td>
      </tfoot>
</table>
      `,
    };

    // Send email to the recipient
    await transporter.sendMail(mailOptionsRecipient);
    // Send email to the client
    await transporter.sendMail(mailOptionsClient);

    console.log("Emails sent successfully"); // Added logging

    return NextResponse.json({ message: "Success: emails were sent" });
  } catch (error) {
    console.error("Error sending emails:", error); // Added logging
    return NextResponse.status(500).json({ message: "COULD NOT SEND MESSAGE" });
  }
}
