import {Subject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable()

export class AppareilService {

  appareilSubject = new Subject<any>();

  private appareils = [];

  constructor(private httpClient: HttpClient) {
  }

  emitAppareilSubject() {
    this.appareilSubject.next(this.appareils.slice());
  }

  // Retourne l'appareil pr son identifiant
  // va chercher l'objet "appareil" dans le array appareils[]
  // retourne l'appareil ou l'id égal l'id passé en argument
  getAppareilById(id: number) {
    const appareil = this.appareils.find(
      (appareilObject) => {
        return appareilObject.id === id;
      }
    );
    return appareil;
  }

  switchOnAll() {
    for (let appareil of this.appareils) {
      appareil.status = 'allumé';
    }
    this.emitAppareilSubject();
  }

  switchOffAll() {
    for (let appareil of this.appareils) {
      appareil.status = 'éteint';
    }
    this.emitAppareilSubject();
  }

  switchOnOne(index: number) {
    this.appareils[index].status = 'allumé';
    this.emitAppareilSubject();
  }

  switchOffOne(index: number) {
    this.appareils[index].status = 'éteint';
    this.emitAppareilSubject();
  }

  // Je récupère name et status du submit form
  addAppareil(name: string, status: string) {
    const appareilObject = {
      id: 0,
      name: '',
      status: ''
    };
    appareilObject.name = name;
    appareilObject.status = status;
    // dernier élément de la liste qui va être crée
    // this.appareils[4] + 1;
    appareilObject.id = this.appareils[(this.appareils.length - 1)].id + 1;
    this.appareils.push(appareilObject);
    this.emitAppareilSubject(); // on émet le subject
  }

  // Méthode pour enregistrer les appareils sur le serv
  saveAppareilToServer() {
    this.httpClient
      .put('https://http-client-demo-da4d1.firebaseio.com/appareils.json', this.appareils)
      .subscribe(
        // Si tout va bien
        () => {
          console.log('enregistrement ok');
        },
        (error) => {
          console.log('erreur de sauvegarde ' + error);
        }
      );
  }
  getAppareilsFromServer() {
    this.httpClient
      // array de type any
      .get<any[]>('https://http-client-demo-da4d1.firebaseio.com/appareils.json')
      .subscribe(
        (response) => {
          // présume que l'obj est de type object
          // pour lui dire que ce sera un array de type any comme this.appareils, on met <any>
          this.appareils = response;
          this.emitAppareilSubject();
        },
        (error) => {
          console.log('erreur de chargement ! ' + error);
        }
      );
  }
}
