import react,{useState} from "react";
function Register()
{
    const[name,setName]=useState("")
    const[password,setPassword]=useState("")
    const[email,setEmail]=usestate("")
     return(
         <div className="col-sm-6 offset-sm-3">
             <h1>Register page</h1>
             <input type="text" className="form-control" value={name} onchange={(e)=>setName(e.target.value)}placeholder="name" />
             <br />
             <input type="password" className="form-control" value={password} onchange={(e)=>setpassword(e.target.value)} placeholder="password" />
             <br />
             <input type="text" className="form-control" value={email}  onchange={(e)=>setEmail(e.target.value)}placeholder="email" />
             <br />
             <button className="btn-btn-primary">signup</button>
                      </div>
     )
}
export default Register   