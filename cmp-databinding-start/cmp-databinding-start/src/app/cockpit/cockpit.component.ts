import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output('bpCreated') bluePrintCreated = new EventEmitter<{serverName: string, serverContent: string}>();;
  //newServerName = '';
  //newServerContent = '';
  @ViewChild('serverContentInput') serverContentInput: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  onAddServer(nameInput: HTMLInputElement) {
    //console.log(nameInput.value)
    //console.log(this.serverContentInpup);
    this.serverCreated.emit({serverName:nameInput.value, serverContent: this.serverContentInput.nativeElement.value});
  }


  onAddBlueprint(nameInput: HTMLInputElement) {
    //console.log(nameInput.value)
    this.bluePrintCreated.emit({serverName:nameInput.value, serverContent: this.serverContentInput.nativeElement.value});
  }

}
