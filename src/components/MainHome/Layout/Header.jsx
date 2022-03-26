import React from 'react'
import styled from 'styled-components'
// import Button from '../../../components/UI/Button'
// import LogoTrello from '../../../components/UI/LogoTrello'

const Header = ({navigate}) => {
	return (
		<HeaderStyled>
			<div>
				{/* <LogoTrello /> */}
			</div>
			<div>
				<button onClick={() => navigate('/login')}>Войти</button>
			</div>
		</HeaderStyled>
	)
}


const HeaderStyled = styled.header`

	width: 100%;
	padding: 1rem 2rem;
	display: flex;
	align-items: center;
	justify-content: space-between;
	background-color: #ece8ff;
	button {margin-right:50px;
		border: none;
		background-color: #0065ff;
		padding: 0.6rem 3rem;
		font-size: 24px;
		font-weight: 300;
		cursor: pointer;
		&:hover {
			opacity: 0.8;
		}
	}
`

export default Header
