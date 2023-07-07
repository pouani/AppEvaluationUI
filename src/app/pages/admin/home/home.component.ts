import { Component } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent {
  e_evaluations: any[] = [
    {
      image: "",
      enseignant: "Claude Kengne",
      performance: "70",
      date: "30 Juin, 2023"
    },
    {
      image: "",
      enseignant: "Irmeline Tegomo",
      performance: "50",
      date: "30 Juin, 2023"
    },
    {
      enseignant: "Daniel Teubou",
      performance: "80",
      date: "1 Juillet, 2023"
    },
  ];

}
