import { tipoIdentificacionModel } from "./tipoIdentificacionModel";
import { empresaModel } from './empresaModel';

interface IUsuarioModel{
    id: string;
    nombre:string;
    apellido:string;
    tipoIdentificacionId: string;
    tipoIdentificacion: tipoIdentificacionModel;
    correoElectronico: string;
    empresaId: string;
    empresa: empresaModel;    
    password: string;
    numeroIdentificacion: string;
    email: string;
}

export class UsuarioModel implements IUsuarioModel
{
    id: string;
    nombre:string;
    apellido:string;
    tipoIdentificacionId: string;
    tipoIdentificacion: tipoIdentificacionModel;
    correoElectronico: string;
    empresaId: string;
    empresa: empresaModel;    
    password: string;
    numeroIdentificacion: string;
    email:string;
}