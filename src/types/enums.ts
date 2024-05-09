export const months: {
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
  '01': 'Janeiro',
  '02': 'Fevereiro',
  '03': 'Março',
  '04': 'Abril',
  '05': 'Maio',
  '06': 'Junho',
  '07': 'Julho',
  '08': 'Agosto',
  '09': 'Setembro',
  '10': 'Outubro',
  '11': 'Novembro',
  '12': 'Dezembro',
};

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
  PEDIDO_EM_REALIZACAO: string;
  PEDIDO_PRONTO: string;
  PEDIDO_FINALIZADO: string;
  PEDIDO_AVALIADO: string;
  [key: string]: string;
} = {
  PEDIDO_REALIZADO: 'Aguardando aprovação',
  PEDIDO_EM_REALIZACAO: 'Em preparo',
  PEDIDO_PRONTO: 'Em rota',
  PEDIDO_FINALIZADO: 'Entregue',
  PEDIDO_AVALIADO: 'Entregue',
};
export const statusIcon: {
  PEDIDO_REALIZADO: string;
  PEDIDO_EM_REALIZACAO: string;
  PEDIDO_PRONTO: string;
  PEDIDO_FINALIZADO: string;
  PEDIDO_AVALIADO: string;
  [key: string]: string;
} = {
  PEDIDO_REALIZADO: 'clock-time-eight-outline',
  PEDIDO_EM_REALIZACAO: 'stove',
  PEDIDO_PRONTO: 'truck-fast-outline',
  PEDIDO_FINALIZADO: 'check-circle-outline',
  PEDIDO_AVALIADO: 'check-circle-outline',
};
