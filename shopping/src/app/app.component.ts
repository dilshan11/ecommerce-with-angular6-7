import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { UserService } from './user.service';
import { Observable, forkJoin } from 'rxjs';
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shopping';
  constructor(private auth:AuthService,private user_service:UserService){
     auth.users$.subscribe(result=>{
        if(result!=null){
          let a={
            name:result.displayName,
            email:result.email,
            id:result.uid
          }
          user_service.saveuser(a);
        }
     });
  }
}
