import { Component } from '@angular/core';
import { CommonService } from './common.service'
import { ThrowStmt } from '@angular/compiler';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shopping';
  searchedValue;
  word;
  constructor(public commonService:CommonService){}
  onPress(event){
      let previousWord = this.commonService.searchedValue;
      // this.commonService.searchedValue="";
      if(event.key != "Enter" && event.key != "CapsLock"&& event.key != "Shift"&& event.key != "Alt" && event.key != "ArrowUp"
      && event.key != "ArrowDown"&& event.key != "ArrowRight"&& event.key != "ArrowLeft" && event.key != "Control"&& event.key != "Meta"&& event.key != "Escape" && event.key != "Tab"){
      if(event.key=="Backspace"){
        if(previousWord.length >= 1){
          this.commonService.searchedValue = this.word.slice(0,this.word.length-1);
        } else {
          this.commonService.searchedValue = "";
        }
        this.commonService.searchCall();
        return;
      }
      this.commonService.searchedValue = previousWord.concat(event.key);
      this.word = this.commonService.searchedValue;
      this.commonService.searchCall()
      this.word = this.word.slice(0,this.word.length-1);
      }
    }
  }

