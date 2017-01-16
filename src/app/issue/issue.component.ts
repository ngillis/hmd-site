import { Component, OnInit } from '@angular/core';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-issue',
  templateUrl: './issue.component.html',
  styleUrls: ['./issue.component.scss'],
  providers: [NgbCarouselConfig]
})
export class IssueComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
