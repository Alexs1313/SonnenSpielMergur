export const spielMergurFacts = [
  'Germany has more than 25,000 castles, many of which are open to visitors.',
  'The country is home to over 6,000 museums covering art, history, science and culture.',
  'The Berlin Wall stood for 28 years and today its remaining pieces are preserved as public art.',
  'Germany has the largest economy in Europe and one of the strongest in the world.',
  'There are more than 1,500 different types of sausages made across the country.',
  'The Autobahn includes long sections with no speed limit, unique in Europe.',
  'Germany produces more books annually than almost any other country.',
  'The Cologne Cathedral took over 600 years to complete.',
  'Oktoberfest, held in Munich, is the world’s largest folk festival.',
  'Germany is one of the greenest countries in Europe, with over one-third of its land covered by forests.',
];

export const spielMergurQuizQuestions = [
  {
    question: 'What type of architectural atmosphere attracts you the most?',
    answers: [
      { text: 'Romantic, historic, peaceful', category: 'A' },
      { text: 'Modern, innovative, futuristic', category: 'B' },
      { text: 'Majestic, dramatic, fairy-tale inspired', category: 'C' },
    ],
  },
  {
    question: 'What surroundings do you enjoy in architecture?',
    answers: [
      { text: 'Gardens and soft natural landscapes', category: 'A' },
      { text: 'Urban skylines and modern infrastructure', category: 'B' },
      { text: 'Mountains, forests, or rivers with epic views', category: 'C' },
    ],
  },
  {
    question: 'Which color palette appeals to you?',
    answers: [
      { text: 'Warm earthy tones', category: 'A' },
      { text: 'Metal, glass, sleek surfaces', category: 'B' },
      { text: 'Bold contrasts, dark colors', category: 'C' },
    ],
  },
  {
    question: 'What emotional feeling should a building evoke?',
    answers: [
      { text: 'Calmness and harmony', category: 'A' },
      { text: 'Innovation and ambition', category: 'B' },
      { text: 'Awe and wonder', category: 'C' },
    ],
  },
];

export const spielMergurLocationsByCategory = {
  A: [
    {
      title: 'Sanssouci Palace, Potsdam',
      details:
        'Sanssouci Palace is a refined rococo residence surrounded by terraced vineyards and lush gardens. Designed as the summer retreat for Frederick the Great, it features delicate stucco decorations, pastel interiors, and elegant sculptures. Its harmonious architecture and serene landscape appeal to admirers of classical, romantic, and nature-integrated designs.',
      coords: '52.4001, 13.0399',
      image: require('../../assets/images/spielerguloc1.png'),
    },
    {
      title: 'Heidelberg Castle',
      details:
        'Heidelberg Castle is an iconic Renaissance ruin overlooking the old town and Neckar River. Its warm sandstone walls and fragmentary towers create a poetic atmosphere that has inspired artists and writers for centuries. The blend of grandeur and decay makes it ideal for visitors who love old-world charm and dramatic historical settings.',
      coords: '49.4108, 8.7153',
      image: require('../../assets/images/spielerguloc2.png'),
    },
    {
      title: 'Frauenkirche, Dresden',
      details:
        'The Frauenkirche is a baroque masterpiece rebuilt stone-by-stone after WWII. Its towering dome, curved façade, and glowing sandstone exterior symbolize peace and restoration. Inside, soft colors and ornate detailing create an uplifting atmosphere. Perfect for those who appreciate spiritual architecture and reborn historical icons.',
      coords: '51.0510, 13.7416',
      image: require('../../assets/images/spielerguloc3.png'),
    },
  ],

  B: [
    {
      title: 'Reichstag Building, Berlin',
      details:
        'The Reichstag is a blend of imperial architecture and modern innovation. The contemporary glass dome by Norman Foster offers panoramic city views and symbolizes political transparency. Visitors who enjoy a combination of history, modernity, and conceptual design will find this building compelling.',
      coords: '52.5186, 13.3762',
      image: require('../../assets/images/spielerguloc4.png'),
    },
    {
      title: 'Elbphilharmonie, Hamburg',
      details:
        'This striking concert hall merges a historic warehouse base with a shimmering glass structure resembling ocean waves. The façade reflects light like a crystal sculpture, while the interior is engineered for acoustic perfection. A dream spot for fans of futuristic aesthetics and bold architectural statements.',
      coords: '53.5413, 9.9840',
      image: require('../../assets/images/spielerguloc5.png'),
    },
    {
      title: 'Mercedes-Benz Museum',
      details:
        'The museum features a fluid, spiraling form inspired by a DNA helix. Its sleek metallic surfaces, organic curves, and open interior spaces showcase cutting-edge engineering and architectural innovation. Ideal for visitors attracted to modern, dynamic, and technologically inspired design.',
      coords: '48.7936, 9.2361',
      image: require('../../assets/images/spielerguloc6.png'),
    },
  ],

  C: [
    {
      title: 'Neuschwanstein Castle',
      details:
        'This fairy-tale castle towers above forests and lakes, blending medieval fantasy with romanticism. With its snow-white turrets and dramatic Alpine setting, it radiates magic and escapism. Perfect for visitors who love whimsical, majestic, and cinematic landscapes.',
      coords: '47.5576, 10.7498',
      image: require('../../assets/images/spielerguloc7.png'),
    },
    {
      title: 'Cologne Cathedral',
      details:
        'A pinnacle of Gothic architecture, the cathedral features soaring spires, elaborate tracery, and incredible stained-glass windows. The sheer verticality and spiritual intensity make it a must-see for admirers of grand, dramatic, and awe-inspiring architecture.',
      coords: '50.9413, 6.9580',
      image: require('../../assets/images/spielerguloc8.png'),
    },
    {
      title: 'Speicherstadt, Hamburg',
      details:
        'This historic warehouse district offers narrow canals, brick-gothic buildings, and atmospheric nighttime lighting. Its moody industrial charm appeals to those who enjoy complex textures, water-architecture combinations, and urban historic environments.',
      coords: '53.5436, 9.9916',
      image: require('../../assets/images/spielerguloc9.png'),
    },
  ],
};

export const spielMergurOnboardBgImages = [
  require('../../assets/images/spielerguron1.png'),
  require('../../assets/images/spielerguron2.png'),
  require('../../assets/images/spielerguron3.png'),
  ,
];
