export class Student {
  id: number;
  name: string;
  gender: String;
  age: string;
  address: string;
  phone: string;

constructor(
  id : number,
  address: string,
  age: string,
  name: string,
  gender: string,
  phone: string
 ) {
  this.id = id;
  this.address = address;
  this.name = name;
  this.age = age;
  this.gender = gender;
  this.phone = phone;
}
}

