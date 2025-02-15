import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';
import { TasksService } from './app/tasks/task.service';
import { InjectionToken } from '@angular/core';

// bootstrapApplication(AppComponent, { providers: [TasksService] }).catch((err) =>
//   console.error(err)
// );

// * Longcut of custom injection token of providing your service to the application. *

export const TasksServiceToken = new InjectionToken<TasksService>('tasks-service-token');

bootstrapApplication(AppComponent, {
  providers: [{provide: TasksServiceToken, useClass:TasksService}]
}).catch((err) => console.error(err));
