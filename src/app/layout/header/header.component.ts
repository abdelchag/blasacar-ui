import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConnexionPopupComponent } from 'src/app/account/components/connexion-popup/connexion-popup.component';
import { ACTION_CONNEXION, ACTION_INSCRIPTION } from 'src/app/account/models/connexion-action';

@Component({
  selector: 'blasacar-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {


  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {

  }

  Inscription(): void {
    const connexionAction = ACTION_INSCRIPTION;
    this.dialog.open(ConnexionPopupComponent, {
      data: connexionAction
    });
  }

  Connexion(): void {
    const connexionAction = ACTION_CONNEXION;
    this.dialog.open(ConnexionPopupComponent, {
      data: connexionAction
    });
  }

}
