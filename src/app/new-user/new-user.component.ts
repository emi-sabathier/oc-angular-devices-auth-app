import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../services/user.service';
import {Router} from '@angular/router';
import {User} from '../models/User.model';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit {

  userForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private userService: UserService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    // l'objet de type formGroup
    // group() retourne un formGroup
    this.userForm = this.formBuilder.group({
        // controles du form
        // crée l'objet de type formGroup. Il correspondra au formulaire avec le template
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        drinkPreference: ['', Validators.required],
        hobbies: this.formBuilder.array([])
      }
    );
  }

  // crée le nouvel user à partir des infos du formulaire
  onSubmitForm() {
    const formValue = this.userForm.value;
    const newUser = new User(
      formValue['firstName'],
      formValue['lastName'],
      formValue['email'],
      formValue['drinkPreference'],
      // Si hobbies, on envoie formValue['hobbies'], sinon envoie array vide
      formValue['hobbies'] ? formValue['hobbies'] : []
    );
    this.userService.addUser(newUser);
    this.router.navigate(['/users']);
  }
  // retourne le formArray sous forme de formArray (pour une question de typage)
  // On récupère le tableau et on stock comme "FormArray" puisque c'est un tablaeu de hobbies
  // besoin de ça pr récupérer le form array des hobbies depuis le template
  getHobbies() {
    return this.userForm.get('hobbies') as FormArray;
  }
  onAddHobby() {
    // ajout du control du tableau des hobbies
    const newHobbyControl = this.formBuilder.control('', Validators.required);
    // on push la valeur
    this.getHobbies().push(newHobbyControl);
  }
}
