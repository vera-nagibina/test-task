import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";
import { Note } from './note.model';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  public note: BehaviorSubject<Note> = new BehaviorSubject<Note>({header: '', text: ''});
 
}
