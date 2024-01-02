import 'react'
import styled from 'styled-components'

function HeroSection()  {
  return ( 
  <Wrapper>
    <div className="container grid grid-two-column">
      <div className="section-hero-data">
        <p>THIS IS ME</p>
        <h1 className='hero-heading'>WAHAB RUBEL</h1>
        <p className='hero-para'>
          I'm md abdul 'wahab' rubel. A full stack developer, Youtube and freelance. A full 'stack' developre
          youtber.com and freelancer
        </p>
          
        </div>
      {/*for emages*/}
        <div className="section-hero-image"></div>

    </div>
  </Wrapper>
  )

}
const Wrapper = styled.section``;

export default HeroSection