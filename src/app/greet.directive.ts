import { Directive, HostBinding, TemplateRef, ViewContainerRef, ElementRef ,HostListener, Input, Attribute } from '@angular/core';

@Directive({
  selector: '[greet]'
})
export class GreetDirective {
  @Input() greet // 动态输入指令内容
//   @HostBinding() get innerText() {
//       return this.greet;
//   }
//   @HostListener('click',['$event']) //监控指令的事件
//   onClick(event) {
//     this.greet = 'Clicked!';
//     console.dir(event)
//  }
set condition(newCondition: boolean) {
  if (!newCondition) { 
      this.viewContainer.createEmbeddedView(this.templateRef);
  } else {
      this.viewContainer.clear();
  }
}

 // 获取指令的原元素的属性，并进行操作
  constructor(private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,el:ElementRef,@Attribute('author') public author: string) {
    console.log(author)
    // el.nativeElement.style.backgroundColor="green"
   }

}
