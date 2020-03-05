import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  task: string = "";
  checkToggle: boolean = false;
  taskList = [];
  constructor() { }

  ngOnInit(): void {
  }

  addTask() {
    this.taskList.push({
      id: Math.floor(Math.random() * 100),
      name: this.task,
      checkValue: "none",
      checkButtonState: "check"
    });
  }

  checkTask(id) {
    this.checkToggle = !this.checkToggle;

    for (let i = 0; i < this.taskList.length; i++) {
      if (this.taskList[i].id === id) {
        if (this.checkToggle) {
          this.taskList[i].checkValue = "line-through";
          this.taskList[i].checkButtonState = "uncheck";
        }
        else {
          this.taskList[i].checkValue = "none";
          this.taskList[i].checkButtonState = "check";
        }
      }
    }
  }

  deleteTask(id) {
    for (let i = 0; i < this.taskList.length; i++) {
      if (this.taskList[i].id === id) {
        this.taskList.splice(this.taskList.indexOf(this.taskList[i]), 1);
      }
    }
  }
}
