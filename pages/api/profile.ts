import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
  height: number;
  mass: number;
  hair_color: string;
  birth_year: string;
  films: string[];
  starships: string[];
  species: string[];
};

type ErrorData = {
  error: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data | ErrorData>
) {
  try {
    // Get the the searched character
    const {
      name,
      height,
      mass,
      hair_color,
      birth_year,
      films: filmUrls,
      starships: starshipUrls,
      species: speciesUrls,
    } = await fetch(`https://swapi.dev/api/people/?search=${req.query.search}`)
      .then((response) => response.json())
      .then((response) => response.results[0]);

    // Get all films in parallel for which the searched character has starred
    const films = await Promise.all(
      filmUrls.map((film: string) =>
        fetch(film).then((response) => response.json())
      )
    );

    // Get all starships in parallel for which searched character has flown
    const starships = await Promise.all(
      starshipUrls.map((starship: string) =>
        fetch(starship).then((response) => response.json())
      )
    );

    // Get all species in parallel for which searched character is in
    const species = await Promise.all(
      speciesUrls.map((species: string) =>
        fetch(species).then((response) => response.json())
      )
    );

    res.status(200).json({
      name,
      height,
      mass,
      hair_color,
      birth_year,
      films,
      starships,
      species,
    });
  } catch {
    res.status(404).json({ error: "Failure to pull from swapi" });
  }
}
