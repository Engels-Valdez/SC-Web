let cinc = document.querySelector('#cinc');
let cpt = document.querySelector('#cpt');

let jumbo = document.querySelector('#jumbo');

cinc.addEventListener('click', ()=>{

    jumbo.innerHTML= `
    <h2>Impuestos, Nómina y Contabilidad</h2><br>
    <blockquote>
    <p>Ofrecemos Servicios de Tercerización (Outsourcing) de procesos financieros, contables y tributarios, 
    permitiendo que nuestros clientes puedan concentrar sus esfuerzos en incrementar la comercialización de sus 
    productos o servicios, la eficiencia de sus procesos y el logro de las metas establecidas.
     </p>
     </blockquote>
     <blockquote>
     <P>Mediante la base de nuestra especialización en materia contable y fiscal en los diferentes sectores económicos 
     del país, brindamos servicios que garanticen la calidad, confiabilidad y oportunidad de las informaciones financieras, contables y el cumplimiento fiscal de su organización, usando una metodología bajo las mejores prácticas internacionales. </P>
     <p>
     Nuestro trabajo es realizado de acuerdo con las Normas Internacionales de Información Financiera y de Contabilidad 
     aplicables y los cuales incluyen los siguientes servicios:
     </p>
     </blockquote><br>

     <h4>Teneduría de Libros:</h4>
     <blockquote>
     <p>
     Proceso de registrar, clasificar y resumir la información de cada una de las transacciones efectuadas por la empresa.
     </p>
     </blockquote><br>

     <h4>Impuestos y nóminas:</h4>
     <blockquote>
     <p>
     Elaboración y/o revisión de los impuestos y nóminas mensuales, actualizaciones de cambios en el portal 
     de la Tesorería de la Seguridad Social (TSS).
     </p>
     </blockquote><br>

     <h4>Registros contables y fiscales:</h4>
      <blockquote>
        <p>Su finalidad es mantener un registro ordenado y sistemático de todas las transacciones 
          comerciales que realicen nuestros clientes, validando la
         razonabilidad de las cifras a través de los soportes suministrados y elaboración de análisis y cruces fiscales.
         </p>
      </blockquote><br>

    <h4>Informes y compilación de estados financieros:</h4>
     <blockquote>
     <p>
     Tiene como propósito reunir, clasificar y resumir en forma de Estados Financieros la información que surge del sistema contable de 
     la empresa, así como la elaboración de la Declaración Jurada Anual de Sociedades y evaluación de riesgos fiscales 
     sobre las operaciones realizadas.
     </p>
     </blockquote><br><br>

    `;
});

cpt.addEventListener('click', ()=>{

    jumbo.innerHTML= `
    <h2>Precio de Transferencia</h2><br>
    <blockquote>
    <p>Le asesoramos en el diseño, implementación y prestación ante la autoridad fiscal en lo relacionado al Precio de Trasferencia según como sigue;
     </p>
     </blockquote><br>

     <h4>Planificación Fiscal Preventiva para Operaciones Controladas</h4>
     <blockquote>
     <p>
     Evaluación anticipada de las transacciones controladas a ser realizadas, con el objeto de prevenir cualquier riesgo relacionado y asegurar 
     el cumplimiento de las disposiciones fiscales aplicables.
     </p>
     </blockquote><br>

     <h4>Elaboración y Presentación de la Declaración Informativa de Operaciones con Relacionados (DIOR)</h4>
     <blockquote>
     <p>
     Levantamiento de las transacciones a ser reportadas, identificación de los entes relacionados, vaciado de la 
     declaración DIOR y presentación ante la DGII.
     </p>
     </blockquote><br>

     <h4>Elaboración Estudio de Precios de Transferencia</h4>
      <blockquote>
        <p>Incluye un análisis funcional y transaccional de las operaciones controladas, elaboración de los análisis económicos, búsqueda de 
        comparables mediante utilización de bases de datos y otras fuentes 
        de información pública disponibles, presentación de la DIOR en base a los resultados obtenidos, emisión física y digital del estudio.
         </p>
      </blockquote><br>

    <h4>Evaluación Entorno de Riesgos</h4>
     <blockquote>
     <p>
     Análisis de factores internos o externos que podrían representar contingencias futuras, relacionadas con la realización de operaciones con entes relacionados.
     </p>
     </blockquote><br>

     <h4>Elaboración y Análisis de Contratos</h4>
     <blockquote>
     <p>
     Comprobación de los precios, cuotas, tasas, políticas de cuentos pactadas en contratos de prestación de bienes y servicios con entes relacionados, así como 
     también elaboración de contratos para operaciones nuevas, acorde a las normativas vigentes en materia de precios de transferencia.
     </p>
     </blockquote><br>
     <br>

    `;
});