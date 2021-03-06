import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselOneComponent } from './components/carousel/carousel-one/carousel-one.component';
import { NavbarOneComponent } from './components/navbar-one/navbar-one.component';

import { HomeComponent } from './pages/home/home.component';
import { AlimentacaoComponent } from './pages/alimentacao/alimentacao.component';
import { AtividadeFisicaComponent } from './pages/atividade-fisica/atividade-fisica.component';
import { MentalEmocionalComponent } from './pages/mental-emocional/mental-emocional.component';
import { CovidComponent } from './pages/covid/covid.component';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { CardOneComponent } from './components/cards/card-one/card-one.component';
import { FooterOneComponent } from './layout/footer/footer-one/footer-one.component';
import { SectionOneComponent } from './components/sections/section-one/section-one.component';
import { HttpClientModule } from '@angular/common/http';
import * as echarts from 'echarts';
import { MatSelectModule } from '@angular/material/select';
import { NgxEchartsModule } from 'ngx-echarts';
import { StartComponent } from './pages/start/start.component';
import { LoginComponent } from './pages/login/login.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { EsqueciSenhaComponent } from './pages/esqueci-senha/esqueci-senha.component';
import { TermoDeUsoComponent } from './pages/termo-de-uso/termo-de-uso.component';
import { FeedalimentarComponent } from './pages/aasubpages-content/alimentar/feedalimentar/feedalimentar.component';
import { CompulsaoalimentarComponent } from './pages/aasubpages-content/alimentar/alimentar-content/compulsaoalimentar/compulsaoalimentar.component';
import { LikeComentShareSalveComponent } from './pages/like-coment-share-salve/like-coment-share-salve.component';
import { MenosacucarComponent } from './pages/aasubpages-content/alimentar/alimentar-content/menosacucar/menosacucar.component';
import { SaudedamulherComponent } from './pages/aasubpages-content/alimentar/alimentar-content/saudedamulher/saudedamulher.component';
import { VidasaudavelComponent } from './pages/aasubpages-content/alimentar/alimentar-content/vidasaudavel/vidasaudavel.component';
import { PesoquarentenaComponent } from './pages/aasubpages-content/alimentar/alimentar-content/pesoquarentena/pesoquarentena.component';
import { Beneficiosomega3Component } from './pages/aasubpages-content/alimentar/alimentar-content/beneficiosomega3/beneficiosomega3.component';
import { JejumComponent } from './pages/aasubpages-content/alimentar/alimentar-content/jejum/jejum.component';
import { CarboidratosComponent } from './pages/aasubpages-content/alimentar/alimentar-content/carboidratos/carboidratos.component';
import { AtividadefisicaesaudeComponent } from './pages/aasubpages-content/fisica/fisica-content/atividadefisicaesaude/atividadefisicaesaude.component';
import { AtividadefisicapandemiaComponent } from './pages/aasubpages-content/fisica/fisica-content/atividadefisicapandemia/atividadefisicapandemia.component';
import { ExerciciobeneficiosComponent } from './pages/aasubpages-content/fisica/fisica-content/exerciciobeneficios/exerciciobeneficios.component';
import { SedentarismoComponent } from './pages/aasubpages-content/fisica/fisica-content/sedentarismo/sedentarismo.component';
import { FisicafeedComponent } from './pages/aasubpages-content/fisica/fisicafeed/fisicafeed/fisicafeed.component';

@NgModule({
  declarations: [
    AppComponent,
    CarouselOneComponent,
    HomeComponent,
    NavbarOneComponent,
    AlimentacaoComponent,
    AtividadeFisicaComponent,
    MentalEmocionalComponent,
    CovidComponent,
    CardOneComponent,
    FooterOneComponent,
    SectionOneComponent,
    StartComponent,
    LoginComponent,
    CadastroComponent,
    LoginComponent,
    EsqueciSenhaComponent,
    TermoDeUsoComponent,
    FeedalimentarComponent,
    CompulsaoalimentarComponent,
    LikeComentShareSalveComponent,
    MenosacucarComponent,
    SaudedamulherComponent,
    VidasaudavelComponent,
    PesoquarentenaComponent,
    Beneficiosomega3Component,
    JejumComponent,

    CarboidratosComponent,
     AtividadefisicaesaudeComponent,
     AtividadefisicapandemiaComponent,
     ExerciciobeneficiosComponent,
     SedentarismoComponent,
     FisicafeedComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    IvyCarouselModule,
    HttpClientModule,
    MatSelectModule,
    NgxEchartsModule.forRoot({
      echarts,
    }),
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
