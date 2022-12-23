class Alumno {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  data() {
    console.log('Nombre: ' + this.name + ', Edad: ' + this.age);
  }

  isOlder() {
    if (this.age > 18) {
      console.log(this.name + ' es mayor de edad');
    } else {
      console.log(this.name + ' es menor de edad');
    }
  }
}

const diego = new Alumno('Diego', 32);
diego.data();
diego.isOlder();

const juan = new Alumno('Juan', 15);
juan.data();
juan.isOlder();
