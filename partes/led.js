const htmlLed = `
<article class="componente" id="led" style="border-color:#ef4444">
  <section class="bloque b-simbolo" style="flex:0 0 240px">
    <span class="etiqueta">semiconductor</span>
    <h2>LED</h2>
    <img class="simbolo" src="data/simbolos/led.svg" alt="Simbolo de LED">
  </section>
  <section class="bloque b-info" style="flex:1 1 300px">
    <h3>Qué es</h3>
    <p>El LED (diodo emisor de luz) es un diodo que convierte energía eléctrica en luz visible. El color depende del material semiconductor con que está fabricado.</p>
    <h3>Cómo se comporta</h3>
    <p>Solo ilumina si se polariza en directa y necesita un resistor en serie que limite la corriente, normalmente entre 5 y 20 mA. Con polaridad inversa no conduce ni emite luz.</p>
  </section>
  <section class="bloque b-placa" style="flex:2 1 420px">
    <h3>Dónde está en la placa</h3>
    <div class="placa"><img src="data/placas/motherboard.svg" alt="Motherboard"><span class="zona" style="left:85.00%;top:81.67%;width:5.00%;height:6.67%"></span></div>
    <p>El punto rojo en la esquina inferior derecha es un LED indicador de estado.</p>
  </section>
</article>
`;
