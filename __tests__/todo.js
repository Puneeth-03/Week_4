const listtodo = require("../todo");
let day_now = new Date().toLocaleDateString("en-CA");

const { all, markcomplete, add, due, day_nowdue, laterdue } = listtodo();

describe("Testing the doto list", () => {
  beforeAll(() => {
    add({
      title: "Have coffee and do the project",
      completed: false,
      dueDate: new Date().toLocaleDateString("en-CA"),
    });
  });

  test("Add new todolist to the list", () => {
    let length = all.length;

    add({
      title: "finish naresh i technologies python",
      completed: false,
      dueDate: new Date().toLocaleDateString("en-CA"),
    });

    expect(all.length).toBe(length + 1);
  });

  test("Mark todo as complete", () => {
    expect(all[0].completed).toBe(false);
    markcomplete(0);
    expect(all[0].completed).toBe(true);
  });

  test("retrieve all todos that were due", () => {
    let todo_list = due();

    expect(
      todo_list.every((todo) => {
        return todo.dueDate < day_now;
      })
    ).toBe(true);
  });

  test("retrieve all todos that are due for day_now", () => {
    let todo_list = day_nowdue();

    expect(
      todo_list.every((todo) => {
        return todo.dueDate === day_now;
      })
    ).toBe(true);
  });

  test("retrieve all todos that are due for later", () => {
    let todo_list = laterdue();

    expect(
      todo_list.every((todo) => {
        return todo.dueDate > day_now;
      })
    ).toBe(true);
  });
});
