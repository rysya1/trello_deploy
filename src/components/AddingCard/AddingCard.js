import styled, { keyframes, createGlobalStyle } from 'styled-components'
const SpanContainer = styled.div`
	display: flex;
	align-items: center;
	
	margin-top: 30px;
	background-color: #a2a6aa;
	width: 270px;
	height: 40px;
	border-radius: 3px;
`
const Span = styled.span`
display: block;
	padding-left: 20px;
	color: white;
`
const AddingCard = (props) => {
	return (
		<div onClick={props.onToggle}>
			<SpanContainer >
				<Span>+ Добавить карточку</Span>
			</SpanContainer>
		</div>
	)
}
export default AddingCard
