import { Component, OnInit } from '@angular/core';
import * as moment from 'moment/moment';
moment.locale('pt-br');
@Component({
  selector: 'app-rodape',
  templateUrl: './rodape.component.html',
  styleUrls: ['./rodape.component.css']
})
export class RodapeComponent implements OnInit {

  today: string;
  constructor() {
    this.today = moment().format('LL')
   }

  ngOnInit(): void {
  }

}
