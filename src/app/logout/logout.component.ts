import { Component, OnInit } from '@angular/core';
import { AuthCodeService } from '../service/auth-code.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {
  authCodeService: any;

  constructor( authCodeService : AuthCodeService) { }

  ngOnInit() {
    this.authCodeService.logout();
  }


}
