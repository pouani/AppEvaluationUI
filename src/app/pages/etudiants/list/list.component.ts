import { Component, OnInit } from '@angular/core';
import { EvaluationService } from 'src/services/evaluationService';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styles: [
  ]
})
export class ListComponent implements OnInit {
  evaluations: any[] = [];

  userName!: string;

  constructor(private evaluationService: EvaluationService) {}

  ngOnInit() {
    this.evaluations = this.evaluationService.getEvaluations();
  }

  removeEvaluation(index: number): void {
    this.evaluationService.removeEvaluation(index);
    this.evaluations = this.evaluationService.getEvaluations();
  }

  getUserName(): void {
    const userString = localStorage.getItem('userData');
    if (userString) {
      const user = JSON.parse(userString);
      const email = user.email;
      const atIndex = email.indexOf('@');
      if (atIndex !== -1) {
        this.userName = email.substring(0, atIndex);
      }
    }
  }

  logout(){
    localStorage.removeItem('userData');
    localStorage.removeItem('token');
    localStorage.clear()
  }
}
