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
  | 'brand-deck'
  | 'lead-magnets';

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
  { src: 'footer/footerjohn-cards.jpeg',               alt: 'A radial fan of overlapping translucent petal-blade panels arcing up from the bottom edge against a warm copper gradient — an abstract fanned-deck motif in semi-transparent peach and bronze.', ratio: '16:9', license: 'Brand-owned' },
  { src: 'footer/footerjohn-wave-002.jpeg',            alt: 'Layered flowing wave ridges in graduated copper, amber, and deep brown tones sweeping across a warm gradient — a smooth 3D undulating wave motif.', ratio: '16:9', license: 'Brand-owned' },
  { src: 'footer/footerjohn-ribbons.png',             alt: 'Thin overlapping contour ribbons undulating in soft gentle waves across the lower half of a warm copper gradient — a minimal flowing line motif.', ratio: '16:9', license: 'Brand-owned' },
  { src: 'footer/footerjohn-fan.png',                  alt: 'A half-fan of overlapping rounded petal blades rising from the bottom edge against a warm copper gradient — an abstract fanned motif in graduated peach and bronze.', ratio: '16:9', license: 'Brand-owned' },
  { src: 'footer/footerjohn-panels.png',               alt: 'A clustered row of upright rounded rectangular panels standing like fanned cards or fins, in graduated copper tones against a warm orange gradient.', ratio: '16:9', license: 'Brand-owned' },
  { src: 'footer/footerjohn-bloom.png',                alt: 'A symmetrical radial bloom of rounded petals fanning upward from the bottom centre against a warm copper gradient — a layered 3D flower-fan motif.', ratio: '16:9', license: 'Brand-owned' },
  { src: 'footer/footerjohn-curtain.png',              alt: 'A curtain of soft vertical light bands glowing in warm amber and copper, brightest toward the centre — an abstract luminous striped backdrop.', ratio: '16:9', license: 'Brand-owned' },
  { src: 'footer/footerjohn-pinwheel.png',             alt: 'A 3D pinwheel of swirling curved petals radiating from a central point in smooth copper-orange tones against a warm gradient.', ratio: '16:9', license: 'Brand-owned' },

  // ── Final website assets import 2026-05-19 ──

  // people — clients, team, sector workers, portraits
  { src: 'people/executives-construction-backdrop-sunset.png', alt: 'Two businessmen in dark suits talk on a city street at golden hour, a glass high-rise under construction with tower cranes rising behind them; autumn trees and soft sun flare.', ratio: '4:5', license: 'Brand-owned' },
  { src: 'people/carpenter-workshop-woodworking-001.png', alt: 'A focused Black craftsman in ear defenders works a piece of timber at a bench in a warmly lit woodworking workshop stacked with sawn boards.', ratio: '4:5', license: 'Brand-owned' },
  { src: 'people/client-conversation-lounge-women-001.png', alt: 'Two women in dark tailoring sit in pale armchairs in a warm office lounge, one gesturing mid-sentence while the other listens; soft window light behind.', ratio: '3:2', license: 'Brand-owned' },
  { src: 'people/client-meeting-female-advisor-golden-001.png', alt: 'A smiling woman in a rust blazer talks across a desk with a man (back to camera) beside an open laptop, in a plant-filled office bathed in golden-hour light.', ratio: '4:5', license: 'Brand-owned' },
  { src: 'people/cafe-barista-customer-001.png', alt: 'A smiling Asian barista in a brown apron serves a customer at a timber cafe counter with an espresso machine, retail coffee bags, and a card terminal; takeaway cup on the bench.', ratio: '4:3', license: 'Brand-owned' },
  { src: 'people/cafe-barista-customer-002.png', alt: 'A smiling Middle Eastern barista in a brown apron chats with a customer at a timber cafe counter with an espresso machine and pastry case; angled three-quarter view.', ratio: '4:3', license: 'Brand-owned' },
  { src: 'people/construction-worker-window-install-001.png', alt: 'An Asian tradesman in safety glasses and a tool belt fits a window frame on a residential worksite, framed in the opening with green hills behind.', ratio: '4:5', license: 'Brand-owned' },
  { src: 'people/document-review-standing-professionals-001.png', alt: 'A woman and a bearded man in glasses stand together in a sunlit modern office reviewing a printed document, a potted plant and timber detailing behind them; tall portrait crop.', ratio: '9:16', license: 'Brand-owned' },
  { src: 'people/executive-portrait-female-cafe-entrance.png', alt: 'An Asian female executive in a black top and cream skirt steps out of a dark cafe doorway holding a laptop, smiling off-camera in soft daylight with greenery beside the entrance.', ratio: '4:3', license: 'Brand-owned' },
  { src: 'people/executive-portrait-asian-businessman-lounge.png', alt: 'A mature Asian businessman in a navy quarter-zip and jeans leans on a table in a moody, premium bar-lounge interior, holding an espresso cup and smiling off-camera.', ratio: '4:5', license: 'Brand-owned' },
  { src: 'people/executive-portrait-blue-tie-office.png', alt: 'A businessman in a navy suit and blue tie stands with arms crossed beside a window and walnut shelving in a modern office, city skyline softly visible behind; confident professional portrait.', ratio: '4:5', license: 'Brand-owned' },
  { src: 'people/strategy-session-standing-review-001.png', alt: 'Three colleagues stand around a table in a golden-hour office reviewing printed charts and laptops — a man in a suit pointing while a woman and a younger man in a white shirt consider the figures.', ratio: '1:1', license: 'Brand-owned' },
  { src: 'people/team-collaboration-cafe-001.png', alt: 'Three Asian professionals lean in together over notebooks and a laptop at a timber cafe table, smiling and working, framed by foreground greenery in a warm plant-filled space.', ratio: '1:1', license: 'Brand-owned' },
  { src: 'people/team-collaboration-cafe-002.png', alt: 'A mixed-ethnicity trio of professionals work closely over a laptop and notebooks at a timber cafe table, smiling, framed by lush foreground plants in a warm modern cafe.', ratio: '1:1', license: 'Brand-owned' },
  { src: 'people/tradesmen-work-van-loading-001.png', alt: 'Two tradesmen in navy workwear load timber onto the roof rack of a sign-written work van outdoors in daylight, the younger South Asian worker laughing with his colleague.', ratio: '4:3', license: 'Brand-owned' },
  { src: 'people/warehouse-operator-tablet-001.png', alt: 'A mature businessman in a quilted gilet reviews a tablet at a bench in a dimly lit distribution warehouse, racking and a forklift blurred behind him; clipboard and mug on the bench.', ratio: '3:2', license: 'Brand-owned' },

  // office — boardrooms, desks, in-office scenes
  { src: 'office/boardroom-harbour-view-sunset-001.png', alt: 'Five executives confer around a marble boardroom table with an architectural building model on it, floor-to-ceiling windows revealing a harbour-city skyline at sunset.', ratio: '3:2', license: 'Brand-owned' },
  { src: 'office/boardroom-round-table-aerial-001.png', alt: 'Overhead top-down view of four professionals working around a circular stone table in tan leather tub chairs, with laptops, documents, coffee and a small plant; premium dark interior.', ratio: '1:1', license: 'Brand-owned' },
  { src: 'office/development-meeting-scale-model-sunset.png', alt: 'A development team meets in a warm office lounge at sunset — a couple seated by a building scale model on the left, three men reviewing plans at a round table, a project status board on the wall, city skyline behind.', ratio: '3:2', license: 'Brand-owned' },
  { src: 'office/executive-desk-signing-skyline-sunset.png', alt: 'A businessman in a navy suit signs a document at a walnut desk with a tablet, phone and espresso cup, a glittering city skyline through the window behind him at sunset.', ratio: '3:2', license: 'Brand-owned' },

  // editorial — cinematic sector & studio scenes
  { src: 'editorial/agriculture-tractor-crop-field-sunset.png', alt: 'A farmer in a checked shirt walks between rows of a lush green crop toward a red tractor and seeder at sunset, an expansive golden sky overhead — cinematic agricultural scene.', ratio: '4:5', license: 'Brand-owned' },
  { src: 'editorial/construction-executive-site-overlook-sunset.png', alt: 'A suited professional in a white hard hat stands on a balcony with rolled blueprints, looking out over a construction site of tower cranes and a rising concrete frame at sunset.', ratio: '3:2', license: 'Brand-owned' },
  { src: 'editorial/construction-rooftop-aerial-sunset.png', alt: 'Aerial drone view of high-vis workers on the open top floor of a multi-storey concrete building under construction, a low-rise cityscape stretching to the horizon in warm sunset light.', ratio: '3:2', license: 'Brand-owned' },
  { src: 'editorial/fashion-photographer-studio-orange-dress.png', alt: 'A Black photographer in a cream sweater shoots a flowing rust-orange gown on a dress form in a softbox-lit studio, thread spools and contact sheets on the table, a clothing rail behind.', ratio: '4:5', license: 'Brand-owned' },
  { src: 'editorial/fashion-photographer-studio-blue-dress.png', alt: 'A photographer in a cream sweater photographs a navy satin designer gown on a dress form in a bright studio with softbox and ring light, swatch books and fabric on the foreground table.', ratio: '4:3', license: 'Brand-owned' },

  // abstract — Brandy (warm copper) backdrop motifs
  { src: 'abstract/brandy-waves-layered-flow.png', alt: 'Smooth layered wave ridges flowing across the lower half of a warm copper-orange gradient with fine highlight lines — an abstract undulating backdrop.', ratio: '16:9', license: 'Brand-owned' },
  { src: 'abstract/brandy-petal-cluster-half-bloom.png', alt: 'A partial cluster of rounded 3D petals rising from the bottom edge in graduated peach and bronze tones against a warm copper gradient.', ratio: '16:9', license: 'Brand-owned' },
  { src: 'abstract/brandy-curved-panels-accordion.png', alt: 'A clustered row of upright rounded rectangular panels standing like fanned cards or fins in graduated copper tones against a warm orange gradient.', ratio: '16:9', license: 'Brand-owned' },
  { src: 'abstract/brandy-fan-petals-radial-spread.png', alt: 'A wide radial fan of overlapping rounded petal blades arcing up from the bottom edge in graduated copper and peach tones against a warm gradient.', ratio: '16:9', license: 'Brand-owned' },
  { src: 'abstract/brandy-light-bars-vertical-glow.png', alt: 'A curtain of soft vertical light bands glowing in warm amber and copper, brightest toward the centre — an abstract luminous striped backdrop.', ratio: '16:9', license: 'Brand-owned' },
  { src: 'abstract/brandy-spiral-petals-bloom.png', alt: 'A 3D pinwheel of swirling curved petals radiating from a central point in smooth copper-orange tones against a warm gradient.', ratio: '16:9', license: 'Brand-owned' },

  // abstract — Inkwell (deep navy) backdrop motifs
  { src: 'abstract/inkwell-arch-forms-pressure-stack.png', alt: 'A cluster of rounded 3D arch forms in graduated blue tones rising from the bottom edge against a deep navy gradient — an abstract pressure-stack motif.', ratio: '16:9', license: 'Brand-owned' },
  { src: 'abstract/inkwell-curved-panels-accordion.png', alt: 'A clustered row of upright rounded rectangular panels standing like fanned fins in graduated blue tones against a deep navy gradient.', ratio: '16:9', license: 'Brand-owned' },
  { src: 'abstract/inkwell-desk-objects-bento-layout.png', alt: 'A symmetrical monochrome-blue still life of stylised 3D desk objects — calculators, pen cups, tape dispensers and staplers — clustered at left and right against a deep navy background.', ratio: '16:9', license: 'Brand-owned' },
  { src: 'abstract/inkwell-fan-cards-shuffle-stack.png', alt: 'A vertical fan of curved blade-shaped panels layered like a deck of cards being riffled, rendered in graduated blue tones against a deep navy gradient.', ratio: '16:9', license: 'Brand-owned' },
  { src: 'abstract/inkwell-fan-petals-radial-spread.png', alt: 'A wide radial fan of overlapping rounded petal blades arcing up from the bottom edge in graduated blue tones against a deep navy gradient.', ratio: '16:9', license: 'Brand-owned' },
  { src: 'abstract/inkwell-glass-petals-translucent-bloom.png', alt: 'A half-bloom of overlapping translucent glass-like petals fanning up from the bottom centre, faint highlights against a deep navy gradient.', ratio: '16:9', license: 'Brand-owned' },
  { src: 'abstract/inkwell-light-bars-vertical-glow.png', alt: 'A curtain of soft vertical light bands glowing in cool blue, brightest toward the centre — an abstract luminous striped backdrop on deep navy.', ratio: '16:9', license: 'Brand-owned' },
  { src: 'abstract/inkwell-petal-cluster-half-bloom.png', alt: 'A partial cluster of rounded 3D petals rising from the bottom edge in graduated blue tones against a deep navy gradient.', ratio: '16:9', license: 'Brand-owned' },
  { src: 'abstract/inkwell-spiral-petals-bloom.png', alt: 'A 3D pinwheel of swirling curved petals radiating from a central point in smooth blue tones against a deep navy gradient.', ratio: '16:9', license: 'Brand-owned' },
  { src: 'abstract/inkwell-wave-bands-topographic-flow.png', alt: 'Layered flowing wave ridges sweeping across a deep navy gradient in graduated blue tones — a smooth 3D topographic wave motif.', ratio: '16:9', license: 'Brand-owned' },
  { src: 'abstract/inkwell-waves-layered-flow.png', alt: 'Thin overlapping contour ribbons undulating in soft gentle waves across the lower half of a deep navy gradient — a minimal flowing line motif.', ratio: '16:9', license: 'Brand-owned' },

  // brand-deck — social covers & medallion
  { src: 'brand-deck/social-banner-lending-dark.png', alt: 'Wide social banner: a dark-tinted photo of two clients on the left, the stacked "CAPITAL UNIQUE" wordmark, a "NON-BANK LENDING" pill, the bronze monogram medallion and www.capitalunique.com on the right.', ratio: '21:9', license: 'Brand-owned' },
  { src: 'brand-deck/social-cover-facebook.png', alt: 'Facebook cover: a dark-tinted client photo on the left with the stacked "CAPITAL UNIQUE" wordmark, a "NON-BANK LENDING" pill, the bronze monogram medallion and website URL on the right.', ratio: '21:9', license: 'Brand-owned' },
  { src: 'brand-deck/social-cover-linkedin.png', alt: 'LinkedIn cover banner: a dark-tinted client photo with the stacked "CAPITAL UNIQUE" wordmark, a "NON-BANK LENDING" pill, the bronze monogram medallion and www.capitalunique.com.', ratio: '21:9', license: 'Brand-owned' },
  { src: 'brand-deck/logo-medallion-bronze.png', alt: 'The Capital Unique brand medallion: a polished bronze circular coin with a dark face bearing the embossed M monogram and a small bronze sphere accent.', ratio: '1:1', license: 'Brand-owned' },

  // ── Client conversation import 2026-05-20 ──
  { src: 'people/clients-cafe-conversation-women-001.png', alt: 'Two women in tailored neutral outfits sit forward in a sunlit cafe lounge, smiling mid-conversation across a small timber table with takeaway coffee and a tan leather notebook, framed by tropical foliage.', ratio: '21:9', license: 'Brand-owned' },
  { src: 'people/clients-couple-laptop-lounge-001.png', alt: 'A young Asian couple sit close on a tan leather sofa in a warm timber-framed lounge, the man pointing at a laptop on the coffee table while the woman smiles at the screen; an orange notebook and ceramic mug on the table, garden greenery through the window.', ratio: '21:9', license: 'Brand-owned' },
  { src: 'people/clients-couple-laptop-lounge-002.png', alt: 'The same Asian couple on the tan leather sofa, the man in a navy sweater leaning in to point at the laptop while the woman in a cream knit smiles; navy notebook, ceramic mug, garden window — alternate angle.', ratio: '21:9', license: 'Brand-owned' },
  { src: 'people/clients-walking-conversation-cafe-001.png', alt: 'Two casually-dressed young men in their late 20s walk and talk through a sunlit, plant-filled cafe/co-working interior, one carrying a laptop under his arm; warm timber millwork and soft lounge seating behind.', ratio: '21:9', license: 'Brand-owned' },

  // ── 2026-05-21 ──
  { src: 'people/clients-chess-garden-001.png', alt: 'A man in a rust corduroy jacket leans in to move a piece on a wooden chess set on a garden bistro table while an Asian woman in a cream turtleneck considers the board, chin on hand; rose-covered pergola and a classical marble statue softly defocused behind — a quiet, considered two-person scene of strategy.', ratio: '16:9', license: 'Brand-owned' },

  { src: 'people/developers-residential-scale-model-001.png', alt: 'A development trio review plans on a residential build site at golden hour: a woman in a cream blazer holding a tablet, a man in a blue shirt smiling, and a builder in a yellow hard hat and plaid shirt; in front of them a detailed scale model of a contemporary house with landscaping, an orange leather notebook, rolled blueprints and a navy mug, with the timber frame of a house under construction softly defocused behind.', ratio: '16:9', license: 'Brand-owned' },

  { src: 'people/clients-couple-blueprints-sofa-001.png', alt: 'Overhead view of a young couple sitting close on a grey sofa over a parquet floor — the woman in a cream knit holds open a large architectural floor-plan blueprint while the man in a blue chambray shirt leans in beside her with an open laptop on his lap; a notebook and rolled blueprint rest on the floor at their feet — a quiet, domestic scene of planning a project together.', ratio: '21:9', license: 'Brand-owned' },

  { src: 'people/commercial-site-walkthrough-001.png', alt: 'A group of four — a high-vis-vested foreman, two professionals in business attire and another vested colleague, all in white hard hats — walk together along the top floor of a commercial concrete-frame construction site in clear daylight; safety mesh and the blue tarp of the working face on the right, a suburban skyline beyond on the left.', ratio: '16:9', license: 'Brand-owned' },

  { src: 'editorial/commercial-architectural-rendering-001.png', alt: 'A wide architectural rendering of a four-storey mixed-use commercial building at dusk — stone, timber and steel façade with glazed retail at street level and lit residential/office levels above, street trees and pedestrians out front; faint hand-drawn sketch lines and pinned spec annotations (roof line, steel trellis, window system, façade elevation) overlaid across the image, as if mid-design.', ratio: '21:9', license: 'Brand-owned' },

  // ── Homepage hero scroller import 2026-05-22 ──
  { src: 'hero/hero-corporate-male-ceo-001.png', alt: 'A mature Asian male executive in a navy quarter-zip leans casually on a timber bar table holding a small espresso cup, smiling off-camera in a moody, low-lit restaurant interior — backlit shelves of bottles glow warm behind him.', ratio: '4:5', license: 'Brand-owned' },
  { src: 'hero/hero-casual-couple-lounge-001.png', alt: 'A couple — woman in a cream knit holding a dark ceramic mug, man in a brown jacket beside her — sit close on a sofa in a warm terracotta-walled lounge, framed by a timber shelving unit with ceramics and books.', ratio: '4:5', license: 'Brand-owned' },
  { src: 'hero/hero-corporate-female-ceo-001.png', alt: 'An Asian female executive in a black top and cream pencil skirt steps out of a dark cafe doorway holding a tablet, smiling off-camera in clear daylight with greenery flanking the entrance.', ratio: '4:5', license: 'Brand-owned' },
  { src: 'hero/hero-corporate-handshake-meeting-001.png', alt: 'A mature blond executive in a navy suit and blue tie shakes hands across a low coffee table with a younger man in a pale blue shirt, both seated in a warm restaurant lounge with bokeh pendants and greenery behind.', ratio: '4:5', license: 'Brand-owned' },
  { src: 'hero/hero-retirement-planning-couple-001.png', alt: 'An Asian couple sit close on a bench in a warm wood-and-plant interior, the woman in a mustard blouse showing the man (in a grey sweater) a tablet, a small round timber side table with notebooks between them.', ratio: '4:5', license: 'Brand-owned' },

  // ── Lead magnets import 2026-08-11 ─────────────────────────────
  // Low-key chiaroscuro set shot for the lead-magnet funnel: dark grounds,
  // warm copper key light, and deliberate negative space for headline overlay.
  // Filename prefix = source series (deal-summary / lender-questions /
  // document-list / lender-conversation / objection / cover / hero).

  // lead-magnets — deal summary series
  { src: 'lead-magnets/deal-summary-blank-sheet-lightfall.jpg', alt: 'A single blank cream sheet lies at an angle on a matte black surface, a narrow band of warm light falling across its middle — the left half of the frame is empty shadow.', ratio: '16:9', license: 'Brand-owned' },
  { src: 'lead-magnets/deal-summary-commercial-building-night.jpg', alt: 'A two-storey brick and timber-batten commercial building at night, ground-floor glazing glowing warm and uplit trees along the forecourt, the paved apron empty in the foreground.', ratio: '16:9', license: 'Brand-owned' },
  { src: 'lead-magnets/deal-summary-written-page-pen.jpg', alt: 'A close-written cream page rests at an angle on black felt with a matte black fountain pen laid across it, raked side light picking out the texture of the paper.', ratio: '16:9', license: 'Brand-owned' },
  { src: 'lead-magnets/deal-summary-door-ajar-light.jpg', alt: 'A timber door stands ajar in a dark plastered room, a hard wedge of warm light spilling through the gap and stretching across the polished concrete floor.', ratio: '16:9', license: 'Brand-owned' },
  { src: 'lead-magnets/deal-summary-adviser-two-points.jpg', alt: 'A woman in a dark blazer sits at a timber desk holding up two fingers mid-explanation while a man in a navy suit takes notes opposite her, a desk lamp lighting the scene from the right.', ratio: '16:9', license: 'Brand-owned' },

  // lead-magnets — lender questions series
  { src: 'lead-magnets/lender-questions-paper-stack-edge.jpg', alt: 'The cut edge of a thick stack of cream paper, top sheets fanned slightly apart, lit from the right against a black ground.', ratio: '16:9', license: 'Brand-owned' },
  { src: 'lead-magnets/lender-questions-stone-block-corner.jpg', alt: 'The corner of a dark pitted stone block, its top edge catching a thin copper rim of light, the right half of the frame falling away into black.', ratio: '16:9', license: 'Brand-owned' },
  { src: 'lead-magnets/lender-questions-adviser-desk-folio.jpg', alt: 'A woman in a dark blazer sits at a timber desk looking off to the left, both hands resting on a tan leather folio, an angled desk lamp and shelved books behind her in shadow.', ratio: '3:2', license: 'Brand-owned' },
  { src: 'lead-magnets/lender-questions-brass-valve-wheel.jpg', alt: 'Close-up of a brass valve handwheel with a knurled rim, side-lit so the spokes and machined hub glow copper against a black background.', ratio: '16:9', license: 'Brand-owned' },
  { src: 'lead-magnets/lender-questions-padlock-key-open.jpg', alt: 'A brass padlock with its shackle sprung open sits on dark slate beside the key that released it, a single warm light raking across from the left.', ratio: '16:9', license: 'Brand-owned' },
  { src: 'lead-magnets/lender-questions-notebook-page-turn.jpg', alt: 'A dark hardcover notebook lies open on black, a single page caught mid-turn with warm light glowing along its underside and curled edge.', ratio: '16:9', license: 'Brand-owned' },
  { src: 'lead-magnets/lender-questions-construction-crane-dusk.jpg', alt: 'A multi-storey concrete frame under construction at dusk, its floors lit amber from within, a tower crane rising against a bruised blue sky with the last orange of sunset on the horizon.', ratio: '16:9', license: 'Brand-owned' },
  { src: 'lead-magnets/lender-questions-hand-pen-blank-page.jpg', alt: 'A hand poised with a black pen just above the corner of a blank cream sheet, about to make the first mark, lit hard from the left against black.', ratio: '16:9', license: 'Brand-owned' },

  // lead-magnets — document list series
  { src: 'lead-magnets/document-list-file-stack-blank-sheet.jpg', alt: 'A tall untidy stack of files and loose papers sits in soft focus behind a single clean blank sheet laid flat in the foreground, all on a black ground.', ratio: '16:9', license: 'Brand-owned' },
  { src: 'lead-magnets/document-list-site-plan-scale-ruler.jpg', alt: 'A site survey drawing curls up at one corner on dark textured stone, a brass triangular scale ruler weighting it down, warm light falling across the contour lines and lot boundaries.', ratio: '16:9', license: 'Brand-owned' },
  { src: 'lead-magnets/document-list-paper-stacks-tall-short.jpg', alt: 'Two stacks of paper side by side — one roughly twice the height of the other — side-lit so the cut page edges glow warm against a black background.', ratio: '16:9', license: 'Brand-owned' },
  { src: 'lead-magnets/document-list-development-aerial-night.jpg', alt: 'Elevated night view over a low-rise townhouse development, warm interiors and landscape uplighting picking out terraces and garden paths, suburban rooftops receding to the horizon.', ratio: '16:9', license: 'Brand-owned' },
  { src: 'lead-magnets/document-list-property-photo-prints.jpg', alt: 'Five bordered photographic prints of contemporary timber and glass houses at dusk lie scattered and overlapping on a dark textured surface, lit from above.', ratio: '16:9', license: 'Brand-owned' },
  { src: 'lead-magnets/document-list-brass-hierarchy-nodes.jpg', alt: 'A brass rod-and-node sculpture arranged as a branching tree — one node at the top splitting down through two tiers to four feet — standing against black with the right of frame empty.', ratio: '16:9', license: 'Brand-owned' },
  { src: 'lead-magnets/document-list-leather-ledgers-stacked.jpg', alt: 'Two tan leather-bound ledgers stacked on a timber surface, their gilded page edges catching warm light, the left of the frame dropping into shadow.', ratio: '16:9', license: 'Brand-owned' },
  { src: 'lead-magnets/document-list-broker-briefcase-portrait.jpg', alt: 'A man in a navy blazer and open-collar shirt stands resting a hand on a tan leather briefcase, looking off to the left, warm pendant lights and a dark bar interior behind him.', ratio: '16:9', license: 'Brand-owned' },
  { src: 'lead-magnets/document-list-townhouse-row-night.jpg', alt: 'A stepped row of concrete and timber townhouses at night, warm light glowing from recessed balconies and box windows, the upper half of the frame pure black sky.', ratio: '16:9', license: 'Brand-owned' },
  { src: 'lead-magnets/document-list-site-plans-review-dusk.jpg', alt: 'A woman in a dark coat and a bearded builder in a white hard hat and plaid shirt lean over a large plan together on a residential build site at dusk, the timber frame of a house behind them.', ratio: '16:9', license: 'Brand-owned' },
  { src: 'lead-magnets/document-list-pen-on-page-corner.jpg', alt: 'A black pen rests on the corner of a warm cream sheet at the lower left, the rest of the frame falling away into deep shadow.', ratio: '16:9', license: 'Brand-owned' },
  { src: 'lead-magnets/document-list-signing-at-home-lamp.jpg', alt: 'A woman in a cream cable-knit sweater sits writing on a single sheet at a dark timber table, lit by a shaded lamp with a dried arrangement and tray beside her.', ratio: '16:9', license: 'Brand-owned' },

  // lead-magnets — lender conversation series
  { src: 'lead-magnets/lender-conversation-adviser-explaining.jpg', alt: 'A woman in a dark blazer sits forward in a leather armchair mid-sentence, one hand raised in explanation, warm wall lights and a brick pier softly out of focus behind her.', ratio: '16:9', license: 'Brand-owned' },
  { src: 'lead-magnets/lender-conversation-key-on-envelope.jpg', alt: 'A worn brass key lies on a kraft envelope at the left of frame on a dark surface, warm light raking across the paper, the right side empty black.', ratio: '16:9', license: 'Brand-owned' },
  { src: 'lead-magnets/lender-conversation-plumb-bob.jpg', alt: 'A bronze plumb bob hangs motionless on a braided cord, centred against a pure black background and lit so the facets of the cone catch the light.', ratio: '16:9', license: 'Brand-owned' },
  { src: 'lead-magnets/lender-conversation-weight-on-pages.jpg', alt: 'A dark blackened steel block rests squarely on a stack of cream pages, compressing them slightly, warm light glowing along the exposed page edges beneath.', ratio: '16:9', license: 'Brand-owned' },
  { src: 'lead-magnets/lender-conversation-booth-meeting.jpg', alt: 'A man in a navy suit sits in a leather booth looking levelly across the table at another man seen from behind in the foreground, a pendant lamp lighting the table between them.', ratio: '16:9', license: 'Brand-owned' },
  { src: 'lead-magnets/lender-conversation-balance-scale.jpg', alt: 'An antique bronze balance scale with both pans empty and the beam perfectly level, centred against a black background with copper highlights along the arm.', ratio: '16:9', license: 'Brand-owned' },
  { src: 'lead-magnets/lender-conversation-empty-boardroom.jpg', alt: 'A long timber boardroom table recedes toward a single empty leather chair under a pendant light, the rest of the room lost in darkness.', ratio: '16:9', license: 'Brand-owned' },
  { src: 'lead-magnets/lender-conversation-corridor-handoff.jpg', alt: 'A woman in a rust suede jacket holding a tan folio stands talking with a man in a charcoal overcoat in a dark brick corridor, a receding line of warm wall lights behind them.', ratio: '16:9', license: 'Brand-owned' },

  // lead-magnets — objection handling series
  { src: 'lead-magnets/objection-living-room-through-glass.jpg', alt: 'A warmly lit living room seen at night from outside through sliding glazing — pale sofa, timber coffee table and plants — the left two-thirds of the frame in darkness.', ratio: '16:9', license: 'Brand-owned' },
  { src: 'lead-magnets/objection-panels-light-gap.jpg', alt: 'Two upright walnut panels stand almost touching on a dark surface, a single blade of warm light escaping the narrow gap between them.', ratio: '16:9', license: 'Brand-owned' },
  { src: 'lead-magnets/objection-balcony-night-reflection.jpg', alt: 'A woman in a rust suede jacket stands at a balcony rail at night looking down and away, a warmly lit living room visible through glazing to her right and dark garden beyond.', ratio: '16:9', license: 'Brand-owned' },
  { src: 'lead-magnets/objection-pavilion-house-dusk.jpg', alt: 'A single-storey timber pavilion house glows warm through full-height glazing at dusk, sitting above a dry-stone retaining wall with coastal scrub in the foreground.', ratio: '16:9', license: 'Brand-owned' },
  { src: 'lead-magnets/objection-leather-folio-open.jpg', alt: 'A tan leather presentation folio lies open on black felt with a blank cream sheet held in its corner mounts, a second closed folio behind it.', ratio: '16:9', license: 'Brand-owned' },
  { src: 'lead-magnets/objection-rebar-bundle.jpg', alt: 'A tight bundle of cut reinforcing bar stands upright on a gritty concrete surface, the sheared ends catching warm light against a black background.', ratio: '16:9', license: 'Brand-owned' },
  { src: 'lead-magnets/objection-entry-door-boots.jpg', alt: 'The entry of a modern home at night: a tall timber pivot door stands open onto a warm hallway, a pair of work boots left on the threshold beside a planter.', ratio: '16:9', license: 'Brand-owned' },
  { src: 'lead-magnets/objection-leather-strap-steel-blocks.jpg', alt: 'A stitched tan leather strap spans two blackened steel blocks on a timber surface, bridging the gap between them under warm directional light.', ratio: '16:9', license: 'Brand-owned' },
  { src: 'lead-magnets/objection-dovetail-joint.jpg', alt: 'Extreme close-up of the corner of a walnut box showing precisely cut dovetail joinery, the pins and tails interlocking, the left of frame pure black.', ratio: '16:9', license: 'Brand-owned' },
  { src: 'lead-magnets/objection-booth-conversation.jpg', alt: 'A man gestures mid-explanation across a restaurant table while a woman in a cream sweater listens with her chin resting on her hand, a copper pendant lamp above them.', ratio: '16:9', license: 'Brand-owned' },

  // lead-magnets — guide covers
  { src: 'lead-magnets/cover-the-borrowers-guide.jpg', alt: 'A couple stand talking at a stone kitchen island in a dark timber kitchen at night, the man holding a white cup under a single warm pendant light.', ratio: '3:2', license: 'Brand-owned' },
  { src: 'lead-magnets/cover-when-the-banks-say-no.jpg', alt: 'A row of brick and timber townhouses at night seen from across the street, warm light in the upper windows and landscape uplighting along the front gardens.', ratio: '3:2', license: 'Brand-owned' },
  { src: 'lead-magnets/cover-private-lending.jpg', alt: 'A woman in a dark blazer stands at a full-height apartment window at dusk holding a cup, looking out over a city skyline of scattered lights, a lit shelf and desk lamp behind her.', ratio: '3:2', license: 'Brand-owned' },

  // lead-magnets — portrait heroes
  { src: 'lead-magnets/hero-lounge-consultation.jpg', alt: 'A woman in a charcoal blazer and a man in a navy suit sit facing each other in low bouclé armchairs in a dark lounge, a tan leather folio and coffee cups on the round table between them.', ratio: '4:5', license: 'Brand-owned' },
  { src: 'lead-magnets/hero-walking-conversation-verandah.jpg', alt: 'A man carrying a tan leather folio and a woman in a black blazer walk and talk along a brick verandah at golden hour, low sun flaring down the colonnade behind them.', ratio: '4:5', license: 'Brand-owned' },

  // ── Codrington portrait import 2026-08-11 ──────────────────────
  // `codrington-headshot-bw-wide` is the same frame as the existing
  // 4:3 `codrington-headshot-bw`, recropped to 21:9 for banner use.
  { src: 'editorial/codrington-seated-armchair-kitchen.jpg', alt: 'John Codrington in a navy suit and blue tie sits forward in a tan leather armchair with his hands clasped, smiling to camera, a sunlit timber kitchen counter and row of stools softly defocused behind him.', ratio: '16:9', license: 'Brand-owned' },
  { src: 'editorial/codrington-headshot-bw-wide.jpg', alt: 'John Codrington in a grey double-breasted suit and dark tie, hands clasped, seated on a white Eames-style chair against a deep charcoal backdrop — black and white editorial portrait, wide 21:9 crop for banner use.', ratio: '21:9', license: 'Brand-owned' },
  { src: 'people/codrington-client-meeting-table.jpg', alt: 'John Codrington in a navy suit sits with fingers steepled, listening across a timber table to a client in a blue-striped shirt who gestures mid-sentence; an open notebook of charts and a black mug between them, greenery and a street visible through full-height glazing behind.', ratio: '21:9', license: 'Brand-owned' },
];
