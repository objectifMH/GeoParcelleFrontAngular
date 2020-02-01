import { Component, OnInit } from '@angular/core';
import { GeoService } from '../service/geo.service';

@Component({
  selector: 'app-utilisateur',
  templateUrl: './utilisateur.component.html',
  styleUrls: ['./utilisateur.component.css']
})

export class UtilisateurComponent implements OnInit {

  public utilisateurs: any;
  public utilisateurEdit:any = "";

  constructor(private geoService: GeoService) { }

  ngOnInit() {
  console.log("debut init");
  this.onGetUtilisateur();
  }

  // recupère tous les  utilisateurs de la bd
  onGetUtilisateur() {
  this.geoService.getUtilisateurs()
    .subscribe(
        data => {
            this.utilisateurs = data ;
            console.log(data);

        } ,
        err => {
            console.log(err)}
  )}

  //Surpprime un utilisateur
  onDelUtilisateur(utilisateur){
  let result = confirm("Voulez vous vraiment supprimer cet utilisateur : " + utilisateur.email + " ?");

              if(result)  {
                  this.confirmDelete(utilisateur);
              }
  }

  //Mise a jour d'un utilisateur
  onEditUtilisateur(utilisateur){
    this.utilisateurEdit = utilisateur ;
    console.log(this.utilisateurEdit);
  }

  onMajUtilisateur(formUtilisateur){
    //console.log(formUtilisateur);
<<<<<<< HEAD

=======
>>>>>>> f5a4f9c0aabf2aa1d4097a6e9a2982992ff0c74c
    console.log(this.utilisateurEdit);
    let util = this.utilisateurEdit ;
    this.geoService.majUtilisateur(util).subscribe(
        data => {
            //on réactualise la liste des utilisateurs
            this.onGetUtilisateur();
        } ,
        err => {
            console.log("pas de maj " + err)}
        )
  }

  confirmDelete(utilisateur){
  this.geoService.deleteUtilisateur(utilisateur)
    .subscribe(
        data => {
            //on réactualise la liste des utilisateurs
            this.onGetUtilisateur();

        } ,
        err => {
            console.log(err)}
  )}


}
