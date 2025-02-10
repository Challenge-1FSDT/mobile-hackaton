import moment from 'moment';

export default function calculandoDiferencaDeData(horaInicioAula: Date){
        
    // Hora do check-in do aluno (exemplo)
    const horaCheckinAluno = moment(); // Hora atual

    // Diferença em milissegundos
    return horaCheckinAluno.diff(horaInicioAula, 'minutes');

}