/* Para Criar: name, email, password*/

interface TechObject {
  title: string;
  experience: number;
}

interface CreateUserData {
  name?: string; // ?: Opcional
  email: string;
  password: string;
  techs: Array<String | TechObject> // Array do tipo String 
  experiences: TechObject // Tipo Objeto criado acima
  //onlyString: string[], // Array de strings
}

export default function createUser({name = '', email, password} : CreateUserData) {
  const user = {
    name, 
    email,
    password,
  }

  return user;
}