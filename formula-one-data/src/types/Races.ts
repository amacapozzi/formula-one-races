export interface Root {
  number: string;
  position: string;
  positionText: string;
  points: string;
  Driver: Driver[];
  Constructor: Constructor;
  grid: string;
  laps: string;
  status: string;
  RaceTable: ReaceTable;
  Time: Time;
  FastestLap: FastestLap;
}

interface ReaceTable {
  Races: Races[];
}

interface Races {
  season: string;
  round: string;
  url: string;
  position: string;
  time: string;
  date: string;
  raceName: string;
  Circuit: Circuit;
  Results: Driver[];
}

interface Circuit {
  circuitId: string;
  url: string;
  circuitName: string;
  Location: Location;
}

interface Location {
  lat: string;
  long: string;
  locality: string;
  country: string;
}

interface Driver {
  position: string;
  Constructor: Constructor;
  Driver: DriverType;
}

type DriverType = {
  permanentNumber: string;
  code: string;
  url: string;
  givenName: string;
  driverId: string;
  familyName: string;
  dateOfBirth: string;
  nationality: string;
};

export interface Constructor {
  constructorId: string;
  url: string;
  name: string;
  nationality: string;
}

interface Time {
  millis: string;
  time: string;
}

interface FastestLap {
  rank: string;
  lap: string;
  Time: Time2;
  AverageSpeed: AverageSpeed;
}

interface Time2 {
  time: string;
}

interface AverageSpeed {
  units: string;
  speed: string;
}
