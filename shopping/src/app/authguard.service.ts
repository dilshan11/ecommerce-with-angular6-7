import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router/src/utils/preactivation';
import { AuthService } from './auth.service';
import { map } from 'rxjs/operators'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthguardService implements CanActivate{
  path: import("@angular/router").ActivatedRouteSnapshot[];
  route: import("@angular/router").ActivatedRouteSnapshot;


  constructor(private auth: AuthService,private router:Router) { }

  canActivate(){
    return this.auth.users$.pipe(map(user=>{
      if (user!=null) return true;

      this.router.navigate(["/login"]);
      return false;
    })
    )
  }
}
