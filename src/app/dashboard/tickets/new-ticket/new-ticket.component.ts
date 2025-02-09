import { Component } from '@angular/core';
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
  // You can see `type` of the template variable, by hovering over it html template file.
  onSubmit(title: string, ticketText: string, form: HTMLFormElement) {
    console.log('title :>> ', title);
    console.log('ticketText :>> ', ticketText);
    form.reset();
  }
}
