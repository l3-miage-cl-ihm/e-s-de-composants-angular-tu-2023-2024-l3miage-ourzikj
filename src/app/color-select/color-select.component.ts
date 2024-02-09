import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, computed, signal } from '@angular/core';

@Component({
  selector: 'app-color-select',
  templateUrl: './color-select.component.html',
  styleUrls: ['./color-select.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class ColorSelectComponent {
 

  @Input({ required: true })
  color!: string;

  @Output()
  colorChange = new EventEmitter<string>

  R = signal<string>(this.color.slice(0,2));
  G = signal<string>(this.color.slice(2,4));
  B = signal<string>(this.color.slice(4,6));

  changeR(event: any): void {
    this.R.set(event); 

  }
  changeG(event: any): void {
    this.G.set(event);

  }
  changeB(event: any): void {
    this.B.set(event);
 

  }

  colorSig = computed<string>(() => (`${this.R}${this.G}${this.B}`));
  getColor():string{
    return this.colorSig();
  }
  changeBGColor(color:string) {
    this.colorChange.emit(this.getColor());
  }


}
