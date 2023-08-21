import { useState,useEffect } from "react"
import { Link } from 'react-router-dom'
import axios from 'axios'

console.log(process.env.REACT_APP_BASE_URL)

export default function Home() {
    const [posts,setposts] = useState([])

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const recPosts = await axios.get(`${process.env.REACT_APP_BASE_URL}/`)
                setposts(recPosts.data)
                console.log(recPosts.data)
            } catch(err) {
                console.error(err)
            }
        }
        fetchPosts()
    },[])

    return (
    <div className="container-fluid">
        {/* <p>Home intro stuff</p> */}
        {posts.map(post => (
            <div key={post._id} className="card text-bg-dark border-dark mb-3">
                <div className="card-body">
                    <h2 className="card-title">{post.title}</h2>
                    <p className="card-text">{post.content.substring(0,100)}...</p>
                </div>
                {post.image && <img src={`${process.env.REACT_APP_BASE_URL}/Images/${post.image}`} alt="blog img" className="card-img-bottom"></img>}
                <Link className="btn btn-outline-info btn-lg" to={`/posts/${post._id}`}>Read More</Link>
            </div>
        ))}
    </div>
    )
}