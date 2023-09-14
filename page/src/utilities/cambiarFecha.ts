

export function cambiarFecha(fecha: string): { fecha: string, hora: string } {
    const number = Date.parse(fecha);
    const date = new Date(number);

    const fechaHora = new Date(date);

    fechaHora.setDate(fechaHora.getDate() - 1);

    const hora = fechaHora.getHours();
    const am = hora<=12;
    if(am){
        hora-12;
    }
    fechaHora.setHours(hora);
    const nuevaFecha = fechaHora.toISOString().split('T')[0];
    const nuevaHora = fechaHora.toISOString().split('T')[1].split('.')[0];
    return {
        fecha:nuevaFecha,
        hora:nuevaHora + `${am?' am':' pm'}`
    }
}