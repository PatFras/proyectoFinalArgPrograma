import { Component, OnInit } from '@angular/core';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-banner-acerca-de-mi',
  templateUrl: './banner-acerca-de-mi.component.html',
  styleUrls: ['./banner-acerca-de-mi.component.css']
})
export class BannerAcercaDeMiComponent implements OnInit {
  persona: persona = new persona("","","");
  
  constructor(public personaService: PersonaService) { }

  ngOnInit(): void {
    this.personaService.getPersona().subscribe(data => {this.persona = data})
  }

}
