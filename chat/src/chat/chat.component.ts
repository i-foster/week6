import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SocketService } from '../services/socket.service';



@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css'
})
export class ChatComponent implements OnInit {

  constructor(private socketService:SocketService){}

  messagecontent:string = "";
  messages:string[]= [];



  ngOnInit(): void {
    this.initIoConnection();
  }

  private initIoConnection(){
    this.socketService.initSocket();
    this.ioConnection = this.socketService.onMessage()
    .subscribe((message:string) => {
      this.messages.push(message);
    })
  }

  chat(){
    if(this.messagecontent){
      this.socketService.send(this.messagecontent)
      this.messagecontent = "";
    }else{
      console.log("no Message")
    }
  }
}