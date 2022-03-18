import TodoItemRendering from './TodoItemRendering'

const TodoItemList = ({ tasks }) => {
	return (
		<div>
			{tasks.map((el) => {
				return <TodoItemRendering key={el.id} text={el.text} />
			})}
		</div>
	)
}
export default TodoItemList
