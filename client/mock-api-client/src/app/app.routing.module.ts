import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './core';

const routes: Routes = [
  { path: '',  pathMatch: 'full', redirectTo: 'notes' },
  { path: 'notes', loadChildren: './notes/notes.module#NotesModule' },
  { path: '**', pathMatch: 'full', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  declarations: [
    PageNotFoundComponent
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
