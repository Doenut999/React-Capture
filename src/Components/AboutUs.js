import home1 from "./img/home1.png"
import styled from "styled-components";
const AboutUs = () => {
    return (
    <StyledAbout>
        <StyledDescription>
            <div className="title">
                <HIDE>
                    <h2>We work to make</h2>
                </HIDE>
                <HIDE>
                    <h2>your <span>dreams</span> come</h2>
                </HIDE>
                <HIDE>
                    <h2>true.</h2>
                </HIDE>
            </div>
            <p>Contact us for any photography or videography ideas that you have. We have professionals with amazing skills</p>
            <button>Contact Us</button>
        </StyledDescription>
        <StyledImage>
            <img src={home1} alt=""/>
        </StyledImage>
    </StyledAbout>)
}

//Styled Components
const StyledAbout = styled.div`
    min-height: 90vh;
    display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem;
  color: white;
`


const StyledDescription = styled.div`
    flex: 1;
  padding-right: 5rem;
  
  h2 {
    font-weight: lighter;
  }
`


const StyledImage = styled.div`
  flex: 1;
  overflow: hidden;
  img {
    width: 100%;
    height: 80vh;
    object-fit: cover;
  }
`


const HIDE = styled.div`
  overflow: hidden;
`

export default AboutUs