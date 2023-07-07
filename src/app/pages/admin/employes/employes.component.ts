import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-employes',
  templateUrl: './employes.component.html',
  styles: [
  ]
})
export class EmployesComponent implements OnInit{

  employes: any[] = [
    {
      image: '',
      firstname: 'Cooper',
      lastname: 'Kristin',
      poste: 'Scrum Master'
    },
    {
      image: '',
      firstname: 'Cooper',
      lastname: 'Kristin',
      poste: 'Prof. Developpement web'
    },
    {
      image: '',
      firstname: 'Cooper',
      lastname: 'Kristin',
      poste: 'Architecte reseau'
    },
    {
      image: '',
      firstname: 'Cooper',
      lastname: 'Kristin',
      poste: "Prof. Gestion des SI "
    },
    {
      image: '',
      firstname: 'Cooper',
      lastname: 'Kristin',
      poste: 'Comptable generale'
    },
    {
      image: '',
      firstname: 'Cooper',
      lastname: 'Kristin',
      poste: 'Negociation informatique'
    },
    {
      image: '',
      firstname: 'Cooper',
      lastname: 'Kristin',
      poste: 'Prof. Francais/Anglais'
    },
    {
      image: '',
      firstname: 'Cooper',
      lastname: 'Kristin',
      poste: 'Prof. Genie Logiciel'
    },
    {
      image: '',
      firstname: 'Cooper',
      lastname: 'Kristin',
      poste: 'Prof. Maintenance informatique'
    },
    {
      image: '',
      firstname: 'Cooper',
      lastname: 'Kristin',
      poste: 'Scrum Master'
    },
    {
      image: '',
      firstname: 'Cooper',
      lastname: 'Kristin',
      poste: 'Scrum Master'
    },
    {
      image: '',
      firstname: 'Cooper',
      lastname: 'Kristin',
      poste: 'Scrum Master'
    },
  ]

  ngOnInit(): void {
  }

}
