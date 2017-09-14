import { Injectable } from '@angular/core';
import {
  Http, Response, Headers, RequestOptions, URLSearchParams, RequestOptionsArgs, RequestMethod
} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Observable} from "rxjs";
import {GlobalData} from "./globalData";
import {Utils} from "./utils";
 const baseUrl='http://www.easy-mock.com/mock/59a4d1a29d8ef6191d08330e/novel'

@Injectable()
export class BaseService {
  constructor(public http: Http,private globalData: GlobalData,) { 
 
  }

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
      this.http.request(baseUrl+ url, options).subscribe(res => {
        observer.next(res);
      }, err => {
        let msg=''
        if (err.status === 0) {
                msg = '请求失败，请求响应出错';
              } else if (err.status === 404) {
                msg = '请求失败，未找到请求地址';
              } else if (err.status === 500) {
                msg = '请求失败，服务器出错，请稍后再试';
              }
        // this.requestFailed(url, options, err);//处理请求失败
        observer.error(msg);
      });
    });
  }

  public get(url: string, paramMap: any = null): Observable<Response> {
    return this.request(url, new RequestOptions({
      method: RequestMethod.Get,
      search: BaseService.buildURLSearchParams(paramMap)
    }));
  }
    // 默认Content-Type为application/json;
    public post(url: string, body: any = null): Observable<Response> {
      return this.request(url, new RequestOptions({
        method: RequestMethod.Post,
        body: body
      }));
    }

    public postFormData(url: string, paramMap: any = null): Observable<Response> {
      return this.request(url, new RequestOptions({
        method: RequestMethod.Post,
        search: BaseService.buildURLSearchParams(paramMap).toString(),
        headers: new Headers({
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
          'Accept': 'application/json;charset=utf-8',
          'token': this.globalData.token
        })
      }));
    }

    public put(url: string, body: any = null): Observable<Response> {
      return this.request(url, new RequestOptions({
        method: RequestMethod.Put,
        body: body
      }));
    }
  
    public delete(url: string, paramMap: any = null): Observable<Response> {
      return this.request(url, new RequestOptions({
        method: RequestMethod.Delete,
        search: BaseService.buildURLSearchParams(paramMap).toString()
      }));
    }
  
    public patch(url: string, body: any = null): Observable<Response> {
      return this.request(url, new RequestOptions({
        method: RequestMethod.Patch,
        body: body
      }));
    }
  
    public head(url: string, paramMap: any = null): Observable<Response> {
      return this.request(url, new RequestOptions({
        method: RequestMethod.Head,
        search: BaseService.buildURLSearchParams(paramMap).toString()
      }));
    }
  
    public options(url: string, paramMap: any = null): Observable<Response> {
      return this.request(url, new RequestOptions({
        method: RequestMethod.Options,
        search: BaseService.buildURLSearchParams(paramMap).toString()
      }));
    }
  
    /**
     * 将对象转为查询参数
     * @param paramMap
     * @returns {URLSearchParams}
     */
    private static buildURLSearchParams(paramMap): URLSearchParams {
      let params = new URLSearchParams();
      if (!paramMap) {
        return params;
      }
      for (let key in paramMap) {
        let val = paramMap[key];
        if (val instanceof Date) {
          val = Utils.dateFormat(val, 'yyyy-MM-dd hh:mm:ss')
        }
        params.set(key, val);
      }
      return params;
    }
  
    /**
     * 处理请求失败事件
     * @param url
     * @param options
     * @param err
     */
    // private requestFailed(url: string, options: RequestOptionsArgs, err) {
    //   console.log('%c 请求失败 %c', 'color:red', '', 'url', url, 'options', options, 'err', err);
    //   let msg = '请求发生异常',status = err.status;
    //   if (!this.nativeService.isConnecting()) {
    //     msg = '请求失败，请连接网络';
    //   } else {
    //     if (status === 0) {
    //       msg = '请求失败，请求响应出错';
    //     } else if (status === 404) {
    //       msg = '请求失败，未找到请求地址';
    //     } else if (status === 500) {
    //       msg = '请求失败，服务器出错，请稍后再试';
    //     }
    //   }
    // }
  
}
