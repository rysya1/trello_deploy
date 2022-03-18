import { useState } from 'react'
import AddingCard from './AddingCard'
import styled, { keyframes, createGlobalStyle } from 'styled-components'
import { todoSliceActions } from '../../store/todo'
import { useDispatch } from 'react-redux'
const CardTextArea = (props) => {
	const dispatch = useDispatch()
	const [title, setTitle] = useState('')
	const [change, setChange] = useState(false)
	function titleHandler(e) {
		setTitle(e.target.value)
	}
	const toggleUsersHandler = () => {
		setChange((curState) => !curState)
	}
	function submitHandler(e) {
		e.preventDefault()
		if (title.trim().length > 0) {
		dispatch(todoSliceActions.add({ title }))
		}
		setTitle('')
	}
	return (
		<div onSubmit={submitHandler}>
			<Container onToggle={toggleUsersHandler}>
				{change && (
					<div >
						<InputContainer>
							<Input
								value={title}
								onChange={titleHandler}
								placeholder='Ввести заголовок списка'
							></Input>
						</InputContainer>
						<BtnImg>
							<Button onClick={submitHandler}>
								Добавить список
							</Button>
							<Img
								onClick={toggleUsersHandler}
								src='https://cdn-icons.flaticon.com/png/128/3482/premium/3482248.png?token=exp=1647257474~hmac=3a49b91fd74cd3c1329e49bd93b8ae7b'
							/>
						</BtnImg>
					</div>
				)}
				{!change && <AddingCard onToggle={toggleUsersHandler} />}
			</Container>
		</div>
	)
}
const Container = styled.div`
	margin-top: 40px;
	background-color: #ebecf0;
	width: 270px;
	margin-left: 50px;
	border-radius: 4px;
`
const InputContainer = styled.div`
	padding-top: 20px;
	padding-left: 5px;
`
const Input = styled.input`
	width: 250px;
	height: 30px;
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
	width: 160px;
`
export default CardTextArea
