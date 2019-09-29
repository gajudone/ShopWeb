import { Component, OnInit, Input } from '@angular/core';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthService } from '../core/auth.service'
import * as $ from 'jquery';
import { FormsModule } from '@angular/forms';
import { UpdateService } from '/var/www/html/ShopWeb/src/app/update.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router, Params } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  [x: string]: any;   num = 10; name: any; _subscription;  i=0; obj={name: 1}; val:any[]=[];
  isAlive = true; userName:any[]=[];  len=1; incr:number; sname:any[]=[]; isButtonVisible:boolean; 

  constructor(private updateService:UpdateService, private firestore: AngularFirestore, public afAuth: AngularFireAuth, private router: Router
  ){
    updateService.userName.subscribe(userName => { this.userName = userName })
    this.updateService.incr.subscribe(incr => { this.incr = incr })
    updateService.sname.subscribe(sname => { this.sname = sname })
updateService.isButtonVisible.subscribe(isButtonVisible => { this.isButtonVisible = isButtonVisible })
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
