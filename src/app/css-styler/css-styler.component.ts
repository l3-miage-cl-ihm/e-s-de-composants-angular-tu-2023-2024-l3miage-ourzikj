import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, computed, signal } from '@angular/core';
import { CssStyle, Unit, defaultStyle } from '../data';
import { style } from '@angular/animations';

@Component({
  selector: 'app-css-styler',
  templateUrl: './css-styler.component.html',
  styleUrls: ['./css-styler.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class CssStylerComponent {

  backgroundColor=signal<string>("#ffffff");
  borderColor=signal<string>("#ffffff");
  borderRadius=signal<number>(0);
  unit=signal<Unit>("px"); 



  readonly style=computed<CssStyle>(()=>({
    backgroundColor:this.backgroundColor(),
    borderColor:this.borderColor(),
    borderRadius:`${this.borderRadius()}${this.unit()}`
  }));
  
  changeBGC(event: any): void {
    this.backgroundColor = event;
    this.styleChange(this.getCssStyle());

  }

  changeBorderColor(event: any): void {
    this.borderColor = event;
    this.styleChange(this.getCssStyle());
  }

  changeBorderRadius(event: any): void {
    this.borderRadius = event;
    this.styleChange(this.getCssStyle());
  }

  getCssStyle(): CssStyle {
    return {
      backgroundColor: this.style().backgroundColor,
      borderColor: this.style().borderColor,
      borderRadius:this.style().borderRadius
    };
  }
  
 
 
  


  @Input({required:true})
  cssStyle!:CssStyle

  @Output()
  cssStyleChange= new EventEmitter<CssStyle>;



  styleChange(style:CssStyle){
    
    this.cssStyleChange.emit(style) ;

  }

}
