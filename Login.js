import { useRef, useState, useEffect } from 'react';
import { useRef } from 'react/cjs/react.production.min';



const Login = () => { :
    const useRef = useRef();
    const errRef = useRef();

const[user, setUser] = useState('');
const[pwd, setPwd] = useState('');
const[errMsg, setErrMsg] = useState('');
const[success, setSuccess]= useState(false);

useEffect(() =>{
    useRef.current.focus();

}, {})

useEffect(() =>{
    setErrMsg('');

}, {user,pwd})

const handleSubmit= async (e) =>{
e.preventDefault();
console.log(user,pwd);
setUser('');
setPwd('');
setSuccess(true)
}

    return(
       
      <section>
          <p ref={errRef} className={errMsg ? "errmsg" : 
          "offscreen"}aria-live="assertive">(errMsg)</p>    
          <form onSubmit={handleSubmit}>  
              <label htmlfor="username">Username:</label>
              <input type="text"
              id="username"
              ref={useRef}
              autoComplete="off"
              onChange={(e) => setUser(e.target.value)}
              value={user}
              required
            />
              <label htmlfor="password">Password:</label>
              <input type="password"
              id="password"
              onChange={(e) => setPwd(e.target.value)}
              value={pwd}
              required
            />
            <button>SignIn</button>
          </form>

          <p>
              Need an Account?<br />
              <span className='line'>
                 {*/ put router link here*/}
                <a href='a'>signup</a>

                  </span>
          </p>
            </section>

    )
}
export default Login;