import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class GitserviceService {

  constructor(private http:HttpClient) { }


  getData(username: any){
    return this.http.get(`https://api.github.com/users/${username}`);
  }
  getRepos(username: any){
    return this.http.get(`https://api.github.com/users/${username}/repos`);
  }

}
