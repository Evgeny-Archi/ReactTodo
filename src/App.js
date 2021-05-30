import React from 'react'
import styled from 'styled-components'
import Header from './components/Header/Header.jsx'
import Content from './components/Content/Content.jsx'

const Wrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

const App = () => {
  return (
    <Wrap>
      <Header />
      <Content />
    </Wrap>
  )
}

export default App
