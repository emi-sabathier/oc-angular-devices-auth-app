import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {AppareilService} from '../services/appareil.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-edit-appareil',
  templateUrl: './edit-appareil.component.html',
  styleUrls: ['./edit-appareil.component.scss']
})
export class EditAppareilComponent implements OnInit {

  defautOnOff = 'éteint';

  constructor(private appareilService: AppareilService, private router: Router) {
  }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    // Quand je clique je stocke le nom et le statut du form.
    // J'envoie les infos dans le service via addAppareil();
    // Je redirige
    const name = form.value['name'];
    const status = form.value['status'];
    this.appareilService.addAppareil(name, status);
    this.router.navigate(['/appareils']);

  }
}
