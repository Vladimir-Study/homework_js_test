import { lineHealth } from '../line_health';
import { sortedHero } from '../heroes';

const testOne = { name: 'Wan', health: 10 };
const testTwo = { name: 'Won', health: 20 };
const testThree = { name: 'Wen', health: 70 };
const heroesInput = [
  { name: 'мечник', health: 10 },
  { name: 'маг', health: 100 },
  { name: 'лучник', health: 80 },
];
const heroesInputTwo = [
  { name: 'мечник', health: 10 },
  { name: 'лучник', health: 10 },
  { name: 'маг', health: 100 },
];
const heroesOutput = [
  { name: 'маг', health: 100 },
  { name: 'лучник', health: 80 },
  { name: 'мечник', health: 10 },
];
const heroesOutputTwo = [
  { name: 'маг', health: 100 },
  { name: 'лучник', health: 10 },
  { name: 'мечник', health: 10 },
];

test('test health level critical', () => {
  const critical = lineHealth(testOne);
  expect(critical).toBe('critical');
});

test('test health level wounded', () => {
  const critical = lineHealth(testTwo);
  expect(critical).toBe('wounded');
});

test('test health level healthy', () => {
  const critical = lineHealth(testThree);
  expect(critical).toBe('healthy');
});

test('test sorted arr heroes', () => {
  const sortArrHero = sortedHero(heroesInput);
  expect(sortArrHero).toEqual(heroesOutput);
});

test('test sorted arr heroes', () => {
  const sortArrHero = sortedHero(heroesInputTwo);
  expect(sortArrHero).toEqual(heroesOutputTwo);
});
