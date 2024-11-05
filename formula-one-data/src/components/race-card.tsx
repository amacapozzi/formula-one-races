import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Constructor } from "@/types/Races";
import { Flag } from "lucide-react";

interface Props {
  position: string;
  givenName: string;
  familyName: string;
  nationality: string;
  constructor: Constructor;
}

const constructorColors: { [key: string]: string } = {
  Mercedes: "bg-cyan-600/20 text-cyan-500",
  "Red Bull": "bg-blue-800/20 text-blue-500",
  Ferrari: "bg-red-600/20 text-red-500",
  McLaren: "bg-orange-500/20 text-orange-500",
  "Aston Martin": "bg-green-700/20 text-green-500",
  "Alpine F1 Team": "bg-pink-600/20 text-pink-400",
  AlphaTauri: "bg-indigo-800/20 text-indigo-500",
  "Alfa Romeo": "bg-red-800/20 text-red-600",
  "Haas F1 Team": "bg-gray-700/20 text-gray-500",
  Williams: "bg-blue-700/20 text-blue-400",
  Sauber: "bg-violet-700/20 text-violet-500",
};

const getConstructorColor = (constructorName: string): string => {
  return constructorColors[constructorName] || "bg-gray-600";
};

export const RaceCard = ({
  position,
  givenName,
  familyName,
  nationality,
  constructor,
}: Props) => {
  const constructorColor = getConstructorColor(constructor.name);

  return (
    <Card className="overflow-hidden">
      <div className="relative">
        <div
          className="absolute top-0 left-0 w-16 h-16 bg-primary flex items-center justify-center rounded-br-lg"
          aria-label={`Position ${position}`}
        >
          <span className="text-3xl font-bold text-primary-foreground">
            {position}
          </span>
        </div>
        <CardHeader className="pt-20 pb-4">
          <CardTitle>
            <a className="text-2xl font-bold hover:underline cursor-pointer duration-300 ease-in-out hover:text-neutral-300">
              {givenName} {familyName}
            </a>
          </CardTitle>
        </CardHeader>
      </div>
      <CardContent>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <Flag className="w-5 h-5" aria-hidden="true" />
            <span className="text-sm text-muted-foreground">{nationality}</span>
          </div>
          <span
            className={`text-sm font-semibold px-3 py-1 ${constructorColor} rounded-full`}
          >
            {constructor.name}
          </span>
        </div>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <p className="text-muted-foreground">Constructor</p>
            <p className="font-medium">{constructor.name}</p>
          </div>
          <div>
            <p className="text-muted-foreground">Nationality</p>
            <p className="font-medium">{nationality}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
