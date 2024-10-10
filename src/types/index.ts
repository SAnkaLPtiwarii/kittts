export interface Airport {
    name: string;
    code: string;
    city: string;
    country: string;
}

export interface Flight {
    airline: string;
    flightNumber: string;
    departureTime: string;
    arrivalTime: string;
    duration: string;
    stops: string;
    price: string;
    departureAirport: Airport;
    arrivalAirport: Airport;
}