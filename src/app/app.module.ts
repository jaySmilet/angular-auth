import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NavigationComponent } from './navigation/navigation.component';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductService } from './services/product.service';
import { ProductComponent } from './product/product.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AuthService } from './services/auth.service';
import { AuthGuardService } from './auth-guard.service';
import { DeactivateGuard } from './deactivate.guard';
import { ProductViewComponent } from './product/product-view/product-view.component';
import { ProductEditComponent } from './product/product-edit/product-edit.component';
import { ProductResolveService } from './product-resolve.service';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  declarations: [
    AppComponent,
    NavigationComponent,
    LoginComponent,
    ProductComponent,
    HomeComponent,
    AboutComponent,
    ProductViewComponent,
    ProductEditComponent,
  ],
  providers: [ProductService, AuthService, AuthGuardService, DeactivateGuard,ProductResolveService],
  bootstrap: [AppComponent],
})
export class AppModule {}
