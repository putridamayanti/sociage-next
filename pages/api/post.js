const { connectToDatabase } = require('../../lib/mongodb');

async function getPosts(req, res) {
    try {
        let { db } = await connectToDatabase();

        let users = await db.collection('posts').find({}).toArray();

        return res.json(users);

    } catch (err) {
        return res.json({
            result: new Error(err),
            error: true
        });
    }
}

export default async function handler(req, res) {
    // switch the methods
    switch (req.method) {
        case 'GET': {
            return getPosts(req, res);
        }
        //
        // case 'POST': {
        //     return addPost(req, res);
        // }
        //
        // case 'PUT': {
        //     return updatePost(req, res);
        // }
        //
        // case 'DELETE': {
        //     return deletePost(req, res);
        // }
    }
}