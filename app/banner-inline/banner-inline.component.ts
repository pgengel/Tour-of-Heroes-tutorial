import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-banner',
  templateUrl: 'banner-inline.component.html',
  styleUrls:  ['banner-inline.component.css']
})
export class BannerComponent {
  title = 'Test Tour of Heroes';
}
