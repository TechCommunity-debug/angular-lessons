import { NgModule } from '@angular/core'
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { HeaderComponent } from './header/header.component';
import { TasksComponent } from './tasks/tasks.component';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent],
  bootstrap: [AppComponent],
  imports: [BrowserModule, TasksComponent, UserComponent]
})
export class AppModule {}
