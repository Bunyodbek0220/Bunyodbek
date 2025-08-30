
class TodoList {
  constructor() {
    this.tasks = [];
  }

  addTask(mission) {
    this.tasks.push(mission);
  }

  removeTask(i) {
    if (i >= 0 && i < this.tasks.length) {
      this.tasks.splice(i, 1);
    } else {
      console.log("Error");
    }
  }

  displayTasks() {
    console.log("Okay");
    this.tasks.forEach((type, x) => {
      console.log(`${x}. ${type}`);
    });
  }
}


const t = new TodoList();
t.addTask("Breakfast at 8:00 AM");
t.addTask("Meeting at 12:00 PM");
t.displayTasks();
t.removeTask(0);
t.displayTasks();
