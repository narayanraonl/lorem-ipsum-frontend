import { useParams,Link } from "react-router-dom";
import { useState,useEffect } from "react";
import axios from 'axios'

export default function Post() {
    const params = useParams()

    const [post,setPost] = useState({})
    useEffect(() => {
        const fetchPost = async () => {
            try {
                const recPost = await axios.get(`//localhost:3001/posts/${params.postID}`)
                setPost(recPost.data)
            } catch(err) {
                console.error(err)
            }
        }
        fetchPost()
    },[params.postID,post.image])

    const handleDelete = async () => {
        try {
          await axios.delete(`//localhost:3001/posts/${post._id}`)
        //   console.log('Post deleted successfully')
        } catch (err) {
          console.error(err)
        }
    }

    return (
        <div className="container-fluid">
            {post.image && <img src={`//localhost:3001/Images/${post.image}`} alt="blog img"></img>}
            <h1>{post.title}</h1>
            <p>{post.content}</p>
            <Link to='/'>
            <button className="btn btn-danger" onClick={handleDelete}>
                Delete
            </button>
            </Link>
        </div>
    )
}