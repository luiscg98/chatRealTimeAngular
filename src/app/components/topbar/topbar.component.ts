import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faUser, faSortDown } from '@fortawesome/free-solid-svg-icons' ;
import { DataService } from 'src/app/services/data.service';
import { SocketioService } from 'src/app/services/socketio.service';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {

  faUser=faUser;
  faSortDown=faSortDown;

  constructor(private router: Router, private data:DataService, private socket:SocketioService) { }

  ngOnInit(): void {
  }

  async logout(){
    this.data.sendCriterio(false);
    this.socket.emit('logOut',{token:localStorage.getItem('jwt'),apikey:environment.API_KEY});
    await localStorage.removeItem('jwt');
    this.router.navigate(['../auth/login']);
  }

}
