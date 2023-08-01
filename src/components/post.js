import { useParams,Link } from "react-router-dom";
import { useState,useEffect } from "react";
import axios from 'axios'

export default function Post() {
    const params = useParams()

    const [post,setPost] = useState({})
    useEffect(() => {
        const fetchPost = async () => {
            try {
                const recPost = await axios.get(`${process.env.REACT_APP_BASE_URL}/posts/${params.postID}`)
                setPost(recPost.data)
            } catch(err) {
                console.error(err)
            }
        }
        fetchPost()
    },[params.postID,post.image])

    const handleDelete = async () => {
        try {
          await axios.delete(`${process.env.REACT_APP_BASE_URL}/posts/${post._id}`)
        //   console.log('Post deleted successfully')
        } catch (err) {
          console.error(err)
        }
    }

    return (
        <div className="container-fluid">
            <div key={post._id} className="card text-bg-dark border-dark mb-3">
                <div className="card-body">
                    <h2 className="card-title">{post.title}</h2>
                    <p className="card-text">{post.content}</p>
                </div>
                {post.image && <img src={`${process.env.REACT_APP_BASE_URL}/Images/${post.image}`} alt="blog img" className="card-img-bottom"></img>}
                <Link className="btn btn-outline-secondary btn-lg" onClick={handleDelete} to='/'><i class="fa-solid fa-trash"></i></Link>
            </div>
        </div>
    )
}