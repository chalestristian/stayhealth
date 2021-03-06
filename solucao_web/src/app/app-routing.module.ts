import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlimentacaoComponent } from './pages/alimentacao/alimentacao.component';
import { AtividadeFisicaComponent } from './pages/atividade-fisica/atividade-fisica.component';
import { CovidComponent } from './pages/covid/covid.component';
import { HomeComponent } from './pages/home/home.component';
import { MentalEmocionalComponent } from './pages/mental-emocional/mental-emocional.component';
import { StartComponent } from './pages/start/start.component';
import { LoginComponent } from './pages/login/login.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { TermoDeUsoComponent } from './pages/termo-de-uso/termo-de-uso.component';
import { EsqueciSenhaComponent } from './pages/esqueci-senha/esqueci-senha.component';
import { FeedalimentarComponent } from './pages/aasubpages-content/alimentar/feedalimentar/feedalimentar.component';
import { CompulsaoalimentarComponent } from './pages/aasubpages-content/alimentar/alimentar-content/compulsaoalimentar/compulsaoalimentar.component';
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


const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'alimentacao',
    component: AlimentacaoComponent,
  },
  {
    path: 'fisicas',
    component: AtividadeFisicaComponent,
  },
  {
    path: 'mental-emocional',
    component: MentalEmocionalComponent,
  },
  {
    path: 'covid',
    component: CovidComponent,
  },
  {
    path: 'start',
    component: StartComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'cadastro',
    component: CadastroComponent,
  },
  {
    path: 'termo-de-uso',
    component: TermoDeUsoComponent,
  },
  {
    path: 'esqueci-senha',
    component: EsqueciSenhaComponent,
  },
  {
    path: 'feedalimentar',
    component: FeedalimentarComponent,
  },
  {
    path: 'compulsaoalimentar',
    component: CompulsaoalimentarComponent,
  }, {
    path: 'menosacucar',
    component: MenosacucarComponent,
  },
  {
    path: 'saudedamulher',
    component: SaudedamulherComponent,
  },
  {
    path: 'vidasaudavel',
    component: VidasaudavelComponent,
  },
  {
    path: 'pesoquarentena',
    component: PesoquarentenaComponent,
  },
  {
    path: 'beneficiosomega3',
    component: Beneficiosomega3Component,
  },
  {
    path: 'jejum',
    component: JejumComponent,
  },
  {
    path: 'carboidratos',
    component: CarboidratosComponent,
  },
  {
    path: 'atividadefisicaesaude',
    component: AtividadefisicaesaudeComponent,
  },
  {
    path: 'atividadefisicapandemia',
    component: AtividadefisicapandemiaComponent,
  },
  {
    path: 'exerciciosbeneficios',
    component: ExerciciobeneficiosComponent,
  },
  {
    path: 'sedentarismo',
    component: SedentarismoComponent,
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
