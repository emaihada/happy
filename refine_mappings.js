import { VOCAB_DATA } from './src/data/vocabData.js';
import fs from 'fs';

const netlifyItems = JSON.parse(fs.readFileSync('extracted_netlify.json', 'utf8'));

// We want to create clean mappings that are 100% accurate based on meaning
const finalMappings = [];

VOCAB_DATA.forEach(localItem => {
  const sameChNetlify = netlifyItems.filter(n => n.chapterId === localItem.chapterId);
  
  // Try to find the absolute best match
  let matched = null;
  
  // 1. Exact string match (case-insensitive)
  matched = sameChNetlify.find(n => n.eng.toLowerCase().trim() === localItem.eng.toLowerCase().trim());
  
  if (!matched) {
    // 2. Specific manual overrides for perfect alignment
    if (localItem.chapterId === 'ch04' && localItem.eng === 'Suction machine') {
      matched = sameChNetlify.find(n => n.eng === 'Suction');
    } else if (localItem.chapterId === 'ch04' && localItem.eng === 'Face shield') {
      matched = sameChNetlify.find(n => n.eng === 'Face mask');
    } else if (localItem.chapterId === 'ch08' && localItem.eng === 'Surgical blade') {
      // Netlify has "Surgical blade / Blade holder"
      matched = sameChNetlify.find(n => n.eng === 'Surgical blade / Blade holder');
    } else if (localItem.chapterId === 'ch08' && localItem.eng === 'Blade holder') {
      matched = sameChNetlify.find(n => n.eng === 'Surgical blade / Blade holder');
    } else if (localItem.chapterId === 'ch08' && localItem.eng === 'Surgical scissors') {
      // Netlify has "Scissors / Nippers" or similar? Let's check ch08 netlify items:
      // Scissors / Nippers -> 수술용 가위·치과용 겸자
      matched = sameChNetlify.find(n => n.eng.includes('Scissors'));
    } else if (localItem.chapterId === 'ch08' && localItem.eng === 'Nippers') {
      matched = sameChNetlify.find(n => n.eng.includes('Nippers') || n.eng.includes('Scissors'));
    } else if (localItem.chapterId === 'ch08' && localItem.eng === 'Suture needle') {
      matched = sameChNetlify.find(n => n.eng.includes('Suture needle'));
    } else if (localItem.chapterId === 'ch10' && localItem.eng === 'Extraction forcep') {
      matched = sameChNetlify.find(n => n.eng === 'Forcep');
    } else if (localItem.chapterId === 'ch10' && localItem.eng === 'Implant surgery kit') {
      matched = sameChNetlify.find(n => n.eng === 'Implant kit'); // Better than Implant surgery
    } else if (localItem.chapterId === 'ch12' && localItem.eng === 'Oral irrigator') {
      matched = sameChNetlify.find(n => n.eng === 'Oral irrigation');
    }
  }
  
  if (!matched) {
    // 3. Fallback: starts with or contains
    matched = sameChNetlify.find(n => n.eng.toLowerCase().includes(localItem.eng.toLowerCase()) || localItem.eng.toLowerCase().includes(n.eng.toLowerCase()));
  }

  if (matched) {
    finalMappings.push({
      id: localItem.id,
      eng: localItem.eng,
      netEng: matched.eng,
      netKor: matched.kor,
      netCategory: matched.categoryName,
    });
  } else {
    console.log(`Could not find any match for ${localItem.chapterId} - ${localItem.eng}`);
  }
});

console.log(`Successfully mapped: ${finalMappings.length}/${VOCAB_DATA.length}`);
fs.writeFileSync('refined_mappings.json', JSON.stringify(finalMappings, null, 2), 'utf8');
