import { Component, OnInit, HostListener } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore'; 
import * as firebase from 'firebase';
import { AngularFireAuth } from '@angular/fire/auth'; 
import { Router } from '@angular/router';
import { User } from 'firebase';
import { auth } from  'firebase/app';
import { UpdateService } from '/var/www/html/ShopWeb/src/app/update.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  [x: string]: any; abc="zzz";name:any[]=[]; selectedEl:any[] = [];  userName:any[]=[];incr:number;sname:any[]=[]; isButtonVisible:any;
  constructor(private update:UpdateService, private firestore: AngularFirestore, public afAuth: AngularFireAuth, private router: Router) { 
    
   this.update.userName.subscribe(userName => {
    this.userName = userName;  
    this.name = userName; 
  })
  
   this.update.incr.subscribe(incr => { this.incr = incr })
   this.update.sname.subscribe(sname => { this.sname = sname;  })
   this.update.isButtonVisible.subscribe(isButtonVisible => { this.isButtonVisible = isButtonVisible })
  }
  
  obj = { fullName: 'doney'};  y = this.update.name; i=0;
   data = Object.assign({}, this.obj ); h; g;
  ngOnInit() {
    //alert(this.getCurrentUser());
    this.getCurrentUser();
    
    }
   updat(){
     this.h=0.00;
     for(var j=0;j<this.sname.length;j++){
       this.h = this.h + this.sname[j];
     }
  }
 
  order()
  {
    alert("Our person will visit you shortly");
  }
    add(){
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }

    Del(){
     var x = document.getElementsByClassName('trash'); let self = this;
     for (var i = 0; i < x.length; i++) { 
      x[i].addEventListener("click",function(){
        this.parentElement.style.display = "none"; console.log(self.sname);
       self.sname[i]=i+5;//.splice(i, 1)
       self.update.sname.next(self.sname);
       
      });
      
    }
    this.incr--;
    this.update.incr.next(this.incr);
      
    }
  
    getCurrentUser(){
      
      let self = this;
      setTimeout(function(){
      firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
         
          self.isButtonVisible= false;
          self.update.isButtonVisible.next(self.isButtonVisible);
        } else {
          self.isButtonVisible= true;
          self.update.isButtonVisible.next(self.isButtonVisible);
        }
      } );
    },0);//this.isButtonVisible= "self.isButtonVisible";
      var i=0;  
        var r = setInterval(function(){ console.log("set"); 
          i++; this.isButtonVisible= self.isButtonVisible; 
          if(i==70){clearInterval(r);}
       },0);
      

    }

  doLogout(){
     
    return new Promise((resolve, reject) => {
      if(firebase.auth().currentUser){
        this.afAuth.auth.signOut();
        resolve(); 
        this.isButtonVisible= true;
        this.update.isButtonVisible.next(this.isButtonVisible);
        this.router.navigate(['/home']);
      }
      else{
        reject(); //console.log("this.userName");
      }
    });
     
  }

  signInWithGoogle() {
    return new Promise<any>((resolve, reject) => {  
      let provider = new firebase.auth.GoogleAuthProvider();
     
      provider.addScope('profile');
      provider.addScope('email');
      this.afAuth.auth
      .signInWithPopup(provider)
      .then(res => {  
         resolve(res); console.log(res);
         console.log(res.operationType);
         //console.log(provider.providerId);
        // alert("fdsfdsdsfdsf");
        this.isButtonVisible =false; //var t =10; // this.t=0;
        this.update.isButtonVisible.next(this.isButtonVisible);
      }, err => {  
        console.log(this.res + "dfsdfsdfdsfd");
        console.log(err);
        reject(err); console.log(firebase.auth().currentUser);
      })  
      //this.isButtonVisible = !this.isButtonVisible;
      //if(this.isButtonVisible==true){
        var i=0;  
        var r = setInterval(function(){ console.log("set");
          i++; if(i==4000){clearInterval(r);}
       },0); 
      //}
    }) 
    }
   // add1(resolve){ console.log(resolve); } setInterval(login, 1000)
}
