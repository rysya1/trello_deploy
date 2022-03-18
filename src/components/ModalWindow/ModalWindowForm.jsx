import styled from 'styled-components'

const ModalFormWindow = (props) => {
	return (
		<>
			<Backdrop onClick={props.onConfirm}/>
			<Modal>
                <ImgCont >
				<Img onClick={props.onConfirm} src='https://cdn-icons.flaticon.com/png/128/3482/premium/3482248.png?token=exp=1647257474~hmac=3a49b91fd74cd3c1329e49bd93b8ae7b' />
				</ImgCont>
                <div>
					<ImgModal 
						src='https://static.thenounproject.com/png/767489-200.png'
						alt=''
					/>
					<Title>Redux middleware</Title>
				</div>
				<Description>
					<ImgModal
						src='https://ledworld-me.com/wp-content/uploads/2016/11/menu.png'
						alt=''
					/>
					<Title>Описание</Title>
					<Button>Изменить</Button>
				</Description>
				<TextArea></TextArea>
				<div>
					<ButtonAdd>Сохранить</ButtonAdd>
				</div>
			</Modal>
		</>
	)
}
const Backdrop = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100vh;
	z-index: 10;
	background: rgba(0, 0, 0, 0.527);
`
const Modal = styled.div`
	border-radius: 5px;
	height: 470px;
	position: fixed;
	top: 20vh;
	left: 25%;
	width: 50%;
	margin: 0 auto;
	z-index: 100;
	overflow: hidden;
	background-color: white;
`
const ImgModal = styled.img`
	width: 20px;
	padding-top: 20px;
	padding-left: 20px;
`
const Title = styled.span`
	padding-left: 10px;
	font-size: 25px;
`

const Description = styled.div``
const Button = styled.button`
	padding-top: 10px;
	margin-left: 10px;
	background-color: #eaecf0;
	width: 100px;
	height: 40px;
	border: none;
	border-radius: 3px;
	color: gray;
	:hover {
		background-color: rgba(53, 136, 185, 1);
		color: white;
	}
`
const ButtonAdd = styled.button`
	margin-top: 10px;
	margin-left: 20px;
	background-color: rgba(53, 136, 185, 1);
	width: 100px;
	height: 35px;
	border: none;
	border-radius: 3px;
	color: white;
	:hover {
		background-color: rgba(53, 136, 185, 1);
		color: white;
	}
`
const TextArea = styled.textarea`
	margin-top: 30px;
	margin-left: 20px;
	max-width: 300px;
	width: 300px;
	border: #0079bf solid 3px;
	outline: 0;
	border-radius: 3px;
	color: #0079bf;
`
const Img = styled.img`
    width: 40px;
`
const ImgCont = styled.span`
    display: flex;
    justify-content: flex-end;
    padding: 0;
    margin: 0;
`
export default ModalFormWindow
