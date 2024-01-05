// import { Types } from'mongoose'
// import { Post } from '../../../db/posts.schema'
// import { Route, Method } from '../../../../types/Route'
// const {ObjectId} = Types

// export const getPostRoute= {
//     path: '/posts/:postId',
//     method: Method.GET,
//     handler: async (req, res) => {
//         const { postId } = req.params
//         // const post = await Post.findOne({ _id: new ObjectId(postId) })
//         const post = await Post.findOneAndUpdate(
//             { _id: new ObjectId(postId) },
//             { $inc: { view: 1 } },
//             { new: true }
//         )
//         return res.json(post)
//     }
// }