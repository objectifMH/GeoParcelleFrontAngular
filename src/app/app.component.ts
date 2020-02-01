import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GeoParcelle';

public utilisateurEdit:any = "";

  public routeCourante:any;

  constructor() { }

  ngOnInit() {

  }


}
