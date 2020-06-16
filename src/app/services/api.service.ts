import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { ToastController, LoadingController } from '@ionic/angular';
import { EventService } from './event.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiToken: any;
  loading: HTMLIonLoadingElement;
  apiUrl: any;

  constructor(
    private http: HttpClient,
    private loadingCtrl: LoadingController,
    public toastCtrl: ToastController,
    private events: EventService
  ) {}

  /**
   * Return auth token from promise
   */

  async getHeaders() {
    this.apiUrl = [
      'http://127.0.0.1:3000/',
    
    ];
      return new HttpHeaders({
        Accept: 'application/json',
        'Content-Type': 'application/json',
    });
  }

  private handleError(error: HttpErrorResponse) {
    console.log('Error:', error);
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        'Backend returned code ${error.status},' +
        'body was:', error.error);

      // Unauthorized
      if (error.status >= 400) {
        // if 401 Unauthorized = logout
        if (error.status === 401) {
          console.log('Publishing user:logout');
          this.events.publish('user:logout');
          // this.auth.logout();
        }
      }
    }
    return { data: null, error: 'Something bad happened; please try again later.' };
    // return an observable with a user-facing error message
    return throwError('Something bad happened; please try again later.');
  }

  getData(url: string, base: number = 0): Promise < any > {
    return this.getHeaders().then(myHeaders => {
      return this.http.get(this.apiUrl[base] + url, { headers: myHeaders }).toPromise().then(res => res).catch(err => this.handleError(err));
    });
  }

  postData(url: string, body: any, base: number = 0): Promise < any > {
    return this.getHeaders().then(myHeaders => {
      return this.http.post(this.apiUrl[base] + url, body, { headers: myHeaders }).toPromise().then(res => res).catch(err => this.handleError(err));
    });
  }

  putData(url: string, body: any, base: number = 0): Promise < any > {
    return this.getHeaders().then(myHeaders => {
      return this.http.put(this.apiUrl[base] + url, body, { headers: myHeaders }).toPromise().then(res => res).catch(err => this.handleError(err));
    });
  }

  async presentLoading(myMessage = 'Cargando...') {
    this.loading = await this.loadingCtrl.create({
      message: myMessage,
    });
    return await this.loading.present();
  }

  async presentToast(myMessage = '') {
    const toast = await this.toastCtrl.create({
      message: myMessage,
      duration: 3000,
      position: 'top'
    });
    return await toast.present();
  }

  async dismissLoading() {
    return await this.loading.dismiss();
  }

  isBase64(text) {
    const base64regex = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/;
    return base64regex.test(text);
  }

}
