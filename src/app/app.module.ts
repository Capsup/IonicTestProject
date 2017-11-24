import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { AutoCompleteModule, SharedModule } from 'primeng/primeng';
import { ButtonModule } from 'primeng/primeng';
import { CheckboxModule } from 'primeng/primeng';
import { DropdownModule } from 'primeng/primeng';
import { GrowlModule } from 'primeng/primeng';
import { InputTextModule } from 'primeng/primeng'
import { MessageService } from 'primeng/components/common/messageservice';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AdminPage } from '../pages/admin/admin';

import { WampService } from '../wampservice';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AdminPage
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    IonicModule.forRoot(MyApp),
    AutoCompleteModule,
    ButtonModule,
    CheckboxModule,
    DropdownModule,
    GrowlModule,
    InputTextModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AdminPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    WampService,
    MessageService
  ]
})
export class AppModule {}
