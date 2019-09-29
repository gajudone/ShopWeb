import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment.prod';
import { AngularFirestore, AngularFirestoreModule } from '@angular/fire/firestore';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '/var/www/html/ShopWeb/src/app/home/home.component';
import { LoginComponent } from './login/login.component'
import { AngularFireAuthModule } from '@angular/fire/auth';
import { FormsModule } from '@angular/forms';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { UpdateService } from '/var/www/html/ShopWeb/src/app/update.service';
import { Product2Component } from './product2/product2.component';
import { UserResolver } from './user/user.resolver';
import { AuthGuard } from './core/auth.guard';
import { AuthService } from './core/auth.service';
import { UserService } from './core/user.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'Product1', component: LoginComponent,  resolve: { data: UserResolver} },
  { path: 'Product2', component: Product2Component,  resolve: { data: UserResolver} }
];


@NgModule({
  declarations: [
    AppComponent, HomeComponent, LoginComponent, Product2Component
  ],
  imports: [
    BrowserModule,FormsModule,BrowserAnimationsModule,ReactiveFormsModule,FormsModule,
    AppRoutingModule, AngularFireModule.initializeApp(environment.firebaseConfig), RouterModule.forRoot(routes),// RouterModule.forRoot(rootRouterConfig, { useHash: false }),
    AngularFirestoreModule.enablePersistence(), // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, AngularFireDatabaseModule // imports firebase/auth, only needed for auth features
  ],
  exports: [RouterModule],
  providers: [AngularFirestore,UpdateService,AuthService, UserService, UserResolver, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
