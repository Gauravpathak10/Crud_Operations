
import Blog from "../Models/BlogModel";


//Create
export const CreatedBlog = (req, res) => {
    Blog.create(req.body, function (err, data) {
        if (err) {
            res.status(422).json({
                message: "Not created blog !!",
                status: false,

            })
        }
        else {
            res.status(422).json({
                message: " Successfully created blog !!",
                status: true,
                data: data

            })
        }
    })
}

// edit 
export const EditBlog = (req, res) => {
    Blog.findByIdAndUpdate(req.params.id, req.body, { new: true }, function (err, data) {
        if (err) {
            res.status(422).json({
                message: "Not edited blog !!"

            })
        }
        else {
            res.status(422).json({
                message: "Successfully edited blog !!",
                data: data

            })
        }
    })
}
// Delete 
export const deleteBlog = (req, res) => {
    Blog.findByIdAndDelete(req.params.id, function (err, data) {
        if (err) {
            res.status(422).json({
                message: "Not deleted blog !!"

            })
        }
        else {
            res.status(422).json({
                message: "Successfully deleted blog !!",
                data: false

            })
        }
    })
}
//Read
export const ReadBlog = (req, res) => {
    Blog.find({}, function (err, data) {
        if (err) {
            res.status(422).json({
                message: "No Blogs Found!!",
                status: false

            })
        }
        else {
            res.status(422).json({
                message: "Blogs !!",
                status: true,
                data: data
            })
        }
    })
}
