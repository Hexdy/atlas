const htmlResistor = `
<article class="componente" id="resistor" style="border-color:#d97706">
  <section class="bloque b-simbolo" style="flex:0 0 240px">
    <span class="etiqueta">pasivo</span>
    <h2>Resistor</h2>
    <img class="simbolo" src="data/simbolos/resistor.svg" alt="Simbolo de Resistor">
  </section>
  <section class="bloque b-info" style="flex:1 1 300px">
    <h3>Qué es</h3>
    <p>El resistor es un componente pasivo de dos terminales que se opone al paso de la corriente eléctrica. Su valor se mide en ohmios (Ω) y se identifica por un código de colores o, en placas modernas, por un número impreso.</p>
    <h3>Cómo se comporta</h3>
    <p>Cumple la ley de Ohm: la tensión entre sus extremos es igual a la corriente que lo atraviesa multiplicada por su resistencia (V = I·R). La energía que no deja pasar se disipa como calor, por eso cada resistor tiene una potencia máxima.</p>
  </section>
  <section class="bloque b-placa" style="flex:2 1 420px">
    <h3>Dónde está en la placa</h3>
    <div class="placa"><img src="data/placas/motherboard.svg" alt="Motherboard"><span class="zona" style="left:36.25%;top:82.67%;width:16.25%;height:6.67%"></span></div>
    <p>Los resistores SMD son los rectángulos diminutos alineados cerca del borde inferior; hay cientos repartidos por toda la placa.</p>
  </section>
</article>
`;
