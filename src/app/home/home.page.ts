import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { postprovider } from '../../providers/post-provider';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  message:String="";
   todomessage=[];

  constructor(public altercontroller:AlertController,public provide:postprovider) {}

  send(){

    let body={
      message:this.message,
       aksi: "homepage"
    }
    this.provide.postdata(body,'data.php').subscribe(data=>{
      console.log(data);

  });

  }

  async share(){
    const alert = await this.altercontroller.create({
      header: 'Share',
      subHeader: '',
      message: 'You can share data',
      buttons: ['OK']
    });
    await alert.present();
  }
  
  
   async delete(){
    const alert = await this.altercontroller.create({
      header: 'Delete',
      subHeader: '',
      message: 'You want to delete',
      buttons: ['OK']
    });
    await alert.present();
   }

  
   async someadd(){
    const alert = await this.altercontroller.create({
      header: 'Message',
      inputs: [
        {
          name: 'Addsomething',
          type: 'text',
          placeholder: 'Enter Message'
        }],
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
            cssClass: 'secondary',
            handler: () => {
              console.log('Confirm Cancel');
            }
          }, {
            
            text: 'Ok',
            handler: (inputData) => {
              console.log('Confirm Ok');
              let todotext;
              todotext=inputData.Addsomething;
              this.todomessage.push(todotext);
  
            }
          }
        ],
  });
  await alert.present();
  
   }
}


// if(data.success){
        
      //   const alert = await this.altercontroller.create({
      //     header: 'Store data:',
      //     subHeader: '',
      //     message: 'submit your message',
      //     buttons: ['OK']
      //   });
      //   await alert.present();

      // }else{
        
      //   const alert = await this.altercontroller.create({
      //     header: 'Not store data:',
      //     subHeader: '',
      //     message: 'Message not submit',
      //     buttons: ['OK']
      //   });
      //   await alert.present();
      //  }
