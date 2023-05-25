import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gestion-developpement',
  templateUrl: './gestion-developpement.component.html',
  styleUrls: ['./gestion-developpement.component.css']
})
export class GestionDeveloppementComponent implements OnInit {
  dev:any;
  utilisateur :any
  constructor(private http: HttpClient){}
  ngOnInit(): void {
    this.http.get<any>("http://localhost:8080/api/auth/getAllDev").subscribe(
      Response=>{this.dev=Response;},
      err=>{console.log(err)}
    )


  }

}
