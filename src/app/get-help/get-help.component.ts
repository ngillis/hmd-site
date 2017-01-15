import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-get-help',
  templateUrl: './get-help.component.html',
  styleUrls: ['./get-help.component.scss']
})
export class GetHelpComponent implements OnInit {
  title = 'default';
  content ='';
  header={};

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.header = {title: 'default'};
    this.goToHousing = goToHousing;
    console.log('hiii', this.header);
  }
  ngOnInit() {

  }
  function goToHousing(){
    this.router.navigate(['/help/housing']);
  }

}
