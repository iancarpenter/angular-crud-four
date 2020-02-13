import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { VillainInMemDataService } from './services/villain-in-mem-data.service';
import { ListVillainsComponent } from './components/list-villains/list-villains.component';
import { HttpClientVillainService } from './services/http-client-villain.service';
import { CreateVillainComponent } from './components/create-villain/create-villain.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UpdateVillainComponent } from './components/update-villain/update-villain.component';
import { VillainTransferService } from './services/villain-transfer.service';

@NgModule({
  declarations: [
    AppComponent,
    ListVillainsComponent,
    CreateVillainComponent,
    UpdateVillainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    environment.production ?
    [] : InMemoryWebApiModule.forRoot(VillainInMemDataService),
    ReactiveFormsModule
  ],
  providers: [HttpClientVillainService, VillainTransferService],
  bootstrap: [AppComponent]
})
export class AppModule { }
