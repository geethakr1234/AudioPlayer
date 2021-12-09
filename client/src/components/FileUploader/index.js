import {useState} from 'react';
import axios from 'axios';
import { toast} from 'react-toastify';
import { useNavigate } from "react-router";

import './style.css';

export const FileUploader = ({onSuccess}) => {

    let navigate = useNavigate();
    const [files, setFiles] = useState([]);

    const onInputChange = (e) => {
        setFiles(e.target.files)
    };

    const onSubmit = (e) => {
        e.preventDefault();

        const data = new FormData();

        for(let i = 0; i < files.length; i++) {
            data.append('file', files[i]);
        }

        axios.post('//localhost:8001/upload', data)
            .then((response) => {
                toast.success('Upload Success');
                onSuccess(response.data)
            })
            .catch((e) => {
                toast.error('Upload Error')
            })

        navigate('/play')

    };

    return (
        <form method="post" action="#" id="#" onSubmit={onSubmit}>
            <div className="form-group files">
                <label>Upload Your File </label>
                <input type="file"
                       onChange={onInputChange}
                       className="form-control"
                       accept="audio/*"
                       multiple/>
            </div>

            <button>Submit</button>
        </form>
    )
};