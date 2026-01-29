const {
  getTodos,
  addTodo,
  deleteTodo,
  editTodo
} = require("../frontend/todo");

describe("Todo App Test Cases", () => {

  test("Add todo", () => {
    const todos = [];
    const result = addTodo(todos, "Learn DevOps");
    expect(result.length).toBe(1);
  });

  test("Delete todo", () => {
    const todos = [{ task: "A" }, { task: "B" }];
    const result = deleteTodo(todos, 0);
    expect(result.length).toBe(1);
  });

  test("Edit todo", () => {
    const todos = [{ task: "Old" }];
    const result = editTodo(todos, 0, "New");
    expect(result[0].task).toBe("New");
  });

  test("Validation – empty todo not allowed", () => {
    const todos = [];
    const result = addTodo(todos, "");
    expect(result.length).toBe(0);
  });

  test("View / show todos", () => {
    const todos = [{ task: "X" }];
    const result = getTodos(todos);
    expect(result).toEqual(todos);
  });

});