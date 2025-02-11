import { Directive, input } from '@angular/core';

@Directive({
  selector: '[appSafeLink]',
  standalone: true,
  host: {
    '(click)': 'onConfirmLeave($event)',
  },
})
export class SafeLinkDirective {
  appSafeLink = input('myapp');

  constructor() {
    console.log('SafeLinkDirective is active!');
  }

  onConfirmLeave(event: MouseEvent) {
    const wantsToLeave = window.confirm('Do you want to leave the app?');

    if (wantsToLeave) {
                        // Type casting.
      const address = (event.target as HTMLAnchorElement).href;
      (event.target as HTMLAnchorElement).href = address + '?from=' + this.appSafeLink();
      return;
    }

    event.preventDefault();
  }
}
