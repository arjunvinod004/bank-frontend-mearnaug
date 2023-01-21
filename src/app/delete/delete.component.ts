import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
@Input() item:string|undefined
// input()- it is used to hold parent data from component
@Output() oncancel = new EventEmitter();
// output()- it is used to hold data from child component
@Output() ondelete = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  cancel(){
   //
   // alert('clicked')
    this.oncancel.emit()
    // oncancel - undefined event
  }
  delete(){
    this.ondelete.emit(this.item)
   // alert('delete clicked')
  }
 


}
