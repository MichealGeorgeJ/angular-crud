import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { GridComponent } from './grid/grid.component';
export interface ToDoItem{
  id:number,
  task:string,
  description:string,
  status:boolean
}

@Component({
  selector: 'app-root',
  imports: [GridComponent,RouterOutlet,FormsModule,CommonModule,MatIconModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  todoList: ToDoItem[] = [];

  toDoItem: ToDoItem={
    id:0,
    task:'',
    description:'',
    status:false
  }

  isValid() :boolean{

    return (this.toDoItem.description.trim() !== '' && this.toDoItem.task.trim() !== '')
   
  }

  resetForm():void{

    this.toDoItem={
      id:0,
      task:'',
      description:'',
      status:false
    }
  }

  toggleStatus(id:number):void{

    this.todoList[id-1].status= !this.todoList[id-1].status

  }

  deleteItem(id: number): void {
    this.todoList = this.todoList.filter(item => item.id !== id);
  }
  
  addTask() : void{
    if(this.isValid()){

      this.toDoItem.id=this?.todoList?.length+1 || 1

      this.todoList.push({...this.toDoItem})

      this.resetForm()
    }
  }

}
