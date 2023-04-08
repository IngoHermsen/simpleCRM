import { Component, inject } from '@angular/core';
import { User } from 'src/models/user.class';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';

@Component({
  selector: 'app-dialog-add-user',
  templateUrl: './dialog-add-user.component.html',
  styleUrls: ['./dialog-add-user.component.scss']
})
export class DialogAddUserComponent {
  firestore: Firestore = inject(Firestore);
  title = 'simplecrm';
  user = new User();
  birthDate: Date;

  constructor(

  ) {

  }

  async saveUser() {
    this.user.birthDateTimestamp = this.birthDate.getTime();
    console.log('user', this.user);

      const docRef = await
      addDoc(collection(this.firestore, 'users'), this.user.toJSON())
      .then((result: any) => {
        console.log('user added', result)
      })
   

  }
}
