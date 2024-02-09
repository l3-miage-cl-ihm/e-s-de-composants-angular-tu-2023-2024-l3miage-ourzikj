import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, computed, signal } from '@angular/core';

@Component({
  selector: 'app-color-select',
  templateUrl: './color-select.component.html',
  styleUrls: ['./color-select.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class ColorSelectComponent {

  private _sigColor = signal<string>("#000000")
  @Input({ required: true })
    get color(): string {return this._sigColor()}
    set color(c: string) {this._sigColor.set(c)}

  

  @Output()
  colorChange = new EventEmitter<string>

  R = computed<number>( () => parseInt(this.color.slice(1,3),16))   //(this.color.slice(0,2));
  G = computed<number>( () =>parseInt(this.color.slice(3,5),16))   //(this.color.slice(2,4));
  B = computed<number>( () => parseInt(this.color.slice(5), 16))   //(this.color.slice(4,6));

  changeColor(up: {r?: number, g?: number, b?: number}): void {
    const r  = up.r ?? this.R();
    const g  = up.g ?? this.G();
    const b  = up.b ?? this.B();
    this.colorChange.emit(
      `#${[r, g, b].map( toHexadecimalString ).join('')}`
    )

  }



}

function toHexadecimalString(n: number): string {
  let result = n.toString(16);
  return result.length < 2 ? "0" + result : result;
}
