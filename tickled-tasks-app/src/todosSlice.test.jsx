import todosReducer, { addTodo, deleteTodo } from "./todosSlice";

describe("todos reducer", () => {
  it("should return the initial state", () => {
    expect(todosReducer(undefined, { type: undefined })).toEqual([]);
  });

  it("should handle addTodo", () => {
    const initialState = [];
    const newState = todosReducer(initialState, addTodo("Test Todo"));
    expect(newState).toEqual(["Test Todo"]);
  });

  it("should handle deleteTodo", () => {
    const initialState = [];
    const newState = todosReducer(initialState, deleteTodo(0));
    expect(newState).toEqual([]);
  });
});
