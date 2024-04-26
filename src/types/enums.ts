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
