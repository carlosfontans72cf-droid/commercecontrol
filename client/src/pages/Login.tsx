import React from "react";

const Login: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-8 rounded shadow max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4">Iniciar sesión</h2>
        <p className="text-gray-600 mb-6">
          Accede a tu cuenta para gestionar tu empresa.
        </p>
        {/* Formulario de login será añadido después */}
        <button className="w-full bg-primary text-white py-2 rounded margin-top-4">
          Continuar con correo electrónico
        </button>
      </div>
    </div>
  );
};

export default Login;