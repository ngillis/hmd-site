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
  public goToFood(): void{
     this.router.navigate(['/help/food']);
  }
  public goToJob(): void{
     this.router.navigate(['/help/job']);
  }
  public goToViolence(): void{
     this.router.navigate(['/help/domestic-violence']);
  }
  public goToProstitution(): void{
     this.router.navigate(['/help/prostitution']);
  }
  public goToHealthcare(): void{
    this.router.navigate(['/help/healthcare']);
  }

  public goToChildcare(): void{
    this.router.navigate(['/help/childcare']);
  }
  public goToFinancial(): void{
    this.router.navigate(['/help/financial']);
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
