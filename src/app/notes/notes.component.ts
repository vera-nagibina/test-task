import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Note } from '../note.model';
import { NotesService } from '../notes.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {

  notes: Note [] = [
    {header: 'Заметка 1', 
    text: 'По информации НАСА, телескоп «Джеймс Уэбб» успешно провел первую корректировку курса по направлению к пункту назначения — точке Лагранжа L2 системы «Солнце-Земля». Это был первый из трех плановых маневров по коррекции траектории телескопа. Телескоп выполнил включение двигателей в течение 65 минут, а потом их отключил. Маневр прошел штатно. НАСА подчеркнуло, что данный этап является вторым по значимости в процессе полета после успешного раскрытия панелей солнечных батарей, которое произошло вскоре после запуска. Специалисты НАСА пояснили, что первый маневр помог выверить траекторию телескопа в направлении его рабочего месторасположения, которое находится на расстояние около 1,5 млн км от Земли. Полет «Уэбба» к точке Лагранжа L2 системы «Солнце-Земля» будет продолжаться четыре недели.'},
    {header: 'Заметка 2', 
    text: 'Сборщики заказов Яндекс.Еды в Кемерово с 25 декабря объявили забастовку против политики работодателя относительно оплаты труда в праздники, системы штрафов и сроков доставки. Профсоюз «Курьер» призывает других сотрудников доставки присоединиться к бойкоту. Организация приносит извинения клиентам и просит поддержать ее требования.'},
    {header: 'Заметка 3', 
    text: 'Отец с сыном создали 3D-шутер при помощи Microsoft Excel.'},
    {header: 'Заметка 4', 
    text: 'Работа над 10 нм техпроцессом Intel вела достаточно давно. Ещё во время работы над 10-ым семейством процессоров шла речь о переходе на новый техпроцесс. Но из-за различного рода проблем этот переход постоянно откладывался и откладывался. И это в то время, как тот же TSMC достигла техпроцесса в 5 нм, а точнее TSMC 5.'},
  ];

  note: Note = {
    header: '',
    text: ''
  }

  form: FormGroup = new FormGroup( {
    header: new FormControl(null, [Validators.required]),
    text: new FormControl(null, [Validators.required])
  });

  isVisible = false;

  constructor(public notesService: NotesService) { }

  ngOnInit(): void {}

  select(note: Note) {
    this.notesService.note.next(note);
    this.note = this.notesService.note.getValue();
  }

  add() {    
    this.isVisible = true;    
  }
  saveNote() {
    this.notes.push({header: this.form.value.header, text: this.form.value.text});    
  }

  cancel() {
    this.isVisible = false;
    this.form.reset(); 
  }

}
