import { Component } from '@angular/core';

@Component({
  selector: 'app-t1-container',
  templateUrl: './t1-container.component.html',
  styleUrls: ['./t1-container.component.css']
})
export class T1ContainerComponent {
containerProp: string = "Initial value";

onClap() {
console.log("Printing: Claps from Container")
this.containerProp = "This value comes from container prop";
}
}
