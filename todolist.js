
const todoList = {
  tasks: [],

  addTask(mission) {
    this.tasks.push(mission);
  },

  removeTask(i) {
    if (i >= 0 && i < this.tasks.length) {
      this.tasks.splice(i, 1);
    } else {
      console.log("Error");
    }
  },

  displayTasks() {
    console.log("Okay");
    this.tasks.forEach((type, x) => {
      console.log(`${x}. ${type}`);
    });
  }
};


todoList.addTask("Breakfast at 8:00 AM");
todoList.addTask("Meeting at 12:00 PM");
todoList.displayTasks();
todoList.removeTask(0);
todoList.displayTasks();
