import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.css']
})
export class Test1Component implements OnInit {
  products:any = [];
  data1:string='angular'
  constructor(private dataService:DataService) { }

  ngOnInit() {
    var tas:any
    this.dataService.sendGetRequest(this.data1).subscribe((data:any=[])=>{
      console.log(data)
      this.products = data;
    })
  }

}
