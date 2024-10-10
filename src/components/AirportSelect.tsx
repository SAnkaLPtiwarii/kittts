import React from 'react';
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Airport } from '@/types';
import { ChevronDown, Plane } from 'lucide-react';

interface AirportSelectProps {
    label: string;
    value: Airport | null;
    onChange: (airport: Airport) => void;
    airports: Airport[];
}

const AirportSelect: React.FC<AirportSelectProps> = ({ label, value, onChange, airports }) => {
    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button variant="outline" className="w-full justify-between text-left font-normal">
                    <div className="flex items-center">
                        <Plane className="mr-2 h-4 w-4" />
                        <span>{value ? `${value.city} (${value.code})` : label}</span>
                    </div>
                    <ChevronDown className="h-4 w-4 opacity-50" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[300px] p-0">
                <div className="max-h-[300px] overflow-y-auto">
                    {airports.map((airport) => (
                        <div
                            key={airport.code}
                            className="flex items-center p-3 cursor-pointer hover:bg-gray-100 transition-colors duration-200"
                            onClick={() => onChange(airport)}
                        >
                            <Plane className="mr-2 h-4 w-4 text-teal-600" />
                            <div>
                                <div className="font-semibold">{airport.city}</div>
                                <div className="text-sm text-gray-500">{airport.name} ({airport.code})</div>
                            </div>
                        </div>
                    ))}
                </div>
            </PopoverContent>
        </Popover>
    );
};

export default AirportSelect;