import {Directive, ElementRef, HostBinding, HostListener} from "@angular/core";

@Directive({
  selector: '[appDropDown]' // 속성 셀렉터 대괄호
})
export class DropdownDirective {
  @HostBinding('class.open') isOpen: boolean = false

  // @HostListener('click') toggleOpen() {
  //   this.isOpen = !this.isOpen
  // }

  @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
    /**
     * 어디를 클릭해도 드랍다운이 닫히게
     * this.elRef.nativeElement 는 생성자 주입을 통해 appDropDown 가 적용 된 엘리먼트가 나온다.
     */
    this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false
  }

  constructor(private elRef: ElementRef) {}
}
