import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.scss']
})
export class ActionComponent implements OnInit {
  content = '';

  public goToVolunteer(): void{
     this.router.navigate(['/action/volunteer']);
  }

  public goToDonate(): void{
     this.router.navigate(['/action/cause']);
  }

  public goToScreening(): void{
     this.router.navigate(['/action/screening']);
  }
  constructor(
    private route: ActivatedRoute,
    private router: Router
) { }

  ngOnInit() {
  }



}
