import React, { Suspense } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import styled, { createGlobalStyle } from 'styled-components'

import Loading from './components/UI/Loading'
import NotFound from './pages/NotFound'

const Main = React.lazy(() => import('./components/AddingCard/Main'))
const LoginPage = React.lazy(() => import('./components/LoginPage/LoginPage'))
const ModalFormWindow = React.lazy(() =>
	import('./components/ModalWindow/ModalWindowForm'),
)
const MainHome = React.lazy(() => import('./components/MainHome/Home'))
const HomePage = React.lazy(() => import('./components/Home/HomePage'))

function App() {
	return (
		<BrowserRouter>
			<GlobalStyle />
			<Suspense
				fallback={
					<Centered>
						<Loading />
					</Centered>
				}
			>
				<Routes>
					<Route path='/' element={<Navigate to='/main' />} />
					<Route path='/main' element={<MainHome />} />
					<Route path='/login' element={<LoginPage />} />
					<Route path='/dashboard/*' element={<Main />}>
						<Route
							path='description'
							element={<ModalFormWindow />}
						/>
					</Route>
					<Route path='/home' element={<HomePage />} />
					<Route path='*' element={<NotFound />} />
				</Routes>
			</Suspense>
		</BrowserRouter>
	)
}
const GlobalStyle = createGlobalStyle`
	body{
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    	'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    	sans-serif;
  		-webkit-font-smoothing: antialiased;
  		-moz-osx-font-smoothing: grayscale;	
	}
`
const Centered = styled.div`
	margin: 3rem auto;
	text-align: center;
	display: flex;
	justify-content: center;
	align-items: center;
`
export default App
