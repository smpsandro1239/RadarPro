export interface ImovelCru {
  externalId: string;
  fonteId: string;
  url: string;
  titulo: string;
  descricao: string;
  tipo: string;
  operacao: string;
  preco: number;
  area?: number;
  quartos?: number;
  casasBanho?: number;
  distrito: string;
  concelho: string;
  freguesia?: string;
  morada?: string;
  lat?: number;
  lng?: number;
  fotos: { url: string; alt?: string; ordem: number }[];
  publicadoEm?: Date;
  raw: any;
}