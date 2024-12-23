import { Component, inject } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { BrandService } from '../../../services/brand.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-brand-form',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, FormsModule, MatButtonModule],
  templateUrl: './brand-form.component.html',
  styleUrls: ['./brand-form.component.scss'],
})
export class BrandFormComponent {
  name!:string;
  brandsServices=inject(BrandService)
  router=inject(Router);
  route=inject(ActivatedRoute);
  id!:string;
  ngOnInit(){
    this.id=this.route.snapshot.params["id"];
    this.brandsServices.getBrandById(this.id).subscribe(result=>{
      this.name=result.name;
    })
  }

  add(){
    this.brandsServices.addBrand(this.name).subscribe(result=>{
      alert("Marca Adicionada");
      this.router.navigateByUrl("/admin/brands");
    });
  }
  update(){
    this.brandsServices.updateBrand(this.id,this.name).subscribe(result=>{
      alert("Marca Alterada");
      this.router.navigateByUrl("/admin/brands");
    })
  }
}
