import CardTextArea from './CardTextArea'
import { useState } from 'react'
import styled, { keyframes, createGlobalStyle } from 'styled-components'
import Header from '../UI/Header.jsx'
import TodoList from './TodoList'
const GlobalStyle = createGlobalStyle`
	body{
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    	'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    	sans-serif;
  		-webkit-font-smoothing: antialiased;
  		-moz-osx-font-smoothing: grayscale;
		padding: 0;
    	margin: 0;
    	box-sizing: border-box;
		background: url('https://i.gifer.com/G5Z8.gif');
		/* background-repeat: no-repeat; */
		background-size:cover;
	}
`
const MainStyle = styled.div`
	display: flex;
`
const Main = () => {
	return (
		<>
			<Header />
			<GlobalStyle />
			<MainStyle>
				{/* <ModalFormWindow /> */}
				<TodoList />
				<CardTextArea />
			</MainStyle>
		</>
	)
}
export default Main
