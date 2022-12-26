import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { AlertComponent } from './alert/alert.component';
import { warnassignment } from './alert/warnassignment/warnassignment.component';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DemodirectivesComponent } from './demodirectives/demodirectives.component';
import { NgswitchComponent } from './ngswitch/ngswitch.component';
import { StructuraldirectivesComponent } from './structuraldirectives/structuraldirectives.component';
import { AttributeComponent } from './attribute/attribute.component';
import { CustomdirectiveDirective } from './customdirective.directive';
import { SimpleformComponent } from './simpleform/simpleform.component';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';
import { FormComponent } from './form/form.component';
import { SimpleformAssignmentComponent } from './simpleform-assignment/simpleform-assignment.component';
import { ReactiveformAssignmentComponent } from './reactiveform-assignment/reactiveform-assignment.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { Servicecomp1Component } from './servicecomp1/servicecomp1.component';
import { Servicecomp2Component } from './servicecomp2/servicecomp2.component';
import { HttpClientModule } from "@angular/common/http";
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { Comp3Component } from './comp3/comp3.component';
import { Comp4Component } from './comp4/comp4.component';
import { Emp1Component } from './emp1/emp1.component';
import { Emp2Component } from './emp2/emp2.component';
import { PipedemoComponent } from './pipedemo/pipedemo.component';
import { CountPipe } from './count.pipe';
import { FilterpipePipe } from './filterpipe.pipe';
import { FilterpipeComponent } from './filterpipe/filterpipe.component';

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
    SimpleformComponent,
    ChildComponent,
    ParentComponent,
    FormComponent,
    SimpleformAssignmentComponent,
    ReactiveformAssignmentComponent,
    ReactiveformComponent,
    Servicecomp1Component,
    Servicecomp2Component,
    Comp1Component,
    Comp2Component,
    Comp3Component,
    Comp4Component,
    Emp1Component,
    Emp2Component,
    PipedemoComponent,
    CountPipe,
    FilterpipePipe,
    FilterpipeComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
