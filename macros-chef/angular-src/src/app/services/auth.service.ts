import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { tokenNotExpired } from 'angular2-jwt';

@Injectable()
export class AuthService {
	authToken: any;
	user: any;

  constructor(private http:Http) { }

  registerUser(user){
  	let headers = new Headers();
  	headers.append('Content-Type', 'application/json');
  	return this.http.post('http://localhost:3000/users/register', user, {headers: headers})
  	.map(res => res.json());
  }

  loginUser(user){
  	let headers = new Headers();
  	headers.append('Content-Type', 'application/json');
  	return this.http.post('http://localhost:3000/users/authenticate', user, {headers: headers})
  	.map(res => res.json()); 
  }

  getProfile(){
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.get('http://localhost:3000/users/profile', {headers: headers})
    .map(res => res.json());
  }

  //set data to localStrage
  storeUserData(authToken, user){
  	window.localStorage.setItem('id_token', authToken);
  	window.localStorage.setItem('user', JSON.stringify(user));
  	this.authToken = authToken;
  	this.user = user;
  }

  //fetch token from localStorage and assign it to authToken class propery
  loadToken(){
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }

  //check if logged in
  loggedIn(){
    return tokenNotExpired('id_token');
  }

  //clear the localStrorage
  logout(){
  	this.authToken == null;
  	localStorage.clear();
  }

}
