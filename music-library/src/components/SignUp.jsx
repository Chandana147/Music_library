import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SignUp.css"

export const SignUp=()=>{
    const [name,setName]=useState('');
    const [emailAddress,setEmailAddress]=useState('');
    const [password,setPassword]=useState('');
    const [confirmPassword,setConfirmPassword]=useState('');
    const [mobileNumber,setMobileNumber]=useState('');
    const [id,setId]=useState(0);
    const navigate=useNavigate();

    var data={
        name:name,
        emailAddress:emailAddress,
        password:password,
        mobileNumber:mobileNumber,
        id:id
    }
    
    const onSignUpClick=()=>{
        if(name!=="" && emailAddress!=="" && password!="" && mobileNumber!==""){
            if(data.emailAddress==emailAddress && data.password==password){
                setId(id+1)
                const array=JSON.parse(localStorage.getItem('usersdata')) || [];
                array.push(data)
                localStorage.setItem("usersdata",JSON.stringify(array))
            }
        }
        else{
            alert(' user details are missing or already exists')
        }
    }


    const validateName=()=>{
        if(name==null || name==''){
            return false;
        }
        else{
            localStorage.name=JSON.stringify(name)
        }
    }
    const validateEmailAddress=()=>{
        if(emailAddress.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i))
        {console.log(emailAddress)

            localStorage.setItem('emailAddress',JSON.stringify(emailAddress))
        }
        else{alert("emailAddress is invalid")}
    }
    const validatePassword=()=>{
        if(password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/)){
            localStorage.setItem('password',JSON.stringify(password))
        }
        else{alert('password should satisfy all conditions')}
    }
    const validateConfirmPassword=()=>{
        if(confirmPassword==password){
            localStorage.setItem('password',JSON.stringify(password))
        }                    
        else{alert('password does not match')}
    }
    const validateMobileNumber=()=>{
        if(mobileNumber.match(/^\d{10}$/)){
            localStorage.setItem('password',JSON.stringify(password))
        }
        else{alert('mobile number is incorrect')}
    }

    return(
        <div className="signup">
        <div className="logo"><img className="tunein-logo" src="https://clipground.com/images/music-png-logo-2.png"/><h1>Tune In</h1></div>
        <h1>Sign up for free to start listening.</h1>
        <div className="buttons-signup">
        <button className="facebook-signup"><img className="facebook-logo" src="http://www.dayzcolony.com/wp-content/uploads/2017/10/Facebook-Circle-Icon.png" />Sign up with Facebook</button>
        <button className="google-signup"><img className="google-logo" src="http://pluspng.com/img-png/google-logo-png-open-2000.png" />Sign up with Google</button>
        </div>
        <input type="text" placeholder='name' value={name}  pattern="[A-Za-z]{3}" title="username is incorrect" onChange={(e)=>setName(e.target.value)} onBlur={()=>validateName()} />
        <input type="text" placeholder='emailAddress' value={emailAddress} onChange={(e)=>setEmailAddress(e.target.value)} onBlur={()=>validateEmailAddress()}/>
        <input type="text" placeholder='password' value={password} onChange={(e)=>setPassword(e.target.value)}onBlur={()=>validatePassword()}/>
        <input type="text" placeholder='confirmPassword' value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)} onBlur={()=>validateConfirmPassword()}/>
        <input type="text" placeholder='mobileNumber' value={mobileNumber} onChange={(e)=>setMobileNumber(e.target.value)} onBlur={()=>validateMobileNumber()}/>
        <label>Agree to terms & conditions</label>
        <input type="checkbox" />
        <button onClick={()=>onSignUpClick()}>Sign Up</button>
        </div>
    )
}
export default SignUp;