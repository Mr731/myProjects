import React from 'react'
import styled from 'styled-components'
import { BsArrowLeft } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
 .player{
    width: 100vw;
    height: 100vh;
    .back{
        position: absolute;
        padding: 2rem;
        z-index: 1;
        svg{
            font-size: 3rem;
            cursor: pointer;
        }
    }
    video{
        height: 100%;
       width: 100%;
       object-fit: cover;
    }
 }
`;
function Player() {
    const navigate = useNavigate();

  return (
    <Container>
       <div className="player">
        <div className="back">
            <BsArrowLeft onClick={()=>navigate(-1)}/>
        </div>
        <video src="https://codehelp.s3.ap-south-1.amazonaws.com/WD_Launch2_936c2b843b.mp4" autoPlay muted loop controls></video>
       </div>
    </Container>
  )
}

export default Player