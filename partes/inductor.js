const htmlInductor = `
<article class="componente" id="inductor" style="border-color:#9ca3af">
  <section class="bloque b-simbolo" style="flex:0 0 240px">
    <span class="etiqueta">pasivo</span>
    <h2>Inductor</h2>
    <img class="simbolo" src="data/simbolos/inductor.svg" alt="Simbolo de Inductor">
  </section>
  <section class="bloque b-info" style="flex:1 1 300px">
    <h3>Qué es</h3>
    <p>El inductor, también llamado bobina, es un cable arrollado que genera un campo magnético cuando circula corriente. Su inductancia se mide en henrios (H), normalmente en µH o mH.</p>
    <h3>Cómo se comporta</h3>
    <p>Se opone a los cambios bruscos de corriente: tarda en dejar que suba y la mantiene un instante cuando se corta. Junto con un capacitor forma filtros y es la base de los convertidores de tensión conmutados.</p>
  </section>
  <section class="bloque b-placa" style="flex:2 1 420px">
    <h3>Dónde está en la placa</h3>
    <div class="placa"><img src="data/placas/motherboard.svg" alt="Motherboard"><span class="zona" style="left:23.75%;top:30.00%;width:5.50%;height:26.00%"></span></div>
    <p>Los bloques cuadrados grises a la izquierda del CPU son bobinas (chokes) de la etapa de alimentación.</p>
  </section>
</article>
`;
