import React from 'react';
import { format } from "date-fns";
import { ArrowLeftRight } from "lucide-react";
import { Flight } from '@/types';

interface FlightDetailsProps {
    flight: Flight;
    departureDate: Date;
}

const FlightDetails: React.FC<FlightDetailsProps> = ({ flight, departureDate }) => {
    return (
        <div className="space-y-4">
            <div className="flex justify-between items-center">
                <div>
                    <p className="font-semibold">{flight.departureAirport.code}</p>
                    <p>{flight.departureTime}</p>
                    <p>{format(departureDate, "EEE, dd MMM")}</p>
                    <p>{flight.departureAirport.name}</p>
                </div>
                <ArrowLeftRight className="text-gray-400" />
                <div className="text-right">
                    <p className="font-semibold">{flight.arrivalAirport.code}</p>
                    <p>{flight.arrivalTime}</p>
                    <p>{format(departureDate, "EEE, dd MMM")}</p>
                    <p>{flight.arrivalAirport.name}</p>
                </div>
            </div>
            <div>
                <p>Flight time: {flight.duration}</p>
                <p>{flight.airline} • {flight.flightNumber}</p>
                <p>Economy • A330</p>
            </div>
        </div>
    );
};

export default FlightDetails;