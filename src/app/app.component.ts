import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { CssStyle, defaultStyle } from './data';
import { CssStylerComponent } from './css-styler/css-styler.component';
import { ColorSelectComponent } from './color-select/color-select.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  
})

export class AppComponent {
  

  private readonly style=signal<CssStyle>(defaultStyle);   //signal primaire
  readonly cssStyle=computed<CssStyle>(()=>this.style());  //signal dérivé de style
  
  cssStyleChange(style:CssStyle){
    this.style.set(style);
  }

 

}
