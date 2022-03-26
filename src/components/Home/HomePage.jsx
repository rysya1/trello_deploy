import React from 'react'
import Header from '../UI/Header'
import styled, { createGlobalStyle } from 'styled-components'
const GlobalStyle = createGlobalStyle`
  body{
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    	'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    	sans-serif;
  		-webkit-font-smoothing: antialiased;
  		-moz-osx-font-smoothing: grayscale;
    background-color: #3588b9;
  }
`
const Task = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 0 auto;
	background-color: #f0f2f5;
	width: 200px;
	height: 100px;
	border-radius: 5px;
	color: #3588b9;
	:hover {
		background-color: #f0f2f2;
	}
`
const Home = styled.div`
	margin: 0 auto;
	margin-top: 30px;

	width: 990px;
`
const MyDosk = styled.div`
	margin: 0 auto;
	display: flex;
	justify-content: space-between;

	width: 200px;
	h3 {
		margin-right: 60px;
		color: #014a75;
	}
`
const Img = styled.img`
	margin-left: 10px;
	margin-top: 20px;
	width: 20px;
	height: 20px;
`
const HomePage = () => {
	return (
		<>
			<Header></Header>
			<GlobalStyle />
			<Home>
				<MyDosk>
					<Img
						src='https://cdn-icons.flaticon.com/png/512/3856/premium/3856336.png?token=exp=1648118690~hmac=8272fd5e712f932aee5fcdeaae62bab1'
						alt=''
					/>
					<h3>Мои доски</h3>
				</MyDosk>
				<Task>
					<p>Создать доску +</p>
				</Task>
			</Home>
		</>
	)
}

export default HomePage
