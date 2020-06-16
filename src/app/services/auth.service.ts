import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import {
  ToastController,
  Platform,
  LoadingController,
  NavController,
} from "@ionic/angular";
import { BehaviorSubject } from "rxjs";
import { ApiService } from "./api.service";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  authState = new BehaviorSubject(false);
  loading: HTMLIonLoadingElement;

  constructor(
    private platform: Platform,
    private api: ApiService,
    private loadingCtrl: LoadingController,
    public toastCtrl: ToastController,
    private navCtrl: NavController
  ) {
    this.platform.ready().then(() => {});
  }

   sendEmail(email) {
    return this.api
      .postData("formulario",email)
      .then((res) => {
        return res;
      })
      .catch((err) => {
        console.log(
          "Error de conexión con el servidor. Intente nuevamente más tarde."
        );
        console.log(JSON.stringify(err));
      });
  }

}
