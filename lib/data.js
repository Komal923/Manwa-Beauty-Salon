import {salonLocations,locationMapsUrl} from "./locations";
export const contactInfo={phone:"7021242631",displayPhone:"70212 42631",whatsapp:"917021242631"};
export const openingHours="10:00 AM – 09:00 PM";
export const whatsappMessages={
appointment:"Hi Manwa Beauty Salon & Academy, I would like to book an appointment.",
services:"Hi Manwa Beauty Salon & Academy, I would like to know more about your services.",
bridal:"Hi Manwa Beauty Salon & Academy, I would like to enquire about Bridal Makeup.",
academy:"Hi Manwa Beauty Salon & Academy, I would like to know more about your beauty courses.",
"lice-treatment":"Hi Manwa Beauty Salon & Academy, I am interested in Lice Treatment. Please share appointment details.",
"korean-glass-skin":"Hi Manwa Beauty Salon & Academy, I am interested in Korean Glass Skin Treatment.",
microblading:"Hi Manwa Beauty Salon & Academy, I am interested in Microblading.",
"hydra-facial":"Hi Manwa Beauty Salon & Academy, I am interested in Hydra Facial."
};
export const SITE={name:"Manwa Beauty Salon & Academy",phone:contactInfo.phone,wa:contactInfo.whatsapp,ig:"https://www.google.com/goto?url=CAESYQHrOzAVoXQ1AzQmfrdsoZh_dUX72d1jTt2UFYJO7oMDq8dQb4ijjwUdFZTTVXdGuHTAxGAD519z5Cy_sbqHGJUiU6CUQoRNQ3iERj4FG5dlAKNmXTho3Y2T0umLjgWaRBE",fb:"https://www.facebook.com/",
maps:locationMapsUrl(salonLocations[0]),
linkedin:"https://www.linkedin.com/in/manisha-bodare-678657442",
address:salonLocations[0].address,hours:`Daily ${openingHours}`};
export const waLink=(message=whatsappMessages.appointment)=>{
const base=`https://wa.me/${contactInfo.whatsapp}`;
return message?`${base}?text=${encodeURIComponent(message)}`:base;
};
export const serviceWaMessage=(slug)=>whatsappMessages[slug]||`Hi Manwa Beauty Salon & Academy, I am interested in ${SERVICES.find(s=>s.slug===slug)?.title||"your services"}.`;
export const telLink=()=>`tel:${contactInfo.phone}`;
// Website photography is mapped centrally in lib/imagery.js.
const s=(slug,title,cat,tag,icon,short,benefits)=>({slug,title,cat,tag,icon,short,benefits});
export const SERVICES=[
s("lice-treatment","Lice Treatment","Hair","Most Popular","💧","Professional lice and nits removal with thorough scalp care.",["Thorough, patient nits removal","Gentle scalp cleansing","Comfortable, private setting"]),
s("korean-glass-skin","Korean Glass Skin","Skin","Signature Treatment","✨","A glow-focused facial for hydrated, radiant-looking skin.",["Deep hydration","Careful skin cleansing","Radiance-focused care"]),
s("microblading","Microblading","Brows","Recommended","🖌️","Natural-looking brow shaping, planned around your face.",["Brow design matched to your features","Consultation-led approach","Hygienic single-use tools"]),
s("ear-lobe-repair","Ear Lobe Repair","Advanced","Client Favourite","👂","Consultation-based care for stretched or torn ear lobes.",["Personal consultation first","Clear guidance on aftercare","Discreet, caring service"]),
s("hydra-facial","Hydra Facial","Skin","Client Favourite","💦","Cleansing and hydration for fresh, healthy-looking skin.",["Deep cleansing","Hydration boost","Suited to many skin types"]),
s("tattoo-removal","Tattoo Removal","Advanced","Recommended","🌿","Consultation-led tattoo removal sessions.",["Assessment before any session","Clear expectations on sessions","Professional, private care"]),
s("laser-hair-removal","Laser Hair Removal","Hair Removal","Recommended","⚡","Longer-lasting smoothness with consultation-led planning.",["Plan tailored to the area","Smoother-feeling skin","Skilled, hygienic handling"])];
export const LIST={"Hair Care":["Haircut","Hair Spa","Hair Colour","Hair Styling","Hair Smoothening","Hair Treatments","Hair Fall Care","Dandruff Care","Lice Treatment"],
"Skin & Facial":["Facials","Cleanup","Hydra Facial","Korean Glass Skin Treatment","Skin Brightening","De-Tan","Anti-Ageing Facial"],
"Nails & Grooming":["Threading","Waxing","Manicure","Pedicure"],"Brows & Lashes":["Microblading","Eyebrow Services","Eyelash Services"],
"Advanced Treatments":["Laser Hair Removal","Tattoo Removal","Ear Lobe Repair","Extra Skin Removal"],
"Bridal & Makeup":["Bridal Makeup","Party Makeup","Engagement Makeup","Reception Makeup","Pre-Bridal Services"]};
export const slugOf=n=>{const m=SERVICES.find(x=>n.toLowerCase().startsWith(x.title.toLowerCase().split(" ")[0])&&(x.title.split(" ")[0]==n.split(" ")[0]));return m?m.slug:null};
export const CATS=[["Hair Care","💇"],["Skin & Facial","✨"],["Advanced Treatments","🌿"],["Bridal Makeup","👰"],["Nail Services","💅"],["Eyelashes & Brows","👁️"],["Hair Removal","🪶"],["Beauty Academy","🎓"]];
export const CONCERNS={"Hair / Scalp":["lice-treatment"],"Skin Glow":["korean-glass-skin","hydra-facial"],"Brows":["microblading"],"Unwanted Hair":["laser-hair-removal"],"Bridal":[],"Ear Lobes":["ear-lobe-repair"],"Tattoo":["tattoo-removal"],"Facial Care":["hydra-facial","korean-glass-skin"]};
export const detail=x=>({intro:`${x.title} at Manwa Beauty Salon & Academy in Kamothe, Navi Mumbai. ${x.short}`,
who:`Anyone looking for ${x.title.toLowerCase()} in Kamothe who wants honest guidance before starting. Our team will advise whether it suits you.`,
steps:["Short consultation about your goals and concerns","Preparation in a clean, private space","The treatment, carried out step by step","Aftercare guidance before you leave"],
aftercare:"You will receive personalised aftercare instructions after your session. Follow them closely and contact the salon if you have any questions.",
faqs:[[`How do I book ${x.title}?`,"Use the Book Appointment button or message us on WhatsApp and we will confirm a slot."],[`Is a consultation needed?`,"Yes. A quick consultation helps us recommend the right approach for you."],[`How many visits will I need?`,"It depends on the individual. Results may vary, and we will explain what to expect at your consultation."]]});
export const REVIEWS=[["Google client","Very clean salon and a warm, welcoming team."],["Google client","Lovely skin treatments, and the staff explain everything."],["Google client","Great hair care results and a relaxed atmosphere."]]; // Replace with real Google reviews
