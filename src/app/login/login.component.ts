import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
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

   // LOGIN MODEL
   loginForm=this.fb.group({
    acno:['',[Validators.required,Validators.pattern('[0-9]*')]],
    pswd:['',[Validators.required,Validators.pattern('[0-9a-zA-Z]*')]]
    
   })

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
  constructor( private ds:DataService, private router:Router,private fb:FormBuilder) { }
// 1st execute

  ngOnInit(): void {
    // 2nd execute
  }

  login(){
    //alert('login clicked');
    console.log(this.loginForm);
    
    var acno=this.loginForm.value.acno;
    var pswd=this.loginForm.value.pswd;
   // var userDetails=this.ds.userDetails;
  if(this.loginForm.valid){
    //console.log(this.loginForm.get('acno')?.errors);
 this.ds.login(acno,pswd)
 .subscribe((result:any)=>{
  localStorage.setItem('currentUser',JSON.stringify(result.currentUser));
  localStorage.setItem('currentAcno',JSON.stringify(result.currentAcno));
  localStorage.setItem('token',JSON.stringify(result.token));
  alert(result.message);
  this.router.navigateByUrl('dashboard')
 },
 result=>{
  alert(result.error.message)
 }

 )
}
}
}
    // if(result){
    //  alert('login sucessfull');
    //  this.router.navigateByUrl('dashboard');

    // }
    // else{
    //  alert('login failed')
    
    // }
    
   
    //else{
  //   alert('invalid form')
  // }
     
   
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
 
