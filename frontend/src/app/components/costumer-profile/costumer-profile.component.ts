import { Component, inject } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-costumer-profile',
  standalone: true,
  imports: [],
  templateUrl: './costumer-profile.component.html',
  styleUrl: './costumer-profile.component.scss'
})
export class CostumerProfileComponent {
  authService=inject(AuthService);
  
}
