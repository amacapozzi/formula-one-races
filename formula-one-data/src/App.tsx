import { useEffect, useState } from "react";
import { Root } from "@/types/Races";
import { Formula } from "./services/formula.service";
import { RaceCard } from "./components/race-card";

function App() {
  const [race, setRace] = useState<Root>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const races = await Formula.getLastRace();
        setRace(races);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  console.log(race?.RaceTable.Races[0]);

  return (
    <>
      <div className="flex mx-auto flex-col items-center justify-center p-7 my-6">
        {isLoading ? (
          <h1>Loading</h1>
        ) : (
          <div className="block">
            <h1 className="text-4xl font-semibold">
              {race?.RaceTable.Races[0].raceName}
            </h1>
            <span className="text-sm text-neutral-300">
              {race?.RaceTable.Races[0].date} (
              {new Date(
                `1970-01-01T${race?.RaceTable.Races[0].time}`
              ).toLocaleTimeString("en-US", {
                hour: "numeric",
                minute: "numeric",
                hour12: true,
              })}
              )
            </span>
          </div>
        )}

        <div className="grid grid-cols-1 w-full  md:max-w-7xl md:grid-cols-4 my-14 gap-10">
          {race?.RaceTable.Races[0].Results.map((data) => (
            <RaceCard
              nationality={data.Driver.nationality}
              givenName={data.Driver.givenName}
              familyName={data.Driver.familyName}
              constructor={data.Constructor}
              position={data.position}
              key={data.Driver.givenName}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
