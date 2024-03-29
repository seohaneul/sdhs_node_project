import { Types } from'mongoose'
import { Post } from '../../../db/posts.schema'
import { Route, Method } from '../../../../types/Route'

const {ObjectId} = Types

export const updatePostRoute = {
    path: '/posts/:postId',
    method: Method.PATCH,
    handler: async (req, res) => {
        const { postId: _id } = req.params

        await Post.updateOne(
            { _id: new ObjectId(_id) },
            { $set: _.pick(req.body, ['title', 'content']) }
        )

        return res.redirect('/')
    }
}