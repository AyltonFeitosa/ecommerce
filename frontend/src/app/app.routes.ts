import { Routes } from '@angular/router';
import { HomeComponent } from './components/manage/home/home.component';
import { CategoriesComponent } from './components/manage/categories/categories.component';
import { CategoryFormComponent } from './components/manage/category-form/category-form.component';
import { BrandsComponent } from './components/manage/brands/brands.component';
import { BrandFormComponent } from './components/manage/brand-form/brand-form.component';

export const routes: Routes = [
    {
        path: "",
        component: HomeComponent,
    },
    {
        path: "admin/categories",
        component: CategoriesComponent,
    },
    {
        path: "admin/categories/add",
        component: CategoryFormComponent,
    },
    {
        path: "admin/categories/:id",
        component: CategoryFormComponent,
    },
    {
        path: "admin/brands", // Corrigido para plural
        component: BrandsComponent,
    },
    {
        path: "admin/brands/add", // Corrigido para plural
        component: BrandFormComponent,
    },
    {
        path: "admin/brands/:id", // Corrigido para plural
        component: BrandFormComponent,
    },
    {
        path: "**", // Fallback para rotas não encontradas
        redirectTo: "",
        pathMatch: "full",
    },
];
