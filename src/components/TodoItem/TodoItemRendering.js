import styled from 'styled-components'
import ModalFormWindow from '../ModalWindow/ModalWindowForm'
import { useState } from 'react'
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
	const [modal, setModal] = useState(false)
    const toggleUsersHandler = () => {
		setModal((curState) => !curState)
	}
	return (
		<>
			{modal && <ModalFormWindow onConfirm={toggleUsersHandler} />}
			{!modal && <TextStyled onClick={toggleUsersHandler}>
				<Span >{props.text}</Span>
			</TextStyled>}
		</>
	)
}
export default TodoItemRendering
