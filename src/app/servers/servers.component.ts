import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'app-servers',
  // selector: '[app-servers]',
  // selector: '.app-servers',
  // template: `
  //   <app-server></app-server>
  //    <app-server></app-server>`,
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverCreationStatus = 'No Server was created.';
  serverName = '';
  username = '';
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    },2000 )
  }

  ngOnInit() {
  }

  onServerCreation() {
    this.serverCreationStatus = 'Server is created: Name is ' + this.serverName;
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement> event.target).value;
  }

  onAddingUsername() {
    if(this.username.length !== 0) {
      return true;
    } else {
      return false;
    }
  }

  onUsernameReset() {
    this.username = '';
  }

}
