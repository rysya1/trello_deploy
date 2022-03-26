import React from 'react'
import styled from 'styled-components'
const Centered = styled.div`
	margin: 3rem auto;
	text-align: center;
	display: flex;
	justify-content: center;
	align-items: center;
`
const NotFound = () => {
	return (
		<Centered>
			<img src="https://cdn.dribbble.com/users/932640/screenshots/2470471/jq.gif" alt="alt" />
		</Centered>
	)
}

export default NotFound