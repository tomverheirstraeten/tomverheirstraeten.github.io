import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LandingComponent } from './landing/landing.component';
import { TicketsComponent } from './tickets/tickets.component';
import { Routes, RouterModule } from '@angular/router';
import { TicketCheckoutComponent } from './ticket-checkout/ticket-checkout.component';
import { FooterComponent } from './footer/footer.component';
import { KeynoteSpeakersComponent } from './keynote-speakers/keynote-speakers.component';
import { SpeakerDetailsComponent } from './speaker-details/speaker-details.component';
import { SponsorsComponent } from './sponsors/sponsors.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ProgramComponent } from './program/program.component';

const routes: Routes = [
  { path: 'Tickets', component: TicketsComponent },
  { path: '', component: LandingComponent },
  { path: 'ticketcheckout/:index', component: TicketCheckoutComponent },
  { path: 'keynote', component: KeynoteSpeakersComponent },
  { path: 'speakerDetails/:id', component: SpeakerDetailsComponent },
  { path: 'navigation/:id', component: NavigationComponent },
  { path: 'Program', component: ProgramComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LandingComponent,
    TicketsComponent,
    TicketCheckoutComponent,
    FooterComponent,
    KeynoteSpeakersComponent,
    SpeakerDetailsComponent,
    SponsorsComponent,
    NavigationComponent,
    ProgramComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(
      routes
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
