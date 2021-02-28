import { LinkedList } from 'src/utils/linked-list';

export enum TravelProposeStepCode {
    DEPARTURE_CITY,
    ARRIVAL_CITY,
    DEPARTURE_DATE,
    DEPARTURE_HOUR,
    NUMBER_PLACE,
    AUTOMATIQUE_ACCEPTANCE,
    PRICE,
    PHONE_NUMBER
}

export enum TravelProposeStepTitle {
    DEPARTURE_CITY = 'travel-propose.question.departure-city',
    ARRIVAL_CITY = 'travel-propose.question.arrival-city',
    DEPARTURE_DATE = 'travel-propose.question.departure-date',
    DEPARTURE_HOUR = 'travel-propose.question.departure-hour',
    NUMBER_PLACE = 'travel-propose.question.number-place',
    AUTOMATIQUE_ACCEPTANCE = 'travel-propose.question.automatique-acceptance',
    PRICE = 'travel-propose.question.price',
    PHONE_NUMBER = 'travel-propose.question.phone-number'
}

export class TravelProposeStepInfo {
    code: TravelProposeStepCode;
    title: TravelProposeStepTitle;

    constructor(code: TravelProposeStepCode, title: TravelProposeStepTitle) {
        this.code = code;
        this.title = title;
    }
}

export const TRAVEL_PROPOSE_WORKFLOW = new LinkedList<TravelProposeStepInfo>()
    .append(new TravelProposeStepInfo(TravelProposeStepCode.DEPARTURE_CITY, TravelProposeStepTitle.DEPARTURE_CITY))
    .append(new TravelProposeStepInfo(TravelProposeStepCode.ARRIVAL_CITY, TravelProposeStepTitle.ARRIVAL_CITY))
    .append(new TravelProposeStepInfo(TravelProposeStepCode.DEPARTURE_DATE, TravelProposeStepTitle.DEPARTURE_DATE))
    .append(new TravelProposeStepInfo(TravelProposeStepCode.DEPARTURE_HOUR, TravelProposeStepTitle.DEPARTURE_HOUR))
    .append(new TravelProposeStepInfo(TravelProposeStepCode.NUMBER_PLACE, TravelProposeStepTitle.NUMBER_PLACE))
    .append(new TravelProposeStepInfo(TravelProposeStepCode.AUTOMATIQUE_ACCEPTANCE, TravelProposeStepTitle.AUTOMATIQUE_ACCEPTANCE))
    .append(new TravelProposeStepInfo(TravelProposeStepCode.PRICE, TravelProposeStepTitle.PRICE))
    .append(new TravelProposeStepInfo(TravelProposeStepCode.PHONE_NUMBER, TravelProposeStepTitle.PHONE_NUMBER));


