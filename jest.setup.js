import "@testing-library/jest-dom/extend-expect";

const mockProfile = {
  name: "Luke Skywalker",
  height: "172",
  mass: "77",
  hair_color: "blond",
  birth_year: "19BBY",
  films: [
    "A New Hope",
    "The Empire Strikes Back",
    "Return of the Jedi",
    "Revenge of the Sith",
  ],
  starships: ["X-wing", "Imperial shuttle"],
  species: [],
};

beforeAll(() => {
  global.fetch = jest
    .fn()
    .mockResolvedValue({ ok: true, json: () => mockProfile });
});
