// frontend/todo.js

function getTodos(todos) {
  return todos;
}

function addTodo(todos, task) {
  if (!task || task.trim() === "") {
    return todos;
  }
  return [...todos, { task, completed: false }];
}

function deleteTodo(todos, index) {
  return todos.filter((_, i) => i !== index);
}

function editTodo(todos, index, newTask) {
  if (!newTask || newTask.trim() === "") {
    return todos;
  }
  return todos.map((todo, i) =>
    i === index ? { ...todo, task: newTask } : todo
  );
}

module.exports = {
  getTodos,
  addTodo,
  deleteTodo,
  editTodo
};