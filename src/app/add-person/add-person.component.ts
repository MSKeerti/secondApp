import { Component } from '@angular/core';
import { Person } from '../person';
@Component({
  selector: 'add-person',
  templateUrl: './add-person.component.html',
  styleUrls: ['./add-person.component.css']
})
export class AddPersonComponent {
public addPerson(pAadhar: string,pName: string,pAge: number, pAlive:boolean) {
   var person = new Person(pAadhar,pName,pAge)
   person.isAlive = pAlive;
   Person.AddPerson(person);
   this.status = `Person with name ${person.name} added successfully!`;
}

public handleClick(s: string) {
  this.status = `You entered the state ${s}`;
 return `You entered the state ${s}`;
}
  public CalculateDogyears(age: number)
  {
    return age/7;
  }
  public greeting:string = `welcome to karnataka People's Forum.
                             Add yourself to this forum here.`
  public state:string ='Karnataka';

  public p:Person = new Person("CC9384472938482","Nida",23);
  public status:string = '';
}
