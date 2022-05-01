// Pegando de dentro do react meu createContext para poder 
// criar meu contexto 
import {createContext} from 'react';

// criar uma constante que irá receber a funcao createContext()
// A função createContext irá criar um componente que terá um provider 
// e um consumer. O Provider por sua vez é colocado onde queremos iniciar
// prover o estado e o consumer no componente que irá consumir as informações 
// contida no provider
const MyContext = createContext();

// agora iremos exportar esse contexto 
export default MyContext;