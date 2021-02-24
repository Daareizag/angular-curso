import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  titulo: string = "Lista de usuarios";
  bandera:boolean = true;
  lista: string[] =['Ricardo', 'Antonio', 'Yala', 'Camila'];
  constructor() { }

  ngOnInit(): void {
  }

}
