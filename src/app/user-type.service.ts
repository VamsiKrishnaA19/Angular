import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserTypeService implements CanActivate {

  constructor() { }

  canActivate(): boolean {
    let role = localStorage.getItem('role');
    if (role == 'admin') {
      return true;
    }
    return false;
  }
}
