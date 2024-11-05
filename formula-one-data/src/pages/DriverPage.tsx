import { Formula } from "@/services/formula.service";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Share2, ThumbsUp, MessageSquare } from "lucide-react";
import { Root } from "react-dom/client";

function DriverPage() {
  const { driverId } = useParams();
  const [race, setRace] = useState<Root>();

  useEffect(() => {
    const fetchData = async () => {
      const races = await Formula.getLastRace();
      const data = races.RaceTable.Races[0].Results.find(
        (result) => result.Driver.driverId == driverId
      );
      console.log(data);
    };
    fetchData();
  }, []);

  return (
    <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold">
            Última carrera de Fernando Alonso
          </CardTitle>
          <p className="text-gray-500 dark:text-gray-400">
            Gran Premio de Mónaco 2023
          </p>
        </CardHeader>
        <CardContent>
          <img
            src="/placeholder.svg?height=300&width=600"
            alt="Fernando Alonso en el Gran Premio de Mónaco"
            width={600}
            height={300}
            className="w-full rounded-lg mb-4"
          />
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Fernando Alonso logró un impresionante segundo lugar en el Gran
            Premio de Mónaco, demostrando una vez más su habilidad en circuitos
            urbanos. El piloto español de Aston Martin mantuvo a raya a Esteban
            Ocon durante gran parte de la carrera, asegurando así su quinto
            podio de la temporada.
          </p>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
            <li>Posición final: 2º</li>
            <li>Tiempo: 1:48:44.634</li>
            <li>Puntos obtenidos: 18</li>
            <li>Vuelta rápida: 1:15.107</li>
          </ul>
        </CardContent>
        <CardFooter className="flex justify-between items-center">
          <div className="flex space-x-4">
            <Button variant="ghost" size="sm">
              <ThumbsUp className="mr-2 h-4 w-4" />
              Me gusta
            </Button>
            <Button variant="ghost" size="sm">
              <MessageSquare className="mr-2 h-4 w-4" />
              Comentar
            </Button>
          </div>
          <Button variant="outline" size="sm">
            <Share2 className="mr-2 h-4 w-4" />
            Compartir
          </Button>
        </CardFooter>
      </Card>
    </main>
  );
}

export default DriverPage;
