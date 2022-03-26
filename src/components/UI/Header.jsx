import React from 'react'

import styled from 'styled-components'

const Header = () => {
	return (
		<div>
			<HeaderDiv>
				<div className='block_for_icon_and_ul'>
					<Trello>
						<img src='https://img.icons8.com/color/48/000000/trello.png' />
						<h1>TRELLO</h1>
					</Trello>
					<ul>
						<li>Рабочие пространства</li>
						<li>Недавние</li>
						<li>В избранном</li>
						<li>Шаблоны</li>
						<Button>Создать</Button>
					</ul>
				</div>

				<div>
					<Search>
						<img src='https://cdn-icons.flaticon.com/png/128/4024/premium/4024513.png?token=exp=1647343392~hmac=c0ed69b7ee25aa73b7d91e5bed85d1f0' alt='' />
						<input placeholder='Search' type='search' />
					</Search>
				</div>
			</HeaderDiv>
		</div>
	)
}
const Trello = styled.div`
	display: flex;
	justify-content: space-between;
	width: 150px;
	img {
		padding-top: 9px;
		height: 50px;
		width: 50px;
	}
	h1 {
		font-size: 25px;
	}
`
const HeaderDiv = styled.div`
	height: 50px;
	margin: 0 auto;
	font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    	'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    	sans-serif;
  		-webkit-font-smoothing: antialiased;
  		-moz-osx-font-smoothing: grayscale;
	display: flex;
	justify-content: space-around;
	align-items: center;
	background: #026aa7;
	.block_for_icon_and_ul {
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		h1 {
			color: #ffffff;
		}
		ul {
			display: flex;
			padding: 35px;
			li {
				list-style: none;
				padding: 15px;
				color: #ffffff;
			}
		}
	}
`
const Button = styled.button`
	margin-top: 5px;
	width: 75px;
	height: 42px;
	background: #014a75;
	color: #ffffff;
	border-radius: 6px;
	border: none;
	&:hover {
		opacity: 0.8;
	}
`
const Search = styled.div`
	display: flex;
	background: #3588b9;
	width: 160px;
	height: 34px;
	border-radius: 6px;
	padding: px;
	input {
		background: none;
		border: none;
		outline: none;
		padding: 5px;
		font-size: 16px;
		&::placeholder {
			color: #ffffff;
		}
	}
	img {
		width: 30px;
	}
`
export default Header
