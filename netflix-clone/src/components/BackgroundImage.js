import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
heigth: 100vh;
width: 100vw;
 img{
    height: 100vh;
    width: 100vw;
 }
`;

function BackgroundImage() {
  return (
    <Container>
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/e451379a-dd0a-4657-b530-4ca4c0cb2aee/430b26cf-b6e1-473e-a55d-0abc03631481/IN-en-20230123-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="" />
    </Container>
  )
}

export default BackgroundImage