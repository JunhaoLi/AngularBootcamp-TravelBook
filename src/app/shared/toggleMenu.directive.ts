import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
    selector: '[toggleMenu]'
})
export class ToggleMenuDirective {
    toggle = false;

    @HostListener('click') onMenuClicked() {
        this.toggle = !this.toggle;
        for (let dom of this.elementRef.nativeElement.children)
        {
            if (dom.className.indexOf('dropdown-menu') != -1) {
                if (this.toggle) {
                    this.renderer.addClass(dom, 'd-block');
                }
                else {
                    this.renderer.removeClass(dom, 'd-block');
                }
            }
        }
    }

    constructor(private elementRef: ElementRef, private renderer: Renderer2) {
        // elementRef.nativeElement.style['background-color'] = 'red';
        // renderer.setStyle(elementRef.nativeElement, 'background-color', 'red');
    }
}