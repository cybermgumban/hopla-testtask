import React from 'react';
import styled from 'styled-components';

//Images import
import download from './Images/download.PNG';
import upload from './Images/upload.PNG';
import downloadIcon from './Images/downloadIcon.PNG';
import uploadIcon from './Images/uploadIcon.PNG';
import locationIcon from './Images/locationIcon.PNG';
import pingIcon from './Images/pingIcon.PNG';
import jitterIcon from './Images/jitter.PNG';
import score from './Images/score.PNG';


const DivWrapper = styled.div`
  margin: auto;
  padding: 15px;
  text-align: center;
`

const GridWrapper = styled.div`
  display: grid;

  grid-template-columns: auto 1fr 1fr auto;
  grid-template-rows: repeat(4, auto);
  grid-template-areas:
    "Header Header Header Header"
    "Body Body Body Body ";

  .Header {
    grid-area: Header;
    align-self: start;
  }

  .Body {
    display: flex;
    flex-direction: column;
    grid-area: Body;
  }

  .Image1 {
    grid-row: 3/4;
    grid-column: 2/4;
  }

  .Image2 {
    grid-row: 4/5;
    grid-column: 2/4;
  }

  @media (min-width: 640px) {
    .Body {
      display: flex;
      flex-direction: row;
      grid-area: Body;
      margin: auto;
      margin-bottom: 15px;
    }

    .Image1 {
      justify-self: end;
      grid-row: 3/4;
      grid-column: 2/3;
    }
  
    .Image2 {
      justify-self: start;
      grid-row: 3/4;
      grid-column: 3/4;
    }
  }
`

const BodyWrapper = styled.div`
  margin-bottom: 15px;
  font-size: auto;
`

const Image1Wrapper = styled.div`
  padding: 10px;
`

const Image2Wrapper = styled.div`
  padding: 10px;
`

const IconSub = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 5px;
  margin-left: 15px;
`

const ImgWrapper = styled.img`
  width: auto;
  height: 300px;
`

function App() {
  return (
    <DivWrapper>
        <GridWrapper>
          <div className="Header">
            <h1>Speed Test Widget</h1>
          </div>

          <BodyWrapper className="Body">
            <div><IconSub src={locationIcon} alt="upload icon"/><span>Location: BR-GIG</span></div>
            <div><IconSub src={pingIcon} alt="upload icon"/><span>Ping: 33ms</span></div>
            <div><IconSub src={jitterIcon} alt="upload icon"/><span>Jitter: 4ms</span></div>
            <div><IconSub src={downloadIcon} alt="download icon"/><span>Download: 40.2mb</span></div>
            <div><IconSub src={uploadIcon} alt="upload icon"/><span>Upload: 5.5mb</span></div>
            <div><IconSub src={score} alt="upload icon"/><span>Score: Good</span></div>
          </BodyWrapper>

          <Image1Wrapper className="Image1">
            <ImgWrapper src={download} alt="download"/>
          </Image1Wrapper>

          <Image2Wrapper className="Image2">
           <ImgWrapper src={upload} alt="upload"/>
          </Image2Wrapper>
        </GridWrapper>
    </DivWrapper>
  )
}

export default App;