import React from "react";
import { Link } from "react-router-dom";

const Welcome: React.FC = () => {
  const companies = [
    { name: "Distribuidora Juan de Tal", whatsapp: "+549111234567", description: "Productos de limpieza y artículos varios" },
    { name: "Carnicería Avenida", whatsapp: "+549117654321", description: "Carnes y embutidos frescos" },
    { name: "Fiambrería X", whatsapp: "+549119876543", description: "Sándwiches y fiambres variados" },
  ];

  const news = [
    { title: "Nuevo formato de pedido", text: "Ya podés crear pedidos desde la app en pocos pasos." },
    { title: "Actualización de inventario", text: "Alertas automáticas cuando el stock baja de 10 unidades." },
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      <header className="bg-white shadow px-6 py-4">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <h1 className="text-2xl font-bold text-primary">CommerceControl</h1>
          <nav>
            <Link to="/login" className="text-sm text-primary font-medium">Iniciar sesión</Link>
            <span className="mx-2">|</span>
            <Link to="/register" className="text-sm text-primary font-medium">Regístrate</Link>
          </nav>
        </div>
      </header>

      <main className="max-w-4xl mx-auto py-12">
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Gestioná tu negocio desde cualquier lugar</h2>
          <p className="text-gray-600 leading-relaxed">
            Control de inventario, pedidos, empleados, nómina y más. Todo en una sola plataforma, diseñada para pequeñas y medianas empresas.
          </p>
        </section>

        {/* Sección de empresas participantes */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-4">Más de 3.000 empresas ya confían en nosotras</h2>
          <p className="text-gray-500 mb-6">
            Conocé a algunas de las pyme que ya usan CommerceControl para organizar su día a día.
          </p>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {companies.map((c, i) => (
              <div
                key={i}
                className="bg-white p-4 rounded border border-gray-200 hover:shadow-md transition-shadow"
              >
                <h3 className="font-medium">{c.name}</h3>
                <p className="text-sm text-gray-500 line-clamp-2">{c.description}</p>
                <a
                  href={`https://wa.me/${c.whatsapp.replace("+", "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-block text-primary font-medium underline"
                >
                  Contactar por WhatsApp
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Sección de noticias / publicidad gratuita */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Noticias y ofertas gratuitas</h2>
          <p className="text-gray-500 mb-6">
            En esta sección mostramos publicidad de otras aplicaciones y servicios
            útiles para tu negocio, de manera totalmente gratuita.
          </p>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {news.map((n, i) => (
              <div key={i} className="bg-white p-4 rounded border border-gray-200">
                <h3 className="font-medium text-primary">{n.title}</h3>
                <p className="text-sm text-gray-500 line-clamp-2">{n.text}</p>
              </div>
            ))}
          </div>
        </section>

        <footer className="mt-12 pt-8 border-t border-gray-200 text-center">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} CommerceControl. Todos los derechos reservados.
          </p>
        </footer>
      </main>
    </div>
  );
};

export default Welcome;