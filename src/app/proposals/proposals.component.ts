import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-proposals',
  templateUrl: './proposals.component.html',
  styleUrls: ['./proposals.component.scss']
})
export class ProposalsComponent implements OnInit  {

  names = ['Marius', 'Franziska', 'Josephine', 'Josef'];
  texts = ['2 Jahre alt', 'Gräbt gerne Löcher', 'Spielt gerne', 'HamsterRad-Freak'];
  images = ['assets/img/hamster/6.jpg', 'assets/img/hamster/11.jpg', 'assets/img/hamster/10.jpg', 'assets/img/hamster/9.jpg'];

  constructor() { }

  ngOnInit(): void {

  }


}
