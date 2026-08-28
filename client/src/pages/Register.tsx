import React from "react";

const Register: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-8 rounded shadow max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4">Regístrate</h2>
        <p className="text-gray-600 mb-6">
          Creá tu cuenta para empezar a gestionar tu negocio.
        </p>
        {/* Formulario de registro será añadido después */}
        <button className="w-full bg-primary text-white py-2 rounded">
          Continuar con correo electrónico
        </button>
      </div>
    </div>
  );
};

export default Register;