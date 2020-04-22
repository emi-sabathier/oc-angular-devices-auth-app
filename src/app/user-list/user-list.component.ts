import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {User} from '../models/User.model';
import {UserService} from '../services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit, OnDestroy {

  users: User[];
  userSubscrition: Subscription;

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    // souscription au subject, dans le service
    this.userSubscrition = this.userService.userSubject.subscribe(
      // va émettre un array de type User
      (users: User[]) => {
        // les Users reçus depuis le subject
        this.users = users;
      }
    );
    this.userService.emitUser();
  }
  ngOnDestroy() {
    this.userSubscrition.unsubscribe();
  }
}
// dès que le composant est crée, il va se souscrire
// au subject du service (ngOnInit) et il le fera émettre
// et on le détruit au moment de la destruction du composant
