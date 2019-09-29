import { Injectable, OnInit } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UpdateService implements OnInit {
  l: any; name: any;
  nameChange: Subject<string> = new Subject<string>();
  ngOnInit() {
  //this.updateNumb();
  }
   r=1; userName = new BehaviorSubject<any>([]); incr = new BehaviorSubject(0); sname = new BehaviorSubject<any>(['']);
   isButtonVisible = new Subject<any>(); 
   //userName:number []= new BehaviorSubject<[]>();
  constructor() { this.name = "Jack"; }
  updateNumb(){
    
    // this.r++; //var l = this.r;
    // alert(this.r);
    this.name = 'Jane';
    this.nameChange.next(this.name);
    //alert(this.name);
  }
  
  
}
