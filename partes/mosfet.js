const htmlMosfet = `
<article class="componente" id="mosfet" style="border-color:#06b6d4">
  <section class="bloque b-simbolo" style="flex:0 0 240px">
    <span class="etiqueta">semiconductor</span>
    <h2>MOSFET</h2>
    <img class="simbolo" src="data/simbolos/mosfet.svg" alt="Simbolo de MOSFET">
  </section>
  <section class="bloque b-info" style="flex:1 1 300px">
    <h3>Qué es</h3>
    <p>El MOSFET es un transistor de efecto de campo con tres terminales: compuerta (gate), drenaje (drain) y fuente (source). Se controla con tensión y casi no consume corriente por la compuerta.</p>
    <h3>Cómo se comporta</h3>
    <p>Al superar la tensión umbral en la compuerta se forma un canal que permite la corriente entre drenaje y fuente; por debajo queda en corte. Conmuta millones de veces por segundo con muy poca pérdida, por eso domina las fuentes de alimentación y los procesadores.</p>
  </section>
  <section class="bloque b-placa" style="flex:2 1 420px">
    <h3>Dónde está en la placa</h3>
    <div class="placa"><img src="data/placas/motherboard.svg" alt="Motherboard"><span class="zona" style="left:15.50%;top:29.33%;width:5.50%;height:25.33%"></span></div>
    <p>Los MOSFET de la etapa de alimentación (VRM) son los pequeños rectángulos negros alineados junto a las bobinas.</p>
  </section>
</article>
`;
