import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-occurrence-detail',
  templateUrl: './occurrence-detail.component.html',
  styleUrls: ['./occurrence-detail.component.css']
})
export class OccurrenceDetailComponent implements OnInit {

  constructor(
    private route: ActivatedRoute
  ) { }

  public id: string;

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
  }

}
