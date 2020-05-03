import { tipoIdentificacionModel } from "./tipoIdentificacionModel";
import { empresaModel } from './empresaModel';

interface IUsuarioEntidadModel{
    id: string;
    nombre:string;
    apellido:string;
    tipoIdentificacionId: string;
    tipoIdentificacion: string;
    correoElectronico: string;
    empresaId: string;
    empresa: string;     
    numeroIdentificacion: string;
    
}

export class UsuarioEntidadModel implements IUsuarioEntidadModel
{
    id: string;
    nombre:string;
    apellido:string;
    tipoIdentificacionId: string;
    tipoIdentificacion: string;
    correoElectronico: string;
    empresaId: string;
    empresa: string;   
    numeroIdentificacion:string;   
}