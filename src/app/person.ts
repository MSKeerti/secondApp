 export class Person {

        constructor(pAadhar:string='', pName:string='', pAge:number=18){
            this.aadhar = pAadhar;
            this.name = pName;
            this.age = pAge;
        }
    
        public aadhar :string='';  //~ C# string
        public name:string='';
        public age:number=0;       //~ C#int, int16, int32, int64, long, short, decimal
        private secrets:string[]=[];  //~ C# Arrays{}
        public isAlive:boolean=true;  //~ C# Boolean
        protected hobbies:any = {};   //~ C# Object
        protected awardsReceived:any[] = [];  //~ C# Array
    
        public static People:Person[]=[];
    
        public static GetPeople():Person[]{
            if(Person.People.length ==0){
            Person.People.push(new Person("AA12345678901A","Meena", 25));
            Person.People.push(new Person("BB12345678901B","Teena", 23));
            Person.People.push(new Person("CC12345678901C","Reena", 29));
            }
    
            return Person.People;
        }  
        
        public static AddPerson(person:Person):boolean{
            //Add him to Person.People array
            if(person == undefined)
                 return false;
                
            Person.People.push(person);
            return true;
        }
        
    }
    


