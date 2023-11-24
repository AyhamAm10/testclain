import axios from 'axios'
import React, { useState } from 'react'

const Signup = ({user}) => {
  const [valueInputName , setvalueInputName] = useState()
  const [valueInputEmail , setvalueInputEmail] = useState()
  const [valueInputpassword , setvalueInputpassword] = useState()

  const Signup = ()=>{
    axios.post("http://localhost:3500/users", { "name": valueInputName, "email": valueInputEmail,"passowrd":valueInputpassword, "state":"user"   }).then((res)=>{
      localStorage.setItem('myuser',JSON.stringify(res.data))
      console.log(res.data)
    }).catch((error)=>{
      console.log(error);
    })
    
  }


  return (
    <form action="" className="form__2 form ">
        <label className='form-label' for="">Username</label>
        <input className='input ' type="text" placeholder="username  " onChange={(e)=>{setvalueInputName(e.target.value)}}/>
        <label className='form-label'>Email</label>
        <input className='input' type="text" placeholder="email" onChange={(e)=>{setvalueInputEmail(e.target.value)}}/>
        <label className='form-label' for="">password</label>
        <input className='input' type="password" placeholder="password" onChange={(e)=>{setvalueInputpassword(e.target.value)}}/>
        <input  type="submit" value="sign up" className="submit btn" onClick={Signup}/>
    </form>
  )
}

export default Signup
