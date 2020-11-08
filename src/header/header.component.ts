import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConnexionPopupComponent } from 'src/authentication/components/connexion-popup/connexion-popup.component';
import { ACTION_CONNEXION, ACTION_INSCRIPTION } from 'src/authentication/models/connexion-action';

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
    let dialogRef = this.dialog.open(ConnexionPopupComponent, {
      data: connexionAction
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  Connexion(): void {
    const connexionAction = ACTION_CONNEXION;
    let dialogRef = this.dialog.open(ConnexionPopupComponent, {
      data: connexionAction
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
