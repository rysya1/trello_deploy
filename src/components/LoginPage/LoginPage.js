import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import styled, { keyframes, createGlobalStyle } from 'styled-components'
import useInput from '../../Hooks/useInput'
import { authActions } from '../../store/auth-slice'
import { useCallbackPrompt } from '../../Hooks/useCallbackPrompt'
import DialogBox from '../DialogBox/DialogBox'
function LoginPage(props) {
	const [showDialog, setShowDialog] = useState(false)
	const [state, setState] = useState('')
	const [showPrompt, confirmNavigation, cancelNavigation] =
		useCallbackPrompt(showDialog)

	const { isAuth, errorMessage, account } = useSelector((state) => state.auth)
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const userEmail = useInput()
	const userPassword = useInput()
	const error = {
		email: '',
		password: '',
	}

	if (userEmail.valueInputIsInValid) {
		error.email = 'Укажите правильный Email адрес'
	}
	if (userPassword.valueInputIsInValid) {
		error.password = 'Введите пароль'
	}
	useEffect(() => {
		if (
			userEmail.value.trim().length > 0 ||
			userPassword.value.trim().length > 0
		) {
			setShowDialog(true)
			console.log('dasdas')
		}
	}, [userEmail, userPassword, setShowDialog])
	const handleSubmit = (e) => {
		e.preventDefault()

		dispatch(
			authActions.authentificeate({
				email: userEmail.value,
				password: userPassword.value,
			}),
		)
		userEmail.onClear()
		userPassword.onClear()
		setShowDialog(true)
	}

	useEffect(() => {
		if (isAuth === true) {
			navigate('/dashboard')
		}
	}, [isAuth])

	let formIsValid = false
	if (userEmail.valueIsValid && userPassword.valueIsValid) {
		formIsValid = true
	}
	return (
		<>
			<GlobalStyle />
			{showPrompt && (
				<DialogBox
					showDialog={showPrompt}
					confirmNavigation={confirmNavigation}
					cancelNavigation={cancelNavigation}
				/>
			)}
			<Link to='/main'>
				<Button onClick={() => setShowDialog(true)}>
					<span>Выйти</span>
					<svg width='15px' height='10px' viewBox='0 0 13 10'>
						<path d='M1,5 L11,5'></path>
						<polyline points='8 1 12 5 8 9'></polyline>
					</svg>
				</Button>
			</Link>
			<Wrapper>
				<Form>
					<Img
						src='https://cdn.iconscout.com/icon/free/png-256/trello-14-1175081.png'
						alt='Trello'
					/>
					<div>
						<Input
							type='email'
							name='email'
							isvalid={userEmail.valueInputIsInValid}
							value={userEmail.value}
							onBlur={userEmail.onBlur}
							onChange={userEmail.onChange}
						/>
						<p style={{ color: 'red' }}>{error.email}</p>
						<p style={{ color: 'red' }}>{errorMessage}</p>
					</div>
					<div>
						<Input
							type='password'
							name='password'
							isvalid={userPassword.valueInputIsInValid}
							value={userPassword.value}
							onChange={userPassword.onChange}
							onBlur={userPassword.onBlur}
						/>
						<p style={{ color: 'red' }}>{error.password}</p>
						<p style={{ color: 'red' }}>{errorMessage}</p>
					</div>

					<Button
						onClick={handleSubmit}
						type='submit'
						disabled={!formIsValid && !isAuth}
					>
						<span>Login</span>
						<svg width='15px' height='10px' viewBox='0 0 13 10'>
							<path d='M1,5 L11,5'></path>
							<polyline points='8 1 12 5 8 9'></polyline>
						</svg>
					</Button>
				</Form>
			</Wrapper>
		</>
	)
}
const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    background: #fff;
  }
  body{
	font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  }
`

const Wrapper = styled.section`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100%;
	width: 100%;
`

const Form = styled.form`
	margin: 0 auto;
	width: 100%;
	max-width: 414px;
	padding: 1.3rem;
	display: flex;
	flex-direction: column;
	position: relative;
	color: #395a9c;
	margin-bottom: 70px;
`

const Input = styled.input`
	max-width: 100%;
	width: 400px;
	padding: 11px 13px;
	background: ${(props) => (props.isvalid ? 'red' : '#3588b9')};
	color: #395a9c;
	margin-bottom: 0.9rem;
	border-radius: 4px;
	outline: 0;
	border: 1px solid rgba(245, 245, 245, 0.7);
	font-size: 14px;
	transition: all 0.3s ease-out;
	box-shadow: 0 0 3px rgba(0, 0, 0, 0.1), 0 1px 1px rgba(0, 0, 0, 0.1);
	:focus,
	:hover {
		box-shadow: 0 0 3px rgba(0, 0, 0, 0.15), 0 1px 5px rgba(0, 0, 0, 0.1);
	}
`

const Img = styled.img`
	margin: 0 auto;
	width: 150px;
`

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
export default LoginPage
