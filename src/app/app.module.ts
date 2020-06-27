// all angular imports
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LayoutModule } from '@angular/cdk/layout';

// all app modules
import { MaterialModule, CrudModule } from './_modules';
import { routing } from './app-routing.module';

// all guards
import { AuthGuard } from './_guards/auth.guard';

// all interceptors
import { JwtInterceptor, ErrorInterceptor } from './_helpers';

// all services
import { AuthenticationService, DummyService, FileService } from './_services';

// all components
import { AppComponent } from './_components/app.component';
import { LoginComponent, RegisterComponent, ForgotPasswordComponent, ResetPasswordComponent } from './_components/auth';
import { NavigationComponent } from './_components/navigation/navigation.component';
import { HomeComponent } from './_components/home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    NavigationComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    routing,
    HttpClientModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    LayoutModule,
    MaterialModule,
    CrudModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    AuthGuard,
    AuthenticationService,
    DummyService,
    FileService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
