const boots = [
  { name: 'Tranquil Boots', url: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/2/23/Tranquil_Boots_%28Active%29_icon.png' },
  { name: 'Arcane Boots', url: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/b/be/Arcane_Boots_icon.png' },
  { name: 'Boots of Bearing', url: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/e/e9/Boots_of_Bearing_icon.png' },
  { name: 'Guardian Greeves', url: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/9/94/Guardian_Greaves_icon.png' },
  { name: 'Phase Boots', url: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/9/98/Phase_Boots_icon.png' },
  { name: 'Boots of Travel', url: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/6/6d/Boots_of_Travel_1_icon.png' },
  { name: 'Power Treads', url: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/6/6b/Power_Treads_icon.png' }
];

const items = [
  { name: 'Mask of Madness', url: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/7/76/Mask_of_Madness_icon.png' },
  { name: 'Hand of Midas', url: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/5/5b/Hand_of_Midas_icon.png' },
  { name: 'Helm of the Dominator', url: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/9/97/Helm_of_the_Dominator_icon.png' },
  { name: 'Helm of the Overlord', url: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/f/f8/Helm_of_the_Overlord_icon.png' },
  { name: 'Mekanism', url: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/f/f7/Mekansm_icon.png' },
  { name: 'Holy Locket', url: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/4/48/Holy_Locket_icon.png' },
  { name: `Vladimir's Offering`, url: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/2/28/Vladmir%27s_Offering_icon.png' },
  { name: 'Spirit Vessel', url: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/2/2a/Spirit_Vessel_icon.png' },
  { name: 'Pipe of Insight', url: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/7/76/Pipe_of_Insight_icon.png' },
  { name: 'Wraith Pact', url: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/7/78/Wraith_Pact_icon.png' },
  { name: 'Veil of Discord', url: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/f/f2/Veil_of_Discord_icon.png' },
  { name: 'Glimmer Cape', url: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/c/ce/Glimmer_Cape_icon.png' },
  { name: 'Hurrican Pike', url: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/1/13/Hurricane_Pike_icon.png' },
  { name: 'Witch Blade', url: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/6/68/Witch_Blade_icon.png' },
  { name: 'Aether Lens', url: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/d/d4/Aether_Lens_icon.png' },
  { name: 'Solar Crest', url: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/3/36/Solar_Crest_icon.png' },
  { name: 'Dagon', url: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/b/bc/Dagon_1_icon.png' },
  { name: `Eul's Scepter of Divinity`, url: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/8/80/Eul%27s_Scepter_of_Divinity_icon.png' },
  { name: 'Rod of Atos', url: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/6/66/Rod_of_Atos_icon.png' },
  { name: 'Orchid Malevolence', url: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/a/ad/Orchid_Malevolence_icon.png' },
  { name: `Aghanim's Scepter`, url: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/0/07/Aghanim%27s_Scepter_icon.png' },
  { name: 'Refresher Orb', url: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/e/e2/Refresher_Orb_icon.png' },
  { name: 'Octarine Core', url: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/1/13/Octarine_Core_icon.png' },
  { name: 'Scythe of Vyse', url: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/5/54/Scythe_of_Vyse_icon.png' },
  { name: 'Gleipnir', url: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/5/5d/Gleipnir_icon.png' },
  { name: `Revenant's Brooch`, url: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/3/37/Revenant%27s_Brooch_icon.png' },
  { name: 'Wind Waker', url: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/9/90/Wind_Waker_icon.png' },
  { name: 'Blade Mail', url: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/1/18/Blade_Mail_icon.png' },
  { name: 'Aeon Disk', url: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/2/2b/Aeon_Disk_icon.png' },
  { name: 'Eternal Shroud', url: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/c/c5/Eternal_Shroud_icon.png' },
  { name: 'Crimson Guard', url: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/7/70/Crimson_Guard_icon.png' },
  { name: 'Lotus Orb', url: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/c/c8/Lotus_Orb_icon.png' },
  { name: 'Black King Bar', url: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/7/72/Black_King_Bar_icon.png' },
  { name: 'Bloodstone', url: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/5/5a/Bloodstone_icon.png' },
  { name: `Linken's Sphere`, url: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/2/23/Linken%27s_Sphere_icon.png' },
  { name: 'Manta Style', url: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/8/84/Manta_Style_icon.png' },
  { name: `Shiva's Guard`, url: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/b/b6/Shiva%27s_Guard_icon.png' },
  { name: 'Heart of Tarrasque', url: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/7/75/Heart_of_Tarrasque_icon.png' },
  { name: 'Assault Cuirass', url: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/d/d3/Assault_Cuirass_icon.png' },
  { name: 'Crystalys', url: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/3/3f/Crystalys_icon.png' },
  { name: 'Meteor Hammer', url: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/5/54/Meteor_Hammer_icon.png' },
  { name: 'Armlet of Mordiggian', url: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/8/8d/Armlet_of_Mordiggian_%28Inactive%29_icon.png' },
  { name: 'Skull Basher', url: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/9/9d/Skull_Basher_icon.png' },
  { name: 'Shadow Blade', url: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/0/0f/Shadow_Blade_icon.png' },
  { name: 'Desolator', url: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/8/84/Desolator_icon.png' },
  { name: 'Battle Fury', url: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/c/c1/Battle_Fury_icon.png' },
  { name: 'Ethereal Blade', url: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/5/5b/Ethereal_Blade_icon.png' },
  { name: 'Nullifier', url: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/b/bc/Nullifier_icon.png' },
  { name: 'Butterfly', url: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/2/28/Butterfly_icon.png' },
  { name: 'Monkey King Bar', url: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/b/b0/Monkey_King_Bar_icon.png' },
  { name: 'Radience', url: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/d/df/Radiance_%28Active%29_icon.png' },
  { name: 'Daedalus', url: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/2/24/Daedalus_icon.png' },
  { name: 'Silver Edge', url: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/9/91/Silver_Edge_icon.png' },
  { name: 'Divine Rapier', url: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/b/b1/Divine_Rapier_icon.png' },
  { name: 'Abyssal Blade', url: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/3/3b/Abyssal_Blade_icon.png' },
  { name: 'Bloodthorn', url: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/f/f4/Bloodthorn_icon.png' },
  { name: 'Kaja', url: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/6/65/Kaya_icon.png' },
  { name: 'Sange', url: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/f/fc/Sange_icon.png' },
  { name: 'Yasha', url: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/d/d1/Yasha_icon.png' },
  { name: 'Mage Slayer', url: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/1/18/Mage_Slayer_icon.png' },
  { name: 'Diffusal Blade', url: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/6/65/Diffusal_Blade_1_icon.png' },
  { name: 'Echo Sabre', url: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/6/6b/Echo_Sabre_icon.png' },
  { name: 'Maelstrom', url: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/6/65/Maelstrom_icon.png' },
  { name: `Heaven's Halberd`, url: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/c/c6/Heaven%27s_Halberd_icon.png' },
  { name: 'Kaya and Sange', url: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/6/67/Kaya_and_Sange_icon.png' },
  { name: 'Sange and Yasha', url: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/b/b4/Sange_and_Yasha_icon.png' },
  { name: 'Yasha and Kaya', url: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/1/19/Yasha_and_Kaya_icon.png' },
  { name: 'Satanic', url: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/d/dd/Satanic_icon.png' },
  { name: 'Eye of Skadi', url: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/1/1e/Eye_of_Skadi_icon.png' },
  { name: 'Mjollnir', url: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/9/9d/Mjollnir_icon.png' },
  { name: 'Arcane Blink', url: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/2/28/Arcane_Blink_icon.png' },
  { name: 'Overwhelming Blink', url: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/6/6d/Overwhelming_Blink_icon.png' },
  { name: 'Swift Blink', url: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/4/47/Swift_Blink_icon.png' }
];

const getRandomNumber = (max) => Math.floor(Math.random() * max);

const getRandomBoots = () => boots[getRandomNumber(boots.length - 1)]

const getRandomItem = () => items[getRandomNumber(items.length - 1)];

const selectItems = () => {
  const selectedItems = [getRandomBoots()];

  for (let i = 0; i < 5; i++) {
    selectedItems.push(getRandomItem());
  }

  return selectedItems;
}

const drawItems = () => {
  const targetDiv = document.getElementById('result');
  const selectedItems = selectItems();

  selectedItems.forEach(({ name, url }) => {
    const wrapper = document.createElement('div');

    const image = document.createElement('img');
    image.setAttribute('src', url);
    image.setAttribute('alt', name);

    const text = document.createElement('h3');
    text.textContent = name;

    wrapper.appendChild(image);
    wrapper.appendChild(text);

    targetDiv.appendChild(wrapper);
  });
}


drawItems();
