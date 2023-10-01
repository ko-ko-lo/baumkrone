import { Component, NgModule} from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { ThemenComponent } from "./themen/themen.component";
import { SpendenComponent } from "./spenden/spenden.component";
import { UnsComponent } from "./uns/uns.component";
import { AktionenComponent } from "./aktionen/aktionen.component";
import { LokaleGruppenComponent } from "./lokale-gruppen/lokale-gruppen.component";
import { NachhaltigLebenComponent } from "./nachhaltig-leben/nachhaltig-leben.component";
import { ImpressumComponent } from "./impressum/impressum.component";
import { DatenschutzComponent } from "./datenschutz/datenschutz.component";
import { KontaktComponent } from "./kontakt/kontakt.component";
import { ThemenArComponent } from "./themen-ar/themen-ar.component";

const routes: Routes = [
    {path:'', component: ThemenComponent},
    {path: 'spenden', component: SpendenComponent},
    {path: 'uns', component: UnsComponent},
    {path: 'aktionen', component: AktionenComponent},
    {path: 'lokaleGruppen', component: LokaleGruppenComponent},
    {path: 'nachhaltigLeben', component: NachhaltigLebenComponent},
    {path: 'impressum', component: ImpressumComponent},
    {path: 'kontakt', component: KontaktComponent},
    {path: 'datenschutz', component: DatenschutzComponent},
    {path: 'themenAr', component: ThemenArComponent}

]

@NgModule ({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}