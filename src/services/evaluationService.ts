import { Injectable } from '@angular/core';

export interface Evaluation {
    cycle: string;
    filiere: string;
    niveau: string;
    sexe: string;
    question: string;
    scores: { [key: string]: string };
    name: string;
    matiere: string;
    totalScore?: number; // Nouvelle propriété pour la somme des scores
  }

@Injectable({
  providedIn: 'root'
})
export class EvaluationService {
  private evaluationsKey = 'evaluations';

  constructor() {}

  getEvaluations(): Evaluation[] {
    const evaluationsString = localStorage.getItem(this.evaluationsKey);
    let evaluations: Evaluation[] = [];
    if (evaluationsString) {
      evaluations = JSON.parse(evaluationsString);
      evaluations.forEach((evaluation) => {
        evaluation.totalScore = this.calculateTotalScore(evaluation.scores);
      });
    }
    return evaluations;
  }

  private calculateTotalScore(scores: { [key: string]: string }): number {
    let total = 0;
    Object.values(scores).forEach((score) => {
      total += +score; // Convertit le score en nombre avant de l'ajouter
    });
    return total;
  }
  removeEvaluation(index: number): void {
    const evaluations = this.getEvaluations();
    if (index >= 0 && index < evaluations.length) {
      evaluations.splice(index, 1);
      localStorage.setItem(this.evaluationsKey, JSON.stringify(evaluations));
    }
  }
}