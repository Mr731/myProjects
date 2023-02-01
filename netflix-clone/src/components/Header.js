import React from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components'

const Container = styled.div`
 padding: 0 4rem;
 .logo{
  img{
    height: 5rem;
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
`;
function Header(props) {
 const navigate =  useNavigate()
  return (
    <Container className='flex a-center j-between'>
      <div className="logo">
          <img src="https://github.com/koolkishan/netflix-clone-react-node/blob/master/netflix-ui/src/assets/logo.png?raw=true" alt="logo" />
      </div>
       <button onClick={()=> navigate(props.login ?"/login" :"/signup")}>
        {props.login ?"LogIn" :"Sign In"}
       </button>
    </Container>
  )
}

export default Header