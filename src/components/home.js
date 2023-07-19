import { useState,useEffect } from "react"
import { Link } from 'react-router-dom'
import axios from 'axios'

export default function Home() {
    const [posts,setposts] = useState([])

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const recPosts = await axios.get('//localhost:3001/')
                setposts(recPosts.data)
                console.log(recPosts.data)
            } catch(err) {
                console.error(err)
            }
        }
        fetchPosts()
    },[])

    return (
    <>
        <p>Home intro stuff</p>
        {posts.map(post => (
            <div key={post._id}>
                <h2>post.title</h2>
                <p>{post.content.substring(0,100)}...<Link to={`/posts/${post._id}`}>Read More</Link></p>
            </div>
        ))}
    </>
    )
}