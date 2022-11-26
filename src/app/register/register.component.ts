import { Component, OnInit } from '@angular/core';
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
  


  constructor(private router:Router,private ds:DataService) { }

  ngOnInit(): void {
  }
  register(){
    alert('register sucessfull');
    var userame=this.uname;
    var acno=this.acno;
    var password=this.pswd;
    const result=this.ds.register( acno, userame, password );
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
