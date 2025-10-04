function modulo(a, b) {
  return a - Math.floor(a/b) * b;
}

function random(t) {
  if (t == 0) {
    return 0.5
  } else {
    return modulo(Math.sin(t * 3229.3) * 43758.5453, 1)
  }
}

function Name_of_Sharks(id) {
  const fName = ["Beryl", "Steve", "Mark", "Henry", "Alex", "Cholesterol", "Berry", "John", "Josh", "Abraham", "Celeste", "Galagher"];
  const lName = ["Blackson", "Alison", "Ying", "Lincon", "Sharky", "Finland", "Johnston", "McDonald", "Ocean", "Jerry", "React", "Rite", "The Shark", "II", "Jr.", "Aerodynamic", "Water Dancer"];
  
  const fNameRandom = fName[Math.floor(random(id*5.2) * fName.length)];
  const lNameRandom = lName[Math.floor(random(id*1.4) * lName.length)];

  return fNameRandom + " " + lNameRandom;
}

// console.log(Name_of_Sharks());

export const sampleSharks = [
  {
    id: 1,
    name: "",
    species: "Great White Shark",
    tagId: "GWS-2024-001",
    lat: 36.7783,
    lng: -121.9200,
    lastUpdate: "2025-10-02 14:32 UTC",
    sst: 18.5,
    chlorophyll: 0.8,
    depth: 45,
    foragingProb: 78,
    foragingRadius: 50,
    recentPrey: [
      { species: "Sea Lion", time: "2h ago" },
      { species: "Tuna", time: "5h ago" }
    ]
  },
  {
    id: 2,
    name: "Hammerhead Sally",
    species: "Scalloped Hammerhead",
    tagId: "SHH-2024-012",
    lat: 21.3099,
    lng: -157.8581,
    lastUpdate: "2025-10-02 13:15 UTC",
    sst: 24.2,
    chlorophyll: 0.3,
    depth: 120,
    foragingProb: 65,
    foragingRadius: 35,
    recentPrey: [
      { species: "Squid", time: "1h ago" },
      { species: "Mackerel", time: "4h ago" }
    ]
  },
  {
    id: 3,
    name: "Tiger Tom",
    species: "Tiger Shark",
    tagId: "TGS-2024-007",
    lat: -23.5505,
    lng: -46.6333,
    lastUpdate: "2025-10-02 15:48 UTC",
    sst: 22.1,
    chlorophyll: 1.2,
    depth: 25,
    foragingProb: 92,
    foragingRadius: 60,
    recentPrey: [
      { species: "Sea Turtle", time: "30m ago" },
      { species: "Stingray", time: "3h ago" },
      { species: "Fish School", time: "6h ago" }
    ]
  },
  {
    id: 4,
    name: "Blue Lightning",
    species: "Blue Shark",
    tagId: "BLS-2024-019",
    lat: 40.7128,
    lng: -40.0060,
    lastUpdate: "2025-10-02 12:22 UTC",
    sst: 16.8,
    chlorophyll: 0.5,
    depth: 200,
    foragingProb: 55,
    foragingRadius: 45,
    recentPrey: [
      { species: "Herring", time: "7h ago" }
    ]
  }
]

for (let i = 0; i < sampleSharks.length; i++) {
  sampleSharks[i].name = "" + Name_of_Sharks(sampleSharks[i].id);
}