class Key {
  private password: number;

  constructor() {
    this.password = Math.random();
  }

  getPassword(): number {
    return this.password;
  }
}

class Person {
  constructor(private key: Key) {
    this.key = key;
  }

  getKey(): Key {
    return this.key;
  }
}

abstract class House {
  protected door: boolean;
  protected key: Key;
  protected tenants: Person[] = [];

  constructor(key: Key) {
    this.key = key;
  }

  abstract openDoor(key: Key): void;

  comeIn(person: Person) {
    if (this.door) {
      this.tenants.push(person);
      console.log("Ви зайшли в будинок.");
      return true;
    } else {
      console.log("Двері зачинені");
      return false;
    }
  }
}

class MyHouse extends House {
  openDoor(key: Key) {
    if (key.getPassword() === this.key.getPassword()) {
      this.door = true;
      console.log("Двері відчинені.");
      return true;
    } else {
      console.log("Неправильний ключ");
      return false;
    }
  }
}

const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);

export {};
