import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/itens/home/home.component';
import { ElementsComponent } from './components/itens/elements/elements.component';

const routes: Routes = [
  {

    path: "",
    component: HomeComponent

  }, {
    path: "elements",
    component: ElementsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
