import { Component, ViewChild, ViewChildren, ContentChild, ElementRef, OnInit, AfterViewInit, QueryList, ChangeDetectorRef } from '@angular/core';
import { NavController } from 'ionic-angular';
import * as CiscoSpark from 'ciscospark';
import * as autobahn from 'autobahn';

import { Team } from '../../models/team';
import { TeamMembership } from '../../models/teammembership';
import { TeamWithMembers } from '../../models/teamwithmembers';

import { DropdownModule } from 'primeng/primeng';
import { SelectItem } from 'primeng/primeng';
import { AutoCompleteModule } from 'primeng/primeng'
import { ButtonModule } from 'primeng/primeng';
import { CheckboxModule } from 'primeng/primeng';
import { GrowlModule } from 'primeng/primeng';

import { Message } from 'primeng/components/common/api';
import { MessageService } from 'primeng/components/common/messageservice';

import { WampService } from '../../wampservice';

import { AdminPage } from '../admin/admin';

//import {Router} from '@angular/router';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements AfterViewInit, OnInit {

  teams: TeamWithMembers[];
  team: TeamWithMembers = {id:"Vælg et team først...", members: []};
  autoAcceptCallChecked : boolean = false;

  private spark : any = null;

  constructor(private wampService : WampService, private messageService : MessageService, public navCtrl: NavController, public changeDetectorRef: ChangeDetectorRef) {

  }

  public ngOnInit(): void {
    
  }

  public ngAfterViewInit(): void {
    this.spark = CiscoSpark.init({
      config: {
        credentials: {
          authorizationString: "https://fakeurl.com/"
        }
      }
    });
  }
}
