import { Component, OnInit } from '@angular/core';

import { CreateDialogComponent } from '../create-dialog/create-dialog.component';
import { IMessage } from 'src/app/Interfaces/IMessage';
import { MatDialog } from '@angular/material/dialog';
import { MessagesService } from 'src/app/services/messages.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})

export class FooterComponent implements OnInit {
  dataSource: IMessage[] = [];
  displayedColumns: string[] = ['value', 'name', 'message'];

  constructor(public dialog: MatDialog, private messagesService: MessagesService) {}

  ngOnInit(): void {
  }

  openDialog(element: IMessage | null): void {
    const dialogRef = this.dialog.open(CreateDialogComponent, {
      width: '500px',
      data: element === null ? {
        value: null,
        name: '',
        message: ''
      } : element
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }
}
