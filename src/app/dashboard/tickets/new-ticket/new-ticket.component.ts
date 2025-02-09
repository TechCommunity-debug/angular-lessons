import { Component, ElementRef, viewChild } from '@angular/core';
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

  //@ViewChild('form') private form?: ElementRef<HTMLFormElement>;
  //private form = viewChild<ElementRef<HTMLFormElement>>('form');
  private form = viewChild.required<ElementRef<HTMLFormElement>>('form');

  // You can see `type` of the template variable, by hovering over it html template file.
  onSubmit(title: string, ticketText: string) {
    console.log('title :>> ', title);
    console.log('ticketText :>> ', ticketText);

    // use nativeElement here because we store element inside ElementRef wrapper object.
    this.form().nativeElement.reset();
  }
}
