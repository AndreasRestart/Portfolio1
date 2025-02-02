import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-main-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './main-contact.component.html',
  styleUrl: './main-contact.component.scss'
})
export class MainContactComponent {
scrolltotop(){
  window.scrollTo({top:0,behavior:"smooth"})
}

http = inject(HttpClient);


contactDate ={
  name:"",
  mail:"",
  massage:"",
  };

    mailTest = true;

  post = {
    endPoint: 'https://andreaswelker.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  // onSubmit(ngForm: NgForm) {
  //   if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
     
  //   } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {

  //     ngForm.resetForm();
  //   }
  // }


onSubmit(ngForm: NgForm) {
if(ngForm.valid && ngForm.submitted){
  this.http.post(this.post.endPoint, this.post.body(this.contactDate))
  .subscribe({
    next: (response) => {

      ngForm.resetForm();
    },
    error: (error) => {
      console.error(error);
    },
    complete: () => console.info('send post complete'),
  });
}
}
}
