import { Component, Inject, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [MatInputModule, MatButtonModule, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  formbuilder=inject(FormBuilder);
  registerForm=this.formbuilder.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  authService=inject(AuthService);
  router = inject(Router);
  
  register() {
    let value = this.registerForm.value;
    this.authService.register(value.name!, value.email!, value.password!).subscribe((result)=>{
      alert('usuario cadastrado');
      this.router.navigateByUrl("/login");
    })
  }
}
