import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

//recibe datos
let datos = new BehaviorSubject<string>(null);

//suscriptor de datos
export let $datos = datos.asObservable();


@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http:HttpClient) { }
traer(){
this.http.get('').subscribe(loquevengadelserver =>{
datos.next(loquevengadelserver.toString());

})

}

}
