import {Directive, ElementRef, HostBinding, HostListener, Renderer2} from "@angular/core";

@Directive({
    selector: '[appDropdown]'
})
export class DropdownDirective {
    // @HostBinding('class.open') isOpen = false; second variant
    isOpen = false;
    constructor(private elRef: ElementRef, private  renderer: Renderer2) {
    }


    @HostListener('click') onClick() {
        this.isOpen = !this.isOpen;
        if(this.isOpen){
            this.elRef.nativeElement.classList.add('open');
        } else {
            this.elRef.nativeElement.classList.remove('open');
        }
    }
}
