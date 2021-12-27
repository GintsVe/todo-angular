import {Component} from '@angular/core';

type TaskType = {
  task: string,
  done: boolean
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  tasks = [] as TaskType[]
  newTaskInput =  ""

  changeTaskInput(event: any) {
    this.newTaskInput = event.target.value
  }

  addTask() {
    const newTask = {task: this.newTaskInput, done: false}
    const allTasks = this.tasks.map(({task}) => task.toLowerCase())

    if(this.newTaskInput && !allTasks.includes(this.newTaskInput.toLowerCase())) {
      this.tasks.push(newTask)
      this.newTaskInput = ""
    }
  }

  removeTask(index: number) {
    this.tasks.splice(index, 1)
  }

  taskDone(index: number) {
    this.tasks[index].done = !this.tasks[index].done
  }
}
