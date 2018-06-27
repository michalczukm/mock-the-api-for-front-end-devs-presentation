import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { filter, switchMap } from 'rxjs/operators';
import { Note, NotesService } from '../shared';
import { DeleteNoteDialogComponent } from '../dialogs';

@Component({
  selector: 'app-note-details',
  templateUrl: './note-details.component.html',
  styleUrls: ['./note-details.component.scss']
})
export class NoteDetailsComponent implements OnInit {
  note: Note;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private notesService: NotesService,
    public dialog: MatDialog) {
  }

  ngOnInit() {
    this.note = this.route.snapshot.data['payload'];
  }

  delete() {
    const dialogRef = this.dialog.open(DeleteNoteDialogComponent, {
      data: { title: this.note.title }
    });

    dialogRef.afterClosed()
      .pipe(
        filter((result: boolean) => !!result),
        switchMap(() => this.notesService.delete(this.note))
      )
      .subscribe(() => this.router.navigate(['/notes']));
  }
}

