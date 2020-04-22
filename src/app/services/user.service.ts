import {User} from '../models/User.model';
import {Subject} from 'rxjs';

export class UserService {
  // Tableau d'objets de type user
  // par défaut vide
  private users: User[] = [
    {
      firstName: 'James',
      lastName: 'Smith',
      email: 'james@lol.fr',
      drinkPreference: 'coca',
      hobbies: [
        'kendo',
        'coder',
        'skibidi'
      ]
    }
  ];
  // émettra des tableaux de type User
  userSubject = new Subject<User[]>();

  emitUser() {
    // Emet une copie du tableau user
    this.userSubject.next(this.users.slice());
  }

  // user de type User en argument
  addUser(user: User) {
    this.users.push(user);
    this.emitUser();
  }
}
