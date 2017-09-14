import { Component, OnInit } from '@angular/core';
import { BaseService } from '../providers/base.service'
import { GlobalData } from '../providers/globalData'
@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css'],
  providers:[BaseService,GlobalData]
})
export class SettingsComponent implements OnInit {

  constructor(private baseService:BaseService) { 
    this.baseService.get('/hotbook').subscribe(res=>{
      console.log(res)
    },err=>{
      console.log(err)
    })
  }

  ngOnInit() {
  }

}
