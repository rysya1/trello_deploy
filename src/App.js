import LoginPage from './components/LoginPage/LoginPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Main from './components/AddingCard/Main'
function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<LoginPage />}/>
				<Route path='/AddingCard' element={<Main />}/>
			</Routes>
		</BrowserRouter>
	)
}

export default App
