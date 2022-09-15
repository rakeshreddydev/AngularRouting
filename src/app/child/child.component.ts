import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() name='';
  username ='';
  @Output() useremiiter = new EventEmitter;

  constructor() { }

  ngOnInit(): void {
    this.username = 'venky';
  }
  passNametoParent()
  {
    this.useremiiter.emit(this.username);
    console.log(this.username);
  }

}
