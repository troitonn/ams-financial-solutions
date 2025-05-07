
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      <div className="flex-grow flex items-center justify-center bg-gray-100">
        <div className="text-center px-4 py-16">
          <div className="text-ams-gold text-6xl md:text-9xl font-bold mb-4">404</div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Página não encontrada</h1>
          <p className="text-xl text-gray-600 mb-8 max-w-md mx-auto">
            A página que você está procurando não existe ou foi movida.
          </p>
          <Link 
            to="/" 
            className="gold-button px-8 py-3 rounded-md font-medium text-lg inline-flex items-center"
          >
            Voltar à página inicial
          </Link>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default NotFound;
