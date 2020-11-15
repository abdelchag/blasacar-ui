import { CommonModule } from '@angular/common';
import { Inject, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateCompiler, TranslateModule, TranslatePipe } from '@ngx-translate/core';

@NgModule({
    declarations: [
    ],
    exports:[
        FormsModule,
        CommonModule,
        TranslateModule,
        ReactiveFormsModule
    ],
    imports: [
    ]
})
export class SharedModule { 
    
}