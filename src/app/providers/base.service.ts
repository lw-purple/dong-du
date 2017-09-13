import { Injectable } from '@angular/core';
import {
  Http, Response, Headers, RequestOptions, URLSearchParams, RequestOptionsArgs, RequestMethod
} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Observable} from "rxjs";
import {GlobalData} from "./globalData";
@Injectable()
export class BaseService {

  constructor(public http: Http,private globalData: GlobalData,) { }

  /**
   * 
   * request请求
   * @param {string} url 
   * @param {RequestOptionsArgs} options 
   * @returns {Observable<Response>} 
   * 
   * @memberOf BaseService
   */
  public request(url: string, options: RequestOptionsArgs): Observable<Response> {
    if (options.headers) {
      options.headers['token'] = this.globalData.token;
    } else {
      options.headers = new Headers({
        'token': this.globalData.token
      });
    }
    return Observable.create((observer) => {
      // this.nativeService.showLoading();
      console.log('%c 请求前 %c', 'color:blue', '', 'url', url, 'options', options);
      this.http.request(url, options).subscribe(res => {
        // this.nativeService.hideLoading();
        console.log('%c 请求成功 %c', 'color:green', '', 'url', url, 'options', options, 'res', res);
        observer.next(res);
      }, err => {
        // this.requestFailed(url, options, err);//处理请求失败
        observer.error(err);
      });
    });
  }

  public get(url: string, paramMap: any = null): Observable<Response> {
    return this.request(url, new RequestOptions({
      method: RequestMethod.Get,
      // search: BaseService.buildURLSearchParams(paramMap)
    }));
  }

}
