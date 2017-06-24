﻿import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Headers, RequestOptions } from '@angular/http';
import { Injectable, Inject } from '@angular/core';
import { AuthorizeViewModel } from '../../view-models/concrete/authorization-view.model';
import { AuthorizationType } from '../../view-models/concrete/authorization.type';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch'
@Injectable()
export class AuthorizationService {
    private _authorizationUrl = 'api/User/';
    constructor(private _http: Http) { }

    /**
     * Send request to controller to authorize user and return his token
     * @param user
     */
    logIn(user: AuthorizeViewModel): Observable<AuthorizationType> {
        let urlLog = "LogIn";
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this._http.post(this._authorizationUrl + urlLog, JSON.stringify(user), options)
            .map((response: Response) => response.json() as AuthorizationType, )
            .catch(this.handleError);
    }

    /**
     * clear local storage and close the session current user
     */
    logOff() {
        localStorage.clear();
    }

    /**
     * Catch error
     * @param error
     */
    handleError(error: Response) {
        return Observable.throw(error.json().error);
    }
}