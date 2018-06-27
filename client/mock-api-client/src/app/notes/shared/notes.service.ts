import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Note } from './note.model';
import { EnvironmentProviderService } from '../../core';

@Injectable()
export class NotesService {
  private readonly baseUrl: string;

  constructor(private httpClient: HttpClient,
    envProvider: EnvironmentProviderService) {
    this.baseUrl = envProvider.current.apiBaseUri;
  }

  getAll$(): Observable<Note[]> {
    return this.httpClient.get<Note[]>(`${this.baseUrl}/notes`);
  }

  getById$(id: number): Observable<Note> {
    return this.httpClient.get<Note>(`${this.baseUrl}/notes/${id}`);
  }

  delete(note: Note): Observable<Object> {
    return this.httpClient.delete(`${this.baseUrl}/notes/${note.id}`);
  }

  create(note: Note): Observable<Note> {
    return this.httpClient.post<Note>(`${this.baseUrl}/notes`, note);
  }

  update(id: number, note: Note): Observable<Note> {
    return this.httpClient.put<Note>(`${this.baseUrl}/notes/${id}`, note);
  }
}
