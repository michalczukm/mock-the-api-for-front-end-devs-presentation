import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, AbstractControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { tap } from 'rxjs/operators';
import { Note, NotesService, ModifyComponentType, NoteType } from '../shared';

// tslint:disable-next-line:interface-over-type-literal
type NoteFormGroup = {
  title: AbstractControl,
  content: AbstractControl,
  type: AbstractControl
};

@Component({
  selector: 'app-modify-note',
  templateUrl: './modify-note.component.html',
  styleUrls: ['./modify-note.component.scss']
})
export class ModifyNoteComponent implements OnInit {
  private editNote: Note | null = null;

  form: FormGroup;
  typedForm: NoteFormGroup;
  type: ModifyComponentType;
  noteTypeRef = NoteType;

  labels = {
    'create': {
      title: () => 'Create'
    },
    'edit': {
      title: () => `Edit "${this.editNote.title}"`
    }
  };

  constructor(private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private noteService: NotesService,
    public snackBar: MatSnackBar) {
      this.createForm();
      const data = this.route.snapshot.data;

      this.type = data['type'] as ModifyComponentType;

      if (this.type === 'edit') {
        this.editNote = data['payload'];
        this.form.patchValue(this.editNote);
      }
  }

  ngOnInit() {
  }

  onSubmit() {
    const formResult: Note = this.form.value;

    const action = () => {
      if (this.type === 'edit') {
        return this.noteService.update(this.editNote.id, { ...this.editNote, ...formResult })
          .pipe(tap(() => this.openSnackBar('Note updated')));
      } else {
        return this.noteService.create(formResult)
          .pipe(tap(() => this.openSnackBar('Note added')));
      }
    };

    action().subscribe(() => this.router.navigate(['/notes']));
  }

  private createForm() {
    this.form = this.fb.group({
      title: ['', Validators.required],
      content: [''],
      type: ['', Validators.required]
    });

    this.typedForm = Object.keys(this.form.controls).reduce((result, key) => {
      result[key] = this.form.controls[key];
      return result;
    }, {} as { [key in keyof NoteFormGroup]: AbstractControl });
  }

  private openSnackBar(message: string) {
    this.snackBar.open(message, 'Ok', {
      duration: 2000,
    });
  }
}
