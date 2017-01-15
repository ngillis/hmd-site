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
  // public goToHousing;
  //
  // goToHousing(){
  //   this.router.navigate(['/help/housing']);
  // }

  public goToHousing(): void{
     this.router.navigate(['/help/housing']);
  }


  constructor(
    private route: ActivatedRoute,
    private router: Router

  ) {
    this.header = {title: 'default'};

    console.log('hiii', this.header);
  }
  ngOnInit() {

  }


}
