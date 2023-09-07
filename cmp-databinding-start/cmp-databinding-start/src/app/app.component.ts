import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy{
  ngOnDestroy(): void {
    console.log('will do.. ngOnDestroy');
  }
  ngAfterViewInit(): void {
    console.log('will do.. ngAfterViewInit');
  }
  ngAfterViewChecked(): void {
    console.log('will do.. ngAfterViewChecked');
  }
  ngAfterContentChecked(): void {
    console.log('will do.. ngAfterContentChecked');
  }
  ngAfterContentInit(): void {
    console.log('will do.. ngAfterContentInit');
  }
  ngDoCheck(): void {
    console.log('will do.. doCheck');
  }

  onDestroyFirst(event:any){
    console.log('will do.. onDestroyFirst'+event);

    this.serverElements.splice(0,1);
  }
  serverElements = [{type: 'server', name: 'Testserver', content: 'Just a test!'}];

  onServerAdded(serverData: {serverName: string, serverContent: string}) {
     this.serverElements.push({
       type: 'server',
       name: serverData.serverName,
       content: serverData.serverContent
     });
  }


  onBlueprintAdded(blueprintData: {serverName: string, serverContent: string}) {
     this.serverElements.push({
       type: 'blueprint',
       name: blueprintData.serverName,
       content: blueprintData.serverContent
     });
  }

  onChangeFirst() {
    this.serverElements[0].name = 'Changed!';
  }
}
