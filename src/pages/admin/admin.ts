import { Component, OnInit, ChangeDetectorRef, NgZone } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { DropdownModule } from 'primeng/primeng';
import { SelectItem } from 'primeng/primeng';
import { ButtonModule } from 'primeng/primeng';
import { CheckboxModule } from 'primeng/primeng';
import { GrowlModule } from 'primeng/primeng';
import {InputTextModule} from 'primeng/primeng';

import { Message } from 'primeng/components/common/api';
import { MessageService } from 'primeng/components/common/messageservice';

import * as autobahn from 'autobahn';
import { WampService } from '../../wampservice';

import { Team } from '../../models/team';
import { SIPMember } from '../../models/sipmember';
import { Person } from '../../models/person';

/**
 * Generated class for the AdminPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-admin',
  templateUrl: 'admin.html',
})
export class AdminPage implements OnInit {

  constructor(private zone: NgZone, private wampService : WampService, private changeDetectorRef: ChangeDetectorRef, public navCtrl: NavController, public navParams: NavParams) {

  }

  ngOnInit(): void {
    
  }
}