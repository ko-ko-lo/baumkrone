import { NgModule } from "@angular/core";
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list'; 
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button'; 
import {LayoutModule} from '@angular/cdk/layout'; 
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';


@NgModule ({
    imports: [
        MatToolbarModule,
        MatListModule,
        MatSidenavModule,
        MatIconModule,
        MatButtonModule,
        LayoutModule,
        MatTableModule,
        MatFormFieldModule,
        MatPaginatorModule,
        MatSortModule,
        MatInputModule
    ],
    exports: [
        MatToolbarModule,
        MatListModule,
        MatSidenavModule,
        MatIconModule,
        MatButtonModule,
        LayoutModule,
        MatTableModule,
        MatFormFieldModule,
        MatPaginatorModule,
        MatSortModule,
        MatInputModule
    ]
})
export class MaterialModule {}