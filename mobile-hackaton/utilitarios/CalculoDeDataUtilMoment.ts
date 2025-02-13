import moment from 'moment';

// Função para calcular a diferença entre a hora do início da aula e a hora atual

function calculandoData(dataFim:Date)  {
  /*
  // Hora atual
  const horaAtual = moment();

  console.log('Data Atual: '+horaAtual.format('DD/MM/YYYY HH:mm:ss'));

  console.log('dataFIm: '+dataFim);

  // Calcula a diferença em segundos
  const diferencaEmSegundos = moment(horaAtual).diff(dataFim, 'seconds');

  console.log('Data Atual '+horaAtual.format('DD/MM/YYYY HH:mm'));

  const data = moment.duration(diferencaEmSegundos, 'seconds').asMilliseconds();

  //console.log('Diferença de data: '+data.format('HH:mm:ss'));
  return diferencaEmSegundos;//diferencaEmSegundos;//data.format('HH:mm:ss');
  */

   // Hora atual
   const horaAtual = moment();

   console.log('Data Atual: ' + horaAtual.format('DD/MM/YYYY HH:mm:ss'));
 
   console.log('dataFim: ' + moment(dataFim).format('DD/MM/YYYY HH:mm:ss'));
 
   // Calcula a diferença em segundos
   const diferencaEmSegundos = moment(dataFim).add(3, 'hours').diff(horaAtual, 'seconds'); // Diferente do original (inverti a ordem)
 
   console.log('Diferença em Segundos: ' + diferencaEmSegundos);
 
   // Converte a diferença em milissegundos para exibição
   const data = moment.duration(diferencaEmSegundos, 'seconds');
  
   console.log(
     'Diferença Formatada: ' +
       String(data.hours()).padStart(2, '0') +
       ':' +
       String(data.minutes()).padStart(2, '0') +
       ':' +
       String(data.seconds()).padStart(2, '0')
   );
   
   return diferencaEmSegundos;
}

function convertendoSegundosEmHora(diferencaEmSegundos: number){

  const duracao = moment.duration(diferencaEmSegundos, 'seconds');

  // Extrai as horas, minutos e segundos
  const horas = Math.floor(duracao.asHours());
  const minutos = duracao.minutes();
  const segundoss = duracao.seconds();

  // Retorna no formato HH:mm:ss
  return `${String(horas).padStart(2, '0')}:${String(minutos).padStart(2, '0')}:${String(segundoss).padStart(2, '0')}`;

}

export {calculandoData, convertendoSegundosEmHora};