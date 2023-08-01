import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"

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
            // await fetch('${process.env.REACT_APP_BASE_URL}/compose', {
            //     method: "POST",
            //     body: formdata
            // }).then(res => res.json());

            await axios.post(`${process.env.REACT_APP_BASE_URL}/compose`,formdata)
    
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
                <input type="file" className="form-control-2" onChange={e => setFile(e.target.files[0])}></input>
            </div>
            <Link to='/'><button className="form-control-2 btn btn-primary" onClick={handleSubmit}>Publish</button></Link>
        </form>
    )
}