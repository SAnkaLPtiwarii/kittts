'use client';

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Airport, Flight } from '@/types';
import { airports } from '@/data/airports';
import AirportSelect from './AirportSelect';
import DateSelect from './DateSelect';
import FlightCard from './FlightCard';
import FlightDetails from './FlightDetails';
import LoadingAnimation from './LoadingAnimation';

const FlightSearchPage = () => {
    const [origin, setOrigin] = useState<Airport | null>(null);
    const [destination, setDestination] = useState<Airport | null>(null);
    const [departureDate, setDepartureDate] = useState<Date | undefined>(new Date());
    const [returnDate, setReturnDate] = useState<Date | undefined>(new Date());
    const [searchResults, setSearchResults] = useState<Flight[]>([]);
    const [selectedFlight, setSelectedFlight] = useState<Flight | null>(null);
    const [isModifying, setIsModifying] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleSearch = async () => {
        setIsLoading(true);
        setSearchResults([]);
        await new Promise(resolve => setTimeout(resolve, 6000));

        const results: Flight[] = [
            {
                airline: "Emirates",
                flightNumber: "AT 4334",
                departureTime: "9:45 AM",
                arrivalTime: "11:45 AM",
                duration: "2h 10min",
                stops: "Non stop",
                price: "AED 2,456.90",
                departureAirport: airports.find(a => a.code === "DXB")!,
                arrivalAirport: airports.find(a => a.code === "JFK")!,
            },
            // Add more simulated results here
        ];
        setSearchResults(results);
        setIsLoading(false);
    };

    const handleFlightSelect = (flight: Flight) => {
        setSelectedFlight(flight);
    };

    const handleModifySearch = () => {
        setIsModifying(true);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-100 via-teal-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-5xl font-bold text-gray-900 mb-12 text-center">Find Your Perfect Flight</h1>

                <div className="bg-white rounded-2xl shadow-2xl p-8 mb-12 transition-all duration-300 hover:shadow-3xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <AirportSelect
                            label="Where from?"
                            value={origin}
                            onChange={setOrigin}
                            airports={airports}
                        />
                        <AirportSelect
                            label="Where to?"
                            value={destination}
                            onChange={setDestination}
                            airports={airports}
                        />
                        <div className="md:col-span-2">
                            <DateSelect
                                departureDate={departureDate}
                                returnDate={returnDate}
                                onDepartureDateChange={setDepartureDate}
                                onReturnDateChange={setReturnDate}
                            />
                        </div>
                        <div className="md:col-span-2">
                            <Button onClick={handleSearch} className="w-full bg-gradient-to-r from-teal-500 to-blue-500 text-white hover:from-teal-600 hover:to-blue-600 transition-all duration-300 h-12 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl">
                                Search Flights
                            </Button>
                        </div>
                    </div>
                </div>

                {isLoading ? (
                    <LoadingAnimation />
                ) : searchResults.length > 0 && (
                    <div className="bg-white rounded-2xl shadow-2xl p-8 mb-12 transition-all duration-300 hover:shadow-3xl">
                        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Search Results</h2>
                        <p className="text-sm text-gray-500 mb-6">Showing {searchResults.length} of {searchResults.length} results</p>
                        {searchResults.map((flight, index) => (
                            <FlightCard
                                key={index}
                                flight={flight}
                                onSelect={() => handleFlightSelect(flight)}
                            />
                        ))}
                    </div>
                )}

                <Dialog open={isModifying} onOpenChange={setIsModifying}>
                    <DialogContent className="sm:max-w-[500px]">
                        <DialogHeader>
                            <DialogTitle className="text-2xl">Modify Search</DialogTitle>
                        </DialogHeader>
                        <div className="grid gap-4 py-4">
                            <AirportSelect
                                label="Where from?"
                                value={origin}
                                onChange={setOrigin}
                                airports={airports}
                            />
                            <AirportSelect
                                label="Where to?"
                                value={destination}
                                onChange={setDestination}
                                airports={airports}
                            />
                            <DateSelect
                                departureDate={departureDate}
                                returnDate={returnDate}
                                onDepartureDateChange={setDepartureDate}
                                onReturnDateChange={setReturnDate}
                            />
                        </div>
                        <Button onClick={() => { handleSearch(); setIsModifying(false); }} className="w-full bg-gradient-to-r from-teal-500 to-blue-500 text-white hover:from-teal-600 hover:to-blue-600 transition-all duration-300">
                            Search Flights
                        </Button>
                    </DialogContent>
                </Dialog>

                <Dialog open={!!selectedFlight} onOpenChange={() => setSelectedFlight(null)}>
                    <DialogContent className="sm:max-w-[600px]">
                        <DialogHeader>
                            <DialogTitle className="text-2xl">Flight Details</DialogTitle>
                        </DialogHeader>
                        {selectedFlight && departureDate && (
                            <FlightDetails flight={selectedFlight} departureDate={departureDate} />
                        )}
                    </DialogContent>
                </Dialog>

                <Button onClick={handleModifySearch} className="mt-8 bg-gradient-to-r from-purple-500 to-indigo-500 text-white hover:from-purple-600 hover:to-indigo-600 transition-all duration-300 mx-auto block px-8 py-3 rounded-full shadow-lg hover:shadow-xl">
                    Modify Search
                </Button>
            </div>
        </div>
    );
};

export default FlightSearchPage;