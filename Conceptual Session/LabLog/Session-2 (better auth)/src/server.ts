import app from "./app.js";
// import { prisma } from "./lib/prisma.js";

const PORT = process.env.PORT

async function server() {

    try {
        // await prisma.$disconnect();
    } catch (error) {
        console.error(error);
        // await prisma.$disconnect
        // process.exit(1)
    }

    app.listen(PORT, () => {
        console.log(`server is running in port ${PORT}`);
    })
}

server()