import { readUsers, writeUsers } from "../helpers/FileDb"
import parseBody from "../helpers/parseBody"
import addRoutes from "../helpers/RouteHandler"
import sendJson from "../helpers/sendJson"

    addRoutes("GET", '/', (req, res) => {
        sendJson(res, 200, {
            message : "hello from custom route",
            path : req.url
        })
    })


    addRoutes("GET", '/api', (req,res) => {
        sendJson(res, 200, {
            success : true,
            message : 'api route hit by custom router',
            path : req.url,

        })
    })


// post method
    addRoutes('POST', '/api/user', async(req, res) => {
        const body = await parseBody(req)
        const users = readUsers()
        const newUsers = {
            ...body,
        }

        users?.push(newUsers)
        writeUsers(users)

        sendJson(res, 201, {success : true, data : body} )
    })



  // put method
    addRoutes("PUT", '/api/user/:id', async(req, res) => {
        const {id} =(req as any).params;
        const body = await parseBody(req);

        const users = readUsers()
        const index = users.findIndex((user : any) => user.id == id)

        if(index === -1) {
            sendJson(res, 400, {
                success : false,
                message : "user not found!"
            })
        }

        users[index] = {
            ...users[index], 
            ...body
        }

        writeUsers(users)
        sendJson(res,202, {
            success : true,
            message : `id ${id} user updated`,
            data : users[index]
        })
    })

