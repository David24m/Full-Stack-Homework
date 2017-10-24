use gaming_site;

db.dropDatabase();

db.games.insert([
  {
    title: "Assassin's Creed: Black Flag",
    lead_character: "Edward Kenway",
    genre: "Action"
  },
  {
    title: "Metal Gear Solid 5: Phantom Pain",
    lead_character: "Big Boss",
    genre: "Stealth"
  }
])
