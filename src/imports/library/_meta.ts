/**
 * Image library metadata.
 *
 * To add an image:
 *   1. Drop the file into the matching category folder, e.g.
 *      `src/imports/library/people/owner-with-client-001.jpg`
 *      Use kebab-case filenames. Max ~1600px on the long edge,
 *      JPG 80% quality (or WebP). Keep each file under ~500 KB.
 *
 *   2. Add an entry below. The `src` is the path RELATIVE to
 *      `src/imports/library/` (i.e. starts with the category folder).
 *
 *   3. Save. Vite HMR picks it up automatically — no rebuild.
 *
 * Files in the folders without a metadata entry are flagged in the
 * Image Library section (so you don't ship un-described imagery).
 */

export type LibraryCategory =
  | 'people'
  | 'office'
  | 'books'
  | 'footer'
  | 'editorial'
  | 'hero'
  | 'bank-cards'
  | 'money'
  | 'abstract'
  | 'brand-deck';

export type LibraryRatio = '16:9' | '4:5' | '1:1' | '3:2' | '21:9' | '9:16' | '4:3';

export type LibraryLicense =
  | 'Brand-owned'
  | 'Stock-licensed'
  | 'Editorial-use'
  | 'Internal-only';

export interface LibraryImage {
  src: string;
  alt: string;
  ratio: LibraryRatio;
  license: LibraryLicense;
}

export const libraryImages: LibraryImage[] = [

  // ── Footer (already imported in earlier round) ────────────────
  { src: 'footer/footerjohn-wave.jpeg',                alt: 'Soft cascade of overlapping translucent petal-blade forms fanning across the bottom of a warm copper gradient — an abstract wave motif rendered in semi-transparent peach.', ratio: '16:9', license: 'Brand-owned' },
  { src: 'footer/footerjohn-pressure.jpeg',            alt: 'Cluster of rounded 3D pillars in graduated copper tones, with a fluid wave-like extrusion flowing off to the right, set against a warm copper gradient — a visual metaphor for compression releasing into motion.', ratio: '16:9', license: 'Brand-owned' },
  { src: 'footer/footerjohn-rock.jpeg',                alt: 'A balanced cairn of smooth river stones in graduated earth tones, stacked in a pyramid against a warm copper gradient — 3D still life evoking stillness, balance, and considered judgement.', ratio: '16:9', license: 'Brand-owned' },
  { src: 'footer/footerjohn-shapes.jpeg',              alt: 'A grouping of soft 3D geometric primitives — cylinders, rounded cubes, and spheres in copper and tan tones — clustered at the bottom of a warm copper gradient.', ratio: '16:9', license: 'Brand-owned' },
  { src: 'footer/footerjohn-shuffle-cards.jpeg',       alt: 'A vertical fan of curved blade-shaped panels layered like a deck of cards being riffled, rendered in graduated peach and bronze translucent tones against a warm copper gradient.', ratio: '16:9', license: 'Brand-owned' },

  // ── bank-cards ──
  { src: 'bank-cards/cu-app-mockup-portfolio.png', alt: 'Smartphone mockup showing a Capital Unique investment app: portfolio value $154,000.00, +$2,400 (+6.34%) past month, gold accent line chart on a black background.', ratio: '4:5', license: 'Brand-owned' },
  { src: 'bank-cards/card-gold-flat.png', alt: 'A gold bank card with EMV chip showing "1234 5678 9012 3456 / FIRSTNAME LASTNAME" — flat front, 3D render, isolated.', ratio: '1:1', license: 'Brand-owned' },
  { src: 'bank-cards/card-black-gold-angled.png', alt: 'A black bank card with thin gold rim and embossed gold details — angled 3D view, isolated on cream.', ratio: '1:1', license: 'Brand-owned' },
  { src: 'bank-cards/card-black-gold-flat.png', alt: 'A black bank card with thin gold rim and embossed details — flat front view, 3D render, isolated.', ratio: '1:1', license: 'Brand-owned' },
  { src: 'bank-cards/card-black-contactless.png', alt: 'A black contactless bank card with EMV chip and NFC wave symbol — angled 3D view, isolated.', ratio: '1:1', license: 'Brand-owned' },

  // ── books ──
  { src: 'books/cu-branded-books.png', alt: 'Two navy hardcover books — one titled "Capital Unique", one "Global Market Analysis" — alongside reading glasses and a white coffee cup on a dark walnut surface.', ratio: '1:1', license: 'Brand-owned' },
  { src: 'books/walnut-bookshelf.jpeg', alt: 'A warm walnut bookshelf with leather-bound and cloth-spine books in navy and earth tones, accented by copper-finish candle holders, lit by a beam of late-afternoon light.', ratio: '4:5', license: 'Brand-owned' },

  // ── brand-deck ──
  { src: 'brand-deck/branding-kit-cover-light.png', alt: 'Branding kit cover slide (light variant): "YOUR BRANDING KIT" headline, Capital Unique wordmark + silver coin lockup on the left, John Codrington portrait on the right.', ratio: '16:9', license: 'Brand-owned' },
  { src: 'brand-deck/branding-kit-cover-dark.png', alt: 'Branding kit cover slide (dark variant): John Codrington portrait on the left, Capital Unique wordmark + gold coin lockup centre, "YOUR BRANDING KIT" headline.', ratio: '16:9', license: 'Brand-owned' },
  { src: 'brand-deck/the-brand-overview.png', alt: 'Brand-overview slide titled "The Brand" with five rounded text cards: How the Brand Operates, What the Brand Is, Why the Brand Matters, How the Brand Differs, What the Brand Does.', ratio: '16:9', license: 'Brand-owned' },
  { src: 'brand-deck/logo-evolution-gold.png', alt: '"Evolution Logo Design" slide: a gold nugget transformed into a square gold logo plinth, with arrows showing two derived lockups — gold variant.', ratio: '16:9', license: 'Brand-owned' },
  { src: 'brand-deck/logo-evolution-bronze.png', alt: '"Evolution Logo Design" slide: a copper nugget transformed into a copper logo plinth with derived lockups — bronze variant.', ratio: '16:9', license: 'Brand-owned' },
  { src: 'brand-deck/logo-evolution-silver.png', alt: '"Evolution Logo Design" slide: silver ore transformed into a brushed-silver logo plinth with derived lockups — platinum/silver variant.', ratio: '16:9', license: 'Brand-owned' },
  { src: 'brand-deck/logo-color-specimen.png', alt: 'Logo specification specimen sheet: four color variants of the Capital Unique lockup (silver-on-navy, silver-on-light, bronze-on-black, bronze-on-light) on a soft-shadow background.', ratio: '16:9', license: 'Brand-owned' },
  { src: 'brand-deck/email-signature-codrington.png', alt: 'Email signature template: portrait of John Codrington on the left, contact details on the right — name, role "Lending Distribution", address, phone, email, website.', ratio: '21:9', license: 'Brand-owned' },
  { src: 'brand-deck/logo-lockup-gold.png', alt: 'Capital Unique horizontal logo lockup — gold-on-black square mark beside the lowercase wordmark, on white.', ratio: '16:9', license: 'Brand-owned' },
  { src: 'brand-deck/logo-lockup-bronze.png', alt: 'Capital Unique horizontal logo lockup — bronze-on-black square mark beside the lowercase wordmark, on white.', ratio: '16:9', license: 'Brand-owned' },
  { src: 'brand-deck/logo-lockup-navy-silver.png', alt: 'Capital Unique horizontal logo lockup — silver-on-navy square mark beside the lowercase wordmark, on white.', ratio: '16:9', license: 'Brand-owned' },

  // ── editorial ──
  { src: 'editorial/codrington-headshot-bw.jpeg', alt: 'John Codrington in a grey double-breasted suit and dark tie, hands clasped, seated on a white Eames-style chair against a deep charcoal backdrop — black and white editorial portrait.', ratio: '4:3', license: 'Brand-owned' },
  { src: 'editorial/codrington-chess-strategy.jpeg', alt: 'Cinematic portrait: John Codrington in a grey suit stands on a giant marble chessboard, his hand resting on the crown of a chess king, lit by a dramatic orange beam in a smoky bronze atmosphere.', ratio: '16:9', license: 'Brand-owned' },
  { src: 'editorial/cu-logo-bronze-plinth.png', alt: 'Cinematic logo hero: the Capital Unique square logo levitates above a dark stone slab in a bronze-orange smoky atmosphere — premium editorial brand asset.', ratio: '16:9', license: 'Brand-owned' },
  { src: 'editorial/cu-logo-white-podium.png', alt: 'Logo hero, light variant: Capital Unique square logo on a soft white pedestal in a pale grey studio environment.', ratio: '16:9', license: 'Brand-owned' },
  { src: 'editorial/cu-coin-on-stone.png', alt: 'Cinematic still life: a single bronze Capital Unique coin resting on a dark stone surface, dramatic side lighting picking out the embossed monogram.', ratio: '1:1', license: 'Brand-owned' },
  { src: 'editorial/owner-portrait-cuff.png', alt: 'The owner, in a navy two-piece suit and pale blue tie, fixing his cuff while looking off-camera; charcoal studio backdrop — half-body editorial portrait.', ratio: '16:9', license: 'Brand-owned' },

  // ── money ──
  { src: 'money/calculator-and-ledger.jpeg', alt: 'A vintage cream-coloured tabletop calculator printing a paper receipt next to an open handwritten ledger book displaying the Capital Unique monogram, on a tan leather desk pad.', ratio: '16:9', license: 'Brand-owned' },
  { src: 'money/cu-coins-app-stilllife.jpeg', alt: 'Top-down still life on tan leather: an open notebook with a brass pen, a ceramic espresso mug, a smartphone displaying a banking app, and two brass coins embossed with the Capital Unique monogram.', ratio: '16:9', license: 'Brand-owned' },
  { src: 'money/cu-coin-bronze-standing.png', alt: 'A polished bronze 3D-rendered Capital Unique coin standing on its edge, M-mark monogram embossed on the face; isolated on white.', ratio: '1:1', license: 'Brand-owned' },
  { src: 'money/coin-stack-plant-001.png', alt: 'A short stack of bronze coins with a tiny green plant sprout emerging from the top — investment-growth metaphor (early stage).', ratio: '1:1', license: 'Brand-owned' },
  { src: 'money/coin-stack-plant-002.png', alt: 'A taller stack of bronze coins with a developed green plant growing from the top — investment-growth metaphor (matured).', ratio: '1:1', license: 'Brand-owned' },
  { src: 'money/cu-coin-dark-face.png', alt: 'Capital Unique coin variant: gold rim with a dark engraved face displaying the monogram — front view, isolated.', ratio: '1:1', license: 'Brand-owned' },
  { src: 'money/cu-coin-bronze-front.png', alt: 'Capital Unique coin: solid bronze face with embossed monogram, flat front view, isolated on white.', ratio: '1:1', license: 'Brand-owned' },
  { src: 'money/cu-coin-bronze-angled.png', alt: 'Capital Unique coin: bronze, 3D angled three-quarter view showing the ridged edge and embossed monogram, isolated on white.', ratio: '1:1', license: 'Brand-owned' },

  // ── office ──
  { src: 'office/desk-tablet-coffee.jpeg', alt: 'A man\'s hand wrapped around a ceramic mug of black coffee on a walnut desk, beside a tablet displaying a financial chart and a navy notebook, in golden hour light.', ratio: '9:16', license: 'Brand-owned' },
  { src: 'office/empty-desk-suit-jacket.jpeg', alt: 'A navy suit jacket drapes over a leather office chair facing a walnut desk; a copper pencil holder, leather portfolio, and tan-bound notebook sit ready on the desk surface.', ratio: '9:16', license: 'Brand-owned' },
  { src: 'office/codrington-boardroom-presentation.png', alt: 'John Codrington in a navy suit gestures toward a flipchart at the head of a polished boardroom table while three colleagues seated around it follow along; large windows behind reveal a soft sunset over a city skyline.', ratio: '9:16', license: 'Brand-owned' },
  { src: 'office/reception-bench-painting.jpeg', alt: 'Office reception: a long linen-upholstered tufted bench beneath a large abstract painting in deep navy with a copper foil intersection, beside a fiddle-leaf fig in a charcoal planter; warm afternoon sun raking across the wall.', ratio: '4:5', license: 'Brand-owned' },

  // ── people ──
  { src: 'people/clients-couple-car-001.jpeg', alt: 'A smiling couple — bearded man and short-haired woman — framed in the open rear window of a vehicle with greenery behind them in soft afternoon light.', ratio: '16:9', license: 'Brand-owned' },
  { src: 'people/clients-couple-car-002.png', alt: 'A second couple — both smiling — framed in the open rear of a vehicle in soft daylight, evoking partnership and shared decision-making.', ratio: '3:2', license: 'Brand-owned' },
  { src: 'people/codrington-presenting-chart.jpeg', alt: 'John Codrington, in a grey double-breasted suit, points at a hand-drawn bar chart on a flipchart while a colleague in a cream blouse looks on, in a wood-paneled meeting room with golden hour light.', ratio: '3:2', license: 'Brand-owned' },
  { src: 'people/handshake-meeting.jpeg', alt: 'An older man in a navy suit and blue tie shakes hands with a younger man in a grey suit in a wood-floored meeting room; soft side light, leather chairs and a coffee table behind.', ratio: '3:2', license: 'Brand-owned' },
  { src: 'people/owner-headshot-warm.jpeg', alt: 'The owner smiles directly into camera in a brown tweed three-piece suit, white shirt, and burgundy polka-dot tie with a printed pocket square; soft afternoon light in a glass-walled office.', ratio: '4:3', license: 'Brand-owned' },
  { src: 'people/owner-signing-document.png', alt: 'Two men in business suits seated at a polished walnut conference table — the owner signing a document, a colleague watching attentively — in a richly paneled meeting room.', ratio: '9:16', license: 'Brand-owned' },
  { src: 'people/owner-with-colleague-laptop.png', alt: 'The owner, in a navy suit and blue tie, gestures at a laptop screen while talking with a colleague in a navy blazer; behind them, floor-to-ceiling windows reveal a city skyline at golden hour.', ratio: '9:16', license: 'Brand-owned' },
  { src: 'people/owner-seated-cafe.jpeg', alt: 'The owner smiles directly at camera, seated forward in a tan leather chair, hands clasped, in a warm timber-and-leather cafe interior.', ratio: '4:3', license: 'Brand-owned' },
  { src: 'people/owner-seated-lounge.jpeg', alt: 'The owner in a navy suit and blue tie, seated forward in a grey lounge chair, smiling at camera; behind him a polished concrete cafe floor with bar stools and warm sconce lighting.', ratio: '4:3', license: 'Brand-owned' },
  { src: 'people/team-reviewing-document.png', alt: 'Three professionals in business attire stand in a boardroom reviewing a leather portfolio open to printed pages — the owner centre, a woman in a navy suit on the left, and a man in a dark suit on the right.', ratio: '9:16', license: 'Brand-owned' },
  { src: 'people/owner-portrait-navy-001.png', alt: 'Two-up: the owner in a navy two-piece suit and blue tie — close-up headshot on the left, full standing portrait on the right; charcoal studio backdrop.', ratio: '21:9', license: 'Brand-owned' },
  { src: 'people/owner-portrait-grey-3piece-001.png', alt: 'Two-up: the owner in a grey three-piece suit and dark tie — close-up headshot and full standing portrait; charcoal studio backdrop.', ratio: '21:9', license: 'Brand-owned' },
  { src: 'people/owner-portrait-grey-3piece-002.png', alt: 'Two-up close variant: the owner in a grey three-piece suit and dark tie — close-up headshot and full standing portrait; charcoal studio backdrop.', ratio: '21:9', license: 'Brand-owned' },
  { src: 'people/owner-portrait-grey-2piece.png', alt: 'Two-up: the owner in a grey two-piece suit and dark tie with patterned pocket square — close-up headshot and full standing portrait; charcoal studio backdrop.', ratio: '21:9', license: 'Brand-owned' },
  { src: 'people/owner-portrait-grey-3piece-blue.png', alt: 'Two-up: the owner in a grey three-piece suit and blue tie — close-up headshot and full standing portrait; charcoal studio backdrop.', ratio: '21:9', license: 'Brand-owned' },
  { src: 'people/owner-portrait-navy-002.png', alt: 'Two-up close variant: the owner in a navy two-piece suit and blue tie — close-up headshot and full standing portrait; charcoal studio backdrop.', ratio: '21:9', license: 'Brand-owned' },
  { src: 'people/owner-portrait-navy-003.png', alt: 'Two-up close variant: the owner in a navy two-piece suit — close-up headshot and full standing portrait, hands at sides; charcoal studio backdrop.', ratio: '21:9', license: 'Brand-owned' },
  { src: 'people/owner-portrait-navy-004.png', alt: 'Two-up close variant: the owner in a navy two-piece suit — close-up headshot and full standing portrait, hands on hips; charcoal studio backdrop.', ratio: '21:9', license: 'Brand-owned' },
  { src: 'people/owner-portrait-navy-005.png', alt: 'Two-up close variant: the owner in a navy two-piece suit — close-up headshot and full standing portrait; charcoal studio backdrop.', ratio: '21:9', license: 'Brand-owned' },
  { src: 'people/owner-handing-document.png', alt: 'The owner in a navy suit hands a printed document to a colleague (back to camera) in a sunlit office with a fiddle-leaf fig behind them.', ratio: '16:9', license: 'Brand-owned' },

  // ── Desktop import 2026-05-18 ──
  { src: 'people/owner-cafe-call-001.png', alt: 'John Codrington in a navy suit takes a phone call while working on a laptop at a small table in a plant-filled cafe with floor-to-ceiling windows; portrait crop.', ratio: '4:5', license: 'Brand-owned' },
  { src: 'people/owner-cafe-call-002.png', alt: 'John Codrington in a navy suit on a phone call at his laptop in a sunlit, greenery-framed cafe window seat; wide crop.', ratio: '4:3', license: 'Brand-owned' },
  { src: 'people/clients-couple-lounge-001.png', alt: 'A relaxed couple sit close on a cream sofa in a warm terracotta-walled lounge, the woman holding a dark mug, both looking off-camera; framed through a timber shelving unit.', ratio: '16:9', license: 'Brand-owned' },
  { src: 'people/clients-couple-lounge-002.png', alt: 'The same couple on a cream sofa in a terracotta lounge, the woman cradling a mug, viewed through a wooden shelf frame; portrait crop.', ratio: '4:5', license: 'Brand-owned' },
  { src: 'people/clients-couple-car-003.png', alt: 'A smiling couple — curly-haired man in an olive jacket and a woman in a trench coat — framed in the open rear window of a vehicle with sunlit greenery behind.', ratio: '16:9', license: 'Brand-owned' },
  { src: 'people/clients-couple-car-004.png', alt: 'A happy couple — bearded man in a brown jacket and a woman in a tan trench coat — smiling to camera, framed in the open rear window of a vehicle against soft greenery.', ratio: '16:9', license: 'Brand-owned' },
  { src: 'people/clients-casual-meeting-001.png', alt: 'Four people in casual knitwear around a pale meeting table with coffee cups and water; a woman in a rust turtleneck rests her chin on her hand, listening thoughtfully beside a bearded man in a grey cardigan.', ratio: '16:9', license: 'Brand-owned' },
  { src: 'people/owner-handshake-lounge-001.png', alt: 'John Codrington in a navy suit shakes hands with a client in a pale blue shirt, both seated in grey lounge chairs in a warm restaurant interior with bokeh pendant lights and greenery.', ratio: '16:9', license: 'Brand-owned' },
  { src: 'people/owner-handshake-lounge-002.png', alt: 'John Codrington in a navy suit shakes hands with a seated client in a warm, low-lit restaurant lounge; portrait crop.', ratio: '4:5', license: 'Brand-owned' },
  { src: 'people/owner-client-meeting-001.png', alt: 'John Codrington in a navy suit, hands clasped, listens across a walnut table to a woman in a blue-striped blouse reviewing a printed chart; plants and a window behind.', ratio: '4:3', license: 'Brand-owned' },
  { src: 'office/desk-laptop-tablet-planning-001.png', alt: 'Overhead flat-lay on a walnut desk: two pairs of hands working a laptop and a tablet displaying colourful Gantt-style project schedules, beside a leather notebook, a smartphone, and two whisky tumblers.', ratio: '3:2', license: 'Brand-owned' },
  { src: 'office/document-signing-warm-001.png', alt: 'Close crop of hands in a rust knit sweater signing a document with a black pen at a desk stacked with cream cards and a black lens cap; warm earthy palette.', ratio: '4:5', license: 'Brand-owned' },
  { src: 'office/blueprint-review-001.png', alt: 'A man in a navy sweater and glasses reviews architectural floor-plan blueprints on a walnut desk, holding a material sample tile beside a wooden ruler and pen.', ratio: '4:3', license: 'Brand-owned' },
  { src: 'office/document-signing-cool-001.png', alt: 'Close crop of hands in a navy knit sweater signing paperwork with a black pen at a desk stacked with navy and white cards and a black lens cap; cool blue palette.', ratio: '4:5', license: 'Brand-owned' },
  { src: 'brand-deck/logo-lockup-silver-horizontal.png', alt: 'Capital Unique horizontal logo lockup — brushed-silver M monogram on a navy rounded-square badge beside the lowercase black wordmark, on white.', ratio: '21:9', license: 'Brand-owned' },
  { src: 'brand-deck/logo-icon-silver-square.png', alt: 'Capital Unique app-style icon — brushed-silver M monogram with a small bead detail on a navy rounded-square badge with a silver bezel.', ratio: '1:1', license: 'Brand-owned' },
];
