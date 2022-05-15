import express from "express";
import { CreatedBlog, deleteBlog, EditBlog, ReadBlog } from "../Controller/BlogController";
const router = express.Router()


router.post('/create', CreatedBlog)
router.get('/read', ReadBlog)
router.put('/edit/:id', EditBlog)
router.delete('/delete/:id', deleteBlog)



export default router;