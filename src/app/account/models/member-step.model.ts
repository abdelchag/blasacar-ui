import { LinkedList } from 'src/utils/linked-list';


export enum MemberStepCode {
    EMAIL,
    FIRST_LAST_NAME,
    BIRTHDATE,
    TELEPHONE,
    ADRESS,
    GENDER,
    PASSWORD
}

export enum MemberStepTitle {
    EMAIL = 'member.question.email',
    FIRST_LAST_NAME = 'member.question.nom-prenom',
    BIRTHDATE = 'member.question.birth-date',
    TELEPHONE = 'member.question.telephone',
    ADRESS = 'member.question.adresse',
    GENDER = 'member.question.gender',
    PASSWORD = 'member.question.password'
}

export class MembreStep {
    code: MemberStepCode;
    title: MemberStepTitle;

    constructor(code: MemberStepCode, title: MemberStepTitle) {
        this.code = code;
        this.title = title;
    }

}

export const MEMBER_WORKFLOW = new LinkedList<MembreStep>()
    .append(new MembreStep(MemberStepCode.EMAIL, MemberStepTitle.EMAIL))
    .append(new MembreStep(MemberStepCode.FIRST_LAST_NAME, MemberStepTitle.FIRST_LAST_NAME))
    .append(new MembreStep(MemberStepCode.BIRTHDATE, MemberStepTitle.BIRTHDATE))
    .append(new MembreStep(MemberStepCode.TELEPHONE, MemberStepTitle.TELEPHONE))
    .append(new MembreStep(MemberStepCode.ADRESS, MemberStepTitle.ADRESS))
    .append(new MembreStep(MemberStepCode.GENDER, MemberStepTitle.GENDER))
    .append(new MembreStep(MemberStepCode.PASSWORD, MemberStepTitle.PASSWORD));
