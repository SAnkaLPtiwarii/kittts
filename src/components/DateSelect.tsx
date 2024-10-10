import React from 'react';
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { Calendar as CalendarIcon, ChevronLeft, ChevronRight } from "lucide-react";
import { DayPicker, DateRange } from "react-day-picker";
import { cn } from "@/lib/utils";

interface DateSelectProps {
    departureDate: Date | undefined;
    returnDate: Date | undefined;
    onDepartureDateChange: (date: Date | undefined) => void;
    onReturnDateChange: (date: Date | undefined) => void;
}

const DateSelect: React.FC<DateSelectProps> = ({
    departureDate,
    returnDate,
    onDepartureDateChange,
    onReturnDateChange,
}) => {
    const [date, setDate] = React.useState<DateRange | undefined>({
        from: departureDate,
        to: returnDate,
    });

    const handleSelect = (range: DateRange | undefined) => {
        setDate(range);
        if (range?.from) onDepartureDateChange(range.from);
        if (range?.to) onReturnDateChange(range.to);
    };

    return (
        <div className="grid grid-cols-2 gap-2">
            <Popover>
                <PopoverTrigger asChild>
                    <Button variant="outline" className={cn(
                        "w-full justify-start text-left font-normal",
                        !departureDate && "text-muted-foreground"
                    )}>
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {departureDate ? format(departureDate, "MMM dd, yyyy") : <span>Departure</span>}
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                        initialFocus
                        mode="range"
                        defaultMonth={departureDate}
                        selected={date}
                        onSelect={handleSelect}
                        numberOfMonths={2}
                        className="custom-calendar"
                    />
                </PopoverContent>
            </Popover>
            <Popover>
                <PopoverTrigger asChild>
                    <Button variant="outline" className={cn(
                        "w-full justify-start text-left font-normal",
                        !returnDate && "text-muted-foreground"
                    )}>
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {returnDate ? format(returnDate, "MMM dd, yyyy") : <span>Return</span>}
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                        initialFocus
                        mode="range"
                        defaultMonth={returnDate}
                        selected={date}
                        onSelect={handleSelect}
                        numberOfMonths={2}
                        className="custom-calendar"
                    />
                </PopoverContent>
            </Popover>
        </div>
    );
};



const Calendar = ({ className, ...props }: React.ComponentProps<typeof DayPicker>) => {
    return (
        <DayPicker
            className={cn("p-3", className)}
            classNames={{
                months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
                month: "space-y-4",
                caption: "flex justify-center pt-1 relative items-center",
                caption_label: "text-sm font-medium",
                nav: "space-x-1 flex items-center",
                nav_button: cn(
                    "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100"
                ),
                nav_button_previous: "absolute left-1",
                nav_button_next: "absolute right-1",
                table: "w-full border-collapse space-y-1",
                head_row: "flex",
                head_cell:
                    "text-muted-foreground rounded-md w-8 font-normal text-[0.8rem]",
                row: "flex w-full mt-2",
                cell: "text-center text-sm p-0 relative [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
                day: cn(
                    "h-8 w-8 p-0 font-normal aria-selected:opacity-100"
                ),
                day_selected:
                    "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
                day_today: "bg-accent text-accent-foreground",
                day_outside: "text-muted-foreground opacity-50",
                day_disabled: "text-muted-foreground opacity-50",
                day_range_middle:
                    "aria-selected:bg-accent aria-selected:text-accent-foreground",
                day_hidden: "invisible",
                ...props.classNames,
            }}
            components={{
                IconLeft: ({ ...props }) => <ChevronLeft className="h-4 w-4" />,
                IconRight: ({ ...props }) => <ChevronRight className="h-4 w-4" />,
            }}
            {...props}
        />
    )
}
export default DateSelect;