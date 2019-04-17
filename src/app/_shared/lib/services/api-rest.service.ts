import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
//import { ConfigurationService } from './configuration.service';
//import { IModelInterface } from '../clases/model-interface';

@Injectable({
  providedIn: 'root'
})
export class ApirestService {
  getData: any;
  private actionUrl: string;
  constructor(private http: HttpClient
    
    //, private configuration: ConfigurationService
    
    ) {
      //this.actionUrl = configuration.serverWithApiUrl + 'login_check';
      //this.actionUrl = configuration.serverWithApiUrl + 'blog_posts/';
  }

  public getAll<T>(): Observable<T> {
      return this.http.get<T>(this.actionUrl);
  }

  /*public getSingle<T>(id: number): Observable<T> {
      return this.http.get<T>(this.actionUrl + id);
  }
*/
  getSingle<T>(item: ModelInterface, id: number): Observable<T> {
    return this.http.get<T>(this.actionUrl + id)
      .pipe(map((data: any) => item.fromJson(data) as T
      ));
  }

  public add<T>(itemName: string): Observable<T> {
      const toAdd = { ItemName: itemName };

      return this.http.post<T>(this.actionUrl, toAdd);
  }

  public create<T>(item: ModelInterface): Observable<T> {
    return this.http
      .post<T>(this.actionUrl, item.toJson())
      .pipe(map(data => item.fromJson(data) as T));
  }



  public update<T>(id: number, itemToUpdate: any): Observable<T> {
      return this.http
          .put<T>(this.actionUrl + id, itemToUpdate);
  }

  public delete<T>(id: number): Observable<T> {
      return this.http.delete<T>(this.actionUrl + id);
  }
}

@Injectable()
export class CustomInterceptor implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (!req.headers.has('Content-Type')) {
            req = req.clone({ headers: req.headers.set('Content-Type', 'application/json') });
        }

        req = req.clone({ headers: req.headers.set('Accept', 'application/json') });
        return next.handle(req);
    }
}


export interface ModelInterface {
    fromJson(json: any): any;
    toJson(): any;
  }
