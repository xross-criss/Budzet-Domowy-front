import { Component, OnInit } from '@angular/core';
import {Goals} from '../../../model/Goals';
import {GoalsController} from '../../../controllers/goals.controller';

@Component({
  selector: 'app-goals',
  templateUrl: './goals.component.html',
  styleUrls: ['./goals.component.scss']
})
export class GoalsComponent implements OnInit {

    public goalsList: Goals[];

  constructor(public goalController: GoalsController) { }

  ngOnInit(): void {
      this.goalController.getGoals().subscribe(goals => {
          this.goalsList = goals;
      });
  }

}
