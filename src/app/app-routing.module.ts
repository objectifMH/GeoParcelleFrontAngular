import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestComponent } from './test/test.component';
import { UtilisateurComponent } from './utilisateur/utilisateur.component';
import { VilleComponent } from './ville/ville.component';

const routes: Routes = [
{
path : "test" , component : TestComponent
},
{
path : "utilisateur" , component : UtilisateurComponent
},
{
path : "ville" , component : VilleComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
