import { Component, OnInit, Inject } from '@angular/core';

import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { IMessage } from 'src/app/Interfaces/IMessage';

@Component({
  selector: 'app-create-dialog',
  templateUrl: './create-dialog.component.html',
  styleUrls: ['./create-dialog.component.scss']
})
export class CreateDialogComponent implements OnInit {
  element!: IMessage;
  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: IMessage,
    public dialogRef: MatDialogRef<CreateDialogComponent>
  ) {}


  ngOnInit(): void {
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
