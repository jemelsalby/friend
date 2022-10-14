import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-viewfrnds',
  templateUrl: './viewfrnds.component.html',
  styleUrls: ['./viewfrnds.component.css']
})
export class ViewfrndsComponent implements OnInit {

  constructor(private myapi:ApiService) {
    this.fetchData()
   }

  fetchData=()=>{
    this.myapi.viewData().subscribe(
      (data)=>{
        this.frdsData=data
      }
    )
  }
  
  frdsData:any=[]

  ngOnInit(): void {
  }

}
