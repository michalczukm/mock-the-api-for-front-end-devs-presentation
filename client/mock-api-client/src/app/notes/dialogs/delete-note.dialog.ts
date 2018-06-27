import { Inject, Component } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-delete-note-dialog',
  templateUrl: 'delete-note.dialog.html',
})
export class DeleteNoteDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<DeleteNoteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {title: string}) {}

  onNoClick(): void {
    this.dialogRef.close(false);
  }
}
