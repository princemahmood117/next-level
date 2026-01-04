import { prisma } from "./lib/prisma"

async function run() {
    // const createUser = await prisma.user.create({
    //     data : {
    //         name : "Injamul Haque",
    //         email : "navid12@gmail.com"
    //     }
    // })

    // console.log('created user : ', createUser);



    // create a post of id 1
    // const createPost = await prisma.post.create({
    //     data : {
    //         title : "The Book of Happiness",
    //         content : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    //         authorId : 1

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
    //         id : 2
    //     }
    // })
    // console.log('single data : ', getSingleData);
}

run()