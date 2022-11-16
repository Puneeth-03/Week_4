const listtodo = () => {
  all = [];
  const add = (todoItem) => {
    all.push(todoItem);
  };
  const markcomplete = (index) => {
    all[index].completed = true;
  };

  let day_now = new Date().toLocaleDateString("en-CA");

  const due = () => {
    return all.filter((todo) => {
      return todo.dueDate < day_now;
    });
  };

  const day_nowdue = () => {
    return all.filter((todo) => {
      return todo.dueDate === day_now;
    });
  };

  const laterdue = () => {
    return all.filter((todo) => {
      return todo.dueDate > day_now;
    });
  };

  const todisplay = (list) => {
    return list
      .map((todo) => {
        display_status = todo.completed ? "[x]" : "[ ]";
        display_date = todo.dueDate == day_now ? "" : todo.dueDate;

        return `${display_status} ${todo.title} ${display_date}`;
      })
      .join("\n");
  };

  return {
    all,
    add,
    markcomplete,
    due,
    day_nowdue,
    laterdue,
    todisplay,
  };
};

module.exports = listtodo;

