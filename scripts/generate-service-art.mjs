import { mkdirSync, writeFileSync } from 'node:fs';

const face = '<path d="M260 350Q265 295 295 282V247H345V282Q378 297 385 350" fill="#d99e87"/><ellipse cx="320" cy="181" rx="76" ry="100" fill="#efbea5"/><path d="M244 175Q220 60 320 65Q419 65 396 180L373 115Q306 150 264 118Z" fill="#53313d"/><path d="M276 183Q290 176 301 183M341 183Q354 176 366 183M307 236Q320 244 336 235"/><path d="M322 190L314 214H325" stroke="#c17b69"/>';
const sparkle = '<path d="M440 95V131M422 113H458M207 244V268M195 256H219" stroke="#c6a15b" stroke-width="5"/>';
const bottle = '<rect x="414" y="212" width="62" height="105" rx="14" fill="#fff9f7"/><path d="M431 212V191H460M445 191V177H478"/><path d="M435 250H455M435 263H455" stroke="#c6a15b"/>';
const beam = '<path d="M423 201L369 234M427 215L377 246" stroke="#c6a15b" stroke-dasharray="6 8"/><g transform="rotate(28 455 177)"><rect x="432" y="112" width="45" height="126" rx="16" fill="#fff9f7"/><path d="M446 135H462M446 149H462"/></g>';
const art = {
  'lice-treatment': face + '<path d="M257 99Q210 167 255 267M277 98Q230 180 273 269"/><g transform="rotate(-25 420 160)"><rect x="393" y="92" width="20" height="155" rx="8" fill="#c6a15b"/><path d="M413 112H452M413 129H452M413 146H452M413 163H452M413 180H452M413 197H452M413 214H452"/></g>',
  'korean-glass-skin': face + sparkle + '<path d="M271 208L289 215M351 215L370 208" stroke="#fff9f7" stroke-width="9"/>' + bottle,
  microblading: '<path d="M182 243Q320 296 460 234" stroke="#d99e87" stroke-width="75"/><path d="M220 169Q265 132 309 160M345 160Q390 132 428 164" stroke-width="17"/><path d="M224 206Q263 236 300 203M351 204Q390 236 425 205"/><path d="M410 94L323 171" stroke="#c6a15b" stroke-width="17"/><path d="M323 171L314 182"/>',
  'ear-lobe-repair': '<path d="M359 293Q410 259 404 160Q400 80 326 90Q254 100 268 167" fill="#efbea5" stroke-width="9"/><path d="M295 164Q286 111 342 118Q397 126 369 204Q350 220 353 253Q347 286 317 268Q296 258 310 235L329 210Q348 183 320 175" stroke="#c17b69" stroke-width="9"/><circle cx="333" cy="263" r="8" fill="#c6a15b"/>' + sparkle,
  'hydra-facial': face + '<path d="M274 207Q320 225 364 207" stroke="#fff9f7" stroke-width="15"/><path d="M378 207L441 150" stroke="#fff9f7" stroke-width="26"/><path d="M441 150Q485 124 485 195V292" stroke="#c98b8b" stroke-width="10"/>' + sparkle,
  'tattoo-removal': '<path d="M190 302L282 105Q309 73 345 111L410 302" fill="#efbea5"/><path d="M290 237Q267 201 297 185Q319 178 324 203Q335 177 351 190Q377 211 323 252Z" fill="#6b243f"/><path d="M328 184L361 259" stroke="#efbea5" stroke-width="10"/>' + beam,
  'laser-hair-removal': '<path d="M193 292Q276 251 291 122Q293 89 336 104L379 123Q354 237 407 294Z" fill="#efbea5"/><path d="M284 179L281 190M278 202L275 213M269 225L266 235"/>' + beam + sparkle,
  hair: face + '<path d="M249 154Q206 267 269 310M390 157Q435 265 375 311" stroke="#53313d" stroke-width="30"/><circle cx="435" cy="263" r="16"/><circle cx="472" cy="264" r="16"/><path d="M444 248L477 177M464 248L433 177"/>',
  skin: face + bottle + sparkle,
  nails: '<path d="M235 300L226 191Q225 170 243 174L259 229L254 126Q253 105 272 110L287 217L290 100Q295 81 309 101L314 216L328 117Q337 100 349 118L340 231L371 189Q389 177 395 194L372 266Q347 309 344 325" fill="#efbea5"/><path d="M264 127L267 150M299 109L299 133M337 126L334 149M237 187L243 206" stroke="#6b243f" stroke-width="12"/>' + sparkle,
  brows: face + '<path d="M274 173Q289 164 302 173M340 173Q355 164 368 173" stroke-width="9"/><path d="M427 134L371 173" stroke="#c6a15b" stroke-width="12"/>',
  advanced: beam + '<path d="M170 283Q255 186 367 257L395 296H170Z" fill="#efbea5"/>' + sparkle,
  bridal: '<path d="M203 326L236 134Q253 55 320 52Q398 55 407 135L443 326" fill="#fff9f7"/>' + face + '<path d="M263 115L277 78L301 99L320 66L340 99L366 78L378 117Z" fill="#c6a15b"/><circle cx="248" cy="218" r="10" fill="#c6a15b"/><circle cx="392" cy="218" r="10" fill="#c6a15b"/>'
};
mkdirSync('public/images/services', { recursive: true });
for (const [name, drawing] of Object.entries(art)) {
  writeFileSync(`public/images/services/${name}.svg`, `<svg xmlns="http://www.w3.org/2000/svg" width="640" height="400" viewBox="0 0 640 400"><defs><linearGradient id="bg" x2="1" y2="1"><stop stop-color="#faeee7"/><stop offset="1" stop-color="#e8c5c6"/></linearGradient></defs><path fill="url(#bg)" d="M0 0H640V400H0Z"/><circle cx="320" cy="200" r="160" fill="#fff9f7" opacity=".5"/><ellipse cx="320" cy="343" rx="165" ry="13" fill="#6b243f" opacity=".08"/><g fill="none" stroke="#6b243f" stroke-width="4" stroke-linecap="round" stroke-linejoin="round">${drawing}</g></svg>`);
}
