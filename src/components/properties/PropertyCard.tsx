import { Link } from 'react-router-dom';
import { Bed, Bath, Maximize2, MapPin, Tag, Sun, Home } from 'lucide-react';
import { Property } from '../../types/property';

interface PropertyCardProps {
  property: Property;
}

const PropertyCard = ({ property }: PropertyCardProps) => {
  const formatPrice = (price: number) => {
    return price.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      maximumFractionDigits: 0,
    });
  };

  // Log para verificar os dados do imóvel, especialmente a localização
  console.log('PropertyCard - Dados do imóvel:', property.id, property.title);
  return (
    <div className="card-modern group bg-white">
      <div className="relative overflow-hidden">
        <Link to={`/properties?id=${property.id}`}>
          <div className="w-full h-64 bg-primary-light">
            <img 
              src={property.image || 'images/casa2.jpg'} 
              alt={property.title} 
              className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-105 brightness-105"
              onError={(e) => {
                e.currentTarget.src = 'images/casa2.jpg';
              }}
            />
          </div>
        </Link>
        {property.featured && (
          <div className="absolute top-4 left-4 bg-accent px-4 py-1.5 text-white text-sm font-medium rounded-full shadow-md flex items-center">
            <Sun size={14} className="mr-1.5" strokeWidth={2.5} />
            Destaque
          </div>
        )}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary/80 via-primary/60 to-transparent p-6 pt-16">
          <div className="flex items-center text-white text-sm mb-2">
            <div className="bg-accent/80 rounded-full p-1 mr-2 shadow-md">
              <MapPin size={14} className="text-white" strokeWidth={2.5} />
            </div>
            <span className="font-medium tracking-wide truncate">
              {property.location || 'Localização não informada'}
            </span>
          </div>
        </div>
      </div>

      <div className="p-6 relative">
        {/* Price Tag */}
        <div className="absolute -top-10 right-6">
          <div className="flex flex-col items-center">
            <div className="bg-accent text-white px-5 py-2 rounded-t-lg font-medium shadow-lg flex items-center">
              <Tag size={14} className="mr-1.5" strokeWidth={2.5} />
              {formatPrice(property.price)}
            </div>
            <div className="w-3 h-3 bg-accent transform rotate-45 -mt-1.5 shadow-md"></div>
          </div>
        </div>

        {/* Localização para dispositivos maiores - mais visível */}
        <div className="hidden md:flex flex-col mb-3">
          <div className="flex items-center">
            <div className="bg-accent/20 text-accent rounded-full p-1 mr-2">
              <MapPin size={14} strokeWidth={2.5} />
            </div>
            <span className="text-primary/80 text-sm font-medium">
              {property.location || 'Localização não informada'}
            </span>
          </div>
          
          {property.address && (
            <div className="flex items-start mt-1 ml-7">
              <span className="text-primary/60 text-xs line-clamp-1 italic leading-snug">
                {property.address}
              </span>
            </div>
          )}
        </div>

        <Link to={`/properties?id=${property.id}`}>
          <h3 className="text-xl font-serif font-medium text-primary group-hover:text-accent transition-colors mb-2 pr-4">
            {property.title}
          </h3>
        </Link>
        <p className="text-primary/80 mb-5 text-sm line-clamp-2">{property.description}</p>

        {/* Localização para dispositivos menores */}
        <div className="md:hidden flex flex-col mb-4">
          <div className="flex items-center">
            <div className="bg-accent/20 text-accent rounded-full p-1 mr-2">
              <MapPin size={14} strokeWidth={2.5} />
            </div>
            <span className="text-primary/80 text-sm font-medium">
              {property.location || 'Localização não informada'}
            </span>
          </div>
          
          {property.address && (
            <div className="flex items-start mt-1 ml-7">
              <span className="text-primary/60 text-xs line-clamp-1 italic leading-snug">
                {property.address}
              </span>
            </div>
          )}
        </div>

        <div className="grid grid-cols-3 gap-3">
          <div className="flex flex-col items-center bg-primary/5 rounded-lg p-2.5 group-hover:bg-primary/10 transition-colors">
            <Bed size={18} className="text-accent mb-1.5" />
            <span className="text-primary text-sm font-medium">{property.bedrooms}</span>
          </div>
          <div className="flex flex-col items-center bg-primary/5 rounded-lg p-2.5 group-hover:bg-primary/10 transition-colors">
            <Bath size={18} className="text-accent mb-1.5" />
            <span className="text-primary text-sm font-medium">{property.bathrooms}</span>
          </div>
          
          <div className="flex flex-col items-center bg-primary/5 rounded-lg p-2.5 group-hover:bg-primary/10 transition-colors">
            <Maximize2 size={18} className="text-accent mb-1.5" />
            <span className="text-primary text-sm font-medium">{property.area}m²</span>
          </div>
        </div>

        {property.status === 'available' ? (
          <div className="mt-5 text-center">
            <span className="inline-block bg-green-100 text-green-800 text-xs px-4 py-1.5 rounded-full font-medium shadow-sm">
              Disponível
            </span>
          </div>
        ) : property.status === 'sold' ? (
          <div className="mt-5 text-center">
            <span className="inline-block bg-red-100 text-red-800 text-xs px-4 py-1.5 rounded-full font-medium shadow-sm">
              Vendido
            </span>
          </div>
        ) : (
          <div className="mt-5 text-center">
            <span className="inline-block bg-yellow-100 text-yellow-800 text-xs px-4 py-1.5 rounded-full font-medium shadow-sm">
              Reservado
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default PropertyCard;