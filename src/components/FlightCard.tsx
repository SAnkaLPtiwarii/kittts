import React from 'react';
import { Button } from "@/components/ui/button";
import { Flight } from '@/types';
import { Plane, Clock } from 'lucide-react';

interface FlightCardProps {
    flight: Flight;
    onSelect: () => void;
}

const FlightCard: React.FC<FlightCardProps> = ({ flight, onSelect }) => {
    return (
        <div className="border-b border-gray-200 py-6 last:border-b-0">
            <div className="flex justify-between items-center flex-wrap gap-4">
                <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center">
                        <Plane className="h-6 w-6 text-teal-600" />
                    </div>
                    <div>
                        <p className="font-semibold text-lg">{flight.airline}</p>
                        <p className="text-gray-500">{flight.flightNumber}</p>
                    </div>
                </div>
                <div className="flex-1 text-center">
                    <p className="font-semibold">{flight.departureTime} - {flight.arrivalTime}</p>
                    <div className="flex items-center justify-center text-gray-500">
                        <Clock className="h-4 w-4 mr-1" />
                        <span>{flight.duration}</span>
                    </div>
                </div>
                <div className="text-center">
                    <p className="font-semibold">{flight.stops}</p>
                    <p className="text-gray-500">{flight.departureAirport.code} - {flight.arrivalAirport.code}</p>
                </div>
                <div className="text-right">
                    <p className="text-sm text-gray-500">from</p>
                    <p className="text-2xl font-bold text-teal-600">{flight.price}</p>
                    <Button onClick={onSelect} className="mt-2 bg-teal-600 text-white hover:bg-teal-700 transition-colors duration-300">
                        Select
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default FlightCard;