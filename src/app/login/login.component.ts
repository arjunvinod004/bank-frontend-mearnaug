import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
  
})
export class LoginComponent implements OnInit {
  aim="your perfect banking partner"
  account="enter your account here"
  acno='';
  pswd='';
  ngmodel='';
  
// class - collection of properties and methods
// 3rd execute
// userdefined methods - 4th execute


  

//login(a:any,p:any){
  //alert('login clicked');
  //var acno=a.value;
 // var pswd=p.value;
  //var userDetails=this.userDetails;

   //if(acno in userDetails){
   //if(pswd==userDetails[acno]['password']){
    //alert('login sucessfull');
  // }
//else{
  //  alert('invalid password')
   //}
   //}
   //else{
    //alert('invalid user details');
   //}
//}
acnochange(event:any){
  console.log(event);
  
this.acno=event.target.value;
console.log(this.acno);

}
pswdchange(event:any){
  console.log(event);
  
this.pswd=event.target.value;
console.log(this.pswd);

}
  constructor( private ds:DataService, private router:Router) { }
// 1st execute

  ngOnInit(): void {
    // 2nd execute
  }

  login(){
    //alert('login clicked');
    var acno=this.acno;
    var pswd=this.pswd;
    var userDetails=this.ds.userDetails;
  
     const result=this.ds.login(acno,pswd)
     if(result){
      alert('login sucessfull');
      this.router.navigateByUrl('dashboard');

     }
     else{
      alert('login failed')
     }
    }
  }
     //if(acno in userDetails){
     //if(pswd==userDetails[acno]['password']){
      
     //}
     //else{
      //alert('invalid password')
     //}
     //}
     //else{
      //alert('invalid user details');
     //}
 
