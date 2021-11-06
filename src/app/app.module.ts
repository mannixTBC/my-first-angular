import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { MatTableModule }  from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatSelectModule} from '@angular/material/select';
import {AppRoutingModule} from './app-routing.module'
import { RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { PetComponent } from './pet/pet.component';
import { MatButtonModule } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';



@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    PetComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    BrowserAnimationsModule,
    MatSelectModule,
    AppRoutingModule,
    MatButtonModule,
    MatCardModule,
    RouterModule.forRoot([
      {path:'', component: HomepageComponent},
      {path:'pet/:id/:name/:status', component: PetComponent}
    ])

    
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
