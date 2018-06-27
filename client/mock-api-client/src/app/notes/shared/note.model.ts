import { NoteType } from './note-type.model';

export interface Note {
  id: number;
  title: string;
  content: string;
  createdOn: Date;
  type: NoteType;
}
