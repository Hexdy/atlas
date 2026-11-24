const htmlDiodo = `
<article class="componente" id="diodo" style="border-color:#38bdf8">
  <section class="bloque b-simbolo" style="flex:0 0 240px">
    <span class="etiqueta">semiconductor</span>
    <h2>Diodo</h2>
    <img class="simbolo" src="data/simbolos/diodo.svg" alt="Simbolo de Diodo">
  </section>
  <section class="bloque b-info" style="flex:1 1 300px">
    <h3>Qué es</h3>
    <p>El diodo es un semiconductor de dos terminales, ánodo y cátodo, formado por una unión P-N. La franja marcada en el cuerpo indica el lado del cátodo.</p>
    <h3>Cómo se comporta</h3>
    <p>En polarización directa (ánodo más positivo que cátodo, unos 0,7 V en silicio) conduce; en inversa bloquea casi toda la corriente. Se usa para rectificar, proteger contra polaridad invertida y evitar retornos de corriente.</p>
  </section>
  <section class="bloque b-placa" style="flex:2 1 420px">
    <h3>Dónde está en la placa</h3>
    <div class="placa"><img src="data/placas/motherboard.svg" alt="Motherboard"><span class="zona" style="left:6.25%;top:8.00%;width:6.00%;height:6.00%"></span></div>
    <p>Cerca del conector de alimentación hay diodos que protegen la placa de corrientes en sentido inverso.</p>
  </section>
</article>
`;
