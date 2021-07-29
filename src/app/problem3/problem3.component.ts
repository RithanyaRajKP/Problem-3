import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-problem3',
  templateUrl: './problem3.component.html',
  styleUrls: ['./problem3.component.scss']
})
export class Problem3Component {

  constructor() { }
  a:number=0;
  result:number[]=[];
   submitclicked(n:number){
    if(n%2==0){
      for(var i=0;i<n-1;i++){
        this.result.push(2*i+1);
      }
    }
    else{
      for(var i=0;i<n;i++){
        this.result.push(2*i+1);
      }
    }
    }

    resetclicked(){
      {
        this.a=0;
    this.result=[];
    }
  }

}
