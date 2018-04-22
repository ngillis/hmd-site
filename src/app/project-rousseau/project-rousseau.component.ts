import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-project-rousseau',
  templateUrl: './project-rousseau.component.html',
  styleUrls: ['./project-rousseau.component.scss']
})
export class ProjectRousseauComponent implements OnInit {
  title = 'default';
  content ='';
  header={};

  public goToOtherResources(): void{
    this.router.navigate(['/help']);
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
