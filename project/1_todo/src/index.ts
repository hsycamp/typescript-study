let todoItems: { id: number; title: string; done: boolean }[];

// api
function fetchTodoItems(): { id: number; title: string; done: boolean }[] {
  const todos = [
    { id: 1, title: "자료구조", done: false },
    { id: 2, title: "알고리즘", done: false },
    { id: 3, title: "네트워크", done: false },
  ];
  return todos;
}

// crud methods
function fetchTodos(): object[] {
  const todos = fetchTodoItems();
  return todos;
}

function addTodo(todo: { id: number; title: string; done: boolean }): void {
  todoItems.push(todo);
}

function deleteTodo(index: number): void {
  todoItems.splice(index, 1);
}

function completeTodo(index: number, todo: { id: number; title: string; done: boolean }): void {
  todo.done = true;
  todoItems.splice(index, 1, todo);
}

// business logic
function logFirstTodo(): object {
  return todoItems[0];
}

function showCompleted(): object[] {
  return todoItems.filter((item: { id: number; title: string; done: boolean }) => item.done);
}

function addTwoTodoItems(): void {
  const item4 = {
    id: 4,
    title: "운영체제",
    done: false,
  };
  addTodo(item4);
  addTodo({
    id: 5,
    title: "DB",
    done: false,
  });
}

function log(): void {
  console.log(todoItems);
}

todoItems = fetchTodoItems();
addTwoTodoItems();
log();
