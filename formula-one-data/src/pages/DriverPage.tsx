import { Formula } from "@/services/formula.service";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Driver } from "@/types/Races";
import { Badge } from "@/components/ui/badge";
import { useWikiepedia } from "@/hooks/useWikipedia";

function DriverPage() {
  const { driverId } = useParams();
  const [driverData, setDriverData] = useState<Driver>();
  const [error, setError] = useState<boolean>(false);
  const { getData, data } = useWikiepedia();

  useEffect(() => {
    const fetchData = async () => {
      const races = await Formula.getLastRace();
      const data = races.RaceTable.Races[0].Results.find(
        (result) => result.Driver.driverId === driverId
      );
      if (data) {
        setDriverData(data);
        return;
      }
      setError(true);
    };
    fetchData();
  }, [driverId]);

  useEffect(() => {
    if (driverData?.Driver.url) {
      const urlParts = driverData.Driver.url.split("/");
      const lastPart = urlParts[urlParts.length - 1];
      getData(lastPart);
    }
  }, [driverData, getData]);

  return (
    <main className="max-w-7xl px-4 my-10 mx-auto py-6 sm:px-6 lg:px-8">
      <div className="max-w-4xl">
        <Badge className="border text-white rounded-full hover:text-neutral-300 hover:bg-transparent border-white/50 bg-transparent">
          {driverData?.Driver.dateOfBirth}
        </Badge>
        <h1 className="text-3xl my-1.5 font-semibold text-white">
          {driverData?.Driver.givenName}, {driverData?.Driver.familyName}
        </h1>
        <p className="my-5 text-neutral-300">{data}</p>
      </div>
    </main>
  );
}

export default DriverPage;
