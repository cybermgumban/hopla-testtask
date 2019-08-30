import React from 'react';
import styled from 'styled-components'

const DivWrapper = styled.div`
  margin: auto;
  background-color: #DCDCDC;
  padding: 25px;

  & > h1 {
    margin: auto;
  }
  
  @media (min-width: 640px) {
    display: flex;
    flex-direction: row;
  }

  & > ul {
    margin: auto;
    @media (min-width: 640px) {
      display: flex;
      flex-direction: row;
  }

  & > li {
    margin-left: 25px;
    margin-right: 15px;
  }

  & > li > span {
    font-weight: bold;
  }
`

function App() {
  return (
    <DivWrapper>
      <h1>Speed Test Widget</h1>
      <ul>
        <li><span>Location:</span> BR - GIG</li>
        <li><span>Ping:</span> 33ms</li>
        <li><span>Jitter:</span> 4ms</li>
        <li><span>Download:</span> 40.2 mb</li>
        <li><span>Upload:</span> 5.5 mb</li>
        <li><span>Score:</span> Good</li>
      </ul>
    </DivWrapper>
  )
}

export default App;