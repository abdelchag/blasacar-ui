import { HttpParams } from "@angular/common/http";
import { StringUtils } from "src/utils/string-utils";

export class HttpParamsBuilder {
    private httpParamsValue: HttpParams;


    public static builder(): HttpParamsBuilder {
        return new HttpParamsBuilder();
    }

    private constructor() {
        this.httpParamsValue = new HttpParams();
    }


    public build(): HttpParams {
        return this.httpParamsValue;
    }

    public appendIfNotNull(paramName: string, paramValue: string): HttpParamsBuilder {
        if (StringUtils.isNotEmpty(paramValue)) {
            this.httpParamsValue = this.httpParamsValue.append(paramName, paramValue);
        }
        return this;
    }

    public append(paramName: string, paramValue: string): HttpParamsBuilder {
        this.httpParamsValue = this.httpParamsValue.append(paramName, paramValue);
        return this;
    }
}