import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/itens/footer/footer.component';
import { HeaderComponent } from './components/itens/header/header.component';
import { HomeComponent } from './components/itens/home/home.component';
import { ElementsComponent } from './components/itens/elements/elements.component';
import { ResetComponent } from './components/itens/reset/reset.component';
import { BannerComponent } from './components/itens/module/banner/banner.component';
import { TextComponent } from './components/itens/module/text/text.component';
import { HeadingComponent } from './components/itens/module/heading/heading.component';
import { BlockquoteComponent } from './components/itens/module/blockquote/blockquote.component';
import { PreComponent } from './components/itens/module/pre/pre.component';
import { ListsComponent } from './components/itens/module/lists/lists.component';
import { TableComponent } from './components/itens/module/table/table.component';
import { ButtonsComponent } from './components/itens/module/buttons/buttons.component';
import { FormComponent } from './components/itens/module/form/form.component';
import { ImageComponent } from './components/itens/module/image/image.component';
import { TextImgComponent } from './components/itens/module/text-img/text-img.component';
import { InfoComponent } from './components/itens/module/info/info.component';
import { ArtigoComponent } from './components/itens/module/artigo/artigo.component';
import { CardsComponent } from './components/itens/module/cards/cards.component';
import { FaleConoscoComponent } from './components/itens/module/fale-conosco/fale-conosco.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    ElementsComponent,
    ResetComponent,
    BannerComponent,
    TextComponent,
    HeadingComponent,
    BlockquoteComponent,
    PreComponent,
    ListsComponent,
    TableComponent,
    ButtonsComponent,
    FormComponent,
    ImageComponent,
    TextImgComponent,
    InfoComponent,
    ArtigoComponent,
    CardsComponent,
    FaleConoscoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
