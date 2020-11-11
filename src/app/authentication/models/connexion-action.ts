export class ConnexionActionBuilder {

    private connexionAction: ConnexionAction;

    public constructor() {
        this.connexionAction = new ConnexionAction();
    }

    public actionCode(actionCode: ActionCodeEnum): ConnexionActionBuilder {
        this.connexionAction.actionCode = actionCode;
        return this;
    }

    public title(title: string): ConnexionActionBuilder {
        this.connexionAction.title = title
        return this;
    }

    public question(question: string): ConnexionActionBuilder {
        this.connexionAction.question = question;
        return this;
    }

    public otherActionLabel(otherActionLabel: string): ConnexionActionBuilder {
        this.connexionAction.otherActionLabel = otherActionLabel
        return this;
    }

    public switchAction(switchAction: ActionCodeEnum): ConnexionActionBuilder {
        this.connexionAction.switchAction = switchAction;
        return this;
    }

    public build(): ConnexionAction {
        return this.connexionAction;
    }
}

export class ConnexionAction {
    actionCode: ActionCodeEnum;
    title: string;
    question: string;
    otherActionLabel: string;
    switchAction: ActionCodeEnum

    public static builder(): ConnexionActionBuilder {
        return new ConnexionActionBuilder();
    }
}

export enum ActionCodeEnum {
    CONNEXION,
    INSCRIPTION
}

export const ACTION_INSCRIPTION = ConnexionAction.builder()
    .actionCode(ActionCodeEnum.INSCRIPTION)
    .title("Inscription")
    .question("Vous avez déjà un compte ?")
    .otherActionLabel("Connecter vous")
    .switchAction(ActionCodeEnum.CONNEXION)
    .build();
export const ACTION_CONNEXION = ConnexionAction.builder()
    .actionCode(ActionCodeEnum.CONNEXION)
    .title("Connexion")
    .question("Vous n'avez pas de compte ?")
    .otherActionLabel("Créer un compte")
    .switchAction(ActionCodeEnum.INSCRIPTION)
    .build();

export const ACTION_CONNEXION_LIST = [
    ACTION_CONNEXION,
    ACTION_INSCRIPTION
];