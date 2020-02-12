import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-registerpage',
  templateUrl: './registerpage.component.html',
  styleUrls: ['./registerpage.component.css']
})
export class RegisterpageComponent implements OnInit {
  // [x: string]: any;
public userid:any;
public password:any;
userlist=[];
userobj={};
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  regpage(){
    this.userobj = {
      userreg:this.userid,
      passwordreg:this.password,
    }
  this.userlist.push(this.userobj);
 localStorage.setItem('item',JSON.stringify (this.userlist))
  }
    
  }


