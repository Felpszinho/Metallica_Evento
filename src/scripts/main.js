AOS.init();


const data =new Date("Dec 1, 2023 19:00:00");
const timeEvento=data.getTime();

const contaHoras=setInterval(function(){  
 
    const agora =new Date();
    const timeAtual=agora.getTime();


    //dias
   const diasMS=1000*60*60*24;
   //horas
   const horaMS=1000 * 60 * 60
   //minutos
   const minutosMS=1000 *60;

     


  const distancia=timeEvento-timeAtual;
  const diaevento=Math.floor( distancia /diasMS);
  const Horasevento=Math.floor((distancia%diasMS)/(horaMS));
  const minutosEvento=Math.floor((distancia % horaMS /minutosMS));
  const segundosEventos=Math.floor((distancia % minutosMS)/1000)

  document.getElementById('contador').innerHTML=`${diaevento}d  ${Horasevento}h ${minutosEvento}m ${segundosEventos}s`;
  if(distancia<0){
    clearInterval(contaHoras);
    document.getElementById('contador').innerHTML=' Evento expirado'

  }
},1000);