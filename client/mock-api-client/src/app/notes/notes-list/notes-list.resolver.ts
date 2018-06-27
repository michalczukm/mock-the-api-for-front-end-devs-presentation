import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Note, NotesService } from '../shared';

@Injectable()
export class NotesListResolver implements Resolve<Note[]> {
  constructor(private notesService: NotesService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Note[]> | Promise<Note[]> | Note[] {
    return this.notesService.getAll$();
  }
}
