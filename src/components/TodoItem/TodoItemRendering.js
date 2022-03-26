import styled from 'styled-components'
import ModalFormWindow from '../ModalWindow/ModalWindowForm'
import { useState } from 'react'

import { Link, Outlet } from 'react-router-dom'
const TextStyled = styled.div`
	margin-top: 10px;
	display: flex;
	align-items: center;
	padding-left: 10px;
	margin-left: 5px;
	background-color: #ffffff;
	width: 250px;
	height: 30px;
	color: black;
	border-radius: 3px;
	:hover {
		background-color: rgb(224, 219, 219);
	}
`
const Span = styled.span``
const TodoItemRendering = (props) => {
	return (
		<>
			<Link to='description'>
				<TextStyled>
					<Span>{props.text}</Span>
				</TextStyled>
			</Link>
			<Outlet />
		</>
	)
}
export default TodoItemRendering
