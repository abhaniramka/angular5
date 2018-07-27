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

const routes: Routes = [
  { path: '', redirectTo: 'holidays', pathMatch: 'full' },
  { path: 'holidays', component: HolidaysComponent},
  { path: 'agent', component:AgentManagerComponent},
  { path: '**', component: HolidaysComponent}
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
    AgentReviewComponent
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
