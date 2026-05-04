import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { prisma } from "./prisma";
import { twoFactor } from "better-auth/plugins";
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_KEY);


export const auth = betterAuth({
    appName:'Lab log',

    database : prismaAdapter(prisma, {
        provider : "postgresql",
    }),

    trustedOrigins : [process.env.FRONTEND_PORT!],

    emailAndPassword : {
        enabled : true,        
    },

    socialProviders : {
        github : {
            clientId : process.env.GITHUB_CLIENT_ID as string ,
            clientSecret : process.env.GITHUB_CLIENT_SECRET as string,
            redirectURI : `${process.env.FRONTEND_PORT}/api/auth/callback/github`
        }
    },

    plugins : [
        twoFactor({
            otpOptions : {                
                async sendOTP({user, otp}, ctx) {
                    // send otp to user
                    console.log({user, otp});

                    await resend.emails.send({
                        from: 'Lab log <onboarding@resend.dev>',
                        to: user?.email,
                        subject: '2 Factor Authentication Email',
                        html: `<p>Your OTP is <b>${otp}</b> </p>`,
                })
                }
            }
        })
    ]

});