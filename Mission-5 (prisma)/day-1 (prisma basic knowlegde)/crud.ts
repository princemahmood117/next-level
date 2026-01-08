import { prisma } from "./lib/prisma"

async function run() {
    // const createUser = await prisma.user.create({
    //     data : {
    //         name : "Siam Shifat",
    //         email : "siam@yahoo.com"
    //     }
    // })

    // console.log('created user : ', createUser);




    // create a post of id 1
    // const createPost = await prisma.post.create({
    //     data : {
    //         title : "The Book of Sifat",
    //         content : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    //         authorId : 3

    //     }
    // })

    // console.log('created post : ', createPost);



    // create user profile
    // const createProfile = await prisma.profile.create({
    //     data : {
    //         bio : "this is prince learning prisma",
    //         userId : 1
    //     }
    // })

    // console.log("profile created : ", createProfile );




    // read all the data
    const findAllUser = await prisma.user.findMany({
        include : {
            posts : true,
            profile : true
        }
    })
    console.dir(findAllUser, {depth : Infinity});



    // read single data
    // const getSingleData = await prisma.user.findUnique({
    //     where : {
    //         id : 1
    //     }
    // })
    // console.log('single data : ', getSingleData);




    // update user data
    // const updateUser = await prisma.user.update({
    //     where : {
    //         id : 1
    //     },
    //     data : {
    //         name : "Injamul Haque Navid"
    //     }
    // })
    // console.log('updated info : ', updateUser);




    // delete user
    // const deleteUser = await prisma.user.delete({
    //     where : {
    //         id : 4
    //     }
    // })

    // console.log('deleted successfully : ', deleteUser);
}

run()