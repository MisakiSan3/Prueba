import {HttpClient, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Entity, IEntity} from '../models/entity.model';
import {HelperService} from '../utils/helpers';

type EntityResponseType = HttpResponse<IEntity>;
type EntityArrayResponseType = HttpResponse<IEntity[]>;

export class AbstractService<T extends Entity> {

  constructor(protected http: HttpClient, private resourceUrl: string) {
  }

  protected getResourceUrl() {
    return this.resourceUrl;
  }

  create(entity: IEntity): Observable<EntityResponseType> {
    return this.http.post<IEntity>(this.resourceUrl, entity, {observe: 'response', headers: HelperService.options()});
  }

  update(id: number, entity: IEntity): Observable<EntityResponseType> {
    return this.http.put<IEntity>(`${this.resourceUrl}/${id}`, entity, {
      observe: 'response',
      headers: HelperService.options()
    });
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http.get<IEntity>(`${this.resourceUrl}/${id}`, {observe: 'response', headers: HelperService.options()});
  }

  query(): Observable<EntityArrayResponseType> {
    return this.http.get<IEntity[]>(this.resourceUrl, {observe: 'response'});
  }

  delete(id: number): Observable<EntityResponseType> {
    return this.http.delete(`${this.resourceUrl}/${id}`, {observe: 'response', headers: HelperService.options()});
  }
}
