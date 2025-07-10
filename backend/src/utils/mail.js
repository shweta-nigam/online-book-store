import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: process.env.MAIL_PORT,
  secure: false, // use SSL
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
});

export const sendEmailVerification = async (toEmail, verificationToken) => {
  const mailOptions = {
    from: process.env.MAIL_SENDER,
    to: toEmail,
    subject: "User verification",
    text: `For verification of your account click the link below ${process.env.BASE_URL}/api/v1/auth/verify/${verificationToken} `,
    html: `<div>
    <p>For verification of your account, click the link below:</p>
    <a href="${process.env.BASE_URL}/api/v1/auth/verify/${verificationToken}">Verify Account</a>
  </div>`,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent: " + info.response);
  } catch (error) {
    console.log("Error: ", error);
  }
};
