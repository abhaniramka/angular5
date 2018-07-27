import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HolidaysComponent } from './holidays/holidays.component';
import { ListComponent } from './list/list.component';
import { ProcessOrderComponent } from './process-order/process-order.component';
import { IndianTourComponent } from './indian-tour/indian-tour.component';
import { AsianTourComponent } from './asian-tour/asian-tour.component';
import { HighLightDirective } from './high-light.directive';
import { ResizeDirective } from './resize.directive';
import { AgentManagerComponent } from './agent-manager/agent-manager.component';
import { FilterPipe } from './filter.pipe';
import { AgentReviewComponent } from './agent-review/agent-review.component';
import { Routes, RouterModule } from '@angular/router';
import { PackagesComponent } from './packages/packages.component';
import { UniversalGuardGuard } from './universal-guard.guard';
import { AdventureComponent } from './adventure/adventure.component';
import { HeritageComponent } from './heritage/heritage.component';
import { DivineComponent } from './divine/divine.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component:LoginComponent, canActivate:[UniversalGuardGuard]},
  { path: 'holidays', component: HolidaysComponent, canActivate:[UniversalGuardGuard], canDeactivate:[UniversalGuardGuard] },
  { path: 'agent', component:AgentManagerComponent, canActivate:[UniversalGuardGuard]},
  { path: 'packages', component:PackagesComponent, canActivate:[UniversalGuardGuard],
    children:[
      { path: 'adventure', component:AdventureComponent},
      { path: 'adventure/:code', component:AdventureComponent},
      { path: 'heritage', component:HeritageComponent},
      { path: 'heritage/:code', component:HeritageComponent},
      { path: 'divine', component:DivineComponent},
      { path: 'divine/:code', component:DivineComponent},
    ]
  },
  { path: '**', component: LoginComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HolidaysComponent,
    ListComponent,
    ProcessOrderComponent,
    IndianTourComponent,
    AsianTourComponent,
    HighLightDirective,
    ResizeDirective,
    AgentManagerComponent,
    FilterPipe,
    AgentReviewComponent,
    PackagesComponent,
    AdventureComponent,
    HeritageComponent,
    DivineComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, FormsModule, ReactiveFormsModule, RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: [HttpClient],
  entryComponents: [AgentReviewComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
