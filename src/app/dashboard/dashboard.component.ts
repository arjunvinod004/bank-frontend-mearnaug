import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
//  deposit
acno='';
pswd='';
amount='';
// withdraw
acno1='';
pswd1='';
amount1='';
//currentuser- login name
user='';
// date aqnd time
sdate:any;
// deposit model

depositForm=this.fb.group({
  acno:['',[Validators.required,Validators.pattern('[0-9]*')]],
  pswd:['',[Validators.required,Validators.pattern('[0-9a-zA-Z]*')]],
  amount:['',[Validators.required,Validators.pattern('[0-9]*')]]
 })

 withdrawForm=this.fb.group({
  acno1:['',[Validators.required,Validators.pattern('[0-9]*')]],
  pswd1:['',[Validators.required,Validators.pattern('[0-9a-zA-Z]*')]],
  amount1:['',[Validators.required,Validators.pattern('[0-9]*')]]
 })
 
 

  constructor(private ds:DataService,private fb:FormBuilder,private router:Router) {
    this.user=this.ds.currentUser;
    this.sdate=new Date()
   }

  ngOnInit(): void {
   if(!localStorage.getItem('currentAcno')){
    alert('please login first')
    this.router.navigateByUrl('');
   }
  }

  deposit(){
 //alert('clicked')
 
 
 var acno=this.depositForm.value.acno;
 var pswd=this.depositForm.value.pswd;
 var amount=this.depositForm.value.amount;
 
 if(this.depositForm.valid){
  console.log(this.depositForm.get('acno')?.errors);
  
  const result=this.ds.deposit(acno,pswd,amount);
  if(result){
   alert(`${amount} is credited... available balance is ${result}`)
  }
  else{
   alert('transaction error')
  }
 }else{
  alert('invalid form')
 }
 
 
}
  withdraw(){
    //alert('clicked')
    
    
    var acno1=this.withdrawForm.value.acno1;
    var pswd1=this.withdrawForm.value.pswd1;
    var amount1=this.withdrawForm.value.amount1;
    if(this.withdrawForm.valid){
      console.log(this.withdrawForm.get('acno')?.errors);
      const result=this.ds.withdraw(acno1,pswd1,amount1);
      if(result){
        alert(`${amount1} is debited... available balance is ${result}`)
       }
       else{
        alert('transaction error')
       }
    }else{
      alert('invalid form')
    }
    }
    logout(){
      // remove username and acno
      localStorage.removeItem('currentAcno')
      localStorage.removeItem('currentUser')
      this.router.navigateByUrl('');
    }
    delete(){
      //alert('clicked')
      this.acno=JSON.parse(localStorage.getItem('currentAcno')|| '')
      
    }
    oncancel(){
      this.acno="";
    }
  

}
