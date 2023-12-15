import React, { useState } from 'react';

const inspirations = {

  daily_life_nouns : [
    "chair", "table", "kettle", "friend", "tree", "family", "book", "pen", "water",
    "dog", "cat", "house", "memory", "spirit", "bed", "pillow", "night", "willow tree",
    "mother tonge", "daydream", "clock", "watch", "key", "wallet", "glasses", "rain", "snow",
    "microwave", "oven", "toaster", "sink", "shower", "towel", "soap", "shampoo", "toothbrush",
    "toothpaste", "brush", "comb", "mirror", "makeup", "perfume", "plant", "flower", "grass",
    "leaf", "bush", "tree", "bird", "squirrel", "insect", "bicycle", "scooter", "motorcycle",
    "bus", "train", "plane", "boat", "wind", "trophy", "mistake", "hope", "playground",
    "pear", "apple", "wood", "lunch", "cafe", "toy", "smoke", "movie theater", "root",
    "library", "postcard", "gallery", "beach", "mountain", "river", "lake", "pool", "sun", "moon",
    "star", "sky", "cloud", "rain", "snow", "wind", "storm", "mailbox", "newspaper", "package",
    "trash can", "recycling bin", "bench", "street", "pattern", "childhood", "garden", "fence", "gate"
],
  poetic_nouns : [
    "eternity", "solitude", "paradise", "oblivion", "essence", "infinity", "abyss",
    "whisper", "echo", "silhouette", "twilight", "dawn", "dusk", "serenity", "chaos",
    "melody", "harmony", "rhapsody", "sonata", "symphony", "ballad", "elegy", "ode",
    "reverie", "dream", "mirage", "illusion", "fantasy", "mystery", "enigma", "riddle",
    "destiny", "fate", "fortune", "providence", "serendipity", "kismet", "omen",
    "alchemy", "magic", "sorcery", "wizardry", "enchantment", "spell", "curse", "bewitchment",
    "aura", "halo", "radiance", "glow", "luminance", "brilliance", "shadow", "glimmer",
    "passion", "desire", "longing", "yearning", "craving", "ardor", "lust", "infatuation",
    "inspiration", "creativity", "genius", "imagination", "ingenuity", "vision", "perception",
    "wisdom", "insight", "enlightenment", "epiphany", "revelation", "prophecy", "divination",
    "spirit", "soul", "psyche", "essence", "vitality", "lifeblood", "heart", "core",
    "freedom", "liberty", "emancipation", "redemption", "salvation", "rescue", "escape",
    "tranquility", "peace", "calm", "rest", "relaxation", "respite", "repose", "quietude",
    "beauty", "elegance", "grace", "splendor", "majesty", "grandeur", "opulence", "luxury"
],
  emotion_adjectives: [
    "happy", "sad", "angry", "joyful", "depressed", "anxious", "excited", "calm",
    "fearful", "brave", "content", "discontent", "eager", "hesitant", "hopeful", "desperate",
    "ecstatic", "melancholic", "enraged", "relieved", "nervous", "peaceful", "jealous",
    "enthusiastic", "apathetic", "curious", "indifferent", "satisfied", "unsatisfied",
    "confident", "insecure", "proud", "ashamed", "guilty", "innocent", "lonely", "loved",
    "overwhelmed", "undisturbed", "optimistic", "pessimistic", "sympathetic", "empathetic",
    "compassionate", "heartless", "passionate", "cold", "warm", "tender", "harsh", "generous",
    "greedy", "grateful", "ungrateful", "forgiving", "vengeful", "tolerant", "intolerant",
    "trusting", "suspicious", "ambitious", "lazy", "motivated", "unmotivated", "energetic",
    "lethargic", "vigilant", "careless", "careful", "reckless", "cautious", "bold", "shy",
    "determined", "undecided", "stubborn", "flexible", "strong", "weak", "tough", "fragile",
    "stable", "volatile", "sensitive", "insensitive", "kind", "cruel", "friendly", "hostile",
    "gentle", "rough", "serene", "stormy", "thrilled", "disappointed", "amused", "bored",
    "charmed", "disgusted", "elated", "gloomy", "irate", "merry", "moody", "pleasant", "upset"
]
};

const InspirationGenerator = ({ changeBackgroundColor }) => {
  const [inspiration, setInspiration] = useState('');
  const colors = ['#88AB8E', '#BBAB8C','#67729D','#B6BBC4','#AEC3AE','#F5E8B7','#F1B4BB'];

  const generateInspiration = () => {

    const poetic_nouns = inspirations.poetic_nouns[Math.floor(Math.random() * inspirations.poetic_nouns.length)];
    const emotion_adjectives = inspirations.emotion_adjectives[Math.floor(Math.random() * inspirations.emotion_adjectives.length)];
    const daily_life_nouns = inspirations.daily_life_nouns[Math.floor(Math.random() * inspirations.daily_life_nouns.length)];

    setInspiration(`
    Why not talk about the ${daily_life_nouns},
    with a ${emotion_adjectives} mood?
    I can see in it the sense of ${poetic_nouns}.
    `);
    const randomIndex = Math.floor(Math.random() * colors.length);
    document.querySelector('.App').style.backgroundColor = colors[randomIndex];
  };

  return (
    <div>
      <button onClick={generateInspiration}>Inspire me.</button>
      <p style={{ whiteSpace: 'pre-wrap' }}>{inspiration}</p>
    </div>
  );
}

export default InspirationGenerator;
