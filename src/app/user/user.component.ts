import { Component, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogAddUserComponent } from '../dialog-add-user/dialog-add-user.component';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  firestore: Firestore = inject(Firestore);
  allUsers$: Observable<any[]>;

  constructor(public dialog: MatDialog) {
    const usersCollection = collection(this.firestore, 'users');
    this.allUsers$ = collectionData(usersCollection);
  }
  
  openDialog() {
    let dialogRef = this.dialog.open(DialogAddUserComponent, {
    });
  }

  

}
