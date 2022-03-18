import { useState } from 'react'
const useInput = () => {
	const [value, setValue] = useState('')
	const [inputTouched, setInputTouched] = useState(false)

	const valueIsValid = value.trim() !== ''
	const valueInputIsInValid = !valueIsValid && inputTouched

	return {
		onChange: (e) => {
			setValue(e.target.value)
		},
		onBlur: () => {
			setInputTouched(true)
		},
		onClear: () => {
			setInputTouched(false)
			setValue('')
		},
		valueIsValid,
		valueInputIsInValid,
		value,
	}
}
export default useInput
