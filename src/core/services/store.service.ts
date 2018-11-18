import { Injectable } from '@angular/core';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

    public user: User

    constructor() { 
        this.user = new User();
        console.log(this.user);
    }
}
