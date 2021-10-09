import { Component, OnInit } from '@angular/core';

import { CreateDialogComponent } from '../create-dialog/create-dialog.component';
import { IMessage } from 'src/app/Interfaces/IMessage';
import { MatDialog } from '@angular/material/dialog';
import { MessagesService } from 'src/app/services/messages.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  dataSource: IMessage[] = [];
  displayedColumns: string[] = ['value', 'name', 'message'];

  constructor(public dialog: MatDialog, private messagesService: MessagesService) {}

  ngOnInit(): void {
    this.listMessages();
  }


  openDialog(element: IMessage | null): void {
    const dialogRef = this.dialog.open(CreateDialogComponent, {
      width: '450px',
      data: element === null ? {
        value: null,
        name: '',
        message: ''
      } : element
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result !== undefined){
        this.createMessage(result);
        this.listMessages();
      }
    });
  }

  async createMessage(message: IMessage) {
    try
    {
      const me = await this.messagesService.postMessage(message);
      this.dataSource = await this.messagesService.getMessages() as IMessage[];
    }
    catch(error)
    {
      console.error(error);
    }
  }

  async listMessages() {
    try
    {
      this.dataSource = await this.messagesService.getMessages() as IMessage[];
    }
    catch(error)
    {
      console.error(error);
    }
  }

}
