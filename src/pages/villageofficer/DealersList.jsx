
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const dealersData = [
  {
    id: 1,
    name: 'Sharma Agro Dealers',
    contact: '9876541111',
    type: 'Seller',
    address: 'Market Road, Rampur',
    items: ['Tractor', 'Plough', 'Seeds'],
    rating: 4.7
  },
  {
    id: 2,
    name: 'Patel Equipment Rentals',
    contact: '9876542222',
    type: 'Rent Giver',
    address: 'Station Road, Rampur',
    items: ['Tractor', 'Harvester', 'Sprayer'],
    rating: 4.5
  },
  {
    id: 3,
    name: 'Singh Farm Supplies',
    contact: '9876543333',
    type: 'Seller',
    address: 'Main Bazaar, Rampur',
    items: ['Fertilizer', 'Seeds', 'Tools'],
    rating: 4.2
  },
  {
    id: 4,
    name: 'Yadav Rental Services',
    contact: '9876544444',
    type: 'Rent Giver',
    address: 'Near Bus Stand, Rampur',
    items: ['Plough', 'Seeder', 'Tractor'],
    rating: 4.6
  },
  {
    id: 5,
    name: 'Kumar Agricultural Store',
    contact: '9876545555',
    type: 'Seller',
    address: 'Old City Road, Rampur',
    items: ['Pesticides', 'Irrigation', 'Hand Tools'],
    rating: 4.3
  },
  {
    id: 6,
    name: 'Gupta Heavy Machinery Rent',
    contact: '9876546666',
    type: 'Rent Giver',
    address: 'Industrial Area, Rampur',
    items: ['Bulldozer', 'Excavator', 'Crane'],
    rating: 4.8
  },
  {
    id: 7,
    name: 'Verma Seeds & Fertilizer',
    contact: '9876547777',
    type: 'Seller',
    address: 'Agricultural Market, Rampur',
    items: ['Hybrid Seeds', 'Bio-fertilizers', 'Growth Enhancers'],
    rating: 4.4
  },
  {
    id: 8,
    name: 'Modern Farm Equipment Rental',
    contact: '9876548888',
    type: 'Rent Giver',
    address: 'Highway Road, Rampur',
    items: ['Combine Harvester', 'Thresher', 'Power Tiller'],
    rating: 4.7
  }
];

const DealersList = () => {
  const [filterType, setFilterType] = useState('Rent Giver');
  const navigate = useNavigate();

  const handleDealerClick = (dealer) => {
    navigate('/dealer-detail', { state: { dealer } });
  };

  const filteredDealers =
    filterType === 'All'
      ? dealersData
      : dealersData.filter((dealer) => dealer.type === filterType);

  return (
      <div className="min-h-screen bg-gray-300 p-8">
        <h2 className="text-responsive-3xl font-bold text-green-700 mb-6">Dealers List - Rampur Village</h2>
        <div className="flex justify-center gap-4 mb-8">
          
          <button
            className={`px-6 py-2 rounded-lg font-semibold text-responsive-base border-2 transition-colors duration-150 ${
              filterType === 'Rent Giver'
                ? 'bg-green-600 text-white border-green-600'
                : 'bg-white text-green-700 border-green-600 hover:bg-green-100'
            }`}
            onClick={() => setFilterType('Rent Giver')}
          >
            Rent Givers
          </button>
          <button
            className={`px-6 py-2 rounded-lg font-semibold text-responsive-base border-2 transition-colors duration-150 ${
              filterType === 'Seller'
                ? 'bg-green-600 text-white border-green-600'
                : 'bg-white text-green-700 border-green-600 hover:bg-green-100'
            }`}
            onClick={() => setFilterType('Seller')}
          >
            Sellers
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredDealers.map((dealer) => (
            <div
              key={dealer.id}
              className="bg-gray-100/80 rounded-xl shadow-lg p-6 border-l-4 border-green-500 grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-4 cursor-pointer hover:shadow-xl transition-shadow"
              onClick={() => handleDealerClick(dealer)}
            >
              {/* Left side: Dealer info */}
              <div className="flex-1 flex flex-col items-start justify-start">
                <div className="flex items-center gap-4 mb-2">
                  <div className="w-12 h-12 bg-green-200 rounded-full flex items-center justify-center text-green-700 font-bold text-responsive-xl">
                    {dealer.name.charAt(0)}
                  </div>
                  <div>
                    <h3 className="text-responsive-xl font-bold text-green-700 mb-1">{dealer.name}</h3>
                  </div>
                </div>
                <p className="text-gray-700 text-responsive-base mb-1">
                  <span className="font-semibold">Phone:</span> {dealer.contact}
                </p>
                <p className="text-gray-700 text-responsive-base mb-1">
                  <span className="font-semibold">Address:</span> {dealer.address}
                </p>
              </div>
              {/* Right side: Items and equipment */}
              <div className="flex-1 flex flex-col justify-between">
                <div className="mb-2">
                  <span className="font-semibold text-gray-600 text-responsive-sm">Equipments:</span>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {dealer.items.map((item) => (
                      <span
                        key={item}
                        className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-responsive-xs font-medium"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {filteredDealers.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-500 text-responsive-lg">No dealers found for this category.</div>
          </div>
        )}
      </div>
  );
};

export default DealersList;
