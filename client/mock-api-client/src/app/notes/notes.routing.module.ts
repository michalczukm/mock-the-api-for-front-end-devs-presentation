import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotesListComponent } from './notes-list/notes-list.component';
import { NoteDetailsComponent } from './note-details/note-details.component';
import { ModifyNoteComponent } from './modify-note/modify-note.component';
import { NotesListResolver } from './notes-list/notes-list.resolver';
import { NotesComponent } from './notes.component';
import { NoteDetailsResolver } from './note-details/note-details.resolver';
import { ModifyComponentType } from './shared';
import { EditNoteResolver } from './modify-note/edit-note.resolver';

const routes: Routes = [
  {
    path: '',
    component: NotesComponent,
    children: [
      {
        path: '',
        component: NotesListComponent,
        resolve: {
          payload: NotesListResolver
        }
      },
      {
        path: 'create',
        component: ModifyNoteComponent,
        data: {
          type: 'create' as ModifyComponentType
        }
      },
      {
        path: ':id/edit',
        component: ModifyNoteComponent,
        data: {
          type: 'edit' as ModifyComponentType
        },
        resolve: {
          payload: EditNoteResolver
        }
      },
      {
        path: ':id',
        component: NoteDetailsComponent,
        resolve: {
          payload: NoteDetailsResolver
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [
    RouterModule
  ]
})
export class NotesRoutingModule {
}

export const components = [
  NotesComponent,
  NotesListComponent,
  NoteDetailsComponent,
  ModifyNoteComponent
];

export const providers = [
  NotesListResolver,
  NoteDetailsResolver,
  EditNoteResolver
];
