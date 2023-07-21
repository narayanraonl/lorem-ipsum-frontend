import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
// import axios from "axios"

export default function Compose() {
    const [title,setTitle] = useState('')
    const [content,setContent] = useState('')
    const [file,setFile] = useState();
    const navigate = useNavigate()

    const handleSubmit = async () => {
        const formdata = new FormData();
        formdata.append('postTitle',title);
        formdata.append('postContent',content);
        formdata.append('file',file);
        try {
            await fetch('//localhost:3001/compose', {
                method: "POST",
                body: formdata
            }).then(res => res.json());
    
            setTitle('')
            setContent('')
            navigate('/')
        } catch(err) {
            console.error(err)
        }
    }

    return (
        <form className="form-group container-fluid">
            <div>
                <h4>Title</h4>
                <input type="text" className="form-control" onChange={e => setTitle(e.target.value)}/>
                <h4>Post</h4>
                <textarea rows="5" className="form-control" onChange={e => setContent(e.target.value)}/>
                <h4>Upload Picture</h4>
                <input type="file" onChange={e => setFile(e.target.files[0])}></input>
            </div>
            <Link to='/'><button className="btn btn-primary" onClick={handleSubmit}>Publish</button></Link>
        </form>
    )
}