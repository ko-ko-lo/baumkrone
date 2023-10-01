import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { TabelleComponent } from './content/tabelle/tabelle.component';
import { HeroComponent } from './content/hero/hero.component';
import { TeaserComponent } from './content/teaser/teaser.component';
import { VergleichComponent } from './content/vergleich/vergleich.component';
import { LinksComponent } from './content/links/links.component';
import { ZitatComponent } from './content/zitat/zitat.component';
import { SpendenComponent } from './spenden/spenden.component';
import { UnsComponent } from './uns/uns.component';
import { ThemenComponent } from './themen/themen.component';
import { AppRoutingModule } from './app.routing.module';
import { NachhaltigLebenComponent } from './nachhaltig-leben/nachhaltig-leben.component';
import { AktionenComponent } from './aktionen/aktionen.component';
import { LokaleGruppenComponent } from './lokale-gruppen/lokale-gruppen.component';
import { ImpressumComponent } from './impressum/impressum.component';
import { KontaktComponent } from './kontakt/kontakt.component';
import { DatenschutzComponent } from './datenschutz/datenschutz.component';
import { ThemenArComponent } from './themen-ar/themen-ar.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    TabelleComponent,
    HeroComponent,
    TeaserComponent,
    VergleichComponent,
    LinksComponent,
    ZitatComponent,
    SpendenComponent,
    UnsComponent,
    ThemenComponent,
    NachhaltigLebenComponent,
    AktionenComponent,
    LokaleGruppenComponent,
    ImpressumComponent,
    KontaktComponent,
    DatenschutzComponent,
    ThemenArComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
