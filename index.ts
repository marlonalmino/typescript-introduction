// Function
function soma(a: number, b: number) {
  return a + b
}

// Interfaces
interface IAnimal {
  nome: string
  tipo: 'terrestre' | 'aquático'
  domestico: boolean
}

interface IFelino extends IAnimal {
  visaoNoturna: boolean
}

interface ICanino extends IAnimal {
  porte: 'pequeno' | 'medio' | 'grande'
}

// Types - merge de interfaces
type IDomestico = IFelino | ICanino

const animal: IDomestico = {
  domestico: true,
  nome: 'cachorro',
  porte: 'medio',
  tipo: 'terrestre',
}

// animal.executarRugido('a') //vai dar erro pelo type

const felino: IFelino = {
  nome: 'Leão',
  tipo: 'terrestre',
  domestico: false,
  visaoNoturna: true,
}

// TO HTML
const input = document.querySelector('#input') as HTMLInputElement

input.addEventListener('input', (event) => {
  const i = event.currentTarget as HTMLInputElement
  console.log(i.value)
})

// Generic Types
function adicionaApendiceALista<T>(array: T[], valor: T) {
  return array.map(() => valor)
}

adicionaApendiceALista([1, 2, 3], 2)

interface IUsuario {
  id: string
  email: string
  cargo?: 'gerente' | 'coordenador' | 'supervisor' | 'funcionario'
}

function redirecione(usuario: IUsuario) {
  if (usuario.cargo) {
    // redirecionar(usuario.cargo)
  }

  // redirecionar para a área do usuário
}
