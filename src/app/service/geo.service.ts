import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class GeoService {

  public host:string = "http://localhost:8080" ;

  constructor(private httpClient : HttpClient) { }

  public getUtilisateurs(){
    return this.httpClient.get(this.host + "/utilisateurs");
  }

  public getVilles(){
    return this.httpClient.get(this.host + "/villes");
  }

  public deleteUtilisateur(utilisateur){
    console.log("addresse a supprimer >> " + utilisateur._links.utilisateur.href);
    return this.httpClient.delete(utilisateur._links.utilisateur.href);
  }

  public getParcelles(){
    return this.httpClient.get(this.host + "/parcelles");
  }

  public getParcellesByVilles(endpoint){
  console.log(endpoint);
      return this.httpClient.get(endpoint);
  }

  public majUtilisateur(utilisateur){
    return this.httpClient.put(utilisateur._links.self.href,utilisateur);
  }

}
