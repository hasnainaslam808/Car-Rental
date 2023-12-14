import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ValidateOtp } from '../shared/models/validateOtp.model';
import { UserLogin } from '../shared/models/login.model';
import { resetPassword } from '../shared/models/resetPassword.model';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  // basePath: string = 'http://localh/ost:3000/'
  // apiUrl: string = 'https://car-rental-six-sooty.vercel.app/'
  apiUrl: string = 'http://localhost:5000/'


  constructor(private http: HttpClient) { }

  // getCars() {
  //   return this.http.get(this.basePath + 'car')
  // }

  // setReview(review: any) {
  //   return this.http.post(this.basePath + 'setReview', review)
  // }
  setUsers(value: any) {
    return this.http.post(this.apiUrl + 'auth/signup', value)
  }

  sendOtp(obj:ValidateOtp) {
    return this.http.post(this.apiUrl + 'auth/validateOTP', obj)
  }

login(value: any) {
  return this.http.post(this.apiUrl+'auth/login',value)
}
  contactUs(value: any) {
    return this.http.post(this.apiUrl + 'contact/createContact', value)
  }

  forgetPasswordEmail(value: any) {
    return this.http.post(this.apiUrl+'auth/forgetPassword',value);
  }
newPassword(obj: resetPassword) {
  console.log(obj)
  return this.http.post(this.apiUrl+'auth/resetPassword',obj);
}











  getUsers() {
    return this.http.get(this.apiUrl + 'users');
  }

  ologin(email: string, password: string) {
    return this.http.get(this.apiUrl + 'users' + `?email=${email}&password=${password}`)
  }

  dataget() {
    return this.http.get('http://192.168.100.70:5000/car/getAllCars');
  }

  // http://localhost:5000/car/getOneCar/655afecc68a5f31a3525e8e5
  getCar(id: string) {
    return this.http.get(this.apiUrl + 'car/getOneCar/' + id)
  }

  getAllCars() {
    return this.http.get(this.apiUrl + 'car/getAllCars');
  }




}
