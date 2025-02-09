import { Component, ElementRef, ViewChild } from '@angular/core';
import { ButtonComponent } from '../../../shared/button/button.component';
import { ControlComponent } from '../../../shared/control/control.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, ControlComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css',
})
export class NewTicketComponent {

  @ViewChild('form') form?: ElementRef<HTMLFormElement>;

  // You can see `type` of the template variable, by hovering over it html template file.
  onSubmit(title: string, ticketText: string) {
    console.log('title :>> ', title);
    console.log('ticketText :>> ', ticketText);

    // use nativeElement here because we store element inside ElementRef wrapper object.
    this.form?.nativeElement.reset();
  }
}
