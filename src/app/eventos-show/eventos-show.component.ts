import { Component } from '@angular/core';
import { Evento } from '../evento';

@Component({
  selector: 'app-eventos-show',
  templateUrl: './eventos-show.component.html',
  styleUrls: ['./eventos-show.component.css']
})
export class EventosShowComponent {
  eventos : Evento[] = [{
    title: 'Evento de Prueba',
    image: '',
    date: '2019-03-15',
    description: 'Nos lo pasaremos genial',
    price: 23.95
  },{
    title: 'Evento de Prueba 2',
    image: '',
    date: '2019-03-21',
    description: 'Este es peor',
    price: 15.5
  }];
}
