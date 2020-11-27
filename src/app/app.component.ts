import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private alumnosUrl = 'http://localhost:8000/api/curso';  // URL to web api
  public alumnos;


  constructor(private http: HttpClient) { }

  getAlumnos(){
      this.http.get(this.alumnosUrl)
      .subscribe(data => {
          this.alumnos=data;
          //console.log(this.alumnos);
      });
  }



}
