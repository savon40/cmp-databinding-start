import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit {

  //variable type is javascript object
  //giving an alias of srvElemenet
  //can we have multiple aliases?
  @Input('srvElement') element: {type: string, name: string, content: string};
  
  constructor() { }

  ngOnInit() {
  }

}
