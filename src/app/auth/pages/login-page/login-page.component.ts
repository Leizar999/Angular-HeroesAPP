import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styles: ``
})
export class LoginPageComponent {

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  public onLogin(): void {
    this.authService.login('klander@gmail.com','12345')
      .subscribe( user => {
        this.router.navigate(['/']);
      })
  }
}
