import { ListItemModel } from 'src/app/shared/models';

const letterPattern = 'A-Za-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC';

export const nounPattern = `^[${letterPattern}]+([. '’-]{0,2}[${letterPattern}]+)*`;
export const nounAndNumberPattern = `^[0-9${letterPattern}]+([. '’-]{0,2}[0-9${letterPattern}\d]+)*`;

export const passwordPattern = `^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$`;

export const cotisationStatus = {
  PAID: 'PAID',
  PAYING: 'PAYING',
  REJECTED: 'REJECTED',
  WAITING: 'WAITING'
};

export const modePaiement = {
  CHEQUE: 'CH',
  LETTRE_CHEQUE: 'LC',
  PRELEVEMENT: 'PF',
  PRELEVEMENT_AUTOMATIQUE: 'PA',
  VIREMENT_AUTOMATIQUE: 'VA',
  VIREMENT_PONCTUEL: 'VP'
};

export const situationMaritale = {
  CELIBATAIRE: 'C',
  MARIE: 'M',
};

export const rattachement = {
  MOI: 'MOI',
  CONJOINT: 'CONJOINT',
  MOI_ET_CONJOINT: 'MOI_ET_CONJOINT',
  AUTRE: 'AUTRE',
  MOI_ET_AUTRE: 'MOI_ET_AUTRE',
  CONJOINT_ET_AUTRE: 'CONJOINT_ET_AUTRE'
};

// TODO Migrer vers rattachementsPersonne
export const rattachements = [
  { code: rattachement.MOI, libelle: 'à moi' },
  { code: rattachement.CONJOINT, libelle: 'à mon conjoint' },
  { code: rattachement.MOI_ET_CONJOINT, libelle: 'à moi et à mon conjoint' },
  { code: rattachement.AUTRE, libelle: 'autre' },
  { code: rattachement.MOI_ET_AUTRE, libelle: 'à moi et autre' },
  { code: rattachement.CONJOINT_ET_AUTRE, libelle: 'à mon conjoint et autre' }
];

export const rattachementsPersonne = {
  [rattachement.MOI]: 'à moi',
  [rattachement.CONJOINT]: 'à mon conjoint',
  [rattachement.MOI_ET_CONJOINT]: 'à moi et à mon conjoint',
  [rattachement.AUTRE]: 'à un autre parent',
  [rattachement.MOI_ET_AUTRE]: 'à moi et à un autre parent',
  [rattachement.CONJOINT_ET_AUTRE]: 'à mon conjoint et à un autre parent'
};

export const rattachementsEntreprise = {
  [rattachement.MOI]: 'au salarié',
  [rattachement.CONJOINT]: 'au conjoint du salarié',
  [rattachement.MOI_ET_CONJOINT]: 'au salarié et à son conjoint',
  [rattachement.AUTRE]: 'à un autre parent',
  [rattachement.MOI_ET_AUTRE]: 'au salarié et à un autre parent',
  [rattachement.CONJOINT_ET_AUTRE]: 'au conjoint du salarié et à un autre parent'
};

export const rangs = [
  { code: '1', libelle: '1' },
  { code: '2', libelle: '2' },
  { code: '3', libelle: '3' },
  { code: '4', libelle: '4' },
  { code: '5', libelle: '5' }
];

export const faqGroups = {
  GERER_MES_SALARIES: 'GERER_MES_SALARIES',
  MES_CONTRATS: 'MES_CONTRATS',
  MES_COTISATIONS: 'MES_COTISATIONS',
  MES_DONNEES_PERSONNELLES: 'MES_DONNEES_PERSONNELLES',
  MES_FACTURES: 'MES_FACTURES',
  MES_OPERATIONS_DE_GESTION: 'MES_OPERATIONS_DE_GESTION',
  MES_SERVICES_SANTE: 'MES_SERVICES_SANTE',
  MON_COMPTE: 'MON_COMPTE',
  MON_ENTREPRISE: 'MON_ENTREPRISE'
};

export const statut = {
  ASIGNER: 'ASIGNER',
  SIGNATURE_EN_COURS: 'SIGNATUREENCOURS',
  SIGNATURE_PARTIELLE: 'SIGNATUREPARTIELLE',
  FINALISE: 'FINALISE',
  REMPLACE: 'REMPLACE'
};

export const risque = {
  SANTE: 'S',
  PREVOYANCE: 'P'
};

export const risques = [
  { code: risque.SANTE, libelle: 'Santé' },
  { code: risque.PREVOYANCE, libelle: 'Prévoyance' }
];

export const college = {
  TNS: 'T',
  CADRE: 'C',
  NON_CADRE: 'NC',
  ENSEMBLE_DU_PERSONNEL: 'E'
};

export const collegeObjectifs = [
  { code: 'CADR', nombreMois: 0 },
  { code: 'CADR1', nombreMois: 0 },
  { code: 'CADR1ANC12', nombreMois: 12 },
  { code: 'CADR1ANC3', nombreMois: 3 },
  { code: 'CADR1ANC6', nombreMois: 6 },
  { code: 'CADR2', nombreMois: 0 },
  { code: 'CADR2ANC12', nombreMois: 12 },
  { code: 'CADR2ANC3', nombreMois: 3 },
  { code: 'CADR2ANC6', nombreMois: 6 },
  { code: 'CADR3', nombreMois: 0 },
  { code: 'ENS', nombreMois: 0 },
  { code: 'ENSANC12', nombreMois: 12 },
  { code: 'ENSANC3', nombreMois: 3 },
  { code: 'ENSANC6', nombreMois: 6 },
  { code: 'NCADR', nombreMois: 0 },
  { code: 'NCADR1', nombreMois: 0 },
  { code: 'NCADR1ANC12', nombreMois: 12 },
  { code: 'NCADR1ANC3', nombreMois: 3 },
  { code: 'NCADR1ANC6', nombreMois: 6 },
  { code: 'NCADR2', nombreMois: 0 },
  { code: 'NCADR2ANC12', nombreMois: 12 },
  { code: 'NCADR2ANC3', nombreMois: 3 },
  { code: 'NCADR2ANC6', nombreMois: 6 },
  { code: 'NCADR3', nombreMois: 0 },
  { code: 'CADRE', nombreMois: 0 },
  { code: 'NON CADRE', nombreMois: 0 },
  { code: 'ENSEMBLE', nombreMois: 0 },
  { code: 'TNS', nombreMois: 0 },
];

export const collegesSalaries = [
  { code: college.CADRE, libelle: 'Cadre' },
  { code: college.NON_CADRE, libelle: 'Non cadre' },
];

export const collegesPersonne: ListItemModel[] = [
  { code: college.CADRE, libelle: 'Cadre' },
  { code: college.NON_CADRE, libelle: 'Non cadre' }
];

export const profil = {
  ENTREPRISE: 'ENTREPRISE',
  TNS: 'TNS',
  SALARIE: 'SALARIE',
  APPORTEUR: 'APPORTEUR',
  AYANTDROIT: 'AYANT_DROIT'
};

export const ayantDroitQualite = {
  CONJOINT: 'C',
  ENFANT: 'E',
  AUTRES: 'D'
};

export const ayantDroitQualites = [
  { code: ayantDroitQualite.CONJOINT, libelle: 'Conjoint(e)' },
  { code: ayantDroitQualite.ENFANT, libelle: 'Enfant' }
];

export const clauseBeneficiaire = {
  STANDARD: 'STANDARD',
  PARTICULIERE: 'PARTICULIERE'
};

export const sidebarWidgets = {
  MES_DERNIERES_FACTURES: 'MES_DERNIERES_FACTURES',
  MES_DOCUMENTS: 'MES_DOCUMENTS',
  MES_FACTURES: 'MES_FACTURES',
  MON_HISTORIQUE: 'MON_HISTORIQUE',
  PUBLICITE_ENGAGEMENT: 'PUBLICITE_ENGAGEMENT',
  TOUTES_MES_FACTURES: 'TOUTES_MES_FACTURES'
};

export const documentTypeCode = {
  ATTESTATION_FISCALE: 'ATTESTATION_FISCALE',
  ATTESTATION_MADELIN: 'ATTESTATION_MADELIN',
  ATTESTATION_SS: 'ATTESTATION_SS',
  ATTESTATION_TIERS_PAYANT: 'ATTESTATION_TIERS_PAYANT',
  AVENANT_FISCALITE: 'AVENANT_FISCALITE',
  AVENANT: 'AVENANT',
  AVIS_ECHEANCE_ANNUELLE: 'AVIS_ECHEANCE_ANNUELLE',
  AVIS_OPERATION_DECOMPTE_COTISATION: 'AVIS_OPERATION_DECOMPTE_COTISATION',
  BORDEREAU_APPEL_COTISATION: 'BORDEREAU_APPEL_COTISATION',
  BORDEREAU_COTISATIONS: 'BORDEREAU_COTISATIONS',
  CARTE_ASSISTANCE: 'CARTE_ASSISTANCE',
  CERTIFICAT_ADHESION: 'CERTIFICAT_ADHESION',
  CERTIFICAT_AFFILIATION: 'CERTIFICAT_AFFILIATION',
  CERTIFICAT_RADIATION: 'CERTIFICAT_RADIATION',
  CNI: 'CNI',
  CONDITION_GENERAL: 'CONDITION_GENERAL',
  CONDITION_PARTICULIERE: 'CONDITION_PARTICULIERE',
  CONDITIONS_PARTICULIERES_ENTRANTES: 'CONDITIONS_PARTICULIERES_ENTRANTES',
  CONDITION_PARTICULIERE_SORTANTE: 'CONDITION_PARTICULIERE_SORTANTE',
  COURRIER_ACCOMPAGNEMENT: 'COURRIER_ACCOMPAGNEMENT',
  COURRIER_GESTION: 'COURRIER_GESTION',
  COURRIER_MANDAT_PRELEVEMENT_SEPA: 'COURRIER_MANDAT_PRELEVEMENT_SEPA',
  DA: 'DA',
  DECLARATION_ADHESION: 'DECLARATION_ADHESION',
  DESIGNIATION_BENEFICIAIRE: 'DESIGNIATION_BENEFICIAIRE',
  DEMANDE_INDEMNITE_JOURANLIERE: 'DEMANDE_INDEMNITE_JOURANLIERE',
  ATTESTATION_MEDICALE_CONFIDENTIELLE: 'ATTESTATION_MEDICALE_CONFIDENTIELLE',
  DECLARATION_ARRET_TRAVAIL: 'DECLARATION_ARRET_TRAVAIL',
  ECHEANCIER_COTISATIONS: 'ECHEANCIER_COTISATIONS',
  ECHEANCIER_PRELEVEMENT: 'ECHEANCIER_PRELEVEMENT',
  KBIS: 'KBIS',
  LETTRE_CIRCULARISATION: 'LETTRE_CIRCULARISATION',
  LETTRE_CLIENT_SIGNEE: 'LETTRE_CLIENT_SIGNEE',
  LETTRE_INTERMEDIATION_SIGNEE: 'LETTRE_INTERMEDIATION_SIGNEE',
  MISE_DEMEURE_LR: 'MISE_DEMEURE_LR',
  NOTICE_INFORMATION: 'NOTICE_INFORMATION',
  QUESTION_SANTE: 'QUESTION_SANTE',
  RECAP_REMBOURSEMENT_SOINS: 'RECAP_REMBOURSEMENT_SOINS',
  RIB: 'RIB',
  SEPA: 'SEPA',
  STATUTS_SIGNES: 'STATUTS_SIGNES',
  TABLEAU_GARANTIE: 'TABLEAU_GARANTIE'
};

export const documentSource = {
  GED: 'GED',
  MIDDLE: 'MIDDLE'
};

export const civilite = {
  MONSIEUR: 'M',
  MADAME: 'MME',
  INDETERMINE: 'Indeternimé'
};

export const civilites: ListItemModel[] = [
  { code: civilite.MADAME, libelle: 'Madame' },
  { code: civilite.MONSIEUR, libelle: 'Monsieur' },
  { code: civilite.INDETERMINE, libelle: 'Indeternimé' }
];

export const genre = {
  MASCULIN: 'M',
  FEMININ: 'F'
};

export const genres = [
  { code: genre.FEMININ, libelle: 'Féminin' },
  { code: genre.MASCULIN, libelle: 'Masculin' }
];

export const categorie = {
  DOCUMENTS_CONTRACTUELS: 'DOCUMENTS_CONTRACTUELS',
  COTISATIONS: 'COTISATIONS',
  MODELES: 'MODELES',
  ATTESTATIONS: 'ATTESTATIONS',
  REMBOURSEMENTS_SANTE: 'REMBOURSEMENTS_SANTE',
  JUSTIFICATIFS: 'JUSTIFICATIFS',
  ECHANGES_ASSUREUR: 'ECHANGES_ASSUREUR'
};

export const httpErrorCode = {
  Ok: 400,
  BadRequest: 400,
  Unauthorized: 401,
  NotFound: 404,
  InternalServerError: 500
};

export const webApiErrorCode = {
  ERRORLOGIN: '001'
};

export const statutPieceJustificative = {
  aCollecter: 'à collecter',
  aValider: 'à valider',
  valide: 'validé',
};

export const situationFamiliale = {
  CELIBATAIRE: 'C',
  MARIE: 'M',
  VEUF: 'V',
  DIVORCE: 'D',
  PACSE: 'P',
  VIE_MARITALE: 'N'
};

export const situationsFamiliales = [
  { code: situationFamiliale.CELIBATAIRE, libelle: 'Célibataire', couple: false },
  { code: situationFamiliale.MARIE, libelle: 'Marié(e)', couple: true },
  { code: situationFamiliale.VEUF, libelle: 'Veuf(ve)', couple: false },
  { code: situationFamiliale.DIVORCE, libelle: 'Divorcé(e)', couple: false },
  { code: situationFamiliale.PACSE, libelle: 'Pacsé(e)', couple: true },
  { code: situationFamiliale.VIE_MARITALE, libelle: 'Vie maritale', couple: true }
];

export const projetRefusRaisonCode = {
  erreurFormule: 'ERREUR_FORMULE',
  garantiesInsuffisantes: 'GARANTIES_INSUFFISANTES',
  informationSouscripteurErronees: 'INFORMATIONS_SOUSCRIPTEUR_ERRONEES',
  autre: 'AUTRE'
};

export const projetRefusRaisons = [
  { code: projetRefusRaisonCode.erreurFormule, libelle: 'Erreur sur la formule' },
  { code: projetRefusRaisonCode.garantiesInsuffisantes, libelle: 'Garanties insuffisantes' },
  { code: projetRefusRaisonCode.informationSouscripteurErronees, libelle: 'Informations souscripteur erronées' },
  { code: projetRefusRaisonCode.autre, libelle: 'Autre' },
];

export const typeAdresseCode = {
  AUTRE: 'AUTRE',
  DOMICILE: 'DOMICILE',
  FISCALE: 'FISCALE',
  TEMPORAIRE: 'TEMPORAIRE'
};

export const periodicite = {
  ANNUEL: 'A',
  SEMESTRIEL: 'S',
  TRIMESTRIEL: 'T',
  MENSUEL: 'M'
};

export const ayantDroitStatut = {
  Creation: 'CREATION',
  Complet: 'COMPLET',
  EnAttentePj: 'EN_ATTENTE_PJ',
  EnAttenteSignature: 'EN_ATTENTE_SIGNATURE',
  EncoursSuppression: 'EN_COURS_SUPPRESSION',
  Doublon: 'DOUBLON',
  DoublonEnAttenteSignature: 'DOUBLON_EN_ATTENTE_SIGNATURE',
  DoublonAvecSignatureInitie: 'DOUBLON_SIGNATURE_INITIE',
  DoublonEnAttenteCleva: 'DOUBLON_EN_ATTENTE_CLEVA',
  SignatureInitie: 'SIGNATURE_INITIE',
  EstAjouteAuContrat: 'EST_AJOUTE_CONTRAT',
  EstAjouteAuContratSansPj: 'EST_AJOUTE_CONTRAT_SANS_PJ',
  EnAttenteAjout: 'EN_ATTENTE_AJOUT',
  EnAttenteCotisation: 'EN_ATTENTE_COTISATION'
};

export const reseauCode = {
  GANASS: 'GA',
  GANEURO: 'GE',
  GANPREV: 'GP',
  GROUPAMA: 'GR',
  GROUPAMAOI: 'GOI'
};

export const themeCode = {
  GANEURO: 'theme-ganeur',
  GANASS: 'theme-ganass'
};

export enum NotificationType {
  Error = 'danger',
  Success = 'success',
  Information = 'info',
  Attention = 'warning',
  Clear = 'clear'
}

export const modeleAdhesion = {
  ASSOCIATION: 'ASSOCIATION',
  ISOLE_TNS: 'ISOLE_TNS',
  FAMILLE_MADELIN_PARTIEL_TNS: 'FAMILLE_MADELIN_PARTIEL_TNS',
  FAMILLE_MADELIN_TOTAL_TNS: 'FAMILLE_MADELIN_TOTAL_TNS',
  FAMILLE_TNS: 'FAMILLE_TNS'
};

export const regroupementTaux = {
  SALARIE: 'A',
  SALARIE_SEUL: 'SALARIE_SEUL',
  CONJOINT: 'C',
  ENFANT_0: 'E/0',
  ENFANT_1: 'E/1',
  ENFANT_2: 'E/2',
  ISOLE: 'ISOLE',
  DUO: 'DUO',
  FAMILLE: 'FAMILLE',
  salarie_1E: '1E',
  salarie_2E: '2E',
  salarie_Conjoint_2E: 'C2E',
  FAMILLE_SANS_CONJOINT: 'FAMILLE_SANS_CONJOINT',
  TRANCHE_A: 'SAR_SAL_A_TRA_A',
  TRANCHE_B: 'SAR_SAL_A_TRA_B',
  TRANCHE_C: 'SAR_SAL_A_TRA_C'
};

export const regroupement = {
  ISOLE_DUO_FAMILLE_SOCLE: 'SSES1_ISOLE_DUO_FAMILLE',
  ISOLE_DUO_FAMILLE_OPTION: 'SSEO1_ISOLE_DUO_FAMILLE',
  SALARIE_CONJOINT_ENFANT_SOCLE: 'SSES1_SALARIE_CONJOINT_ENFANT',
  SALARIE_CONJOINT_ENFANT_OPTION: 'SSEO1_SALARIE_CONJOINT_ENFANT',
  SSCS1_FAMILLE_SANS_CONJOINT: 'SSCS1_FAMILLE_SANS_CONJOINT',
  SSCO1_SYNTEC: 'SSCO1_SYNTEC'
};

export const regroupementTauxItems = [
  { code: regroupementTaux.SALARIE, libelle: 'Salarié', ordre: 1 },
  { code: regroupementTaux.CONJOINT, libelle: 'Conjoint', ordre: 2 },
  { code: regroupementTaux.ENFANT_0, libelle: 'Enfant', ordre: 3 },
  { code: regroupementTaux.ENFANT_1, libelle: 'Enfant', ordre: 3 },
  { code: regroupementTaux.ENFANT_2, libelle: 'Enfant 2', ordre: 4 },
  { code: regroupementTaux.ISOLE, libelle: 'Isolé', ordre: 5 },
  { code: regroupementTaux.DUO, libelle: 'Duo', ordre: 6 },
  { code: regroupementTaux.FAMILLE, libelle: 'Famille', ordre: 7 },
  { code: regroupementTaux.FAMILLE_SANS_CONJOINT, libelle: 'Famille sans conjoint', ordre: 8 },
  { code: regroupementTaux.TRANCHE_A, libelle: 'Tranche A', ordre: 9 },
  { code: regroupementTaux.TRANCHE_B, libelle: 'Tranche B', ordre: 10 },
  { code: regroupementTaux.TRANCHE_C, libelle: 'Tranche C', ordre: 11 }
];

export const faqFiltreAffichage = {
  TOUS: 'TOUS',
  SANTE: 'SANTE',
  PREVOYANCE: 'PREVOYANCE'
};

export const allowedContentType = [
  {
    type: 'application/pdf',
    extensions: ['pdf']
  },
  {
    type: 'application/msword',
    extensions: ['doc', 'dot']
  },
  {
    type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    extensions: ['docx']
  },
  {
    type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.template',
    extensions: ['dotx']
  },
  {
    type: 'image/bmp',
    extensions: ['bmp']
  },
  {
    type: 'text/html',
    extensions: ['html', 'htm', 'shtml']
  },
  {
    type: 'image/jpeg',
    extensions: ['jpeg', 'jpg', 'jpe']
  },
  {
    type: 'application/vnd.oasis.opendocument.text',
    extensions: ['odt']
  },
  {
    type: 'image/png',
    extensions: ['png']
  },
  {
    type: 'text/plain',
    extensions: ['txt', 'text', 'conf', 'def', 'list', 'log', 'in', 'ini']
  },
  {
    type: 'image/tiff',
    extensions: ['tif', 'tiff']
  }
];

export const jourPrelevement = {
  LE5: 5,
  LE20: 20
};

export const jourPrelevementOptions = [
  { code: jourPrelevement.LE5, libelle: 'Le 5 du mois' },
  { code: jourPrelevement.LE20, libelle: 'Le 20 du mois' }
];

export const regleCollecteJustificatif = {
  RECTO: 'RECTO',
  VERSO: 'VERSO',
  RECTOVERSO: 'RECTOVERSO'
};

export const localStorage = {
  AFFILIATION_SALARIE: 'AFFILIATION_SALARIE'
};

export const yesNoOptions = [
  { code: '1', libelle: 'Oui' },
  { code: '2', libelle: 'Non' },
];

export const trueFalseOptions = [
  { code: 'true', libelle: 'Oui' },
  { code: 'false', libelle: 'Non' },
];

export const isoCountryCodes = {
  FRANCE: 'FR',
  MONACO: 'MC'
};

export const salarieStatut = {
  Affilie: 'AFFILIE',
  Complet: 'COMPLET',
  Doublon: 'DOUBLON',
  EnAttente: 'EN_ATTENTE',
  Brouillon: 'BROUILLON',
  EnAttenteComplet: 'EN_ATTENTE_COMPLET',
  EnAttenteForcage: 'EN_ATTENTE_FORCAGE',
  EnAttentePj: 'EN_ATTENTE_PJ',
  EnAttenteSignatureSalarie: 'EN_ATTENTE_SIGNATURE_SALARIE',
  EnAttenteSignature: 'EN_ATTENTE_SIGNATURE',
  EnAttenteAffiliationSalarie: 'EN_ATTENTE_AFFILIATION_SALARIE',
  EnGrcCleva: 'EN_GRC_CLEVA',
  Radie: 'RADIE',
  PrevoyanceEnAttenteSignature: 'PREV_ATTENTE_SIGNATURE',
  PrevoyanceEnAttenteTraitementCleva: 'PREV_ATTENTE_TRAITEMENT_CLEVA',
  PrevoyanceEnAttenteTraitementGed: 'PREV_ATTENTE_TRAITEMENT_GED',
  SanteEnAttenteSignature: 'SANTE_EN_ATTENTE_SIGNATURE',
  SanteEnAttenteTraitementCleva: 'SANTE_ATTENTE_TRAITEMENT_CLEVA',
  SanteEnAttenteTraitementGed: 'SANTE_ATTENTE_TRAITEMENT_GED',
  TransmisAuSalarie: 'TRANSMIS_AU_SALARIE',
  changementFormuleCotisation: 'CHANGEMENT_FORMULE_COTISATION'
};


export const salarieStatutFiltre = {
  Affilie: 'AFFILIE',
  Brouillon: 'BROUILLON',
  EnAttenteSignature: 'EN_ATTENTE_SIGNATURE',
  Radie: 'RADIE',
  TransmisAuSalarie: 'TRANSMIS_AU_SALARIE'
};

export const salarieStatutFiltres = [
  { code: salarieStatutFiltre.Affilie, libelle: 'Affilié' },
  { code: salarieStatutFiltre.Brouillon, libelle: 'Brouillon' },
  // { code: salarieStatutFiltre.EnAttenteSignature, libelle: 'En attente signature' },
  { code: salarieStatutFiltre.TransmisAuSalarie, libelle: 'Transmis salarié' },
  { code: salarieStatutFiltre.Radie, libelle: 'Résilié' }
];

export const isoCountrylibelle = {
  FRANCE: 'FRANCE'
};

export const affilieTypes = [
  { id: 1, code: 'S', libelle: 'Salarié', ordre: 1 },
  { id: 2, code: 'P', libelle: 'Portabilité', ordre: 2 },
  { id: 3, code: 'R', libelle: 'Retraité', ordre: 3 },
  { id: 4, code: 'RE', libelle: 'Résilié', ordre: 4 }
];

export const successMessage = {
  SUCCESS_MAIL_RELANCE: 'Votre relance a bien été effectuée'
};

export const salarieAffiliationStatut = {
  EnAttente: 0,
  Affilie: 1,
  Radie: 2,
};

export const motifRadiation = {
  RAS_RET_01: 'RAS_RET_01',
  RAS_RET_02: 'RAS_RET_02',
  RAS_RET_03: 'RAS_RET_03',
  RAS_RET_04: 'RAS_RET_04',
  RAS_RET_05: 'RAS_RET_05',
  RAS_RET_06: 'RAS_RET_06',
  RAS_RET_07: 'RAS_RET_07',
  RAS_RET_08: 'RAS_RET_08',
  RAS_RET_09: 'RAS_RET_09',
  RAS_RET_10: 'RAS_RET_10',
  RAS_RET_11: 'RAS_RET_11'
};

export const motifsRadiation = [
  { code: motifRadiation.RAS_RET_07, libelle: 'Autre motif de fin de contrat' },
  { code: motifRadiation.RAS_RET_01, libelle: 'Changement de collège' },
  { code: motifRadiation.RAS_RET_11, libelle: 'Décès' },
  { code: motifRadiation.RAS_RET_05, libelle: 'Démission' },
  { code: motifRadiation.RAS_RET_10, libelle: 'Dispense d’affiliation' },
  { code: motifRadiation.RAS_RET_02, libelle: 'Licenciement' },
  { code: motifRadiation.RAS_RET_03, libelle: 'Licenciement pour faute lourde' },
  { code: motifRadiation.RAS_RET_09, libelle: 'Mutation' },
  { code: motifRadiation.RAS_RET_08, libelle: 'Retraite' },
  { code: motifRadiation.RAS_RET_04, libelle: 'Rupture conventionnelle' },
];

export const parcoursEtats = {
  EN_COURS: 'ENC',
  ARCHIVE: 'ARC',
  CLOS: 'CLO',
  INDISPO: 'IND',
  NotificationFailed: 'ECH',
  NotificationStarted: 'RMP',
  PREP: 'PREP',
};

export enum states {
  none,
  processing,
  processed,
  notifying,
  notified,
  error
}

export const compteLimit = 4;

export const showValidationSansSignature = true;

export const typeDialog = {
  SUCCESS: 'SUCCESS',
  ERROR: 'ERROR'
};
