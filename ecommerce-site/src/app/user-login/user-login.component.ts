import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  signupUser: any[]=[];
  signupObj: any={
    username:"",
    email:"",
    password:""
  }

  loginObj:any={
    email:"",
    password:""
  }

  constructor() { }

  ngOnInit(): void {
    const localdata= localStorage.getItem('signUser');
    if(localdata != null){ 
      this.signupUser=JSON.parse(localdata);
    }
  }
  onsignUp(){
    this.signupUser.push(this.signupObj);
    localStorage.setItem('signupUser',JSON.stringify(this.signupUser));
    this.signupObj={
      username:"",
      email:"",
      password:""
    }
  }
  onlogin(){
    const userexit =this.signupUser.find(p=>p.email ==this.loginObj.email && p.password == this.loginObj.password);
    if(userexit != undefined){
      alert('User Login successfully');
    }
    else{
      alert("Acount is not there");
    }

  }


}
