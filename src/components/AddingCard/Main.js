import CardTextArea from './CardTextArea'
import { useState } from 'react'
import styled, { keyframes, createGlobalStyle } from 'styled-components'
import Header from '../UI/Header.jsx'
import TodoList from './TodoList'
import { Link } from 'react-router-dom'
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
			<Link to='/login'>
				<Button >
					<span>Назад</span>
					<svg width='15px' height='10px' viewBox='0 0 13 10'>
						<path d='M1,5 L11,5'></path>
						<polyline points='8 1 12 5 8 9'></polyline>
					</svg>
				</Button>
			</Link>
			<MainStyle>
				{/* <ModalFormWindow /> */}
				<TodoList />
				<CardTextArea />
			</MainStyle>
		</>
	)
}
const Button = styled.button`
	:disabled,
	:disabled:hover::before {
		background-color: #ccc;
	}
	:disabled:active,
	:disabled::before {
		background-color: #ccc;
		color: #3f3f3f;
		border-color: #ccc;
		cursor: not-allowed;
	}
	position: relative;
	margin: auto;
	padding: 12px 18px;
	transition: all 0.2s ease;
	border: none;
	background: none;
	color: #3588b9;
	:before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		display: block;
		border-radius: 50px;
		background: #3588b9;
		width: 45px;
		height: 45px;
		transition: all 0.3s ease;
	}
	span {
		position: relative;
		font-family: 'Ubuntu', sans-serif;
		font-size: 18px;
		font-weight: 700;
		letter-spacing: 0.05em;
		color: #234567;
		background: none;
	}
	svg {
		position: relative;
		top: 0;
		margin-left: 10px;
		fill: none;
		stroke-linecap: round;
		stroke-linejoin: round;
		stroke: #234567;
		stroke-width: 2;
		transform: translateX(-5px);
		transition: all 0.3s ease;
		background: none;
	}
	:hover:before {
		width: 100%;
		background: #3588b9;
	}
	:hover svg {
		transform: translateX(0);
	}
	:active {
		transform: scale(0.95);
	}
`
export default Main
