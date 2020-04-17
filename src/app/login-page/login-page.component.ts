import { Component, OnInit } from '@angular/core';
import { LocalStorage } from '@ngx-pwa/local-storage';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  users = [
    {userid : "abc@media.com",password:"abc123",username:"tom"},
    {userid : "def@media.com",password:"def123",username:"dick"},
    {userId : "naman@media.com",password:"naman1234",userName:"naman sisodia"},
    {userId : "noob@media.com",password:"noob1234",userName:"noob"},
    {userId : "rahul@media.com",password:"rahul1234",userName:"rahul sisodia"},
    {userId : "test@media.com",password:"test1234",userName:"mr. test"},
    {userId : "fanny@media.com",password:"fanny1234",userName:"mr. fanny"},
  ];

  loginDetails = {
    userId: '',
    password: ''
  }

  isError = false;
  loginError = '';

  constructor(
    private localStorage: LocalStorage,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
  }


  submit() {
    console.log(this.loginDetails);
    for (let index = 0; index < this.users.length; index++) {
      let user = this.users[index];
      if(this.loginDetails.userId == user.userId && this.loginDetails.password == user.password) {
        this.localStorage.setItem('userData', user).subscribe(() => {
           this.isError = false;
           this.goToHome();
        },
          error => {
            this.isError = true;
            this.loginError = 'Error Loggin In!';
          }
        );
      }
    }
    this.isError = true;
    this.loginError = 'credential is wrong';
  }

  goToHome() {
    // this.router.navigateByUrl('/home');
    window.location.href = "/home";
  }

}
