import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'vs-navbar',
  templateUrl: './vs-navbar.component.html',
  styleUrls: ['./vs-navbar.component.css']
})
export class VsNavbarComponent implements OnInit {

  constructor(private auth: AuthService) {
  }

  ngOnInit() {

  }

  logout() {
    this.auth.logout();
  }

}
