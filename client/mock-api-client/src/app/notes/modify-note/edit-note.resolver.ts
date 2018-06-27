import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Note, NotesService } from '../shared';

@Injectable()
export class EditNoteResolver implements Resolve<Note> {
  constructor(private notesService: NotesService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Note> | Promise<Note> | Note {
    return this.notesService.getById$(Number(route.paramMap.get('id')));
  }
}
