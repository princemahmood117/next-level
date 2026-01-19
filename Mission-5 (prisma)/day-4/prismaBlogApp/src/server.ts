import app from "./app";
import { prisma } from "./lib/prisma";
const PORT = process.env.PORT;

const main = async () => {
    try {
        await prisma.$connect();
        console.log('connected to database successfully');

        
        app.listen(PORT, ()=> {
            console.log(`server is running on port ${PORT}`);
        })


        



    } catch (error) {
        console.error(error);
        prisma.$disconnect();
        process.exit(1)
    }
}


main()