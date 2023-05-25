import { Component, OnInit } from '@angular/core';
import { Router, DefaultUrlSerializer } from '@angular/router';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  defaultRoute = '/GCD/gestion-developpeur';
  constructor(private router: Router) {
    const urlSerializer = new DefaultUrlSerializer();
    const currentUrl = urlSerializer.parse(router.url);

    if (currentUrl.root.children['primary'].segments.length === 0) {
      this.router.navigateByUrl(this.defaultRoute);
    }
  }

}
