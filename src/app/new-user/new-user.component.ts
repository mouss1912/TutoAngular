import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { User } from '../models/User.model';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit {
  userForm: FormGroup;
  constructor(private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router) { }

  ngOnInit(): void {
    this.initForm();
  }
  initForm() {
    this.userForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      drinkPreference: ['', Validators.required],
      hobbies: this.formBuilder.array([])
    }
    );
  }

  onSubmitForm() {
    // les valeur passé dans le formulaire
    const formValue = this.userForm.value;
    // On crée un nouveau utilisateur avec les valeur passé
    const newUser = new User(
      formValue['firstName'],
      formValue['lastName'],
      formValue['email'],
      formValue['drinkPreference'],
      // si hobies existe on récupére la valeur sinon on retourne un tableau vide
      formValue['hobbies'] ? formValue['hobbies'] : []
    );
    // On ajoute ce nouveau utilisatteur à la liste des users
    this.userService.addUser(newUser);
    // Aprés ajout redirection à la liste des users
    this.router.navigate([`/users`]);
  }

  // récupére la valeur de du FormArray
  getHobbies(): FormArray {
    return this.userForm.get('hobbies') as FormArray;
  }

  onAddHobby() {
    const newHobbyControl = this.formBuilder.control(null, Validators.required);
    this.getHobbies().push(newHobbyControl);
}
}
