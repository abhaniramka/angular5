import { Injectable } from '@angular/core';
import { Observable } from '../../node_modules/rxjs';
import { Agent } from './agent';
import { HttpClient, HttpResponse, HttpHeaders } from '../../node_modules/@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AgentApiService {

  baseURL = 'http://localhost:3000/agents';
  constructor(private http: HttpClient) { }

  findAllAgents(): Observable<Agent[]> {
    return this.http.get<Agent[]>(this.baseURL);
  }

  findagentbyId(Id: number): Observable<Agent[]> {
    return this.http.get<Agent[]>(this.baseURL + `/${Id}`);
  }

  addAgent(agent: Agent): Observable<HttpResponse<{}>> {
    const headers = new HttpHeaders().set('Content-Type','application/json');
    return this.http.post<HttpResponse<{}>>(this.baseURL, agent, {headers});
  }

  removeAgentbyId(id: number): Observable<HttpResponse<{}>>  {
    return this.http.delete<HttpResponse<{}>>(this.baseURL + `/${id}`);
  }

  editAgent(agent: Agent): Observable<HttpResponse<{}>>  {
    const headers = new HttpHeaders().set('Content-Type','application/json');
    return this.http.put<HttpResponse<{}>>(this.baseURL + `/${agent.id}`, agent, {headers});
  }

  findReviews(name): Observable<HttpResponse<{}>> {
    return this.http.get<HttpResponse<{}>>('http://localhost:3000/agentReviews?name=' + name);
  }
}
