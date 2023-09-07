import { Component, ContentChild, ElementRef, Input, OnChanges, OnInit, SimpleChange, SimpleChanges, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ServerElementComponent implements OnInit, OnChanges {
  @Input('srvElement') element:{type:string, name: string, content: string};
  @Input() name:string;
  @ContentChild('contentParagraph') paragraph: ElementRef;

  constructor() {
    console.log('constructor called!');
   }

   ngOnChanges(changes: SimpleChanges){
    console.log('ngOnChanges will call!')
    console.log(changes);
   }

  ngOnInit(): void {
    console.log('ngOninit will call!')
    console.log('Text Content of paragraph: ' + this.paragraph.nativeElement.textContent);
  }

}
