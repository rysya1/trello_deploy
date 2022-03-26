import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router'
import Header from './Layout/Header'

const MainHome = () => {
	const navigate = useNavigate()
	return (
		<>
			<Header navigate = {navigate}/>
			<Main>
				<div>
					<h1>
						Trello помогает командам эффективно решать рабочие
						задачи.
					</h1>
					<p>
						Работайте в команде, управляйте проектами и выводите
						продуктивность на новый уровень собственным уникальным
						способом вместе с Trello.
					</p>
				</div>
				<section>
					<img
						src='https://d2k1ftgv7pobq7.cloudfront.net/meta/p/res/images/spirit/hero/6a3ccd8e5c9a0e8ebea4235d12da6b24/hero.png'
						alt=''
					/>
				</section>
			</Main>
		</>
	)
}


const Main = styled.main`
	padding-top: 50px;
	width: 100%;
	background-color: #ece8ff;
	display: flex;
	justify-content: space-around;
	align-items: center;
	h1 {
		font-size: 60px;
		color: #091e42;
	}
	img {
		width: 400px;
		height: 500px;
	}
	div {
		width: 720px;
	}
	p {
		margin-top: 20px;
		font-size: 24px;
		line-height: 150%;
		letter-spacing: 1px;
	}
`

export default MainHome
