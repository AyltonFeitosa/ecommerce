import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CategoriesComponent } from './components/manage/categories/categories.component';
import { CategoryFormComponent } from './components/manage/category-form/category-form.component';
import { BrandsComponent } from './components/manage/brands/brands.component';
import { BrandFormComponent } from './components/manage/brand-form/brand-form.component';
import { ProductsComponent } from './components/manage/products/products.component';
import { ProductFormComponent } from './components/manage/product-form/product-form.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { authGuard } from './core/auth-guard';
import { AdminDashbaordComponent } from './components/manage/admin-dashbaord/admin-dashbaord.component';
import { adminGuard } from './core/admin-guard';
import { CostumerProfileComponent } from './components/costumer-profile/costumer-profile.component';
import { WishlistsComponent } from './components/wishlists/wishlists.component';


export const routes: Routes = [
    {
        path: "",
        component: HomeComponent,
        canActivate:[authGuard]
    },
    {
        path: "admin",
        component:AdminDashbaordComponent,
        canActivate:[adminGuard]
    },
    {
        path: "admin/categories",
        component: CategoriesComponent,
        canActivate:[adminGuard]
    },
    {
        path: "admin/categories/add",
        component: CategoryFormComponent,
        canActivate:[adminGuard]
    },
    {
        path: "admin/categories/:id",
        component: CategoryFormComponent,
        canActivate:[adminGuard]
    },
    {
        path: "admin/brands",
        component: BrandsComponent,
        canActivate:[adminGuard]
    },
    {
        path: "admin/brands/add",
        component: BrandFormComponent,
        canActivate:[adminGuard]
    },
    {
        path: "admin/brands/:id",
        component: BrandFormComponent,
        canActivate:[adminGuard]
    },
    {
        path: "admin/products",
        component: ProductsComponent,
        canActivate:[adminGuard]
    },
    {
        path: "admin/products/add",
        component: ProductFormComponent,
        canActivate:[adminGuard]
    },
    {
        path: "admin/products/:id",
        component: ProductFormComponent,
        canActivate:[adminGuard]
    },
    {
        path: "products",
        component: ProductListComponent,
        canActivate:[authGuard]
    },
    {
        path: "product/:id",
        component: ProductDetailComponent,
        canActivate:[authGuard]
    },
    {
        path: "profile",
        component: CostumerProfileComponent,
        canActivate:[authGuard]
    },
    {
        path: "wishlists",
        component: WishlistsComponent,
        canActivate:[authGuard]
    },
    {
        path: "register",
        component: RegisterComponent,
    },
    {
        path: "login",
        component: LoginComponent,
    },
];
