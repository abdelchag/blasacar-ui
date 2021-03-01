import { AbstractControl, FormArray, FormGroup } from '@angular/forms';

import * as moment from 'moment';

import { environment } from 'src/environments/environment';

import {
  AyantDroitModel,
  ContratModel,
  DocumentModel,
  EcheanceModel,
  InformationModel,
  JustificatifToUploadModel,
  PersonneModel,
  StructureCotisationModel
} from 'src/app/shared/models';

import {
  ayantDroitQualite,
  ayantDroitStatut,
  civilite,
  genre,
  profil,
  rattachements,
  regroupementTauxItems,
  reseauCode,
  risque
} from './constants';

export class Helpers {

  static showErrors(formGroup: FormGroup): void {
    // TODO Yannick Utiliser formGroug.markAllAsTouched() après la migration vers Angular 10
    this.markAllAsTouched(formGroup);

    setTimeout(() => {
      this.scrollToFirstError();
    }, 100);
  }

  static markAllAsTouched(control: AbstractControl): void {
    control.markAsTouched({ onlySelf: true });
    control.updateValueAndValidity({ onlySelf: true, emitEvent: true });

    if (control instanceof FormGroup) {
      Object.keys(control.controls).forEach(key => {
        this.markAllAsTouched(control.controls[key]);
      });
    }

    if (control instanceof FormArray) {
      control.controls.forEach(c => {
        this.markAllAsTouched(c);
      });
    }

  }

  static scrollToFirstError(): void {
    // TODO : JEDE 18/06/2020 - Prendre en compte les champs avec masque de saisie
    const firstElementWithError = document.querySelector('input.ng-touched.ng-invalid, textarea.ng-touched.ng-invalid, select.ng-touched.ng-invalid');
    if (firstElementWithError) {
      Helpers.scrollTo(firstElementWithError);
    }
  }

  /**
   * Détermine l'age actuel en fonction de la date de naissance
   */
  static getAge(dateNaissance: Date): number {
    const today = new Date();

    const frenchDate = moment(dateNaissance, 'DD/MM/YYYY', true);
    const parsedDateNaissance = frenchDate.toDate();

    const month = today.getMonth() - parsedDateNaissance.getMonth();

    let age = today.getFullYear() - parsedDateNaissance.getFullYear();
    if (
      month < 0 ||
      (month === 0 && today.getDate() < parsedDateNaissance.getDate())
    ) {
      age--;
    }

    return age;
  }

  /**
   * calculer le nombre de mois entre deux dates
   */
  static monthDiff(dateFrom: Date, dateTo: Date): number {

    const parsedDateFrom = moment(dateFrom, 'DD/MM/YYYY', true).toDate();
    const parsedDateTo = moment(dateTo, 'DD/MM/YYYY', true).toDate();

    return parsedDateTo.getMonth() - parsedDateFrom.getMonth() + (12 * (parsedDateTo.getFullYear() - parsedDateFrom.getFullYear()));
  }

  /**
   * Détermine si une date est supérieure au nombre d'années spécifié
   */
  static isAgeOverThan(dateNaissance: Date, ageDeReference: number): boolean {
    return Helpers.getAge(dateNaissance) >= ageDeReference;
  }


  /**
   * Détermine si une date est inferieur au nombre d'années spécifié
   */
  static isAgeUnderThan(dateNaissance: Date, ageDeReference: number): boolean {
    return Helpers.getAge(dateNaissance) <= ageDeReference;
  }

  /**
   * Convertit un objet Date vers une chaine de caractères représentant cette date
   * @param date Objet Date à convertir
   */
  static convertDateToString(date: Date): string {
    return date.toLocaleDateString('fr-FR');
  }

  static compareString(string1: string, string2: string): number {
    if (string1 < string2) {
      return -1;
    }
    if (string1 > string2) {
      return 1;
    }
    return 0;
  }

  /**
   * Permet de calculer le module 97 d'un entier
   */
  static mod97(strNumber: string): number {

    let checksum: any = strNumber.slice(0, 2);
    let fragment;

    for (let offset = 2; offset < strNumber.length; offset += 7) {
      fragment = String(checksum) + strNumber.substring(offset, offset + 7);
      checksum = parseInt(fragment, 10) % 97;
    }

    return checksum;
  }

  static groupBy<T>(source: T[], key: string): { [key: string]: T[] } {

    const result: { [key: string]: T[] } = {};

    for (const item of source) {
      const value = item[key];

      if (!result[value]) {
        result[value] = [];
      }

      result[value].push(item);
    }

    return result;
  }

  // TODO Supprimer et utiliser le pipe rattachement
  static getRattachementLibelle(rattachementCode: string): string | undefined {

    const rattachementItem = rattachements.find((x: { code: string }) => x.code === rattachementCode);

    if (rattachementItem) {
      return rattachementItem.libelle;
    } else {
      return rattachementCode;
    }
  }

  /*permet de convertir un code civilité en code de genre
  */
  static convertCiviliteCodeToGenreCode(civiliteCode: string): string {
    switch (civiliteCode) {
      case civilite.MONSIEUR:
        return genre.MASCULIN;
      case civilite.MADAME:
        return genre.FEMININ;
    }
  }

  static convertGenreCodeToCiviliteCode(genreCode: string): string {
    switch (genreCode) {
      case genre.MASCULIN:
        return civilite.MONSIEUR;
      case genre.FEMININ:
        return civilite.MADAME;
    }
  }

  static checkDateWithinRange(currentDate: number, startDate: number, endDate: number): boolean {

    if (currentDate > startDate && currentDate < endDate) {
      return true;
    }
    return false;
  }

  static getQualiteLibelle(qualite: string): string {
    switch (qualite) {
      case ayantDroitQualite.CONJOINT:
        return 'conjoint';
      case ayantDroitQualite.ENFANT:
        return 'enfant';
      default:
        return '';
    }
  }

  static isAuthorizedProfile(profilTypeCode: string): boolean {
    return profilTypeCode === profil.ENTREPRISE || profilTypeCode === profil.TNS
      || profilTypeCode === profil.SALARIE || profilTypeCode === profil.APPORTEUR
      || profilTypeCode === profil.AYANTDROIT;
  }

  static isGanEurocourtage(code: string): boolean {
    return code === reseauCode.GANEURO;
  }

  static isGanAssurances(code: string): boolean {
    return code === reseauCode.GANASS;
  }

  static isGanPrevoyance(code: string): boolean {
    return code === reseauCode.GANPREV;
  }

  static isGroupama(code: string): boolean {
    return [reseauCode.GROUPAMA, reseauCode.GROUPAMAOI].some(o => o === code);
  }

  static isGan(code: string): boolean {
    return [reseauCode.GANEURO, reseauCode.GANASS, reseauCode.GANPREV].some(o => o === code);
  }

  static isJustificatifValid(justificatifToUpload: JustificatifToUploadModel): boolean {
    if (justificatifToUpload.justificatif) {
      return Boolean(justificatifToUpload.justificatif.data);
    } else {
      return false;
    }
  }

  static replaceAccents(str: string): string {
    if (str.search(/[\xC0-\xFF]/g) > -1) {
      str = str
        .replace(/[\xC0-\xC5]/g, 'A')
        .replace(/[\xC6]/g, 'AE')
        .replace(/[\xC7]/g, 'C')
        .replace(/[\xC8-\xCB]/g, 'E')
        .replace(/[\xCC-\xCF]/g, 'I')
        .replace(/[\xD0]/g, 'D')
        .replace(/[\xD1]/g, 'N')
        .replace(/[\xD2-\xD6\xD8]/g, 'O')
        .replace(/[\xD9-\xDC]/g, 'U')
        .replace(/[\xDD]/g, 'Y')
        .replace(/[\xDE]/g, 'P')
        .replace(/[\xE0-\xE5]/g, 'a')
        .replace(/[\xE6]/g, 'ae')
        .replace(/[\xE7]/g, 'c')
        .replace(/[\xE8-\xEB]/g, 'e')
        .replace(/[\xEC-\xEF]/g, 'i')
        .replace(/[\xF1]/g, 'n')
        .replace(/[\xF2-\xF6\xF8]/g, 'o')
        .replace(/[\xF9-\xFC]/g, 'u')
        .replace(/[\xFE]/g, 'p')
        .replace(/[\xFD\xFF]/g, 'y');
    }
    return str;
  }

  static modelHasSameValue<D, S>(destination: D, source: S): boolean {
    const destinationKeys = Object.keys(destination);
    for (const key of destinationKeys) {

      if (source.hasOwnProperty(key)) {
        const sourceValue = source[key];
        const destinationValue = destination[key];

        if (typeof destination[key] === 'object' && Boolean(destination[key])) {
          this.modelHasSameValue(destination[key], source[key]);
        } else {
          if (sourceValue !== destinationValue) {
            return false;
          }
        }
      }
    }

    return true;
  }

  /* Permet de determiner la date d'inscription à partir de la date d'entré du salarié */
  static computeDateInscription(dateEntree: Date): string {
    const currentDate = new Date();

    return Helpers.convertDateToString(dateEntree > currentDate ? dateEntree : currentDate);

  }

  static reloadPage(): void {
    window.location.href = `/?c=${Date.now()}`;
  }

  static hasAyantDroitSortieDemandee(ayantDroit: AyantDroitModel): boolean {
    return Boolean(ayantDroit.dateRadiation)
      && ayantDroit.statut === ayantDroitStatut.SignatureInitie;
  }

  static compareDocument(a: DocumentModel, b: DocumentModel): number {
    return a.libelle.localeCompare(b.libelle)
      || Helpers.compareDate(moment(a.dateCreation, 'DD/MM/YYYY', true), moment(b.dateCreation, 'DD/MM/YYYY', true));
  }

  static compareDate(a: moment.Moment, b: moment.Moment): number {
    if (a.isAfter(b)) {
      return -1;
    }
    if (a.isBefore(b)) {
      return 1;
    }
    return 0;
  }

  static convertToJustificatifArray(pieces: any[]): JustificatifToUploadModel[] {
    return pieces.map(groupePiece => {
      const justificatif = new JustificatifToUploadModel();
      justificatif.piecesPossibles = groupePiece.pieces;
      justificatif.isObligatoire = groupePiece.pieces.some((y: { isObligatoire: boolean; }) => y.isObligatoire);
      justificatif.titre = groupePiece.libelle;
      return justificatif;
    });
  }

  static sortAyantDroit(a: AyantDroitModel, b: AyantDroitModel): number {
    if (a.qualite === ayantDroitQualite.CONJOINT) {
      return -1;
    }
    if (b.qualite === ayantDroitQualite.CONJOINT) {
      return 1;
    }
    if (a.qualite === ayantDroitQualite.ENFANT && b.qualite === ayantDroitQualite.ENFANT) {
      const dateA = moment(a.dateNaissance, 'DD/MM/YYYY', true);
      const dateB = moment(b.dateNaissance, 'DD/MM/YYYY', true);
      if (dateA.isSame(dateB)) {
        return;
      }
      return dateA.isSameOrAfter(dateB) ? 1 : -1;
    }
    return 0;
  }

  static getDateDebutRoMin(personne: PersonneModel, dateAffiliation: Date | string): Date | string {

    const dateNaissanceMoment = moment(personne.dateNaissance, 'DD/MM/YYYY', true);
    const dateAffiliationMoment = moment(dateAffiliation, 'DD/MM/YYYY', true);

    if (dateNaissanceMoment.isAfter(dateAffiliationMoment)) {
      return personne.dateNaissance;
    } else {
      return dateAffiliation;
    }
  }

  static scrollTo(el: Element): void {
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }

  static getTotalEcheances(echeances: EcheanceModel[], paiementStatus?: string): number {
    const filteredEcheances = echeances
      .filter(e => paiementStatus
        ? e.paiementStatus === paiementStatus
        : true);

    let total = 0;
    for (const echeance of filteredEcheances) {
      total += echeance.montant;
    }
    return total;
  }

  static getRegroupementTauxItem(code: string): any {
    return regroupementTauxItems
      .find(item => item.code === code);
  }

  static getStructuresCotisation(structuresCotisation: StructureCotisationModel[], withNonPrecompte: boolean): StructureCotisationModel[] {

    const structures: StructureCotisationModel[] = [];

    structuresCotisation.forEach(str => {

      const structure: StructureCotisationModel = { ...str };

      structure.regroupementsTaux = str.regroupementsTaux
        .filter(r => withNonPrecompte || !r.hasNonPrecompte);

      if (!!structure.regroupementsTaux.length) {
        structure.regroupementsTaux
          .sort((a, b) => {
            const itemA = this.getRegroupementTauxItem(a.code);
            const itemB = this.getRegroupementTauxItem(b.code);

            if (!itemA || !itemB) {
              return 0;
            }

            return itemA.ordre - itemB.ordre;
          });

        structures.push(structure);
      }
    });

    return structures;
  }
}

export function isConjoint(qualite: string): boolean {
  return qualite.toUpperCase() === ayantDroitQualite.CONJOINT;
}

export function isEnfant(qualite: string): boolean {
  return qualite.toUpperCase() === ayantDroitQualite.ENFANT;
}

export function frenchDateToISO(date: string): string {
  return moment(date, 'DD/MM/YYYY', true).toISOString();
}

export function isOffreDediee(contrat: ContratModel): boolean {
  return contrat.description && contrat.codeProduit.includes('CCN');
}

export function deepClone<T>(value: T): T {
  // TODO JEDE 03/12/2020 - NOVASFC-2110 - Etudier une meilleure solution pour la copie complète d'un objet
  // Développement d'une méthode "maison" ou utilisation d'une librairie tierce comme lodash
  return JSON.parse(JSON.stringify(value)) as T;
}
