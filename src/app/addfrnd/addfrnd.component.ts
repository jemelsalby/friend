import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-addfrnd',
  templateUrl: './addfrnd.component.html',
  styleUrls: ['./addfrnd.component.css']
})
export class AddfrndComponent implements OnInit {

  constructor(private myapi:ApiService) { }
  name=""
  friendName=""
  friendNickName=""
  DescribeYourFriend=""
  readValues=()=>{
    let data={
      "name":this.name,
      "friendName":this.friendName,
      "friendNickName":this.friendNickName,
      "DescribeYourFriend":this. DescribeYourFriend

    }
    console.log(data)
    this.myapi.addFrd(data).subscribe(
      (response)=>{
        console.log(response)
        alert("Successfully added")

      }
    )
  }

  ngOnInit(): void {
  }

}
