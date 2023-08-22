import { enviroment } from "src/enviroments/enviroments"

const base_url = enviroment.bas_url

export class User {

  constructor(
    public name: string,
    public email: string,
    public password?: string,
    public google?: boolean,
    public img?: string,
    public role?: string,
    public uid?: string
  ){}

  get imgUrl(){

    if(this.img){
      return `${base_url}/upload/usuarios/${ this.img }`
    }else{
      return `${base_url}/upload/usuarios/no-image`
    }
  }
}
