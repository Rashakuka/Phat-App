import { Component, OnInit, Inject } from '@angular/core';

import { MatSnackBar } from '@angular/material/snack-bar';
import { ICreateOrderRequest, IPayPalConfig } from 'ngx-paypal';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { IMessagePost } from 'src/app/Interfaces/IMessagePost';
import { MessagesService } from 'src/app/services/messages.service';

@Component({
  selector: 'app-create-dialog',
  templateUrl: './create-dialog.component.html',
  styleUrls: ['./create-dialog.component.scss']
})
export class CreateDialogComponent implements OnInit {
  public payPalConfig?: IPayPalConfig;
  element!: IMessagePost;
  constructor(
    @Inject(MAT_DIALOG_DATA)
    public _data: IMessagePost,
    public _dialogRef: MatDialogRef<CreateDialogComponent>,
    private _snackBar: MatSnackBar,
    private messagesService: MessagesService
  ) {}

  ngOnInit(): void {
    this.initPayPal()
  }

  onCancel(): void {
    this._dialogRef.close();
  }

  private initPayPal(): void {
      this.payPalConfig = {
      currency: 'USD',
      clientId: 'AfsUxwa341QuKJXFcIlhk1x1c8HEnLW9rYHwehMuLFIsebuOIHINtm__sPezFoay3r_lrTFkvmBSCzt4',
      createOrderOnClient: (data) => <ICreateOrderRequest>{
        intent: 'CAPTURE',
        purchase_units: [
          {
            amount: {
              currency_code: 'USD',
              value: this._data.ammount.toString(),
              breakdown: {
                item_total: {
                  currency_code: 'USD',
                  value: this._data.ammount.toString()
                }
              }
            },
            items: [
              {
                name: this._data.name.toString() + this._data.text.toString(),
                quantity: '1',
                category: 'DIGITAL_GOODS',
                unit_amount: {
                  currency_code: 'USD',
                  value: this._data.ammount.toString(),
                },
              }
            ]
          }
        ]
      },
      advanced: {
        commit: 'true'
      },
      style: {
        label: 'paypal',
        layout: 'vertical'
      },
      onApprove: (data, actions) => {
        // Aqui ele aprovar a transação mas não está autorizada ainda
        this._snackBar.open('Transaction was approved, wait... ' + data + ' ' + actions, 'OK');

        actions.order.get().then(async (details: any) => {
          // Aqui ele complata a tranzação
          this._data.currency = 'USD';
          this._data.orderId = data.orderID;
          this._data.user = {
            payerId: data.payerID,
            address: details.payer?.address?.country_code,
            email: details.payer?.email_address
          }
          var message = await this.createMessage(this._data);

          this._dialogRef.close();
          this._snackBar.open(message, 'OK');
          console.log('onApprove - you can get full order details inside onApprove: ', details);
        });
      },
      onClientAuthorization: (data) => {
        console.log('onClientAuthorization - you should probably inform your server about completed transaction at this point', data);
      },
      onCancel: (data, actions) => {
        console.log('OnCancel', data, actions);
      },
      onError: err => {
        this._snackBar.open('Error: ' + err, 'OK');
      },
      onClick: (data, actions) => {
        console.log('onClick', data, actions);
      },
    };
  }

  async createMessage(message: IMessagePost) {
    try
    {
      return await this.messagesService.postMessage(message);
    }
    catch(error)
    {
      console.error(error);
      return "";
    }
  }
}
