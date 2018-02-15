import { NgModule } from '@angular/core';
import { AgendaComponent } from './agenda/agenda';
import { AgendaVolComponent } from './agenda-vol/agenda-vol';
@NgModule({
	declarations: [AgendaComponent,
    AgendaVolComponent],
	imports: [],
	exports: [AgendaComponent,
    AgendaVolComponent]
})
export class ComponentsModule {}
