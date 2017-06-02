import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {FormBuilder,Validators,FormGroup} from '@angular/forms';

/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, private formBuilder: FormBuilder, public navParams: NavParams) {
  }

  loginForm = this.formBuilder.group({
    'userName': ['', [Validators.required, Validators.minLength(4)]],// 第一个参数是默认值
    'password': ['', [Validators.required, Validators.minLength(4)]]
  });

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
