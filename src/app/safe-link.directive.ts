import { Directive, input } from '@angular/core';

@Directive({
  selector: '[appSafeLink]',
  standalone: true,
  host: {
    '(click)': 'onConfirmLeave($event)',
  },
})
export class SafeLinkDirective {
  queryParam = input('myapp', {alias: 'appSafeLink'});

  constructor() {
    console.log('SafeLinkDirective is active!');
  }

  onConfirmLeave(event: MouseEvent) {
    const wantsToLeave = window.confirm('Do you want to leave the app?');

    if (wantsToLeave) {
                        // Type casting.
      const address = (event.target as HTMLAnchorElement).href;
      (event.target as HTMLAnchorElement).href = address + '?from=' + this.queryParam();
      return;
    }

    event.preventDefault();
  }
}
