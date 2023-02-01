import React, { useState } from 'react'
import styled from 'styled-components'
import BackgroundImage from '../components/BackgroundImage';
import Header from '../components/Header';
import {createUserWithEmailAndPassword, onAuthStateChanged} from 'firebase/auth'
import { fireBaseAuth } from '../utils/firebase-config';
import { useNavigate } from 'react-router-dom';



const Container = styled.div`
    position: relative;
    .content{
        position: absolute;
        top:0;
        left:0;
        background-color: rgba(0,0,0,0.5);
        height: 100vh;
        width: 100vw;
        display: grid;
        grid-template-rows: 15vh 85vh;

        .body{
            gap: 1rem;
            .text{
                gap: 1rem;
                text-align: center;
                text-transform: capitalize;
                font-size: 2rem;
            }
            h1{
                padding: 0 15rem;
            }
          
        }
        .form{
            display: grid;
            grid-template-columns: ${({showPassword})=>showPassword ? "1fr 1fr":"2fr 1fr"};
            width: 60%;
            input{
                color: black;
                border: none;
                padding: 1.2rem;
                font-size: 1.2rem;
                border: 1px solid black;
            }
           

            button{
                padding: 0.5rem 1rem;
                background-color:#e50914;
                border: none;
                cursor: pointer;
                color: white;
                font-weight: bolder;
                font-size:1.05rem;
              
               }
        }
        button{
            padding: 0.5rem 1rem;
            background-color:#e50914;
            border: none;
            cursor: pointer;
            color: white;
            border-redius: 0.2rem;
            font-weight: bolder;
            font-size:1.05rem;
          
           }
        
    }

`

function Signup() {

  const [showPassword , setShowPassword] = useState(false)
  const [formValue , setFormValue] = useState({
    email:"",
    password:"",
  });
  const navigate = useNavigate()

  async function handleSignin(){
    try{
          
        const { email ,password } = formValue;
        await createUserWithEmailAndPassword(fireBaseAuth,email,password)

    }catch(error){
     alert(error)
    }
  }

  onAuthStateChanged(fireBaseAuth,(currentUser)=>{
    if(currentUser) navigate('/')
  })
    
  return (
    <Container showPassword={showPassword}>
       <div>
        <BackgroundImage />
        <div className="content">
        <Header login/>
        <div className="body flex column a-center j-center">
            <div className="text flex column">
                <h1>unlimited movies, TV Shows and much more</h1>
                <h4>Watch anywhere.Cancel any time</h4>
                <h6>Ready To Watch? Enter Your Email to create or restart your membership</h6>
            </div>
            <div className="form">
                <input type="email" placeholder='Enter your email' name='email' 
                value={formValue.email}
                 onChange={(e)=> setFormValue({
                    ...formValue,
                    [e.target.name]:e.target.value
                })}/>
                {
                    showPassword && <input type="password" placeholder='enter your password' name='password'
                    value={formValue.password}
                   onChange={(e)=> setFormValue({
                    ...formValue,
                    [e.target.name]:e.target.value
                })}
                     />
                }
                
                {
                    !showPassword && <button onClick={()=> setShowPassword(true)}>Get Started</button>
                }
                
            </div>
            <button onClick={handleSignin}>Sign Up</button>
        </div>
    </div>
    </div>
    </Container>
    
  )
}

export default Signup