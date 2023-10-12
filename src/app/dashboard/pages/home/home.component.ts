import { Component, OnDestroy } from '@angular/core';
import { User } from '../users/models';
import { Observable, Subscription } from 'rxjs';
import { CommonService } from 'src/app/core/common.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnDestroy {
  loading = false;

  clockSuscription: Subscription;

  constructor() {
    this.getUsers();

    this.clockSuscription = this.getClock().subscribe({
      // OK => then
      next: (v) => {
        console.log(v);
      },
      // ERROR => catch
      error: (err) => {
        alert('Ocurrio un error!');
      },
      // COMPLETA => finally
      complete: () => {
        console.log('FINALIZO EL CONTADOR');
      },
    });

    this.getClock().subscribe({
      next: (v) => {
        console.log('SEGUNDA SUSCRIPCION');
      },
    });
  }

  ngOnDestroy(): void {
    console.log('SE DESTRUYO EL HOME');

    this.clockSuscription.unsubscribe();
  }

  getClock(): Observable<number> {
    return new Observable((suscriber) => {
      let counter = 0;

      setInterval(() => {
        counter++;
        suscriber.next(counter);

        if (counter === 10) {
          suscriber.complete();
        }

        // suscriber.error('error al mostrar la fecha');
      }, 1000);
    });
  }

  async getUsers(): Promise<void> {
    this.loading = true;
    const getUsersPromise = new Promise((resolve, reject) => {
      const users: User[] = [
        {
          id: 1,
          name: 'goku',
          email: 'goku@mail.com',
          lastName: 'son',
        },
      ];
      setTimeout(() => {
        resolve(users);
      }, 5000);
    });

    // DETENTE AQUI HASTA QUE SE RESUELVA
    await getUsersPromise
      // SALIO TODO OK
      .then((result) => console.log(result))
      // ATRAPAMOS UN ERROR
      .catch((err) => {
        alert('Ocurrio un error inesperado'), console.log(err);
      })
      .finally(() => {
        this.loading = false;
      });

    console.log('Hola mundo');
  }
}
