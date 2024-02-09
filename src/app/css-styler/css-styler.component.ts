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
  radius=signal<number>(0);
  unit=signal<Unit>("px"); 
  borderRadius=computed<CssStyle['borderRadius']>(()=> `${this.radius()}${this.unit()}`);


  readonly style=computed<CssStyle>(()=>({
    backgroundColor:this.backgroundColor(),
    borderColor:this.borderColor(),
    borderRadius:this.borderRadius()
  }));
  
  changeBGC(e:Event ){
    const inputEvent = e as InputEvent;
    if (inputEvent?.target) {
      // Access the value property of the target to get the value of the color input
      const colorValue = (inputEvent.target as HTMLInputElement).value;
      this.backgroundColor.set(colorValue);
    }

    this.styleChange(this.style());
  }
  
 
  


  @Input({required:true})
  cssStyle!:CssStyle

  @Output()
  cssStyleChange= new EventEmitter<CssStyle>;



  styleChange(style:CssStyle){
    
    this.cssStyleChange.emit(style) ;

  }

}
