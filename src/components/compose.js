import { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"

export default function Compose() {
    const [title,setTitle] = useState('')
    const [content,setContent] = useState('')
    const navigate = useNavigate()

    const handleSubmit = async () => {
        try {
            await axios.post('//localhost:3001/compose',{
                postTitle:title,
                postContent:content
            })
            setTitle('')
            setContent('')
            navigate('/')
        } catch(err) {
            console.error(err)
        }
    }

    return (
        <form>
            <div className="form-group">
                <h4>Title</h4>
                <input type="text" className="form-control" onChange={e => setTitle(e.target.value)}/>
                <h4>Post</h4>
                <textarea rows="5" className="form-control" onChange={e => setContent(e.target.value)}/>
            </div>
            <button className="btn btn-primary" onClick={handleSubmit}>Publish</button>
        </form>
    )
}