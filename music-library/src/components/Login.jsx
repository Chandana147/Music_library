import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css"

export const Login=()=>{
    const [username,setUsername]=useState('');
    const [password,setPassword]=useState('');
    const navigate=useNavigate();
    

    const userdata=JSON.parse(localStorage.getItem("usersdata"))

    const onSubmitClick=()=>{
        userdata.find((x)=>{
            if(x.emailAddress==username && x.password==password)
            {
                navigate('/tunein')
                const loggedinUser=JSON.parse(localStorage.getItem('currentUser')) || [];
                loggedinUser.push(x)
                localStorage.setItem('currentUser',JSON.stringify(loggedinUser))
                console.log(x)
                return false;
            }
            else{
                console.log('no')
            }
        })
        

    }
    return(
        <div className="login">
        <div className="logo"><img className="tunein-logo" src="https://clipground.com/images/music-png-logo-2.png"/><h1>Tune In</h1></div>
        <h1 className="heading">Log in to Tune in</h1>
        <button className="google-login"> <img className="google_logo" src="https://www.jigsawplanet.com/John1333/Google-G-Logo-svg?rc=face" />Continue With Google</button>
        <button className="facebook-login"><img className="facebook_logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1365px-Facebook_f_logo_%282019%29.svg.png"/>Continue With Facebook</button>
        <button className="apple-login"><img className="apple_logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXDzlgYsOMUxG8ejMtf11DfUObotAU7h-UvA&usqp=CAU" />Continue With Apple</button>
        <button className="number-login">Continue With Phone Number</button>
        <label>Email or Username</label>
        <input type="text" placeholder='Email or Username' value={username} onChange={(e)=>setUsername(e.target.value)}/>
        <label>Password</label>
        <input type="text" placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
        <button onClick={()=>onSubmitClick()} >Log In</button>
        <div className="forgot-login">
        <a href="">Forgot your password?</a>
        <div>Don't have an account? <a href="">  Sign up for Tune in</a></div>
        </div>
        </div>
    )
}
export default Login;