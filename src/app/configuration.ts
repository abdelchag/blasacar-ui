export const configuration = {
  debounceTimeDefault: 800,
  validationMessages: {
    generic: {
      pattern: 'Le format du champ n\'est pas conforme'
    },
    noun: {
      pattern: 'Veuillez supprimer les caractères spéciaux'
    },
    password: {
      pattern: 'Veuillez respecter le format du mot passe'
    },
    nounAndNumber: {
      pattern: 'Veuillez supprimer les caractères spéciaux'
    },
    nom: {
      required: 'Nom requis'
    },
    prenom: {
      required: 'Prénom requis'
    },
    email: {
      email: 'Veuillez saisir un e-mail au format nom@fournisseur',
      required: 'Veuillez saisir un e-mail',
      requiredEmailSignature: 'Veuillez saisir un e-mail',
      sameValue: 'Merci de saisir le même e-mail'
    },
    date: {
      valid: 'Veuillez saisir une date valide',
      range: 'Veuillez saisir une date plus récente',
      required: 'Veuillez saisir une date',
      future: 'Veuillez saisir la date du jour ou une date passée'
    },
    dateEntree: {
      required: 'Date d\'entrée requise'
    },
    dateAffiliation: {
      greaterThanDateAffilAdhesionNonCadre: `La date d'affiliation de votre salarié est antérieure à la date d'affiliation de votre salarié sur son contrat non cadre.`,
      greaterThanDateEffet: `La date d'affiliation de votre salarié est antérieure à la date d'effet de votre contrat`,
      greaterThanDateEffetContratCadre: `La date d'affiliation de votre salarié est antérieure à la date d'effet de votre contrat cadre`,
      greaterThanDateEffetContratNonCadre: `La date d'affiliation de votre salarié est antérieure à la date d'effet de votre contrat non cadre.`,
      greaterThanDateEmbauche: `La date d'affiliation de votre salarié est antérieure à la date de son embauche`,
      valid: 'La date n\'est pas valide',
      needGestion: ' ' // Le message n'est pas affiché en dessous du champ. D'où l'espace blanc
    },
    dateNaissance: {
      required: 'Veuillez saisir une date',
      valid: 'Veuillez saisir une date valide',
      range: 'Veuillez saisir une date plus récente',
      future: 'Veuillez saisir la date du jour ou une date passée'
    },
    organisme: {
      required: 'Organisme de rattachement requis'
    },
    villeNaissance: {
      required: 'La ville de naissance est requise'
    },
    paysNaissance: {
      required: 'Le pays de naissance est requis'
    },
    organismeRattachement: {
      required: 'Le numéro d\'organisme de rattachement est requis'
    },
    telephone: {
      pattern: 'Merci de saisir un numéro de téléphone valide',
      required: 'Merci de saisir un numéro de téléphone',
      requiredTelephoneSignature: 'Le numéro de téléphone est obligatoire, merci de le renseigner',
      sameValue: 'Merci de saisir le même numéro de téléphone'
    },
    telephoneMobile: {
      required: 'Merci de saisir un numéro de téléphone portable',
      pattern: 'Merci de saisir un numéro de téléphone portable valide',
      sameValue: 'Merci de saisir le même numéro de téléphone portable'
    },
    securiteSociale: {
      pattern: 'Le N° de Sécurité sociale n\'est pas valide',
      gender: 'Le N° de Sécurité sociale ne correspond pas à la civilité renseignée',
      month: 'Le N° de Sécurité sociale ne correspond pas au mois de naissance renseigné',
      year: 'Le N° de Sécurité sociale ne correspond pas à l\'année de naissance renseignée',
      securiteSocialeGenre: 'Le N° de Sécurité sociale ne correspond pas à la civilité renseignée',
      securiteSocialeAnnee: 'Le N° de Sécurité sociale ne correspond pas au mois de naissance renseigné',
      securiteSocialeMois: 'Le N° de Sécurité sociale ne correspond pas à l\'année de naissance renseignée'
    },
    iban: {
      country: 'Seuls les IBAN des pays de la zone SEPA sont acceptés',
      pattern: 'Le format de l\'IBAN n\'est pas valide'
    },
    conjointDateNaissance: {
      ageGreaterOrEqualThan: 'Veuillez indiquer un conjoint de plus de 16 ans'
    },
    enfantDateNaissance: {
      ageLesserThan: 'Attention, vous ne pouvez pas renseigner un enfant de plus de 28 ans'
    },
    ParentAutreDateNaissance: {
      ageGreaterOrEqualThan: 'Vous avez indiqué un parent de moins de 16 ans, merci de rectifier'
    },
    dateInscription: {
      lowerThenCurrentDate: 'La date d’inscription doit être supérieure ou égale à la date du jour',
      lowerThenDateEntree: 'La date d’inscription doit être supérieure ou égale à la date d\'entrée',
      lessThanTheCurrentDate: 'La date d\'inscription saisie ne peut être inférieure à 4 mois à compter de la date du jour',
      greaterThanTheCurrentDate: 'La date d\'inscription saisie ne peut être supérieure à 4 mois à compter de la date du jour',
      lessThanTheDateUnion: 'La date d\'inscription saisie ne peut être inférieure à la date d\'union',
      lessThanTheBirthDate: 'La date d\'inscription saisie ne peut être inférieure à la date de naissance'
    },
    dateRadiation: {
      required: 'Date d\'entrée requise',
      notValid: 'La date de radiation saisie est incorrecte',
      lessThanTheEffectDate: 'La date de radiation saisie ne peut être inférieure à la date d\'effet de votre contrat',
      lessThanTheCurrentDate: 'La date de radiation saisie ne peut être inférieure à 2 mois à compter de la date du jour',
      greaterThanTheCurrentDate: 'La date de radiation saisie ne peut être supérieure à 2 mois à compter de la date du jour',
    },
    dateRadiationAdSalarie: {
      notValid: 'La date de suppression saisie est incorrecte',
      lessThanTheEffectDate: 'La date de suppression saisie ne peut être inférieure à la date d\'effet de l\'affiliation',
      lessThanTheCurrentDate: 'La date de suppression saisie ne peut être inférieure à 2 mois à compter de la date du jour',
      greaterThanTheCurrentDate: 'La date de suppression saisie ne peut être supérieure à 2 mois à compter de la date du jour',
    },
    dateRadiationSalarie: {
      required: 'Date de résiliation requise',
      notValid: 'Veuillez saisir une date valide.',
      lessThanTheEffectDate: 'La date de résiliation saisie ne peut être inférieure à la date d\'effet de l\'affiliation.',
      notInRange: 'La date saisie doit être comprise entre les 6 derniers mois et la date du jour.'
    },
    dateUnion: {
      valid: 'Veuillez saisir une date valide',
      lessThanTheLegalAge: 'A cette date d\'union, votre conjoint a moins de 16 ans, veuillez rectifier',
      future: 'Veuillez saisir la date du jour ou une date passée'
    },
    cpville: {
      type: 'La sélection à partir de la liste est nécessaire'
    },
    pays: {
      type: 'La sélection à partir de la liste des pays est nécessaire'
    },
    salarieDateNaissance: {
      ageGreaterOrEqualThan: 'L\'âge du salarié ne peut pas être inférieur à 14 ans',
      greaterThanDateEmbauche: `Date d'embauche antérieure à la date de naissance`,
      invalidEmbaucheAge: `Le salarié a commencé à travailler à moins de 14 ans`
    },
    salarieDateEmbauche: {
      lessThanTheLegalAge: 'Le salarié doit avoir au minimum 16 ans lors de son embauche'
    },
    selectedContrats: {
      moreThanOneSante: 'Veuillez choisir un seul contrat Santé',
      moreThanOnePrev: 'Veuillez choisir un seul contrat Prévoyance',
      atLeastOnePrevoyance: 'L\'affiliation au contrat prévoyance est obligatoire',
    }
  },
  genericMessageForRequire: 'Champ requis'
};
