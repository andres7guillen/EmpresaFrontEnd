import { UsuarioModel } from './usuarioModel';

interface IEmpresaModel {
    id: string;
    razonSocial: string;
    nit: string;    
}

export class empresaModel implements IEmpresaModel {
    id: string;
    razonSocial: string;
    nit: string;    
}