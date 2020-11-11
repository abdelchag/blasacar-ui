import { CommonModule } from '@angular/common';
import { Inject, NgModule } from '@angular/core';
import { TranslateCompiler, TranslateModule, TranslatePipe } from '@ngx-translate/core';

@NgModule({
    declarations: [
    ],
    exports: [
        TranslateModule,
    ],
    imports: [
        CommonModule,
        TranslateModule
    ]
})
export class SharedModule { 
    
}