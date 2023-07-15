import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;

  isSubmitting!: boolean;

  hide = true;

  constructor(private formBuilder: FormBuilder, private router: Router){}

  ngOnInit(): void{
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(13)]]
    })
  }

  get email(){
    if(this.loginForm.get('email')?.hasError('required')){
      return 'Champ obligatoire';
    }
    return this.loginForm.get('email') ? 'Invalid adresse email' : '';
  }

  get password(){
    if(this.loginForm.get('password')?.hasError('required')){
      return 'Champ obligatoire';
    }
    return this.loginForm.get('password') ? 'Invalid mot de passe' : '';
  }
  

  onSubmit(){
    if(this.loginForm.invalid){
      return;
    }

    this.isSubmitting = true;

    
    const email = this.loginForm.value.email;
    const password = this.loginForm.value.password;

    // Vérification du domaine de l'e-mail
    if (!email.endsWith('@myiuc.com')) {
      alert('Veuillez utiliser une adresse e-mail de type @myiuc.com');
      this.isSubmitting = false;
      return;
    }

    // Simule une action asynchrone (par exemple, une requête HTTP)
    setTimeout(() => {
  
      let role!: string;
  
      // Vérification de la 6e lettre du mot de passe
      if (password.charAt(5) === 's' || password.charAt(5) === 'S') {
        role = 'admin';
      } else if (password.charAt(5) === 'e' || password.charAt(5) === 'E') {
        role = 'etudiant';
      }

      const user = {
        email,
        role
      };
  
      // Stockage des données dans le localStorage
      localStorage.setItem('userData', JSON.stringify({ user }));

      //stockage du token
      localStorage.setItem('token', 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJtaWRyZWxlQGdtYWlsLmNvbSIsImV4cCI6MTY4NzcwMDk2NCwiaWF0IjoxNjg3NTkyOTY0fQ.NdYKpxbePRpnbgrc0bzpLR8SlE_XO82DgeaKN7wKaTI')
  
      // Redirection en fonction du rôle
      if (role === 'admin') {
        this.router.navigate(['/admin']); // Redirection vers la page admin
      } else if (role === 'etudiant') {
        this.router.navigate(['/etudiant']); // Redirection vers la page étudiant
      }
  
      this.isSubmitting = false;
    }, 2000);
  }


}
