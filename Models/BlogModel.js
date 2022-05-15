import mongoose from "mongoose";
const { Schema } = mongoose;

const schema = Schema({
    title: {
        type: String
    },
    descp: {
        type: String
    },
    time: { type: Number, default: (new Date()).getTime() }
})

const Blog = mongoose.model('blog', schema)
export default Blog;