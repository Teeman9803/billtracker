import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BillsComponent } from './bills/bills.component';
import { AccountsComponent } from './accounts/accounts.component';
import { SummaryComponent } from './common/summary/summary.component';

@NgModule({
  declarations: [
    AppComponent,
    BillsComponent,
    AccountsComponent,
    SummaryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
