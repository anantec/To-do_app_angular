import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output, inject } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StateService } from '../../services/state.service';
import { debounce, debounceTime } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './header.component.html',
  styles: ''
})
export class HeaderComponent {

searchControl= new FormControl();
stateService = inject(StateService);
ngOnInit(){
  this.searchControl.valueChanges.pipe(debounceTime(250)).subscribe((value)=>{
this.stateService.searchSubject.next(value || " ");
  })
}

}
