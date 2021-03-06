import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Helpers } from 'src/app/helpers';
import { ROUTING_PATH } from 'src/app/routing-constants';
import { UtilisateurModel } from 'src/app/shared/models';
import { profil } from '../../constants';






@Injectable()
export class InvalidContratCanActivate implements CanActivate {

  risqueSegment: string;
  numeroContrat: string;
  profilTypeCode: string;

  constructor(
    private router: Router,

  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
    const numeroContrat = route.params['numeroContrat'];
    return null;
  }

  private redirectToRoute(profilTypeCode: string, utilisateur: UtilisateurModel, route: ActivatedRouteSnapshot): void {

    if (Helpers.isAuthorizedProfile(profilTypeCode)) {

      const commands = [];
      commands.push(profilTypeCode.toLowerCase());

      if (profilTypeCode === profil.APPORTEUR && utilisateur) {
        commands.push(utilisateur.grcId);
      }

      commands.push('contrats');
      commands.push(this.risqueSegment);
      commands.push(this.numeroContrat);

      this.router.navigate(commands, { queryParams: route.queryParams });
    } else {
      this.router.navigate([ROUTING_PATH.ERROR_404]);
    }

  }

}
