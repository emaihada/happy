import { VOCAB_DATA } from './src/data/vocabData.js';
import fs from 'fs';

const netlifyItems = JSON.parse(fs.readFileSync('extracted_netlify.json', 'utf8'));

const updates = [];

VOCAB_DATA.forEach(localItem => {
  // Try exact match
  let matched = netlifyItems.find(n => n.chapterId === localItem.chapterId && n.eng.toLowerCase().trim() === localItem.eng.toLowerCase().trim());
  
  if (!matched) {
    // Try matching if the netlify english string is part of the local or vice versa, or same chapter
    matched = netlifyItems.find(n => {
      if (n.chapterId !== localItem.chapterId) return false;
      const nEng = n.eng.toLowerCase().replace(/[^a-z0-9]/g, '');
      const lEng = localItem.eng.toLowerCase().replace(/[^a-z0-9]/g, '');
      return nEng.includes(lEng) || lEng.includes(nEng);
    });
  }
  
  if (!matched) {
    // Manual fallback mapping for different names in Netlify
    if (localItem.chapterId === 'ch04' && localItem.eng === 'Suction machine') {
      matched = netlifyItems.find(n => n.chapterId === 'ch04' && n.eng === 'Suction');
    } else if (localItem.chapterId === 'ch04' && localItem.eng === 'Face shield') {
      matched = netlifyItems.find(n => n.chapterId === 'ch04' && n.eng === 'Face mask'); // wait, Face mask is there
    } else if (localItem.chapterId === 'ch08' && localItem.eng === 'Surgical blade') {
      matched = netlifyItems.find(n => n.chapterId === 'ch08' && n.eng.includes('Surgical blade'));
    } else if (localItem.chapterId === 'ch08' && localItem.eng === 'Blade holder') {
      matched = netlifyItems.find(n => n.chapterId === 'ch08' && n.eng.includes('Blade holder'));
    } else if (localItem.chapterId === 'ch08' && localItem.eng === 'Surgical scissors') {
      matched = netlifyItems.find(n => n.chapterId === 'ch08' && n.eng.includes('Scissors'));
    } else if (localItem.chapterId === 'ch08' && localItem.eng === 'Nippers') {
      matched = netlifyItems.find(n => n.chapterId === 'ch08' && n.eng.includes('Nippers'));
    } else if (localItem.chapterId === 'ch08' && localItem.eng === 'Suture needle') {
      matched = netlifyItems.find(n => n.chapterId === 'ch08' && n.eng.includes('Suture needle'));
    } else if (localItem.chapterId === 'ch10' && localItem.eng === 'Extraction forcep') {
      // Netlify ch10 might have "Forcep" or "Extraction forcep"? Let's search
      matched = netlifyItems.find(n => n.chapterId === 'ch10' && n.eng === 'Forcep');
    } else if (localItem.chapterId === 'ch10' && localItem.eng === 'Implant surgery kit') {
      matched = netlifyItems.find(n => n.chapterId === 'ch10' && n.eng === 'Implant kit');
    } else if (localItem.chapterId === 'ch12' && localItem.eng === 'Oral irrigator') {
      matched = netlifyItems.find(n => n.chapterId === 'ch12' && n.eng === 'Oral irrigation');
    }
  }

  if (matched) {
    updates.push({
      localId: localItem.id,
      eng: localItem.eng,
      netEng: matched.eng,
      chapter: localItem.chapterId,
      oldKor: localItem.kor,
      newKor: matched.kor
    });
  } else {
    console.log(`Still unmatched: ${localItem.chapterId} "${localItem.eng}"`);
  }
});

console.log(`Matched total: ${updates.length}`);
fs.writeFileSync('mapped_updates.json', JSON.stringify(updates, null, 2), 'utf8');
