import React, { ChangeEvent, useState } from 'react'
import styled from 'styled-components'

export default function Blackboard() {
  const [text, setText] = useState<string>("")
  const onChangeText = (e:ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value)
  } 
  return (
    <Wrapper>
        <Header> 디지털 칠판 </Header>
        <Section>
          <BoardView>{text}</BoardView>
          <BoardInput placeholder='입력해주세요.' onChange={onChangeText}/>
        </Section>
    </Wrapper>
 
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction : column;
`;

const Header = styled.h1`
  display: flex;
  flex-direction: column;
  font-size: 76px;
  font-weight: 400;
  align-items: center;
  justify-content: flex-start;
`;

const Section = styled.section`
display:flex;
flex-direction:column;
align-items: center;
justify-content: flex-start;
`;

const BoardView = styled.article`
width: 800px;
height: 500px;
border: 1px solid black;
background-color: #3F7F50;
border-bottom: none;
`;

const BoardInput = styled.input`
width: 796px;
height: 32px;
border: 1px solid black;
text-align: center;
`;