export interface Airport {
    name: string;
    code: string;
    city: string;
    country: string;
}

export const airports: Airport[] = [
    {
        name: "Indira Gandhi International Airport",
        code: "DEL",
        city: "New Delhi",
        country: "India"
    },
    {
        name: "Chhatrapati Shivaji Maharaj International Airport",
        code: "BOM",
        city: "Mumbai",
        country: "India"
    },
    {
        name: "John F. Kennedy International Airport",
        code: "JFK",
        city: "New York",
        country: "United States"
    },
    {
        name: "Dubai International Airport",
        code: "DXB",
        city: "Dubai",
        country: "United Arab Emirates"
    },
    {
        name: "Heathrow Airport",
        code: "LHR",
        city: "London",
        country: "United Kingdom"
    },
    {
        name: "Singapore Changi Airport",
        code: "SIN",
        city: "Singapore",
        country: "Singapore"
    },
    {
        name: "Los Angeles International Airport",
        code: "LAX",
        city: "Los Angeles",
        country: "United States"
    },
    {
        name: "Beijing Capital International Airport",
        code: "PEK",
        city: "Beijing",
        country: "China"
    },
    {
        name: "Sydney Kingsford Smith International Airport",
        code: "SYD",
        city: "Sydney",
        country: "Australia"
    },
    {
        name: "Tokyo Haneda Airport",
        code: "HND",
        city: "Tokyo",
        country: "Japan"
    }
];