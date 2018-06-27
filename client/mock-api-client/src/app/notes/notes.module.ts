import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from '../core';
import { NotesRoutingModule, components, providers } from './notes.routing.module';
import { NotesService, NoteTypePipe } from './shared';
import { DeleteNoteDialogComponent } from './dialogs';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    CoreModule,
    ReactiveFormsModule,
    NotesRoutingModule
  ],
  providers: [
    NotesService,
    ...providers
  ],
  declarations: [
    DeleteNoteDialogComponent,
    NoteTypePipe,
    ...components
  ],
  entryComponents: [
    DeleteNoteDialogComponent
  ]
})
export class NotesModule { }
