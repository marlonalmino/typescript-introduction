// Function
function soma(a: number, b: number) {
  return a + b
}

// Interfaces
interface IAnimal {
  nome: string
  tipo: 'terrestre' | 'aquático'
  executarRugido(volumeEmDecibeis: number): void
}

interface IFelino extends IAnimal {
  visaoNoturna: boolean
}

const animal: IAnimal = {
  nome: 'Elefante',
  tipo: 'terrestre',
  executarRugido: (volumeEmDecibeis) => `${volumeEmDecibeis}dB`,
}

// animal.executarRugido('a') //vai dar erro pelo type

const felino: IFelino = {
  nome: 'Leão',
  tipo: 'terrestre',
  visaoNoturna: true,
  executarRugido: (volumeEmDecibeis) => `${volumeEmDecibeis}`,
}
