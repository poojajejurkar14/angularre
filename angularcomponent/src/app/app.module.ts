import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { AlertComponent } from './alert/alert.component';
import { warnassignment } from './alert/warnassignment/warnassignment.component';
import { FormsModule } from '@angular/forms';
import { DemodirectivesComponent } from './demodirectives/demodirectives.component';
import { NgswitchComponent } from './ngswitch/ngswitch.component';
import { StructuraldirectivesComponent } from './structuraldirectives/structuraldirectives.component';
import { AttributeComponent } from './attribute/attribute.component';
import { CustomdirectiveDirective } from './customdirective.directive';
import { SimpleformComponent } from './simpleform/simpleform.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    AlertComponent,
    warnassignment,
    DemodirectivesComponent,
    NgswitchComponent,
    StructuraldirectivesComponent,
    AttributeComponent,
    CustomdirectiveDirective,
    SimpleformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
