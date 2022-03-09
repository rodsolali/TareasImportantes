import { Component, OnInit } from '@angular/core';
import { TaskserviceService } from '../services/task-service.service';

@Component({
  selector: 'app-tab3',
  templateUrl: './tab3.page.html',
  styleUrls: ['./tab3.page.scss'],
})
export class Tab3Page implements OnInit {
  public tasks: string[];
  constructor(private taskService: TaskserviceService) {
    this.tasks = this.taskService.getFavoriteTasks();
  }
  public removeFavTask(index: number) {
    this.taskService.removeFavTask(index)
    this.tasks = this.taskService.getFavoriteTasks();
  }
  ngOnInit() {
  }

}
