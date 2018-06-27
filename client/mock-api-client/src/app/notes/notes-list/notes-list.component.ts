import { Component, OnInit } from '@angular/core';
import { Note } from '../shared';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.scss']
})
export class NotesListComponent implements OnInit {
  notes = [] as Note[];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.notes = this.route.snapshot.data['payload'];
  }
}
