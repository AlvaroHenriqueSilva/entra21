
let turno = prompt(`Qual o turmo que você estuda?
                    M - Matutino
                    V - Vespertino
                    N - Noturno`).toUpperCase()
switch (turno) {
    case 'M': alert('Bom dia'); break;
    case 'V': alert('Boa tarde'); break;
    case 'N': alert('Boa noite'); break;
    default: alert('Turno inválido'); break;
}