const photo = name => `/images/salon/${name}-v2.jpg`;
export const PHOTOS = {
  beautician: '/images/salon/manisha-about-hd.png',
  hero: photo('salon'), about: photo('salon'), salon: photo('salon'),
  hair: photo('hair'), lice: photo('lice'), 'lice-treatment': photo('lice'),
  skin: photo('skin'), glass: photo('glass'), 'korean-glass-skin': photo('glass'), 'hydra-facial': photo('hydra'),
  brows: photo('brows'), microblading: photo('brows'), bridal: photo('bridal'),
  academy: photo('academy'), nails: photo('nails'), products: photo('products'),
  consultation: photo('consultation'), advanced: photo('consultation'),
  'ear-lobe-repair': photo('ear'),
  'tattoo-removal': photo('tattoo'),
  'laser-hair-removal': photo('laser'),
};
export const CATEGORY_PHOTOS = {
  'Hair Care': 'hair', 'Skin & Facial': 'skin', 'Advanced Treatments': 'advanced',
  'Bridal Makeup': 'bridal', 'Bridal & Makeup': 'bridal', 'Nail Services': 'nails',
  'Nails & Grooming': 'nails', 'Eyelashes & Brows': 'brows', 'Brows & Lashes': 'brows',
  'Hair Removal': 'laser-hair-removal', 'Beauty Academy': 'academy',
};
export const topicPhoto = name => {
  if (/bridal|makeup/i.test(name)) return 'bridal';
  if (/brow|lash|threading/i.test(name)) return 'brows';
  if (/nail|manicure|pedicure/i.test(name)) return 'nails';
  if (/waxing|laser/i.test(name)) return 'laser-hair-removal';
  if (/tattoo/i.test(name)) return 'tattoo-removal';
  if (/ear lobe/i.test(name)) return 'ear-lobe-repair';
  if (/lice/i.test(name)) return 'lice';
  if (/glass/i.test(name)) return 'glass';
  if (/hydra/i.test(name)) return 'hydra-facial';
  if (/hair|dandruff/i.test(name)) return 'hair';
  return 'skin';
};
