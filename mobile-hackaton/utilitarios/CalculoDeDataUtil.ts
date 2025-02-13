import { DateTime } from 'luxon';

// Função para calcular a diferença entre a hora do início da aula e a hora atual
/*
function calculandoDiferencaDeDataInicio(horaInicioAula: any) {
  // Hora atual
  const horaCheckinAluno = DateTime.local();

  // Diferença entre as duas datas em minutos
  return horaCheckinAluno.diff(DateTime.fromJSDate(horaInicioAula), 'minutes').minutes;
}*/
// Função para calcular a diferença entre a hora do fim da aula e a hora atual
// Função para calcular a diferença entre a hora do fim da aula e a hora atual
const calculandoDiferencaDeDataFim = (horaFimAula: Date) => {

  console.log('=================================');
  console.log('calculandoDiferencaDeDataFim');

  console.log(' >>> data original >>> ' + horaFimAula);

  const horaatual = DateTime.now();
  console.log('Data de agora pega pelo Luxon (now) >>> ', horaatual.toString());

  //const horaFimAulaLuxon = DateTime.from(horaFimAula);

  console.log('Data de agora pega pelo Luxon (now) >>> ', horaFimAula.toString());

  const diff = horaatual.diff(horaFimAula, 'second');
  // Converte horaFimAula para DateTime do Luxon
  
  console.log('diff >> '+diff.toString());
  
  // Log da diferença no formato HH:mm:ss
  console.log(`${String(diff).padStart(2, '0')}:${String(diff).padStart(2, '0')}:${String(diff).padStart(2, '0')}`);

  return diff; // Retorna a diferença em segundos
};

export { /* calculandoDiferencaDeDataInicio,*/ calculandoDiferencaDeDataFim };
