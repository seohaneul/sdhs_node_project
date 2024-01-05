import Express from "express";

interface Server {
    start: () => Promise<void>
    getRoutes: (parentRoute: Route) => Route[]
    getUpTime: () => number
}
// class ExpressServer implements Server{
//     private readonly app: Express.Application
//     private readonly port = 3000

//     constructor () {
//         this.app = Express()
//     }
//     async start() {
//         this.app.listen(this.port, () => {
//             console.log('server is running on port : ', this.port)
//         })
//     }
// }
interface Route {
    path: string
    method: 'get' | 'post' | 'put' | 'patch' | 'delete'
    handler: (req: Express.Request , res: Express.Response) => Promise<void | Express.Response>

}

const signinRoute: Route = {
    path: '/signin',
    method: 'post',
    handler:async (req, res) => {
        return res.json('')
    }
}