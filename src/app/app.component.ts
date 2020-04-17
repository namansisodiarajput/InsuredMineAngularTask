import { Component } from '@angular/core';
import { LocalStorage } from '@ngx-pwa/local-storage';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'GalleryApp';

  userData: any;

  constructor(
    private localStorage: LocalStorage,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    this.getUserDetail();
  }


  logout() {
    this.localStorage.clear().subscribe(() => {
      // this.router.navigate(['login']);
      window.location.href = "/login";
    });
  }

  /**
   * Get User Detail
   */
  getUserDetail() {
    this.localStorage.getItem('userData').subscribe((userDetails: any) => {
      console.log(userDetails);
      this.userData = userDetails;
    });
  }
}
