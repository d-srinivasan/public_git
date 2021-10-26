import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import * as moment from 'moment';
@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.css']
})
export class Test1Component implements OnInit {
  commitss:any = [];
  commit_search:any=[];
  commit_year:any = [];
  data1:any;
  year_array:any=[];
  selectedValue:any
  constructor(private dataService:DataService) { }
  change_comit(e:any){
    this.data1=e.target.value
    var add_commit=0
    var minus_commit=0
    var new_data={}
    this.dataService.sendGetRequest(this.data1).subscribe((data:any=[])=>{
      for(var i=0;i<=data.length-1;i++){
        add_commit += data[i][1]
        minus_commit += data[i][2]
       new_data={
         'comit':add_commit-minus_commit,
         'date':moment.unix(data[i][0]).format("MM/DD/YYYY"),
         'year':moment.unix(data[i][0]).format("YYYY")
       }
        this.commitss.push(new_data)
        this.commit_search=add_commit-minus_commit
      }
      console.log(this.commitss)
      this.year_array=[... new Set(this.commitss.map((a:any)=>a.year))]
    },(err) => {
      console.log('error',err)})
  }
  selected(){
    var year:any=this.commitss.filter((x:any) => x.year == this.selectedValue)
    this.commit_year=year.map((a:any)=>a.comit).reduce((a:any,b:any)=>a+b,0)
    console.log(year.map((a:any)=>a.comit))

  }
  ngOnInit() { 
    
   } 
}
