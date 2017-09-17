import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  condition: boolean = false;
  constructor() { }

  ngOnInit() {
  }

}

// import { Component, TemplateRef, ViewContainerRef, ViewChild, 
//   AfterViewInit } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   template: `
//     <ng-template #tpl>
//       Hello, Semlinker!
//     </ng-template>
//   `,
// })
// export class ProfileComponent implements AfterViewInit{
//   @ViewChild('tpl')
//   tplRef: TemplateRef<any>;

//   constructor(private vcRef: ViewContainerRef) {}

//   ngAfterViewInit() {
//     this.vcRef.createEmbeddedView(this.tplRef);
//   }
// }