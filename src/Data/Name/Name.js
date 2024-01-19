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
  //const usedIndexes = new Set();

  while (randomNames.length < number) {
    const randomIndex = Math.floor(Math.random() * names.length);

    //if (!usedIndexes.has(randomIndex)) {
      randomNames.push(names[randomIndex]);
      //usedIndexes.add(randomIndex);
    //}
  }

  return randomNames;
}

export function generateRandomPlaces(number) {
  const places = [
    "Paris",
    "New York",
    "Tokyo",
    "London",
    "Sydney",
    "Rome",
    "Barcelona",
    "Rio de Janeiro",
    "Moscow",
    "Cairo",
    "Dubai",
    "Los Angeles",
    "Berlin",
    "Amsterdam",
    "Beijing",
    "Bangkok",
    "Mumbai",
    "Toronto",
    "Seoul",
    "Vienna",
    "Athens",
    "Havana",
    "Prague",
    "Singapore",
    "Istanbul",
  ];

  const randomPlaces = [];
  //const usedIndexes = new Set();

  while (randomPlaces.length < number) {
    const randomIndex = Math.floor(Math.random() * places.length);

    //if (!usedIndexes.has(randomIndex)) {
      randomPlaces.push(places[randomIndex]);
      //usedIndexes.add(randomIndex);
    //}
  }

  return randomPlaces;
}

export function generateRandomMotivationalQuotes(number) {
  const motivationalQuotes = [
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
    "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
    "Strive not to be a success, but rather to be of value. - Albert Einstein",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
    "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
    "The only way to achieve the impossible is to believe it is possible. - Charles Kingsleigh",
    "It does not matter how slowly you go as long as you do not stop. - Confucius",
    "The best way to predict the future is to create it. - Peter Drucker",
    "Success is walking from failure to failure with no loss of enthusiasm. - Winston Churchill",
    "The secret of getting ahead is getting started. - Mark Twain",
    "You are never too old to set another goal or to dream a new dream. - C.S. Lewis",
    "Change your thoughts and you change your world. - Norman Vincent Peale",
    "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
    "In the middle of difficulty lies opportunity. - Albert Einstein",
    "The only way to do great work is to love what you do. - Steve Jobs",
    "You miss 100% of the shots you don't take. - Wayne Gretzky",
    "Keep your face always toward the sunshine—and shadows will fall behind you. - Walt Whitman",
  ];

  const randomMotivationalQuotes = [];
  //const usedIndexes = new Set();

  while (randomMotivationalQuotes.length < number) {
    const randomIndex = Math.floor(Math.random() * motivationalQuotes.length);

    //if (!usedIndexes.has(randomIndex)) {
      randomMotivationalQuotes.push(motivationalQuotes[randomIndex]);
      //usedIndexes.add(randomIndex);
    //}
  }

  return randomMotivationalQuotes;
}

export function generateRandomComments(number) {
  const comments = [
    "Nice picture!",
    "Great shot!",
    "Beautiful!",
    "Amazing!",
    "Lovely!",
    "Well captured!",
    "Stunning!",
    "Awesome!",
    "Fantastic!",
    "Incredible!",
    "Well done!",
    "Brilliant!",
    "Impressive!",
    "Superb!",
    "Wonderful!",
    "Excellent!",
    "Marvelous!",
    "Perfect!",
    "Outstanding!",
    "Terrific!",
  ];

  const randomComments = [];
  const usedIndexes = new Set();

  while (randomComments.length < number) {
    const randomIndex = Math.floor(Math.random() * comments.length);

    if (!usedIndexes.has(randomIndex)) {
      randomComments.push(comments[randomIndex]);
      usedIndexes.add(randomIndex);
    }
  }

  return randomComments;
}

export function generateRandomNumbers(number) {
  const randomNumbers = [];
  
  while (randomNumbers.length < number) {
    const randomNumber = Math.floor(Math.random() * (370 - 100 + 1)) + 100;
    randomNumbers.push(randomNumber);
  }
  
  return randomNumbers;
}

export function formatTime(value) {
  if (value < 60) {
    return value + 'm';
  } else {
    const hours = Math.floor(value / 60);
    return hours + 'h';
  }
}

export function generateRandomCommentsWithUser(number) {
  const comments = [
    "Nice picture!",
    "Great shot!",
    "Beautiful!",
    "Amazing!",
    "Lovely!",
    "Well captured!",
    "Stunning!",
    "Awesome!",
    "Fantastic!",
    "Incredible!",
    "Well done!",
    "Brilliant!",
    "Impressive!",
    "Superb!",
    "Wonderful!",
    "Excellent!",
    "Marvelous!",
    "Perfect!",
    "Outstanding!",
    "Terrific!",
  ];
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

  const getRandomInteger = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  let randomComments = []; 
  
  for(let i = 0; i < number; i++) {
    let commentsNumber = getRandomInteger(1, 7);
    let singlePostComments = [];
    for(let j = 0; j < commentsNumber; j++) {
      let commentIndex = Math.floor(Math.random() * comments.length);
      let NameIndex = Math.floor(Math.random() * names.length);
      let likes = getRandomInteger(3, 15);
      
      let obj = {
        id: i+'i'+j+'j',
        name: names[NameIndex],
        comment: comments[commentIndex],
        likes: likes,
        selfLike: false,
      }
      singlePostComments.push(obj);
    }
    randomComments.push(singlePostComments);
  }

  // while (randomComments.length < number) {
  //   const randomIndex = Math.floor(Math.random() * comments.length);

  //   if (!usedIndexes.has(randomIndex)) {
  //     randomComments.push(comments[randomIndex]);
  //     usedIndexes.add(randomIndex);
  //   }
  // }

  return randomComments;
}