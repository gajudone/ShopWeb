import { Component, OnInit } from '@angular/core';
import { UpdateService } from '../update.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-product2',
  templateUrl: './product2.component.html',
  styleUrls: ['./product2.component.css']
})
export class Product2Component implements OnInit {
  userName:any[]=[]; incr:number; sname:any[]=[]; val:any[]=[];
  constructor(private updateService:UpdateService, private firestore: AngularFirestore, public afAuth: AngularFireAuth, private router: Router) 
  { 
    updateService.userName.subscribe(userName => { this.userName = userName })
    this.updateService.incr.subscribe(incr => { this.incr = incr })
    updateService.sname.subscribe(sname => { this.sname = sname })
    //updateService.isButtonVisible.subscribe(isButtonVisible => { this.isButtonVisible = isButtonVisible })

  }

  ngOnInit() {
    this.getValue();
    
  }

  update(){
    this.val = [{name: document.getElementById("idP").innerHTML, 
    surname: document.getElementById("idR").getElementsByClassName("Rs")[0].innerHTML }]
    this.userName[this.incr]= this.val;
    this.sname[this.incr]=parseInt(this.val[0].surname);
    this.updateService.userName.next(this.userName); 
    this.updateService.sname.next(this.sname); this.incr++;
    this.updateService.incr.next(this.incr); 
  }

  getValue(){
    //document.getElementById("idP").innerHTML = document.getElementsByClassName("iUmrbN")[0].innerHTML;
    var x = document.getElementsByClassName('_3e_Ruh')
    for (var i = 0; i < x.length; i++) {
        x[i].addEventListener("click", function(){
    
        var selectedEl = document.querySelector(".selected");
        if(selectedEl){
            selectedEl.classList.remove("selected");
        }
        this.classList.add("selected");
         var y = this.getElementsByTagName("img")[0].getAttribute("src");
         document.getElementById("idI").setAttribute("src", y);
         document.getElementById("idP").innerHTML = document.getElementsByClassName("selected")[0].getElementsByClassName("iUmrbN")[0].innerHTML;
      document.getElementById("idQ").innerHTML = document.getElementsByClassName("selected")[0].getElementsByClassName("BXlZdc")[0].innerHTML;
      document.getElementById("idR").innerHTML = document.getElementsByClassName("selected")[0].getElementsByClassName("_3o3r66")[0].innerHTML;
      // document.getElementById("idRs").innerHTML = document.getElementsByClassName("selected")[0].getElementsByClassName("Rs")[0].innerHTML;
    
        }, false);
        
    }
  }


}
