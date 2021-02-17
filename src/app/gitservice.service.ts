import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class GitserviceService {

  constructor(private http:HttpClient) { }


  getData(username){
    return this.http.get(`https://api.github.com/users/${username}`);
  }
  getRepos(username){
    return this.http.get(`https://api.github.com/users/${username}/repos`);
  }

}
