import { createSlice } from '@reduxjs/toolkit'
export const todoSlice = createSlice({
	name: 'todo',
	initialState: [],
	reducers: {
		add: (state, actions) => {
			state.push({
				id: Math.random().toString(),
				title: actions.payload.title,
				todos: [],
			})
		},
		addTextArea: (state, actions) => {
			const { text, id } = actions.payload
			state.map((item) => {
				if (item.id === id) {
					item.todos.push({
						text,
						id: Math.random().toString(),
					})
				}
			})
		},
	},
})

export const todoSliceActions = todoSlice.actions
