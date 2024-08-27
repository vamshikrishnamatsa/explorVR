import axios from "axios";
import { useState } from "react"

export default function Login(){

    const [formData,setFormData] = useState({
        userName:"",
        password:""
    })

    const handleChange = (e) =>{
        const {name,value} = e.target
        setFormData(prevState => ({ ...prevState, [name]: value }));
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        try{
            axios.post('http://localhost:2000/login',formData)
                .then(data => {
                const {accessToken} = data.data.data;
                localStorage.setItem('accessToken',accessToken)
            })
        }
        catch(err){
            console.log(err)
        }
    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Username:</label>
                    <input type="text" name="userName" value={formData.userName} onChange={handleChange} />
                </div>
                <div>
                    <label>password:</label>
                    <input type="password" name="password" value={formData.password} onChange={handleChange} />
                </div>
                <button type="submit" name="submit">Submit</button>
            </form>
        </div>
    )
}