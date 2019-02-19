import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  //EventEmitter makes this an event that occurs
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output() blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();


  newServerName = '';
  newServerContent = '';

  constructor() { }

  ngOnInit() {
  }

  onAddServer(){
    //emit a new event of this type
    this.serverCreated.emit(
      {
        serverName: this.newServerName,
        serverContent: this.newServerContent,
      }
    ); 
  }

  onAddBlueprint(){
    //emit a new event of this type
    this.blueprintCreated.emit(
      {
        serverName: this.newServerName,
        serverContent: this.newServerContent,
      }
    ); 
  }

}
