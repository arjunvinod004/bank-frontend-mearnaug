import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
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
    uname:['',[Validators.required,Validators.pattern('[a-zA-Z]*')]],
    acno:['',[Validators.required,Validators.pattern('[0-9]*')]],
    pswd:['',[Validators.required,Validators.pattern('[0-9a-zA-Z]*')]],
  })
  // control - ts model file link to html file
  


  constructor(private router:Router,private ds:DataService,private fb:FormBuilder) { }

  ngOnInit(): void {
  }
  register(){
    //alert('register sucessfull');
   console.log(this.registerForm);
   
    var uname=this.registerForm.value.uname;
    var acno=this.registerForm.value.acno;
    var pswd=this.registerForm.value.pswd;
    if(this.registerForm.valid){
      
     console.log(this.registerForm.get('uname')?.errors);
     
      const result=this.ds.register(acno,pswd,uname);
      if(result){//true
        alert('register sucessfull')
        this.router.navigateByUrl('')
      }
      else{//false
        alert('register failed')
        this.router.navigateByUrl('')
      }
    }else{
      alert('invalid form')
    }
   
   
  }

}
