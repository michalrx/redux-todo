export const renderTodos = todos => {
    return todos.map(todo => `<li>${todo.text}</li>`).join('');
}