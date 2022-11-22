import { Component, OnInit } from '@angular/core';

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

userDetails:any={
  
  1000:{acno:1000,username:'sanil',password:1000,balance:1000},
  1001:{acno:1001,username:'akhil',password:1001,balance:1000},
  1002:{acno:1002,username:'aravind',password:1002,balance:1000},
}

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
  constructor() { }
// 1st execute

  ngOnInit(): void {
    // 2nd execute
  }

  login(a:any,p:any){
    //alert('login clicked');
    var acno=a.value;
    var pswd=p.value;
    var userDetails=this.userDetails;
  
     if(acno in userDetails){
     if(pswd==userDetails[acno]['password']){
      alert('login sucessfull');
     }
     else{
      alert('invalid password')
     }
     }
     else{
      alert('invalid user details');
     }
  }
}
