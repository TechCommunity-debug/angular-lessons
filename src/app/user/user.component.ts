import { Component, computed, Input, input } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {
  // 1. This enforces that this attribute should compulsary to component.
  // @Input({required: true}) avatar!: string;
  // @Input({required: true}) name!: string;
  avatar = input.required<string>();
  name = input.required<string>();

  // get imagePath() {
  //   return 'assets/users/' + this.avatar;
  // }

  imagePath = computed(() => {
    return 'assets/users/' + this.avatar();
  })

  onSelectedUser() {
  }
}
