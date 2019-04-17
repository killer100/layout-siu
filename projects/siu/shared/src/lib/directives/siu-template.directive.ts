import { Directive, Input, TemplateRef } from '@angular/core';

@Directive({
  selector: '[siuTemplate]',
  host: {
  }
})
export class SiuTemplateDirective {

  @Input('siuTemplate') name: string;

  constructor(public template: TemplateRef<any>) { }

  getType(): string {
    return this.name;
  }
}
