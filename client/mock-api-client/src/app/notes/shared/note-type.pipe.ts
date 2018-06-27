import { Pipe, PipeTransform } from '@angular/core';
import { NoteType } from './note-type.model';

@Pipe({
  name: 'noteType'
})
export class NoteTypePipe implements PipeTransform {

  transform(value: NoteType): string {
    switch (value) {
      case NoteType.Meeting:
        return 'Meeting';
      case NoteType.Personal:
        return 'Personal';
      case NoteType.Urgent:
        return 'Urgent';
      default:
        throw new Error(`NoteType "${value}" not supported!`);
    }
  }
}
