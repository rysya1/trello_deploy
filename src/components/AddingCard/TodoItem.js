import React, { useState } from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { todoSliceActions } from '../../store/todo'
import TodoItemList from '../TodoItem/TodoItemList'

const TodoItem = (props) => {
	const dispatch = useDispatch()
	const [text, setText] = useState('')
	const [show, setShow] = useState(false)
	const textAreaHandler = (e) => {
		setText(e.target.value)
	}
	const toggle = (e) => {
		e.preventDefault()
		setShow((perev) => !perev)
	}

	const submitHandler = (e) => {
		e.preventDefault()
		if (text.trim().length > 0) {
		dispatch(todoSliceActions.addTextArea({ text, id: props.id }))
		}
		setText('')
	}
	return (
		<ShowStyled>
			<div>
				<Span>{props.title}</Span>
			</div>
			<TodoItemList tasks={props.todos} />
			{show && (
				<>
					<TextAreaContainer>
						<Textarea onChange={textAreaHandler} value={text}></Textarea>
					</TextAreaContainer>
					<BtnImg>
						<Button onClick={submitHandler}>
							Добавить карточку
						</Button>
						<Img
							onClick={toggle}
							src='https://cdn-icons.flaticon.com/png/128/3482/premium/3482248.png?token=exp=1647257474~hmac=3a49b91fd74cd3c1329e49bd93b8ae7b'
						/>
					</BtnImg>
				</>
			)}
			{!show && (
				<SpanContainer onClick={toggle}>
					<Span2>+ Добавить карточку</Span2>
				</SpanContainer>
			)}
		</ShowStyled>
	)
}
const ShowStyled = styled.div`
	margin-top: 40px;
	background-color: #ebecf0;
	width: 270px;
	margin-left: 100px;
	border-radius: 4px;
`

const TextAreaContainer = styled.div`
	padding-left: 5px;
`
const Textarea = styled.textarea`
	max-width: 250px;
	width: 250px;
	margin-top: 10px;
	outline: none;
	border: gray solid;
	border-radius: 4px;
	::placeholder {
		padding-left: 5px;
	}
	&:focus {
		border: 3px solid #0079bf;
	}
`
const Button = styled.button`
	margin-top: 4px;
	background-color: #0079bf;
	margin-left: 5px;
	border: none;
	color: #fff;
	height: 25px;
	border-radius: 4px;
	margin-bottom: 5px;
`
const Img = styled.img`
	display: block;
	color: #fff;
	width: 35px;
`
const BtnImg = styled.div`
	padding-top: 7px;
	display: flex;
	justify-content: space-between;
	margin: 3px;
	width: 170px;
`
const Span = styled.span`
	margin-top: 10px;
	padding-left: 10px;
	font-size: 20px;
`
const SpanContainer = styled.div`
	display: flex;
	align-items: center;
	margin-left: 10px;
	margin-top: 10px;
	
	background-color: #ebecf0;
	width: 250px;
	height: 40px;
	border-radius: 3px;
	:hover {
		background-color: #a2a6aa;margin-bottom: 10px;
	}
`
const Span2 = styled.span`
	padding-left: 20px;
	color: gray;
`
export default TodoItem
