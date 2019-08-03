import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthCodeService {

  constructor() { }

  authentification(username,password){
    if(username==="internShip2019"&&password==="ElectoralProject")
    {
      sessionStorage.setItem('authenticaterUser', username);
      return true;}
     else{
    return false;
     }


  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('authenticaterUser')
    return !(user === null)
  }

  logout(){
    sessionStorage.removeItem('authenticaterUser')
    
  }
}
