export class AuthService {
  isAuth = false; // commence déco de l'app
  signIn() {
    // pour simuler l'appel http et le TEMPS que ça prend on utilise async
    return new Promise(
      (resolve, reject) => {
        setTimeout(
          () => {
            // au bout de 2sc le user est co, et on resolve
            this.isAuth = true;
            resolve(true);
          }, 2000
        );
      }
    );
  }
  signOut() {
    this.isAuth = false;
  }
}
