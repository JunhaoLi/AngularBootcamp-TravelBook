import { Directive, ElementRef, Renderer2, HostListener, Input } from '@angular/core';

@Directive({
    selector: '[toggleMenu]'
})
export class ToggleMenuDirective {
    @Input('toggleMenu')targetId;
    
    toggle = false;

    @HostListener('click', ['$event']) onMenuClicked(e: Event) {
        this.toggle = !this.toggle;
        for (let dom of this.elementRef.nativeElement.children)
        {
            if (dom.id.indexOf(this.targetId) != -1) {
                if (this.toggle) {
                    this.renderer.addClass(dom, 'd-block');
                }
                else {
                    this.renderer.removeClass(dom, 'd-block');
                }
            }
        }
        e.stopPropagation();
    }

    constructor(private elementRef: ElementRef, private renderer: Renderer2) {
        // elementRef.nativeElement.style['background-color'] = 'red';
        // renderer.setStyle(elementRef.nativeElement, 'background-color', 'red');
    }
}