import { Directive,HostListener,ElementRef } from '@angular/core';

@Directive({
  selector: '[appImageSlider]'
})
export class ImageSliderDirective {

  constructor(private el:ElementRef) {

   }
@HostListener('click')
imageChange(){
var src:any=this.el.nativeElement.src;
var prev:any=document.getElementById("preview");
console.log(prev);
prev.src=src;
var imgSlider = document.getElementsByClassName("img-slide");
for(let i=0; i<imgSlider.length;i++){
  imgSlider[i].classList.remove("active");
}
this.el.nativeElement.parentElement.classList.add("active");
}
}
