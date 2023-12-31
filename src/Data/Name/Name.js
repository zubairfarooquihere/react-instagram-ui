export const names = [
  "Alice",
  "Bob",
  "Charlie",
  "David",
  "Emma",
  "Frank",
  "Grace",
  "Henry",
  "Isabella",
  "Jack",
  "Katherine",
  "Liam",
  "Mia",
  "Noah",
  "Olivia",
  "Peter",
  "Quinn",
  "Rachel",
  "Sophia",
  "Thomas",
  "Uma",
  "Victor",
  "Willow",
  "Xavier",
  "Yasmine",
  "Zachary",
];

export function generateRandomNames(number) {
  const names = [
    "Alice",
    "Bob",
    "Charlie",
    "David",
    "Emma",
    "Frank",
    "Grace",
    "Henry",
    "Isabella",
    "Jack",
    "Katherine",
    "Liam",
    "Mia",
    "Noah",
    "Olivia",
    "Peter",
    "Quinn",
    "Rachel",
    "Sophia",
    "Thomas",
    "Uma",
    "Victor",
    "Willow",
    "Xavier",
    "Yasmine",
    "Zachary",
  ];

  const randomNames = [];
  const usedIndexes = new Set();

  while (randomNames.length < number) {
    const randomIndex = Math.floor(Math.random() * names.length);

    if (!usedIndexes.has(randomIndex)) {
      randomNames.push(names[randomIndex]);
      usedIndexes.add(randomIndex);
    }
  }

  return randomNames;
}