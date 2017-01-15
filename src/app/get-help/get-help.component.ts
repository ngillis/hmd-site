import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-get-help',
  templateUrl: './get-help.component.html',
  styleUrls: ['./get-help.component.scss']
})
export class GetHelpComponent implements OnInit {
  title = 'default';
  content ='';
  header={};

  constructor() {
    this.header = {title: 'default'};
    this.goToHousing = goToHousing;
    console.log('hiii', this.header);
  }
  ngOnInit() {

  }
  function goToHousing(){
    console.log('hmmmmmmm');
  }

}
