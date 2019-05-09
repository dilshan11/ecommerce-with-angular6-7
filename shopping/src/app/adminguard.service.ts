import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router/src/utils/preactivation';
import { UserService } from './user.service';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AdminguardService implements CanActivate {
  path: import("@angular/router").ActivatedRouteSnapshot[];
  route: import("@angular/router").ActivatedRouteSnapshot;

  constructor(private userserve:UserService,private rout:Router) { }

  canActivat(){
   return this.userserve.subject.pipe(map(data=>{
      if(data===true){
        console.log('aaaassssssssssssssss')
        return true;
      }
      console.log('dddsgefdhdghdh');
      this.rout.navigate(["/login"]);
      return false;
    })
   )
  }
}
