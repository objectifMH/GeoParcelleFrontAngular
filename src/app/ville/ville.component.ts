import { Component, OnInit } from '@angular/core';
import { GeoService } from '../service/geo.service';

@Component({
  selector: 'app-ville',
  templateUrl: './ville.component.html',
  styleUrls: ['./ville.component.css']
})
export class VilleComponent implements OnInit {

<<<<<<< HEAD
  public villes: any
  public villeCourante: any = "test"
  public parcelles: any
  public tabParcelles: any

  constructor(private geoService: GeoService) { }

  ngOnInit() {
    console.log("debut init villes");
    this.onGetVilles();
  }

  onGetVilles() {
    this.geoService.getVilles()
      .subscribe(
        data => {
          this.villes = data;
          if (data["_embedded"].villes[0]) {
            this.villeCourante = data["_embedded"].villes[0];
            this.onParcellesByVille(this.villeCourante);
          }

          console.log(data);

        },
        err => {
          console.log(err)
        }
      )
  }

  onParcellesByVille(ville) {
    this.villeCourante = ville;
    this.parcelles = null;
    console.log(ville);
    this.geoService.getParcellesByVilles(this.villeCourante._links.parcelles.href).subscribe(
      data => {
        this.parcelles = data;
        this.tabParcelles = (<any>data)._embedded.parcelles;

      },
      err => {
        console.log("c'est moir l'erreur " + err)
      }
    )
=======
  public villes:any
  public villeCourante:any = "test"
  public parcelles:any
  public tabParcelles:any

  constructor( private geoService: GeoService ) { }

  ngOnInit() {
  console.log("debut init villes");
  this.onGetVilles();
  }

  onGetVilles() {
  this.geoService.getVilles()
    .subscribe(
        data => {
            this.villes = data ;
            console.log(data);

        } ,
        err => {
            console.log(err)
        }
  )}

  onParcellesByVille(ville){
    this.villeCourante = ville;
    this.parcelles = null;
    console.log(ville);
    this.geoService.getParcellesByVilles(ville._links.parcelles.href).subscribe(
        data => {
            this.parcelles = data ;
            this.tabParcelles = (<any>data)._embedded.parcelles;

        } ,
        err => {
            console.log("c'est moir l'erreur " + err)
        }
)
>>>>>>> f5a4f9c0aabf2aa1d4097a6e9a2982992ff0c74c

  }



}
