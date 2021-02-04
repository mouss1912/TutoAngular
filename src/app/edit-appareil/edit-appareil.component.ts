import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AppareilService } from '../services/appareil.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-appareil',
  templateUrl: './edit-appareil.component.html',
  styleUrls: ['./edit-appareil.component.scss']
})
export class EditAppareilComponent implements OnInit {
  //Appareil est par défaut éteint
  defaultOnOff = "éteint";

  constructor(private appareilService : AppareilService, private router : Router ) { }

  ngOnInit(): void {
  }

   //methode d'envoi des données du formulaire
   onSubmit(form: NgForm) {
    const name = form.value["name"];
    const status = form.value["status"];
    console.log(form.value);
    this.appareilService.addAppareil(name,status);
    this.router.navigate([`/appareils`]);
  }
  
}
