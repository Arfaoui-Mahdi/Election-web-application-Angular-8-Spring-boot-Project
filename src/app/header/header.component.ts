import { Component, OnInit } from '@angular/core';
import { AuthCodeService } from '../service/auth-code.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor( private authCodeService : AuthCodeService) { }
   
  

  ngOnInit() {
    
  }

}
