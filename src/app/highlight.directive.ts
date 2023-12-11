import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private hostEl:ElementRef) { 
    hostEl.nativeElement.style = "background-color:yellow";
  }
 
  @HostBinding('style.color') Color!:string;


  @HostListener('mouseenter')
  public onEnter(){
    this.hostEl.nativeElement.style = "background-color:cyan";
    this.Color = "red";
  }

  @HostListener('mouseleave')
  public onLeave(){
    this.hostEl.nativeElement.style = "background-color:yellow";
  }
  
}
