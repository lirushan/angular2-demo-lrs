import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'my-children',
  templateUrl: './children.component.html'
})
export class ChildrenComponent{
  // 从父组件传信息到子组件需要用到Input对象
  @Input()private fromParent: string;
  // 从子组件传信息到父组件要用到Output, EventEmitter对象
  @Output()private fromChildren = new EventEmitter<string>();

  constructor(){}

  sendMessage(){
    let msg = "message from child";
    this.fromChildren.emit(msg);
  }
}
