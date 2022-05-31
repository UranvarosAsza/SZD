import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { AddResMeetComponent } from '../add-res-meet/add-res-meet.component';
import { AddNewsComponent } from '../add-news/add-news.component';
import { AddPollComponent } from '../add-poll/add-poll.component';
import { AddFinancialComponent } from '../add-financial/add-financial.component';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  @Input() houseId = '';
  @Input() isHousemaster :any;
  
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  openMeetingDialog() {
    const dialogRef = this.dialog.open(AddResMeetComponent);
  }

  openNewsDialog() {
    const dialogRef = this.dialog.open(AddNewsComponent);
  }

  openPollDialog() {
    const dialogRef = this.dialog.open(AddPollComponent);
  }

  openFinancialDialog() {
    const dialogRef = this.dialog.open(AddFinancialComponent);
  }
}
