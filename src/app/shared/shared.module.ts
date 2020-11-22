import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { ErrorBlockComponent } from './components/error-block/error-block.component';

@NgModule({
    declarations: [
        ErrorBlockComponent
    ],
    exports: [
        FormsModule,
        CommonModule,
        TranslateModule,
        ReactiveFormsModule,
        ErrorBlockComponent
    ],
    imports: [
        CommonModule,
        TranslateModule
    ]
})
export class SharedModule {

}