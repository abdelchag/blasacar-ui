import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BlasaCar';

  constructor(private translate: TranslateService, private route: ActivatedRoute) {
    translate.addLangs(['fr']);
    translate.setDefaultLang('fr');
  }
}
