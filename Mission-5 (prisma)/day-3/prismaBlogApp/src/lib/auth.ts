import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { prisma } from "./prisma";
import nodemailer from 'nodemailer'


const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.APP_USER,
    pass: process.env.APP_PASS,
  },
});



export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: "postgresql",
  }),

  trustedOrigins : [process.env.APP_URL!], // frontend url

  user : {
    additionalFields : {
        role : {
            type : "string",
            defaultValue : "USER",
            required: false
        },
        phone : {
            type : "string",
            required : false,
        },
        status : {
            type : "string",
            defaultValue : "ACTIVE",
            required : false
        }
    }
  },

  // email-password login
  emailAndPassword: { 
    enabled: true, 
    autoSignIn : false,
    requireEmailVerification : true,
  }, 


// email verification
  emailVerification : {
    sendOnSignUp : true,
    autoSignInAfterVerification : true,

    sendVerificationEmail: async ( { user, url, token }, request) => {
      try {
      console.log("user, url and token : ", {user, url, token});

      const verificationURL = `${process.env.APP_URL}/verify-email?token=${token}`;
      console.log("verificationURL : ", verificationURL);


      const info = await transporter.sendMail({
      from: '"Prisma Headquarter" <prisma@support.com>',
      to: user?.email,
      subject: "Please veirfy your email",      
      html: `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8" />
  <title>Verify Your Email</title>
</head>
<body style="margin:0; padding:0; background-color:#f4f6f8; font-family:Arial, Helvetica, sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0">
    <tr>
      <td align="center" style="padding: 40px 0;">
        <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff; border-radius:8px; overflow:hidden;">
          
          <!-- Header -->
          <tr>
            <td style="background:#0f172a; padding:20px; text-align:center;">
              <h1 style="color:#ffffff; margin:0;">Prisma Headquarter</h1>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:30px;">
              <h2 style="color:#111827;">Verify your email address</h2>

              <p style="color:#374151; font-size:16px; line-height:1.5;">
                Hi ${user?.name}, email :  <strong>${user.email}</strong>,
              </p>

              <p style="color:#374151; font-size:16px; line-height:1.5;">
                Thanks for signing up! Please confirm your email address by clicking the button below.
              </p>

              <div style="text-align:center; margin:30px 0;">
                <a href="${verificationURL}"
                   style="background:#2563eb; color:#ffffff; text-decoration:none; padding:14px 24px; border-radius:6px; font-size:16px; display:inline-block;">
                  Verify Email
                </a>
              </div>

              <p style="color:#6b7280; font-size:14px;">
                If the button doesn’t work, copy and paste this link into your browser:
              </p>

              <p style="word-break:break-all; font-size:14px;">
                <a href="${verificationURL}" style="color:#2563eb;">
                  ${verificationURL}
                </a>
              </p>

              <p style="color:#6b7280; font-size:14px; margin-top:30px;">
                This link will expire soon. If you didn’t create an account, you can safely ignore this email.
              </p>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background:#f9fafb; padding:20px; text-align:center; font-size:12px; color:#6b7280;">
              © ${new Date().getFullYear()} Prisma Headquarter. All rights reserved.
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`
  });

  console.log("Message sent:", info.messageId);
      } catch (error) {
        console.error(error);
        throw error;
      }
    },
  },



  // social login
      socialProviders: {
        google: { 
          prompt : "select_account consent",
            clientId: process.env.GOOGLE_CLIENT_ID as string, 
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,     
            accessType : "offline",

        }, 
    },
});
