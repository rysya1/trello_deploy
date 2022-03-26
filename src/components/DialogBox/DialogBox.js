import styled from 'styled-components'
const Backdrop = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100vh;
	z-index: 10;
	background: rgba(0, 0, 0, 0.206);
`
const Modal = styled.div`
	border-radius: 5px;
	height: 200px;
	position: fixed;
	top: 20vh;
	left: 35%;
	width: 30%;
	margin: 0 auto;
	z-index: 100;
	overflow: hidden;
	background-color: white;
`
const H2 = styled.div`
	padding-left: 10px;
	margin-top: 10px;
	height: 50px;
`
const YesNo = styled.div`
	padding-top:20px;
	display: flex;
	justify-content: flex-end;
	align-items: end;
`
const ButtonNo = styled.button`
margin-right:10px;
margin-left: 3px;
height: 30px;
	background-color: red;
	width: 50px;
	border: none;
`
const ButtonYes = styled.button`
height: 30px;
width: 50px;
	background-color: blue;
	border: none;
`
const DialogBox = ({ showDialog, cancelNavigation, confirmNavigation }) => {
	return (
		<>
			<Backdrop onClick={cancelNavigation} />
			<Modal show={showDialog}>
				<H2>
					<h2>Предупреждение</h2>
				</H2>
				<H2>
					<b>Есть какие-то изменения?</b>
					<br /> Вы уверены что хотите перейти!!!
				</H2>
				<YesNo>
					<ButtonYes variant='danger' onClick={confirmNavigation}>
						Yes
					</ButtonYes>
					<ButtonNo variant='primary' onClick={cancelNavigation}>
						No
					</ButtonNo>
				</YesNo>
			</Modal>
		</>
	)
}
export default DialogBox
