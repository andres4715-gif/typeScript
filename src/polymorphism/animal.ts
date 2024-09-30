class Animal {
  makeSound(): void {
    console.log('Some generic animal sound');
  }
}

class Dog extends Animal {
  makeSound(): void {
    console.log('Woof!');
  }
}

class Cat extends Animal {
  makeSound(): void {
    console.log('Meow!');
  }
}

function printAnimalSound(animal: Animal) {
  animal.makeSound();
}

const myDog: Animal = new Dog();
const myCat: Animal = new Cat();

printAnimalSound(myDog); // Woof!
printAnimalSound(myCat); // Meow!
