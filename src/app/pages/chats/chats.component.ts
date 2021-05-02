import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { SocketioService } from 'src/app/services/socketio.service';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-chats',
  templateUrl: './chats.component.html',
  styleUrls: ['./chats.component.css']
})
export class ChatsComponent implements OnInit {

  token:any;

  constructor(private router: Router, private socket:SocketioService) {
  }

  async ngOnInit(): Promise<void> {
  }


  revisarTokens(){
    this.token = localStorage.getItem('jwt');
  }


}
