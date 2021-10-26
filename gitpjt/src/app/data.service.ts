import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
 
  constructor(private httpClient: HttpClient) { }

  public sendGetRequest(get_data:string){
    const SERVER = `https://api.github.com/repos/${get_data}/${get_data}/stats/code_frequency`;
    //const str = '?q=' + encodeURIComponent(`${get_data} in:${get_data}`)
    //const SERVER = `https://api.github.com/search/commits${str}`;
    return this.httpClient.get<DataService>(SERVER)
  }
}
