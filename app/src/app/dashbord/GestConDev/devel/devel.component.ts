import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-devel',
  templateUrl: './devel.component.html',
  styleUrls: ['./devel.component.css']
})
export class DevelComponent implements OnInit {
  employee:any
  constructor(private http:HttpClient){}
  ngOnInit(): void {
   this.http.get<any>("http://localhost:8080/api/auth/getAllUtilisateur").subscribe(
    res=>{console.log("reussite")
  this.employee=res}
   ,err=>{console.log(err)})
  }
delete(id:any){
 console.log(id);
this.http.delete("http://localhost:8080/api/auth/delete-utilisateur/"+id).subscribe(
  res=>{console.log("delete")},
  err=>{console.log(err)}
)
}
}
