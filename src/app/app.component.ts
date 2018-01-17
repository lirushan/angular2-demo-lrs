import {Component, OnInit, OnDestroy, OnChanges} from '@angular/core';
import {LoggerService} from "./service/logger.service";


/**
 *  1.内置指令
 *  2.自定义指令
 *  3.服务使用
 *  4.父子组件通讯
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy, OnChanges{
   private hello: string = "hello angular2";
   private isShowMore: boolean;
   private messageToChild: string;
   private childMessage: string;

  constructor(private logger: LoggerService){ }

  ngOnInit(){
    this.logger.debug("应用已初始化");
    this.messageToChild = 'message from parent';
  }

  ngOnChanges(){
    this.logger.debug("应用已修改");
  }

  ngOnDestroy(){
    this.logger.debug("应用已销毁");
  }

  receive(msg: string){
    this.childMessage = msg;
  }
}
