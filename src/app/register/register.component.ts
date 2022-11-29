import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  uname="";
  acno="";
  pswd="";
  //register modal
  registerForm=this.fb.group({
    uname:[''],
    acno:[''],
    pswd:[''],
  })
  // control - ts model file link to html file
  


  constructor(private router:Router,private ds:DataService,private fb:FormBuilder) { }

  ngOnInit(): void {
  }
  register(){
    //alert('register sucessfull');

    var username=this.registerForm.value.uname;
    var acno=this.registerForm.value.acno;
    var password=this.registerForm.value.pswd;
    const result=this.ds.register( acno, username, password );
    if(result){//true
      alert('register sucessfull')
      this.router.navigateByUrl('')
    }
    else{
      alert('register failed')
      this.router.navigateByUrl('')
    }
   
  }

}
