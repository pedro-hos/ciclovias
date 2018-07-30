import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { environment } from '../../../environments/environment';

import { Occurrence } from '../occurrence/model/occurrence.model';
import { OccurrenceService } from '../occurrence/service/occurrence.service';

@Component({
  selector: 'app-occurrence-detail',
  templateUrl: './occurrence-detail.component.html',
  styleUrls: ['./occurrence-detail.component.css']
})
export class OccurrenceDetailComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private occurrenceService: OccurrenceService
  ) { }

  public occurrence: Occurrence = new Occurrence();
  public iconPath: string;

  ngOnInit() {
    this.iconPath = `${environment.iconPath}`;
    this.getOccurrencesById();
  }

  getOccurrencesById() {
      this.occurrenceService.getOccurrencesById(this.route.snapshot.paramMap.get('id'))
                            .subscribe(occurrence => this.occurrence = occurrence);
  }

}
