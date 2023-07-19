import { useParams } from "react-router-dom";
import { useState } from "react";
import axios from 'axios'

export default function Post() {
    const params = useParams()

    const [post,setPost] = useState({})
    const fetchPost = async () => {
        try {
            const recPost = await axios.get(`//localhost:3001/posts/${params.postID}`)
            setPost(recPost)
        } catch(err) {
            console.error(err)
        }
    }
    fetchPost()

    const handleDelete = async () => {
        try {
          await axios.delete(`//localhost:3001/posts/${post._id}`)
        //   console.log('Post deleted successfully')
        } catch (err) {
          console.error(err)
        }
    }

    return (
        <>
            <h1>{post.title}</h1>
            <p>{post.content}</p>
            <button className="btn btn-danger" onClick={handleDelete}>
                Delete
            </button>
        </>
    )
}