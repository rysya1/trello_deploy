import React from 'react'
import { useSelector } from 'react-redux'
import TodoItem from './TodoItem'
import styled from 'styled-components'

const TodoListStyled = styled.div`
	display: flex;
`

const TodoList = () => {
	const todo = useSelector((state) => state.todo)
	return (
		<>
			<TodoListStyled>
				{todo.map((el) => {
					return (
						<div key={el.id}>
							<TodoItem
								key={el.id}
								todos={el.todos}
								title={el.title}
								id={el.id}
							/>
						</div>
					)
				})}
			</TodoListStyled>
		</>
	)
}

export default TodoList
