import _ from 'lodash'
import express from 'express'
import { connectDB } from './db/connect';
import { initExpressApp } from './server/initExpressApp'

import { createPostRoute } from './server/routes/posts/createPost';
import { deletePostRoute } from './server/routes/posts/deletePost';
import { Route } from '../types/Route';

const routes: Route[] =[
    createPostRoute,
    deletePostRoute
    
]

declare module 'express-session' {
    interface SessionData {
        _id?: string;
    }
}


async function bootstrap () {
    const app = express()

    console.log('DB 접속 시도')
    await connectDB()
    console.log('DB 접속 완료')

    initExpressApp(app)
    
    routes.forEach(route => {
        console.log(route)
        app[route.method](route.path, (req, res) => {
            route.handler(req, res)
                .catch((err) => {
                    console.error('Api Error', err)

                    const [statusCode, errorMessage] = err.message.split(':')

                    return res
                        .status(statusCode)
                        .json({
                            success: false,
                            message: errorMessage
                        })
                })
        })
    })

    const port = 3000
    app.listen(port, () => {
        console.log(`App is running on port: ${port}`)
    })
}

bootstrap()
    .catch(err => {
        console.error('Error is occured while running application. Error:', err)
    })