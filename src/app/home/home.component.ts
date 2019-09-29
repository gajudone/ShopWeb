
import * as $ from 'jquery';
import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import * as firebase from 'firebase';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) {  }
  tutor:any; charge:any;
  ngOnInit() { 
  //   $(document).ready(function () {
  //     $('.carousel').carousel({
  //         interval: 3000
  //     });
  
  //     $('.carousel').carousel('cycle');
  // });
   // this.toWears();
    }
    toWears(){
      firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          this.router.navigate(['/Product1']);
        } else {
          alert("Please login");
          this.router.navigate(['/home']);
        }
      } );
    }

    toElectronics(){
      firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          this.router.navigate(['/Product2']);
        } else {
          alert("Please login");
          this.router.navigate(['/home']);
        }
      } );
    }
   
  }

