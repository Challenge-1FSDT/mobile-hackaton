import moment from 'moment';

// Função para calcular a diferença entre a hora do início da aula e a hora atual
function calculandoDiferencaDeDataInicio(horaInicioAula: Date) {
  const horaCheckinAluno = moment(); // Hora atual
  return horaCheckinAluno.diff(horaInicioAula, 'minutes');
}

// Função para calcular a diferença entre a hora do fim da aula e a hora atual
const calculandoDiferencaDeDataFim = (horaFimAula: Date) => {
  const horaCheckinAluno = moment(); // Hora atual
  return horaCheckinAluno.diff(moment(horaFimAula), 'seconds'); // Retorna a diferença em segundos
};

export { calculandoDiferencaDeDataInicio, calculandoDiferencaDeDataFim };
