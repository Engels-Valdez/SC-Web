
let ff = document.getElementById('ff');
let fsa = document.querySelector('#fsa');
let fec = document.querySelector('#fec');

let cinc = document.querySelector('#cinc');
let cpt = document.querySelector('#cpt');

let jumbo = document.querySelector('#jumbo');

ff.addEventListener('click', ()=>{
    jumbo.innerHTML = `
    <h2>Área Fiscal </h2><br>
                              <blockquote>
                              <p>Asesoría preventiva y correctiva del riesgos y contingencias tributarias, 
                              para asegurar a nuestros clientes llevar a cabo el debido proceso. Adicionalmente
                               ofrecemos a nuestros clientes servicios de elaboración y presentación de sus declaraciones 
                               y envíos de reportes fiscales.
                               </p>
                               </blockquote>
                               <blockquote>
                               <P>Asistimos a nuestros clientes en la gestión del cumplimiento ante los deberes formales y 
                               el cumplimiento de sus responsabilidades como contribuyente, ya sea sobre obligaciones periódicas 
                               mensuales o anuales, según como sigue: </P>
                               </blockquote><br>

                               <h4>Servicios Asesoría Fiscal:</h4>
                               <blockquote>
                               <ul>
                                  <li>• Evaluación situación impositiva actual y proyectada</li>
                                  <li>• Análisis impositivo sobre nuevas inversiones; </li>
                                  <li>• Asesoramiento en la búsqueda de economías impositivas. </li>
                                  <li>• Debida Diligencia (Due Diligencie) para el cumplimiento Ley de Lavado de Activos (155-17).</li>
                                  <li>• Validación de en la razonabilidad de cifras </li>
                                  <li>• Revisión del estatus fiscal de entidades comerciales.</li>
                                  <li>• Planificación Fiscal.</li>
                                  <li>• Análisis y la reestructuración para el manejo eficientes y efectivo de sus responsabilidades fiscales.</li>
                                  <li>• Otros.
                               </ul>
                               </blockquote><br>

                               <h4>Consultoría impositiva:</h4>
                               <blockquote>
                               <ul>
                                  <li>•	Representación y asesoría para atender requerimientos de organismos reguladores.</li>
                                  <li>•	Representación y elaboración frente a solicitudes de la Administración Tributaria. </li>
                                  <li>•	Apelaciones de resoluciones emanadas de los organismos reguladores.</li>
                                  <li>•	Elaboración de Recursos de Reconsideración.</li>
                                  <li>•	Recursos ante el Tribunal Contencioso Tributario y Administrativo.</li>
                                  <li>•	Incorporación empresarial y actualización del Registro Mercantil </li>
                                  <li>•	Gestiones para l obtención del Registro Nacional de Contribuyentes.</li>
                                  <li>•	Revisión de créditos fiscales.</li>
                                  <li>•	Análisis Legislación nacional / internacional; Análisis y respuestas sobre temas específicos en materia impositiva.</li>
                               </ul>
                               </blockquote><br>

                               <h4>Auditorías Fiscales:</h4>
                                <blockquote>
                                  <p>Nuestros Servicios Incluyen la planeación, trabajo de campo, informe y recomendación de Auditoría 
                                  Fiscal acorde a las necesidades fiscales y ajustadas al tiempo requerido.
                                   </p>
                                </blockquote><br>

                              <h4>Preparación, Revisión y Declaraciones Juradas:</h4>
                               <blockquote>
                               <ul>
                                  <li>•	Revisión de las declaraciones de impuestos realizadas por las empresas.</li>
                                  <li>•	Elaboración de las declaraciones juradas anuales y mensuales, así como de los formatos de envíos de datos (606,607,608, Otros). </li>
                                  <li>•	Revisión fiscal, detención de errores en las presentaciones, validación de diferencias en las declaraciones propias y con terceros.</li>
                                  <li>•	Regímenes de regularización impositiva y previsional, facilidades de pago, etc.</li>
                                </ul>
                               </blockquote><br><br>
    `
})

fsa.addEventListener('click', ()=>{
    jumbo.innerHTML = `
    <h2>Servicios de auditoría</h2><br>
    
    <blockquote>
    <p>Contamos con el conocimiento y la experiencia necesarios para brindar 
    a nuestros clientes y sus partes interesadas la confianza y seguridad en los 
    resultados de sus informaciones financieras y contables. Destacando que nuestro 
    enfoque integral permite brindar una opinión certera sobre la actuación global de 
    la empresa, sus procesos y controles, creando de esta manera valor para el 
    desarrollo y mejora de su organización.
    </p>
    </blockquote>
    <br>

    <h4>Auditoría financiera:</h4>
    
    <blockquote>
    <p>
    Aplicamos procedimientos que tienen como objetivo emitir una opinión sobre la 
    razonabilidad de las cifras financieras sobre la base de las Normas Internacionales 
    de Contabilidad e Información Financiera.
    </p></blockquote><br>
    

    <h4>Estados financieros proyectados:</h4>
    
    <blockquote>
    <p>
    Nuestros servicios incluyen la realización y preparación de Estados Financieros (situación, 
    flujo, patrimonio) futuros, sobre la base de supuestos elaborados sobre las cifras históricas 
    presentadas, investigaciones de mercado y tendencias.
    </p>
    </blockquote><br>
    

    <h4>Auditoría previamente acordada:</h4>
    
    <blockquote>
    <p>
    Realización de trabajos de auditoria mediante procedimientos acordados, en el cual se 
    emite un informe sobre los resultados encontrados, sin emitir una opinión al respecto. 
    Se incluye una gran diversidad de trabajos por dicho concepto, entre ellos destacamos:
    </p>
    <ol>
        <li>Análisis de transacciones entre relacionadas.</li>
        <li>Revisión cumplimiento de contratos.</li>
        <li>Inventarios de bienes y/o servicios.</li>
        <li>Procedimientos financieros, entre otros.</li>
    </ol>
    </blockquote><br>
    

    <h4>Revisiones limitadas a los estados financieros:</h4>
    
    <blockquote>
    <p>
    Es una revisión que provee a la Dirección de la Sociedad informaciones importantes y la 
    determinación de aspectos significativos contables que pudieran afectar sustancialmente 
    los estados financieros.
    </p>
    </blockquote><br>
   
    `
})

fec.addEventListener('click', ()=>{
    jumbo.innerHTML = `
    <h2>Evaluación y Control Patrimonial</h2><br>
    
    <blockquote>
    <p>Asesoramos sobre los procesos tendientes a salvaguardar el patrimonio personal y familiar, mediante 
    un conjunto de procedimientos destinados a prevenir el surgimiento de eventualidades que afectan la 
    estabilidad y continuidad patrimonial de una organización.
    </p>
    </blockquote>

    <blockquote>
    <pEmitimos opinión experta en materia de gestión; específicamente en ámbitos jurídicos, financieros, 
    tributarios y contables. Estos servicios abarcan entre otros el asesoramiento a organizaciones de: 
    </p>
    <ul>
        <li>•	Fideicomisos</li>
        <li>•	Fundación de Intereses Privado</li>
        <li>•	Otros</li>
    </ul>
    </blockquote>
    <br>

    <h4>Planeación Estratégica:</h4>
    
    <blockquote>
    <p>
    Asesoramos en la la formulación objetivos a corto, mediano y largo plazo, las
     estrategias para lograrlos y 
    los mecanismos para su monitoreo y control presupuestario (Ejecución Mensual) y 
    actualización de la ejecución (Lastest Estimated).
    </p></blockquote><br>
    

    <h4>Fortalecimiento del Gobierno Corporativo:</h4>
    
    <blockquote>
    <p>
    Diseño e Implementación de un conjunto de prácticas formales que 
    gobiernan las relaciones entre: accionistas, directores, alta gerencia y terceros 
    relacionados con la empresa, promoviendo un sistema de control interno efectivo y 
    la transparencia en todas las operaciones.
    </p>
    </blockquote><br>
    

    <h4>Consultoría de Negocios:</h4>
    
    <blockquote>
    <p>
    Diseñamos estrategias y lo guiamos a ejecutarlas adecuadamente para lograr los resultados esperados, 
    coordinamos procedimientos especializados relacionados a la Inteligencia de 
    Negocio, los cuales persiguen objetivos específicos, tales como:
    </p>
    <ul>
        <li>•	Reorganización de estrategias comerciales.</li>
        <li>•	Organización eficiencia de la cadena logística desabastecimiento y compras.</li>
        <li>•	Organización de almacenes e inventarios.</li>
        <li>•	Levantamiento, identificación y conciliación de activos fijos.</li>
    </ul>
    </blockquote><br>
    

    <h4>Manuales de procedimientos, políticas y funciones:</h4>
    
    <blockquote>
    <p>
    Consiste realizar un levantamiento formalización del ciclo operativo 
    de la organización o área específica, definiendo una secuencia ordenada las principales operaciones, 
    actividades, controles y políticas, para dotar a la empresa de una guía 
    que le garantice la estandarización y logro de objetivos.
    </p>
    </blockquote><br>

    <h4>Análisis, rediseño y optimización de procesos:</h4>
    
    <blockquote>
    <p>
    Reorganización integral de los procesos, adaptándolos a las necesidades actuales y futuras 
    de la organización, logrando así una optimización en base al rendimiento, costo, efectividad y calidad.
    </p>
    </blockquote><br>

    <h4>Formalización y medición de Indicadores:</h4>
    
    <blockquote>
    <p>
    Consiste en la definición y establecimiento de indicadores de desempeño los cuales sirvan como 
    herramienta gerencial para la toma de decisiones.
    </p>
    </blockquote><br>
   
    <h4>Diseño de la estructura organizacional y Formalización de puestos y Funciones:</h4>
    
    <blockquote>
    <p>
    Adaptar su estructura funcional en orden a gestionar de forma eficiente el talento humano, garantizando 
    la organización del trabajo, asegurando el flujo de información adecuado, así como la armonía 
    y congruencia de sus componentes.
    </p>
    </blockquote><br>

    <h4>Evaluación Sistema de control Interno:</h4>
    
    <blockquote>
    <p>
    Evaluación del sistema de control interno adoptado por la empresa o de áreas y/o procesos 
    específicos, mediante la aplicación de procedimientos de auditoría que buscan mejorar la eficacia 
    de los procesos de gestión de riesgos, control, Otros.
    </p>
    </blockquote><br>

    <h4>Gestión integral de riesgos:</h4>
    
    <blockquote>
    <p>
    Implementación de sistemas de gestión de riesgos y su aplicación práctica para la 
    generación de valor inmediato para la organización. Abarca desde capacitaciones sobre la 
    concientización de riesgos por parte del personal en posiciones de Mando hasta la elaboración de 
    herramientas (matrices) para la identificación, clasificación, valoración y la administración de riesgos.
    </p>
    </blockquote><br>
    `
});

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
     </blockquote>><br>

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