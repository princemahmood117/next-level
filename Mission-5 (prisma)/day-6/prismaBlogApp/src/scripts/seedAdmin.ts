import { prisma } from "../lib/prisma";
import { UserRole } from "../middlewares/authMiddleware";

async function seedAdmin() {
    try {

        console.log('******* admin seeding started *******\n');

        const adminData = {
            name : "prince2",
            email : "princemahmood227@gmail.com",
            role : UserRole.ADMIN,
            password : "asdf1234"            
        }     

        // check user exits on database
        const existingUser = await prisma.user.findUnique({
            where : {
                email : adminData.email
            }
        })

        if(existingUser) {
            throw new Error('user already exists!!')
        }


        const signUpAdmin = await fetch('http://localhost:5000/api/auth/sign-up/email', {
            method : "POST",
            headers : {
                "Content-Type" : "application/json",
                "Origin": "http://localhost:4000",                
            },

            body : JSON.stringify(adminData)
        })

        console.log(signUpAdmin); // response of the signup data

        console.log('\n***** admin created, but email not verified yet *****');

        if(signUpAdmin.ok) {
            await prisma.user.update({
                where : {
                    email : adminData.email
                },
                data : {
                    emailVerified : true,
                }
            })

            console.log('\n***** email verified done *****');            
        } 

        




    } catch (error) {
        console.error(error);
    }
}



seedAdmin()