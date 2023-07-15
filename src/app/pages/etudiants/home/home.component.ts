import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

interface NIVEAU {
  name: string;
  niveau: string;
}

interface FILIERE {
  name: string;
  filiere: string;
}

interface CYCLE {
  name: string;
  cycle: string;
}

interface SEXE {
  name: string;
  sexe: string;
}

interface QUESTIONS {
  question: string,
  score: any
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  niveaus : NIVEAU[] = [
    {name: 'L1', niveau: 'Licence 1'},
    {name: 'L2', niveau: 'Licence 2'},
    {name: 'L3', niveau: 'Licence 3'},
    {name: 'M1', niveau: 'Master 1'},
    {name: 'M2', niveau: 'Master 2'},
  ]

  filieres : FILIERE[] = [
    {name: 'GL', filiere: 'Génie Logiciel'},
    {name: 'SI', filiere: 'Systèmes Informatiques'},
    {name: 'RT', filiere: 'Réseaux et Télécommunications'},
    {name: 'ISI', filiere: 'Ingénierie des Systèmes d\'Information'},
    {name: 'SRT', filiere: 'Sécurité des Réseaux et des Télécommunications'},
    {name: 'SIL', filiere: 'Systèmes Informatiques et Logiciels'},
    {name: 'SIT', filiere: 'Systèmes Informatiques et Télécommunications'},
  ]

  cycles : CYCLE[] = [
    {name: 'L', cycle: 'Licence'},
    {name: 'M', cycle: 'Master'},
  ]

  sexes: SEXE[] = [
    {name: 'M', sexe: 'Masculin'},
    {name: 'F', sexe: 'Féminin'},
  ]

  questions: QUESTIONS[] = [
    { question: "Expose clairement les objectifs et le programme au début du cours", score: ['3','4','6','8','10'] },
    { question: "Fait les séances de travaux dirigés", score: ['3','4','6','8','10'] },
    { question: "Est toujours physiquement bien présentable", score: ['3','4','6','8','10'] },
    { question: "Est assidu et ponctuel", score: ['3','4','6','8','10'] },
    { question: "Est attentif aux difficultés de compréhension des étudiants", score: ['3','4','6','8','10'] },
    { question: "Dispense les cours sans propagande sur sa personne, sa religion/la politique", score: ['3','4','6','8','10'] },
    { question: "Il a su instaurer une atmosphère agréable et disciplinaire en classe", score: ['3','4','6','8','10'] },
    { question: "L’enseignant n’abandonne pas les étudiants pendant le cours", score: ['3','4','6','8','10'] },
    { question: "Les contrôles continus (CC) ont été effectués", score: ['3','4','6','8','10'] },
    { question: "Ne passe pas beaucoup de temps au téléphone pendant le cours", score: ['3','4','6','8','10'] },
  ]

  niveauControl = this._formBuilder.control<NIVEAU | null>(null, Validators.required);
  filiereControl = this._formBuilder.control<FILIERE | null>(null, Validators.required);
  cycleControl = this._formBuilder.control<CYCLE | null>(null, Validators.required);
  sexeControl = this._formBuilder.control<SEXE | null>(null, Validators.required);
  questionControl = this._formBuilder.control<QUESTIONS | null>(null, Validators.required)
  nameControl = this._formBuilder.control('', Validators.required)
  matiereControl = this._formBuilder.control('', Validators.required)
  recommandationControl = this._formBuilder.control('')
  selectFormControl = new FormControl('', Validators.required);

  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  isLinear = false;

  evaluations: any[] = [];

  selectedScores: any[] = [];

  enseignantForm!: FormGroup;

  ngOnInit(): void{
  }
  constructor(private _formBuilder: FormBuilder) {}

  onScoreSelected(index: number, score: any) {
    this.selectedScores[index] = score; // Stocker le score sélectionné dans le tableau `selectedScores`
  }

  submitEvaluation() {
    const formValues = {
      cycle: this.cycleControl.value,
      filiere: this.filiereControl.value,
      niveau: this.niveauControl.value,
      sexe: this.sexeControl.value,
      question: this.questionControl.value,
      scores: {},
      name: this.nameControl.value,
      matiere: this.matiereControl.value,
      recommandationControl: this.recommandationControl.value
    };

    for (let i = 0; i < this.questions.length; i++) {
      const question = this.questions[i];
      const selectedScore = this.selectedScores[i];

      (formValues.scores as any)[question.question] = selectedScore;
    }

    console.log(formValues)
    const evaluations = JSON.parse(localStorage.getItem('evaluations') || '[]') || [];
    if(localStorage.getItem('evaluations')){
      evaluations.push(formValues);
    }
  
  localStorage.setItem('evaluations', JSON.stringify(evaluations));

  
  this.firstFormGroup.reset();
  this.secondFormGroup.reset();

  
  console.log(evaluations);
  }

}
