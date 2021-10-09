import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from "@angular/common";
import { CreateDialogComponent } from './pages/create-dialog/create-dialog.component';
import { FooterComponent } from './pages/footer/footer.component';
import { HeaderComponent } from './pages/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MessagesService } from './services/messages.service';
import { NgModule } from '@angular/core';
import { NgxJdenticonModule } from 'ngx-jdenticon';
import { NgxPayPalModule } from 'ngx-paypal';
import { PaymeComponent } from './components/payme/payme.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    CreateDialogComponent,
    PaymeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    FormsModule,
    HttpClientModule,
    MatCardModule,
    CommonModule,
    NgxJdenticonModule,
    MatIconModule,
    ReactiveFormsModule,
    NgxPayPalModule,
    MatSnackBarModule
  ],
  providers: [ MessagesService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
