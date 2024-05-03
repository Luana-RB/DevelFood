export const months = [
  'Janeiro',
  'Fevereiro',
  'Março',
  'Abril',
  'Maio',
  'Junho',
  'Julho',
  'Agosto',
  'Setembro',
  'Outubro',
  'Novembro',
  'Dezembro',
];
export const weekDays = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];

export const monthText: {
  '01': string;
  '02': string;
  '03': string;
  '04': string;
  '05': string;
  '06': string;
  '07': string;
  '08': string;
  '09': string;
  '10': string;
  '11': string;
  '12': string;
  [key: string]: string;
} = {
  '01': 'Jan',
  '02': 'Fev',
  '03': 'Mar',
  '04': 'Abr',
  '05': 'Mai',
  '06': 'Jun',
  '07': 'Jul',
  '08': 'Ago',
  '09': 'Set',
  '10': 'Out',
  '11': 'Nov',
  '12': 'Dez',
};
export const statusText: {
  PEDIDO_REALIZADO: string;
  PEDIDO_EM_REALIZAÇÂO: string;
  PEDIDO_PRONTO: string;
  PEDIDO_FINALIZADO: string;
  [key: string]: string;
} = {
  PEDIDO_REALIZADO: 'Aguardando aprovação',
  PEDIDO_EM_REALIZAÇÂO: 'Em preparo',
  PEDIDO_PRONTO: 'Em rota',
  PEDIDO_FINALIZADO: 'Entregue',
};
export const statusIcon: {
  PEDIDO_REALIZADO: string;
  PEDIDO_EM_REALIZAÇÂO: string;
  PEDIDO_PRONTO: string;
  PEDIDO_FINALIZADO: string;
  [key: string]: string;
} = {
  PEDIDO_REALIZADO: 'clock-time-eight-outline',
  PEDIDO_EM_REALIZAÇÂO: 'stove',
  PEDIDO_PRONTO: 'truck-fast-outline',
  PEDIDO_FINALIZADO: 'check-circle-outline',
};
