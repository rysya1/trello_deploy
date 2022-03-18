import { createSlice } from '@reduxjs/toolkit'
const base = [
	{
		email: 'rysya.bokombaev@gmail.com',
		password: 'qwerty',
	},
]

const initState = {
	isAuth: false,
	account: {},
	errorMessage: '',
}

const authSlice = createSlice({
	name: 'auth',
	initialState: initState,
	reducers: {
		authentificeate(state, action) {
			for (const el of base) {
				if (
					el.email === action.payload.email &&
					el.password === action.payload.password
				) {
					state.isAuth = true
					state.account = { ...el }
					state.errorMessage = ''
					break
				} else {
					state.errorMessage = 'Такой аккаунт не существует!!!'
				}
			}
		},
	},
})

export const authActions = authSlice.actions
export default authSlice
