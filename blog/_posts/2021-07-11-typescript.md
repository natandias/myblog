---
title: Typescript
description: Notas sobre typescript
date: 2021-07-11
author: natandias
tags: 
  - Typescript
  - Javascript
---

## O que é?

- Um superset do Javascript (adiciona features ao Javascript)
- Implementa tipagem estática (definição de váriaveis)
- Compila para JS (exceto no Deno)
- Intercambiável com JS (arquivos com extensões .ts e .js)
- Mesma sintaxe do JS
- Pode inferir tipos

## Por que?

- Evita resultados inesperados (como soma de int e string)
- Avisa se estiver fazendo algo errado
- Já funciona como uma espécie de documentação
- Melhora o *autocomplete* do editor de código (ex: mostra todos os métodos de um objeto)
- Pode substituir o JS gradualmente
- Facilita os testes

## Desvantagens

- Precisa ser compilado (exceto no Deno)
- Erros nem sempre são muito claros ou são muito grandes

## Como instalar

No terminal, rode o comando: `npm install -g typescript`

## Como iniciar projeto

No terminal, rode o comando: `tsc --init`

## Como rodar um projeto

No terminal, rode o comando: `tsc --watch` e use o nodemon ou node para executar os arquivos js.

## Tipos

- Boolean (true - false)
- String ('foo', "foo", `foo`)
- Number (50, 10.1, 0xff0)
- Array (string[ ], number[ ], object[ ], Array<number>, Array<string>...)
- Tuple ( [number, string, number] )
- Enum
- Any (comportamento padrão do JS, não use)
- Void (funções sem retorno, como console.log)
- Null (type Bla = string | undefined)
- Undefined (semelhante ao null)
- Never (nunca retorna, usa-se por exemplo, ao jogar um erro, pois a execução é parada)
- Unknown (semelhante ao any, mas não permite que nenhuma propriedade ou método da váriavel seja modificado)
- Object

## Inferência de tipos (type inference)

Se você declara uma váriavel já com um valor atribuído, o typescript define automaticamente o tipo da variável, que não poderá ser alterado posteriormente. 

```tsx
let msg = "essa é uma string";
msg = "string nova"; // funciona
msg = 10; // não funciona
```

## União (Union)

Permite que uma váriavel possa aceitar mais de um tipo:

```tsx
let id: number | string;
id = 10; // funciona
id = "abc"; // funciona
id = true; // não funciona
```

## Type Alias

Permite criar um tipo personalizado. Ao invés de usar o **union** pode-se criar um tipo:

```tsx
type Uid = number | string;
let id: Uid;

id = 10; // funciona
id = "abc"; // funciona
id = true; // não funciona
```

Com o **type alias** também se pode definir os valores que são aceitos por uma váriavel:

```tsx
type Platform = 'Windows', 'Linux';
let system: Platform;

system = 'Windows'; // funciona
system = 'MacOS'; // não funciona
```

Também consegue-se definir tipos mais complexos, como objetos:

```tsx
type AccountInfo = {
	id: number;
	name: string;
	email?: string; // Opcional
}

const account: AccountInfo = {
	id: 1,	
	name: "John"
}
```

## Intersecção (Intersection)

Permite unir type aliases:

```tsx
type CharInfo = {
	nickname: string;
	level: number;
}

type PlayerInfo = AccountInfo & CharInfo;

const player: PlayerInfo = {
  id: 123,
  name: "William",
  nickname: "will",
  level: 10,
};
```

É possível usar o intersection diretamente na atribuição.

```tsx
type PlayerOne = AccountInfo & CharInfo & { content: boolean };
```

## Classes

Criando uma classe:

```tsx
class UserAccount {
  public name: string;
  protected age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  logDetails(): void {
    console.log(`The player ${this.name} is 
									${this.age} years old`);
  }
}
```

Extendendo uma classe e adicionando propriedades e métodos:

```tsx
class CharAccount extends UserAccount {
  private nickname: string;
  readonly level: number;

  constructor(name: string, age: number, 
							nickname: string, level: number) {
    super(name, age);

    this.nickname = nickname;
    this.level = level;
  }

  logCharDetails(): void {
    console.log(`The player ${this.name} 
    has the char ${this.nickname}
    at level ${this.level}`);
  }
  changeNickname(nickname: string): void {
    this.nickname = nickname;
  }
	changeAge(age: number): void {
    this.age = age;
  }
}
```

### Modifiers

**Private:** impede que uma propriedade seja modificada do lado de fora da classe. Na classe acima, a propriedade *nickname* está como private, assim se criarmos um objeto com base nessa classe e tentarmos alterar ou visualizar a propriedade *nickname* sem usar um método da própria classe, não irá funcionar.

```tsx
const john = new CharAccount("John", 45, "JohnNoobKiller", 1500);

john.nickname = "jonjon"; // não funciona
console.log(john.nickname); // não funciona
john.changeNickname("ItSJonny"); // funciona
```

**Readonly:** impede a modificação da propriedade, mesmo que por um método de dentro da própria classe, mas permite a visualização de uma propriedade tanto dentro quanto do lado de fora de sua classe.

```tsx
john.level = 10; // não funciona
console.log(john.level); // funciona
```

**Public:** pode-se realizar qualquer operação com a propriedade mesmo que seja realizada fora da classe, por padrão, todas as propriedades e objetos criados na classe são públicos.

```tsx
john.name = "Jonatas"; // funciona
console.log(john.name); // funciona
```

**Protected:** semelhante ao private, não permite nem a visualização e nem modificação do lado de fora da classe, mas permite que além da própria classe, suas subclasses também possam alterar a propriedade.

```tsx
john.changeAge(50) // funciona
john.age = 10; // não funciona
```

## Accessors

Considerando a seguinte classe:

```tsx
class CharAccount extends UserAccount {
  private nickname: string;
	// level alterada para public, para permitir modificação
  public level: number; 

  constructor(name: string, age: number, nickname: string, level: number) {
    super(name, age);

    this.nickname = nickname;
    this.level = level;
  }
	
	// getter
  get getLevel() {
    return this.level;
  }

	// setter
	set setLevel() {
    this.level = level
  }
}
const john = new CharAccount("John", 45, "JohnNoobKiller", 1500);
```

### Getters (get)

É uma propriedade da classe que retorna um valor de uma propriedade, semelhante a um método. 

```tsx
console.log(john.getLevel); // printa 1500
```

### Setter (set)

É uma propriedade da classe que permite a alteração de um valor de uma propriedade.

```tsx
john.setLevel = 40;
console.log(john.getLevel); // printa 40
```

## Abstract Class

É uma classe que não permite a criação de objetos a partir dela.

```tsx
abstract class EletronicDevice {
  public productName: string;
  public company: string;
  public year: number;

  constructor(productName: string, company: string, year: number) {
    this.productName = productName;
    this.company = company;
    this.year = year;
  }

  get getProductName() {
    return this.productName;
  }

  get getCompany() {
    return this.company;
  }

  get getYear() {
    return this.year;
  }
}
const tv = new EletronicDevice("TV", "LG", 2000); // não funciona
```

Mas pode-se criar novas classes à partir dela.

```tsx
class Videogame extends EletronicDevice {
  cpu: string;
  gpu: string;
  memorySize: number;

  constructor(
    productName: string,
    company: string,
    year: number,
    cpu: string,
    gpu: string,
    memorySizeInMB: number
  ) {
    super(productName, company, year);
    this.cpu = cpu;
    this.gpu = gpu;
    this.memorySize = memorySizeInMB;
  }

  get getMemorySize() {
    return this.memorySize;
  }
}
```

E agora, podemos criar um novo objeto à partir da classe `Videogame`.

```tsx
const PlayStation4 = new Videogame(
  "Playstation4",
  "Sony",
  2013,
  "AMD",
  "Radeon",
  8000
);

console.log(
  `A fabricante do ${PlayStation4.name} é ${PlayStation4.getCompany}, 
		e ele possui ${PlayStation4.getMemorySize} MB de ram`
);
```

## Interfaces

Funciona como o **type alias,** mas é usado somente para descrição de objetos mais complexos.

```tsx
interface Game {
  title: string;
  description: string;
  genre: string;
  platform?: string[]; // opcional
  getSimilars?: (title: string) => void; // opcional
}
```

Podemos criar uma variável com esse tipo.

```tsx
const tlou: Game = {
  title: "The Last of Us",
  description: "Top",
  genre: "Action",
  platform: ["PS3", "PS4"],
  getSimilars: (title: string) => {
    console.log(`'${title}' similars: Uncharted`)
  }
}
```

Também podemos determinar, como nas classes, se uma propriedade pode ser alterada ou não, com os **modifiers.**

```tsx
interface VideoGame {
  name: string;
  readonly price: number;
}

const ps4: VideoGame = {
  name: "Playstation 4",
  price: 1500
}
ps4.price = 1550; // não funciona, pois 'price' é readonly
```

E definir se uma propriedade pode ser opcional.

```tsx
interface PC {
	cpu: string;
	gpu: string;
	ram: number;
	mouse?: string; // opcional
  keyboard?: string; // opcional
  printerIsConnected?: (printerName: string) => void;
}
const myPC: PC = {
  cpu: 'intel', gpu: 'amd', ram: 8000, 
  printerIsConnected: (printerName: string) => {
    console.log(`Printer ${printerName} is connected!`)
  }
} // funciona
```

Se definirmos um método como opcional e precisarmos referenciá-lo, é necessário primeiramente colocar um if para checar se ele existe.

```tsx
console.log(myPC.printerIsConnected("hp")) // erro, pois o método pode ser undefined
if (myPC.printerIsConnected) { myPC.printerIsConnected("hp"); } // funciona
```

Podemos, como nas classes, criar uma interface à partir de outra, herdando suas propriedades.

```tsx
interface Server extends PC {
  hardDisksAmount: number;
  raidIsTurnedOn:  (disksId: number[]) => void;
}
const myServer: Server = {
  cpu: 'amd', gpu: 'amd', ram: 2000, hardDisksAmount: 3, 
  raidIsTurnedOn: (disksId: number[]) => {
    console.log(`Raid is turned on at disks ${disksId}`)
  } 
}
```

É possível ainda implementar uma classe baseada em uma interface.

```tsx
interface Game {
  title: string;
  description: string;
  genre: string;
  platform?: string[];
  getSimilars: (title: string) => void;
}

class CreateGame implements Game {
  title: string;
  description: string;
  genre: string;

  constructor(t: string, d: string, g: string) {
    this.title = t;
    this.description = d;
    this.genre = g;
  }
}
```

## Interfaces vs Type Alias

### Definição:

```tsx
type Game = {
  title: string;
}

type Dlc = {
	extra: string;
}
```

```tsx
interface Game {
  title: string;
}

interface Dlc {
extra: string;
}
```

### Intersecção / Extensão

```tsx

type GameCollection = Game & Dlc;

```

```tsx
interface GameCollection 
extends Game, Dlc {
};
```

### Implementando uma classe

```tsx
class CreateGame 
implements GameCollection {}
```

```tsx
class CreateGame 
implements GameCollection {}
```

### Declarando função

```tsx
type getSimilars = 
(title: string) => void;

```

```tsx
interface getSimilars {
	(title: string): void;
}
```

### Diferenças

**Type Alias** permite declarar tipos primitivos, **interfaces** não.

```tsx
type ID = string | number;

```

```tsx
interface ID extends number{} 
// não funciona
```

**Type Alias** permite declarar tuplas, **interfaces** não.

```tsx
type tupleA = [number, number];
[1, 2] as tupleA; // aceita
[1, 2, 3] as tupleA; // não aceita

```

```tsx
interface tupleB {
	0: number;
	1: number;
}

[1, 2, 3, "tabula"] as tupleB; 
// aceita, mas não deveria
```

**Type Alias** permite somente uma declaração por escopo, protegendo o código contra redeclaração. Já as **interfaces** permitem várias declarações e une as de mesmo nome, permitindo a extensão do código, sendo útil na criação de bibliotecas.

```tsx
type JQuery = { a: string };
type JQuery = { b: string };
// não funciona, gera erro

```

```tsx
interface JQuery {
	a: string;
}
interface JQuery {
	b: string;
}
const jq: Jquery = {
	a: "foo",
	b: "bar"
}
// funciona
```

### Quando usar Type Alias ou Interfaces?

Interfaces:

- Quando estiver criando bibliotecas.
- Quando precisar que o código seja extensível.
- Quando estiver criando algo mais orientado à objetos.

Type Alias:

- Quando estiver criando algo mais simples.
- Quando precisar criar um alias para tipos primitivos.
- Em quase todos os casos.

> Comece utilizando o **type alias** e se precisar extender troque para **interfaces,** mas mantenha a consistência do código.

## Generics

É usado para bloquear a mudança de tipos de uma variável de maneira dinâmica, não sendo necessário definir previamente quais os tipos serão aceitos, somente no momento da inicialização da variável.

```tsx
function useState<S>() {
  let state: S;

  function getState() {
    return state;
  };

  function setState(newState: S) {
    state = newState;
  };

  return { getState, setState };
}

const newState = useState<string>();

newState.setState(123); // não aceita
newState.setState("foo"); // aceita
```

Pode-se restringir os tipos que a função pode aceitar.

```tsx
function useState<S extends number | string>() {
  let state: S;

  function getState() {
    return state;
  };

  function setState(newState: S) {
    state = newState;
  };

  return { getState, setState };
}

const newState = useState<string>(); // aceita
const newState = useState<boolean>(); // não aceita
```

Pode-se também definir qual será o tipo padrão, se não declarado na inicialização da variável.

```tsx
function useState<S extends number | string = number>() {
  let state: S;

  function getState() {
    return state;
  };

  function setState(newState: S) {
    state = newState;
  };

  return { getState, setState };
}

const newState = useState(); // não é necessário declarar o tipo
newState.setState(123); // aceita
newState.setState("foo"); // não aceita
```

Pode-se combinar **type alias** e **interfaces** com generics.

```tsx
type numOrStr = number | string;

function useState<S extends numOrStr = number>() {
  let state: S;

  // [...]

  return { getState, setState };
}
```

### Onde se usa generics?

- Hooks
- Criação de componentes React. Ex: `React.FC<Props, States>`

## Type Utilities

Usado para realizar modificações nos tipos.

- Readonly (só permite leitura das propriedades)

```tsx
type Todo = {
  title: string;
  description: string;
  completed: boolean;
}

const todo: Readonly<Todo> = {
  title: "Assistir Dark",
  description: "Relembrar detalhes",
  completed: false
};

todo.completed = true; // não funciona, pois é readonly
```

- Partial (torna todos as propriedades opcionais)

```tsx
function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
  return {
    ...todo, ...fieldsToUpdate
  }
}

const todo2: Todo = updateTodo(todo, 
  { title: "Assistir Futurama", completed: true })
```

- Pick (seleciona todas as propriedades que você quer de um tipo, você precisa dizer as que quer)

```tsx
type TodoPreview = Pick<Todo, "title" | "completed">

const todo3: TodoPreview = {
  title: "Zerar GTA SA de novo",
  completed: false
}

const todo4: Pick<Todo, "title"> = {
  title: "Comprar feijão"
}
```

- Omit (seleciona todas as propriedades de um tipo, exceto as que você não quer, você precisa dizer as que não quer)

```tsx
type TodoPreview2 = Omit<Todo, "description">

const todo5: TodoPreview = {
  title: "Zerar GTA SA de novo",
  completed: false
}
```

## Decorators

Modifica o comportamento de propriedades.

- Class Decorator

```tsx
function setAPIVersion(apiVersion: string) {
  return (constructor) => {
    return class extends constructor {
      version = apiVersion
    }  
  }
}

@setAPIVersion("1.0.1")
class API {}
```

- Property Decorator

```tsx
function minLength(length: number) {
  return (target: any, key: string) => {
    let val = target[key];

    const getter = () => val;

    const setter = (value: string) => {
      if(value.length < length) {
        console.log(`Error: ${value} tem menos que ${length} letras`)
      } else {
        val = value;
      }
    } 
    Object.defineProperty (target, key, {
      get: getter,
      set: setter
    })
  }
}

class Movie {
  // validação - erro se menor que 5 letras 
  @minLength(5)
  title: string;

  constructor(title: string) {
    this.title = title;
  }
}

const movie = new Movie("Int"); // Int tem menos que  letras
```

- Method Decorator

```tsx
function delay(ms: number) {
  return (target: any, key: string, descriptor: PropertyDescriptor) => {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args) {
      console.log(`Esperando ${ms/1000} segundos...`)
      setTimeout(() => {
        originalMethod.apply(this, args);
      }, ms);
      
      return descriptor;
    }
  }
}

class Greeter {
  greeting: string;

  constructor(g: string) {
    this.greeting = g;
  }

  // esperar um tempo antes de rodar o método
  @delay(2000)
  greet() {
    console.log(`Hello! ${this.greeting}`)
  }
}

const littlePerson = new Greeter("Pessoinha")
littlePerson.greet();
// Esperando 2 segundos...
// Hello! Pessoinha
```

- Parameter Decorator
- Acessor Decorator