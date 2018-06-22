import { BrowserModule } from '@angular/platform-browser';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeModule } from './pages/home/home.module';

import { HomeComponent } from './pages/home/home.component';
import { OccurrenceComponent } from './pages/occurrence/occurrence.component';
import { OccurrenceService } from './pages/occurrence/service/occurrence.service';
import { StatusService } from './pages/occurrence/service/status.service';
import { TypeService } from './pages/occurrence/service/type.service';
import { OccurrenceDetailComponent } from './pages/occurrence-detail/occurrence-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'occurrences', component: OccurrenceComponent },
  { path: 'occurrences/:id', component: OccurrenceDetailComponent }
];

const rootRouting = RouterModule.forRoot(routes);

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    OccurrenceComponent,
    OccurrenceDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HomeModule,
    HttpClientModule,
    rootRouting,
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyDGNfRsZrh7nbJ6s8KlVFx7coXXv2cUJw0",
      libraries: ["places"]
    }),
    ReactiveFormsModule
  ],
  providers: [OccurrenceService, StatusService, TypeService],
  bootstrap: [AppComponent]
})
export class AppModule { }