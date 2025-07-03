
"use client";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { How } from "@/components/How";
import { Aboutus } from "@/components/Aboutus";
import { Services } from "@/components/Services";
import { BeforeAndAfter } from "@/components/BeforeAndAfter";
import { Faq } from "@/components/Faq";
import { BookAppointment } from "@/components/BookAppointment";
import { Footer } from "@/components/Footer";
export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
<Hero headline="Vende Online en 24 Horas" subheadline="Transforma tu negocio con una web lista en un día y soporte 24/7, sin complicaciones." cta1="Comienza Ahora" />
<How step1Title="Solicita una consulta" step1Desc="Contacta a WebGo para discutir tus necesidades digitales." step2Title="Creación exprés" step2Desc="Desarrollamos tu sitio de ventas en menos de 24 horas." step3Title="Soporte continuo" step3Desc="Ofrecemos asistencia 24/7 para mantener tu negocio online." />
<Aboutus headline="WebGo: Vende Más, Sin Complicaciones" subheadline="Digitalizamos ventas para dueños ocupados, diferenciándonos por simplicidad y efectividad." beneficiotitulo1="Gestión Sencilla" beneficio1="Elimina el estrés del online" beneficiotitulo2="Aumento de Ventas" beneficio2="Transformamos recomendaciones en clientes" />
<Services heading="Digitaliza Tu Negocio en 24 Horas" description="Crusi transforma tu negocio creando webs que venden, sin esfuerzo." services={[{"name":"Diseño Rápido","icon":"rocket","description":"Webs funcionales en menos de 24 horas."},{"name":"Soporte 24/7","icon":"support","description":"Asistencia continua para tu tranquilidad."},{"name":"SEO Optimizado","icon":"search","description":"Aparece primero en búsquedas con WebGo."},{"name":"Integración de Pagos","icon":"credit-card","description":"Procesos de pago seguros y sencillos."},{"name":"Gestión de Contenidos","icon":"edit","description":"Actualiza tu web sin complicaciones."},{"name":"Analítica Web","icon":"chart-bar","description":"Conoce quién visita y por qué."}]} />
<BeforeAndAfter subheadline="Transformaciones digitales que superan expectativas y redefinen el éxito." />
<Faq faqs={[{"pregunta":"¿Cómo puede WebGo ayudarme a vender en línea si solo vendo por recomendación?","respuesta":"WebGo puede transformar tus recomendaciones en ventas en línea creando una tienda digital personalizada. Nos encargamos de todo el proceso, desde el diseño hasta la gestión, para que puedas llegar a más clientes sin complicaciones."},{"pregunta":"¿Cuáles son los beneficios de usar Crusi para mi negocio?","respuesta":"Crusi es una herramienta de WebGo que facilita la creación de una tienda online eficiente. Te ayuda a mostrar tus productos atractivamente, gestionar inventarios y procesar pagos de forma segura, todo de manera sencilla y accesible."},{"pregunta":"No tengo tiempo para gestionar un sitio web, ¿qué soluciones ofrece WebGo?","respuesta":"WebGo se ocupa de la gestión completa de tu sitio web, permitiéndote enfocarte en lo que mejor haces: tu negocio. Nuestro equipo de expertos se encarga del mantenimiento, actualizaciones y optimización para que tu tienda online funcione sin problemas."},{"pregunta":"¿Es costoso digitalizar mi negocio con WebGo?","respuesta":"WebGo ofrece soluciones asequibles y adaptadas a tu presupuesto. Entendemos las necesidades de los pequeños negocios y proporcionamos tarifas competitivas para que puedas dar el salto digital sin preocupaciones financieras."},{"pregunta":"¿Qué diferencia a WebGo de otras empresas de digitalización?","respuesta":"WebGo se especializa en llevar a los pequeños negocios a la era digital de forma efectiva y sin complicaciones. Ofrecemos un servicio integral y personalizado, garantizando que cada paso se adapte a tus necesidades específicas y resultados visibles."}]} />
<BookAppointment 
                      heading="Transforma Tu Negocio en Línea" 
                      description="No pierdas más clientes potenciales. Con WebGo, digitaliza tus ventas y deja que nosotros manejemos tu sitio web para que te enfoques en lo que mejor haces."
                      formPostUrl="/api/sendForm"
                      siteOwnerId="undefined"
                    />
<Footer />
    </main>
  );
}
