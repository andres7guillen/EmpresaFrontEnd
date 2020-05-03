
interface IEmpresaEntidadModel {
    id: string;
    razonSocial: string;
    nit: string; 
    usuarios:number;   
}

export class empresaEntidadModel implements IEmpresaEntidadModel {
    id: string;
    razonSocial: string;
    nit: string; 
    usuarios:number;  
}