import { Component, OnInit } from '@angular/core';
import { PEOPLELIST } from '../data/people';
import { FAMILY } from '../data/familyList';

@Component({
  selector: 'app-kingdom-people',
  templateUrl: './kingdom-people.component.html',
  styleUrls: ['./kingdom-people.component.scss'],
})
export class KingdomPeopleComponent implements OnInit {
  peopleList = PEOPLELIST;
  family = FAMILY;

  selectedFamily = 'pink';
  title = '핑크';
  class = '왕족';

  constructor() {}

  ngOnInit(): void {}

  // viewFamily() {
  //   if (this.selectedFamily === 'pink') {
  //     return this.pink;
  //   } else if (this.selectedFamily === 'black') {
  //     return this.black;
  //   } else if (this.selectedFamily === 'brown') {
  //     return this.brown;
  //   } else if (this.selectedFamily === 'gold') {
  //     return this.gold;
  //   } else if (this.selectedFamily === 'silver') {
  //     return this.silver;
  //   } else if (this.selectedFamily === 'red') {
  //     return this.red;
  //   } else if (this.selectedFamily === 'purple') {
  //     return this.purple;
  //   } else if (this.selectedFamily === 'orange') {
  //     return this.orange;
  //   } else if (this.selectedFamily === 'green') {
  //     return this.green;
  //   } else if (this.selectedFamily === 'blue') {
  //     return this.blue;
  //   }
  // }

  selectFamily(fam) {
    this.selectedFamily = fam;
    this.convertLanguage();
    console.log(fam);
  }

  convertLanguage() {
    if (this.selectedFamily === 'pink') {
      this.title = '핑크';
      this.class = '왕족';
    } else if (this.selectedFamily === 'black') {
      this.title = '블랙';
      this.class = '귀족 > 거상';
    } else if (this.selectedFamily === 'brown') {
      this.title = '브라운';
      this.class = '귀족';
    } else if (this.selectedFamily === 'gold') {
      this.title = '골드';
      this.class = '거상 > 귀족';
    } else if (this.selectedFamily === 'silver') {
      this.title = '실버';
      this.class = '상인';
    } else if (this.selectedFamily === 'red') {
      this.title = '레드';
      this.class = '부농';
    } else if (this.selectedFamily === 'purple') {
      this.title = '퍼플';
      this.class = '농가';
    } else if (this.selectedFamily === 'orange') {
      this.title = '오렌지';
      this.class = '농가';
    } else if (this.selectedFamily === 'green') {
      this.title = '그린';
      this.class = '빈민';
    } else if (this.selectedFamily === 'blue') {
      this.title = '블루';
      this.class = '범죄';
    }
  }
}
