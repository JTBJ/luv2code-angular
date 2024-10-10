import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppStudentComponent } from './app-student/app-student.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AppStudentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'luv2code-angular';
  firstName = 'John';
  lastName = 'Doe';
}
