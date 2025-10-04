import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const farmersData = [
  { 
    id: 1, 
    name: "Rajesh Kumar", 
    contact: "9876543210", 
    village: "Rampur",
    crops: ["Wheat", "Rice"], 
    landArea: 5.2, 
    status: "Active",
    farmingType: "Organic",
    experience: "15 years",
    address: "Plot 45, Rampur Village"
  },
  { 
    id: 2, 
    name: "Priya Sharma", 
    contact: "9876543221", 
    village: "Rampur",
    crops: ["Sugarcane", "Maize"], 
    landArea: 3.8, 
    status: "Active",
    farmingType: "Traditional",
    experience: "8 years",
    address: "Plot 23, Rampur Village"
  },
  { 
    id: 3, 
    name: "Amit Singh", 
    contact: "9876543232", 
    village: "Rampur",
    crops: ["Cotton", "Paddy"], 
    landArea: 7.1, 
    status: "Inactive",
    farmingType: "Hybrid",
    experience: "12 years",
    address: "Plot 67, Rampur Village"
  },
  { 
    id: 4, 
    name: "Sunita Devi", 
    contact: "9876543243", 
    village: "Rampur",
    crops: ["Vegetables", "Wheat"], 
    landArea: 2.5, 
    status: "Active",
    farmingType: "Organic",
    experience: "6 years",
    address: "Plot 12, Rampur Village"
  },
  { 
    id: 5, 
    name: "Ravi Patel", 
    contact: "9876543254", 
    village: "Rampur",
    crops: ["Rice", "Pulses"], 
    landArea: 4.3, 
    status: "Active",
    farmingType: "Traditional",
    experience: "20 years",
    address: "Plot 89, Rampur Village"
  },
  { 
    id: 6, 
    name: "Meera Gupta", 
    contact: "9876543265", 
    village: "Rampur",
    crops: ["Fruits", "Vegetables"], 
    landArea: 1.8, 
    status: "Active",
    farmingType: "Organic",
    experience: "4 years",
    address: "Plot 34, Rampur Village"
  },
  { 
    id: 7, 
    name: "Vikram Yadav", 
    contact: "9876543276", 
    village: "Rampur",
    crops: ["Wheat", "Barley"], 
    landArea: 6.7, 
    status: "Inactive",
    farmingType: "Traditional",
    experience: "18 years",
    address: "Plot 56, Rampur Village"
  },
  { 
    id: 8, 
    name: "Kavita Joshi", 
    contact: "9876543287", 
    village: "Rampur",
    crops: ["Sugarcane", "Vegetables"], 
    landArea: 3.2, 
    status: "Active",
    farmingType: "Hybrid",
    experience: "10 years",
    address: "Plot 78, Rampur Village"
  }
];

const FarmersList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [farmingTypeFilter, setFarmingTypeFilter] = useState('');
  const navigate = useNavigate();

  const filteredFarmers = farmersData.filter(farmer => {
    return (
      (searchTerm === '' || 
       farmer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
       farmer.contact.includes(searchTerm) ||
       farmer.crops.some(crop => crop.toLowerCase().includes(searchTerm.toLowerCase()))
      ) &&
      (statusFilter === '' || farmer.status === statusFilter) &&
      (farmingTypeFilter === '' || farmer.farmingType === farmingTypeFilter)
    );
  });

  const handleFarmerClick = (farmer) => {
    navigate('/farmer-detail', { state: { farmer } });
  };

  return (
    <div className="min-h-screen bg-gray-300 p-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-responsive-3xl font-bold text-green-700 mb-6">Farmers List - Rampur Village</h2>
        
        {/* Filters Section */}
        <div className="bg-gray-100/80 rounded-xl shadow-lg p-6 mb-6">
          <div className="flex flex-wrap gap-4 items-center">
            <input
              type="text"
              placeholder="Search farmers, crops, or contact..."
              className="flex-1 min-w-64 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-responsive-base"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <select
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 text-responsive-base"
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
            >
              <option value="" className="text-responsive-base">All Status</option>
              <option value="Active" className="text-responsive-base">Active</option>
              <option value="Inactive" className="text-responsive-base">Inactive</option>
            </select>
            <select
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 text-responsive-base"
              value={farmingTypeFilter}
              onChange={(e) => setFarmingTypeFilter(e.target.value)}
            >
              <option value="" className="text-responsive-base">All Farming Types</option>
              <option value="Organic" className="text-responsive-base">Organic</option>
              <option value="Traditional" className="text-responsive-base">Traditional</option>
              <option value="Hybrid" className="text-responsive-base">Hybrid</option>
            </select>
          </div>
        </div>

        

        {/* Farmers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredFarmers.map(farmer => (
            <div
              key={farmer.id}
              className="bg-gray-100/80 rounded-xl shadow-lg p-6 cursor-pointer hover:shadow-xl hover:scale-105 transition-all duration-200 border-l-4 border-green-500"
              onClick={() => handleFarmerClick(farmer)}
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-200 rounded-full flex items-center justify-center text-green-700 font-bold text-responsive-xl mr-4">
                  {farmer.name.charAt(0)}
                </div>
                <div>
                  <h3 className="text-responsive-xl font-bold text-green-700">{farmer.name}</h3>
                  <p className="text-gray-600 text-responsive-sm">{farmer.contact}</p>
                </div>
              </div>
              
              <div className="space-y-2 mb-4">
                <div className="flex justify-between">
                  <span className="text-gray-600 text-responsive-base">Land Area:</span>
                  <span className="font-semibold text-responsive-base">{farmer.landArea} acres</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 text-responsive-base">Experience:</span>
                  <span className="font-semibold text-responsive-base">{farmer.experience}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 text-responsive-base">Farming Type:</span>
                  <span className="font-semibold text-responsive-base">{farmer.farmingType}</span>
                </div>
              </div>

              <div className="mb-4">
                <span className="text-gray-600 text-responsive-sm">Crops:</span>
                <div className="flex flex-wrap gap-1 mt-1">
                  {farmer.crops.map(crop => (
                    <span
                      key={crop}
                      className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-responsive-xs font-medium"
                    >
                      {crop}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex justify-between items-center">
                <span className={`px-3 py-1 rounded-full text-responsive-sm font-medium ${
                  farmer.status === 'Active' 
                    ? 'bg-green-100 text-green-700' 
                    : 'bg-red-100 text-red-700'
                }`}>
                  {farmer.status}
                </span>
                <button className="text-green-600 hover:text-green-800 font-medium text-responsive-sm">
                  View Details →
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredFarmers.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-500 text-responsive-lg">No farmers found matching your criteria.</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FarmersList;
