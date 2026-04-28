import svgPaths from "./svg-0fulc81nnu";
import imgCompanyLogo from "./adadad985495d47cf71d8987c95a80328e7662a4.png";
import imgHeader60 from "./6399536947068573609002be26ded5fc6fdb1cea.png";
import imgPlaceholderImage from "./a6af64814640fb1a23bcc92b7076af2618418ac5.png";
import imgPlaceholderImage1 from "./bf4c477adeab8ed65505097334af4769f5ace180.png";
import imgPlaceholderImage2 from "./9badfd5ba6ede8ae244a1576da245601cc6ed940.png";
import imgPlaceholderImage3 from "./f375ffb6ae8e3edb209976cfb1537596710a3021.png";
import imgPlaceholderImage4 from "./29dc7002e8d53a3cc7d6020ec3eaa51ecc374153.png";
import imgCompanyLogo1 from "./9f9a0d8bcce81dd33c6855deb5fd4665ca2194b8.png";

function Column() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Column">
      <div className="h-[44px] relative shrink-0 w-[84px]" data-name="Company Logo">
        <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgCompanyLogo} />
      </div>
    </div>
  );
}

function ChevronDown() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Chevron Down">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Chevron Down">
          <path clipRule="evenodd" d={svgPaths.pee47f00} fill="var(--fill-0, #020205)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function NavLinkDropdown() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0 w-full" data-name="Nav Link Dropdown">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.6] not-italic relative shrink-0 text-[#020205] text-[18px] whitespace-nowrap">Capital</p>
      <ChevronDown />
    </div>
  );
}

function Link() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[94px]" data-name="Link">
      <NavLinkDropdown />
    </div>
  );
}

function Link1() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Link">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.6] not-italic relative shrink-0 text-[#020205] text-[18px] whitespace-nowrap">Waitlist</p>
    </div>
  );
}

function ChevronDown1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Chevron Down">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Chevron Down">
          <path clipRule="evenodd" d={svgPaths.pee47f00} fill="var(--fill-0, #020205)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function NavLinkDropdown1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0 w-full" data-name="Nav Link Dropdown">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.6] not-italic relative shrink-0 text-[#020205] text-[18px] whitespace-nowrap">{`Insights & Resources`}</p>
      <ChevronDown1 />
    </div>
  );
}

function Link2() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[94px]" data-name="Link">
      <NavLinkDropdown1 />
    </div>
  );
}

function Link3() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Link">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.6] not-italic relative shrink-0 text-[#020205] text-[18px] whitespace-nowrap">Charles A.I</p>
    </div>
  );
}

function Link4() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Link">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.6] not-italic relative shrink-0 text-[#020205] text-[18px] whitespace-nowrap">About</p>
    </div>
  );
}

function Column1() {
  return (
    <div className="content-stretch flex gap-[32px] items-center relative shrink-0" data-name="Column">
      <Link />
      <Link1 />
      <Link2 />
      <Link3 />
      <Link4 />
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="Content">
      <Column />
      <Column1 />
      <div className="bg-[#cd722d] content-stretch flex items-center justify-center px-[20px] py-[8px] relative rounded-[6px] shrink-0" data-name="Button">
        <div aria-hidden="true" className="absolute border-[#a45b24] border-b-4 border-l-[1.5px] border-r-[1.5px] border-solid border-t-[1.5px] inset-[-1.5px_-1.5px_-4px_-1.5px] pointer-events-none rounded-[7.5px]" />
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.6] not-italic relative shrink-0 text-[18px] text-white whitespace-nowrap">Login</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[72px] items-center justify-center px-[32px] relative rounded-[8px] shrink-0 w-[790px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(2,2,5,0.15)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Content />
    </div>
  );
}

function Navbar() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center pt-[24px] relative shrink-0 w-full" data-name="Navbar / 13 /">
      <Container />
    </div>
  );
}

function Column2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Column">
      <p className="font-['Montserrat:Bold',sans-serif] font-bold leading-[1.1] relative shrink-0 text-[84px] text-white tracking-[0.84px] w-full">Guidance and tools.</p>
    </div>
  );
}

function Column3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Column">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.6] not-italic relative shrink-0 text-[20px] text-white w-full">Clear thinking for complex capital decisions.</p>
    </div>
  );
}

function Component() {
  return (
    <div className="content-stretch flex gap-[80px] items-start relative shrink-0 w-full" data-name="Component">
      <Column2 />
      <Column3 />
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <Component />
    </div>
  );
}

function Header() {
  return (
    <div className="relative shrink-0 w-full" data-name="Header / 60 /">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <img alt="" className="absolute max-w-none object-cover size-full" src={imgHeader60} />
        <div className="absolute bg-[rgba(0,0,0,0.4)] inset-0" />
      </div>
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center px-[64px] py-[112px] relative size-full">
          <Container1 />
        </div>
      </div>
    </div>
  );
}

function TaglineWrapper() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Tagline Wrapper">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.5] not-italic relative shrink-0 text-[#020205] text-[16px] text-center whitespace-nowrap">Resources</p>
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0 text-[#020205] text-center w-full" data-name="Content">
      <p className="font-['Montserrat:Bold',sans-serif] font-bold leading-[1.2] relative shrink-0 text-[60px] tracking-[0.6px] w-full">Three ways to get clarity</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.6] not-italic relative shrink-0 text-[20px] w-full">Each resource is designed to help you understand your options and make informed decisions with confidence.</p>
    </div>
  );
}

function SectionTitle() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center max-w-[768px] relative shrink-0 w-full" data-name="Section Title">
      <TaglineWrapper />
      <Content1 />
    </div>
  );
}

function Content3() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 text-[#020205] w-full" data-name="Content">
      <p className="font-['Montserrat:Bold',sans-serif] font-bold leading-[1.2] relative shrink-0 text-[40px] tracking-[0.4px] w-full">In-depth guides for borrowers</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.6] not-italic relative shrink-0 text-[18px] w-full">Downloadable frameworks covering loan structures, assessment criteria, and strategic capital planning.</p>
    </div>
  );
}

function ContentTop() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Content Top">
      <div className="relative shrink-0 size-[48px]" data-name="library_books">
        <div className="absolute inset-[7.26%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 41.028 41.028">
            <path d={svgPaths.p390a9500} fill="var(--fill-0, #020205)" id="Vector" />
          </svg>
        </div>
      </div>
      <Content3 />
    </div>
  );
}

function Actions() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Actions">
      <div className="content-stretch flex gap-[8px] items-center justify-center overflow-clip relative rounded-[6px] shrink-0" data-name="Button">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.6] not-italic relative shrink-0 text-[#020205] text-[18px] whitespace-nowrap">View all</p>
        <div className="overflow-clip relative shrink-0 size-[24px]" data-name="chevron_right">
          <div className="absolute inset-[25.72%_36.66%_25.88%_35.46%]" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.69159 11.6166">
              <path d={svgPaths.p36daa800} fill="var(--fill-0, #020205)" id="Vector" stroke="var(--stroke-0, #020205)" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Content2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-start justify-center p-[32px] relative size-full">
          <ContentTop />
          <Actions />
        </div>
      </div>
    </div>
  );
}

function Card() {
  return (
    <div className="bg-[#f2f2f2] flex-[1_0_0] min-w-px relative rounded-[8px]" data-name="Card">
      <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[inherit] size-full">
        <Content2 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(2,2,5,0.15)] border-solid inset-[-1px] pointer-events-none rounded-[9px]" />
    </div>
  );
}

function Content5() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 text-[#020205] w-full" data-name="Content">
      <p className="font-['Montserrat:Bold',sans-serif] font-bold leading-[1.2] relative shrink-0 text-[40px] tracking-[0.4px] w-full">Practical calculators and tools</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.6] not-italic relative shrink-0 text-[18px] w-full">Simple, functional tools to model scenarios and understand the mechanics of your financing.</p>
    </div>
  );
}

function ContentTop1() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Content Top">
      <div className="relative shrink-0 size-[48px]" data-name="calculate">
        <div className="absolute inset-[11.85%_11.85%_11.88%_11.88%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36.61 36.61">
            <path d={svgPaths.p3883fa00} fill="var(--fill-0, #020205)" id="Vector" />
          </svg>
        </div>
      </div>
      <Content5 />
    </div>
  );
}

function Actions1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Actions">
      <div className="content-stretch flex gap-[8px] items-center justify-center overflow-clip relative rounded-[6px] shrink-0" data-name="Button">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.6] not-italic relative shrink-0 text-[#020205] text-[18px] whitespace-nowrap">Arrow</p>
        <div className="overflow-clip relative shrink-0 size-[24px]" data-name="chevron_right">
          <div className="absolute inset-[25.72%_36.66%_25.88%_35.46%]" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.69159 11.6166">
              <path d={svgPaths.p36daa800} fill="var(--fill-0, #020205)" id="Vector" stroke="var(--stroke-0, #020205)" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Content4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-start justify-center p-[32px] relative size-full">
          <ContentTop1 />
          <Actions1 />
        </div>
      </div>
    </div>
  );
}

function Card1() {
  return (
    <div className="bg-[#f2f2f2] flex-[1_0_0] min-w-px relative rounded-[8px]" data-name="Card">
      <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[inherit] size-full">
        <Content4 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(2,2,5,0.15)] border-solid inset-[-1px] pointer-events-none rounded-[9px]" />
    </div>
  );
}

function Content7() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 text-[#020205] w-full" data-name="Content">
      <p className="font-['Montserrat:Bold',sans-serif] font-bold leading-[1.2] relative shrink-0 text-[40px] tracking-[0.4px] w-full">Calm, expert articles</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.6] not-italic relative shrink-0 text-[18px] w-full">Thoughtful commentary on private finance, market conditions, and strategic decision-making.</p>
    </div>
  );
}

function ContentTop2() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Content Top">
      <div className="relative shrink-0 size-[48px]" data-name="newsmode">
        <div className="absolute inset-[11.85%_7.69%_11.88%_7.71%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40.61 36.61">
            <path d={svgPaths.p1917280} fill="var(--fill-0, #020205)" id="Vector" />
          </svg>
        </div>
      </div>
      <Content7 />
    </div>
  );
}

function Actions2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Actions">
      <div className="content-stretch flex gap-[8px] items-center justify-center overflow-clip relative rounded-[6px] shrink-0" data-name="Button">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.6] not-italic relative shrink-0 text-[#020205] text-[18px] whitespace-nowrap">Explore</p>
        <div className="overflow-clip relative shrink-0 size-[24px]" data-name="chevron_right">
          <div className="absolute inset-[25.72%_36.66%_25.88%_35.46%]" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.69159 11.6166">
              <path d={svgPaths.p36daa800} fill="var(--fill-0, #020205)" id="Vector" stroke="var(--stroke-0, #020205)" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Content6() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-start justify-center p-[32px] relative size-full">
          <ContentTop2 />
          <Actions2 />
        </div>
      </div>
    </div>
  );
}

function Card2() {
  return (
    <div className="bg-[#f2f2f2] flex-[1_0_0] min-w-px relative rounded-[8px]" data-name="Card">
      <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[inherit] size-full">
        <Content6 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(2,2,5,0.15)] border-solid inset-[-1px] pointer-events-none rounded-[9px]" />
    </div>
  );
}

function Row() {
  return (
    <div className="content-stretch flex gap-[32px] items-start relative shrink-0 w-full" data-name="Row">
      <Card />
      <Card1 />
      <Card2 />
    </div>
  );
}

function Component1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Component">
      <Row />
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col gap-[80px] items-center max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <SectionTitle />
      <Component1 />
    </div>
  );
}

function Layout1() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Layout / 396 /">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center px-[64px] py-[112px] relative size-full">
          <Container2 />
        </div>
      </div>
    </div>
  );
}

function TaglineWrapper1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Tagline Wrapper">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.5] not-italic relative shrink-0 text-[16px] text-center text-white whitespace-nowrap">Guides</p>
    </div>
  );
}

function Content8() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0 text-center text-white w-full" data-name="Content">
      <p className="font-['Montserrat:Bold',sans-serif] font-bold leading-[1.2] relative shrink-0 text-[60px] tracking-[0.6px] w-full">Essential reading</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.6] not-italic relative shrink-0 text-[20px] w-full">Downloadable resources to guide your decisions.</p>
    </div>
  );
}

function SectionTitle1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center max-w-[768px] relative shrink-0 w-full" data-name="Section Title">
      <TaglineWrapper1 />
      <Content8 />
    </div>
  );
}

function Info() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Info">
      <div className="bg-[rgba(255,255,255,0.1)] content-stretch flex items-start px-[10px] py-[4px] relative rounded-[4px] shrink-0" data-name="Tag">
        <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.6] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">Lending</p>
      </div>
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.6] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">8 min read</p>
    </div>
  );
}

function Content11() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 text-white w-full" data-name="Content">
      <p className="font-['Montserrat:Bold',sans-serif] font-bold leading-[1.2] relative shrink-0 text-[32px] tracking-[0.32px] w-full">Non-bank lending explained</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.6] not-italic relative shrink-0 text-[18px] w-full">A clear breakdown of how non-bank finance works and when it makes sense for your situation.</p>
    </div>
  );
}

function Content10() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Content">
      <Info />
      <Content11 />
    </div>
  );
}

function Card3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start min-w-px relative" data-name="Card">
      <div className="aspect-[405.3333435058594/270] relative rounded-[8px] shrink-0 w-full" data-name="Placeholder Image">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full" src={imgPlaceholderImage} />
      </div>
      <Content10 />
      <div className="content-stretch flex gap-[8px] items-center justify-center relative rounded-[6px] shrink-0" data-name="Button">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.6] not-italic relative shrink-0 text-[18px] text-white whitespace-nowrap">Download</p>
        <div className="overflow-clip relative shrink-0 size-[24px]" data-name="chevron_right">
          <div className="absolute inset-[25.72%_36.66%_25.88%_35.46%]" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.69159 11.6166">
              <path d={svgPaths.p36daa800} fill="var(--fill-0, white)" id="Vector" stroke="var(--stroke-0, white)" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Info1() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Info">
      <div className="bg-[rgba(255,255,255,0.1)] content-stretch flex items-start px-[10px] py-[4px] relative rounded-[4px] shrink-0" data-name="Tag">
        <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.6] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">Assessment</p>
      </div>
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.6] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">6 min read</p>
    </div>
  );
}

function Content13() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 text-white w-full" data-name="Content">
      <p className="font-['Montserrat:Bold',sans-serif] font-bold leading-[1.2] relative shrink-0 text-[32px] tracking-[0.32px] w-full">What lenders actually look for</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.6] not-italic relative shrink-0 text-[18px] w-full">Understanding the real criteria behind lending decisions and how to present your case effectively.</p>
    </div>
  );
}

function Content12() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Content">
      <Info1 />
      <Content13 />
    </div>
  );
}

function Card4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start min-w-px relative" data-name="Card">
      <div className="aspect-[405.33331298828125/270] relative rounded-[8px] shrink-0 w-full" data-name="Placeholder Image">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full" src={imgHeader60} />
      </div>
      <Content12 />
      <div className="content-stretch flex gap-[8px] items-center justify-center relative rounded-[6px] shrink-0" data-name="Button">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.6] not-italic relative shrink-0 text-[18px] text-white whitespace-nowrap">Download</p>
        <div className="overflow-clip relative shrink-0 size-[24px]" data-name="chevron_right">
          <div className="absolute inset-[25.72%_36.66%_25.88%_35.46%]" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.69159 11.6166">
              <path d={svgPaths.p36daa800} fill="var(--fill-0, white)" id="Vector" stroke="var(--stroke-0, white)" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Info2() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Info">
      <div className="bg-[rgba(255,255,255,0.1)] content-stretch flex items-start px-[10px] py-[4px] relative rounded-[4px] shrink-0" data-name="Tag">
        <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.6] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">Strategy</p>
      </div>
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.6] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">10 min read</p>
    </div>
  );
}

function Content15() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 text-white w-full" data-name="Content">
      <p className="font-['Montserrat:Bold',sans-serif] font-bold leading-[1.2] relative shrink-0 text-[32px] tracking-[0.32px] w-full">Capital structure for developers</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.6] not-italic relative shrink-0 text-[18px] w-full">A practical guide to layering debt, equity, and alternative capital for development projects.</p>
    </div>
  );
}

function Content14() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Content">
      <Info2 />
      <Content15 />
    </div>
  );
}

function Card5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start min-w-px relative" data-name="Card">
      <div className="aspect-[405.33331298828125/270] relative rounded-[8px] shrink-0 w-full" data-name="Placeholder Image">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full" src={imgPlaceholderImage1} />
      </div>
      <Content14 />
      <div className="content-stretch flex gap-[8px] items-center justify-center relative rounded-[6px] shrink-0" data-name="Button">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.6] not-italic relative shrink-0 text-[18px] text-white whitespace-nowrap">Download</p>
        <div className="overflow-clip relative shrink-0 size-[24px]" data-name="chevron_right">
          <div className="absolute inset-[25.72%_36.66%_25.88%_35.46%]" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.69159 11.6166">
              <path d={svgPaths.p36daa800} fill="var(--fill-0, white)" id="Vector" stroke="var(--stroke-0, white)" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Row1() {
  return (
    <div className="content-stretch flex gap-[32px] items-start relative shrink-0 w-full" data-name="Row">
      <Card3 />
      <Card4 />
      <Card5 />
    </div>
  );
}

function Content9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Content">
      <Row1 />
    </div>
  );
}

function Actions3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Actions">
      <div className="content-stretch flex items-center justify-center px-[24px] py-[10px] relative rounded-[6px] shrink-0" data-name="Button">
        <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.2)] border-b-4 border-l-[1.5px] border-r-[1.5px] border-solid border-t-[1.5px] inset-[-1.5px_-1.5px_-4px_-1.5px] pointer-events-none rounded-[7.5px]" />
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.6] not-italic relative shrink-0 text-[18px] text-white whitespace-nowrap">View all</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col gap-[80px] items-center max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <SectionTitle1 />
      <Content9 />
      <Actions3 />
    </div>
  );
}

function Blog() {
  return (
    <div className="bg-[#020205] relative shrink-0 w-full" data-name="Blog / 34 /">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center px-[64px] py-[112px] relative size-full">
          <Container3 />
        </div>
      </div>
    </div>
  );
}

function TaglineWrapper2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Tagline Wrapper">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.5] not-italic relative shrink-0 text-[16px] text-center text-white whitespace-nowrap">Calculators</p>
    </div>
  );
}

function Content16() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0 text-center text-white w-full" data-name="Content">
      <p className="font-['Montserrat:Bold',sans-serif] font-bold leading-[1.2] relative shrink-0 text-[60px] tracking-[0.6px] w-full">Model your scenarios with precision</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.6] not-italic relative shrink-0 text-[20px] w-full">Work through the numbers yourself. Each tool is built to clarify the mechanics of your financing without complexity or hidden assumptions.</p>
    </div>
  );
}

function SectionTitle2() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center max-w-[768px] relative shrink-0 w-full" data-name="Section Title">
      <TaglineWrapper2 />
      <Content16 />
    </div>
  );
}

function Content18() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0 text-center text-white w-full" data-name="Content">
      <p className="font-['Montserrat:Bold',sans-serif] font-bold leading-[1.2] relative shrink-0 text-[40px] tracking-[0.4px] w-full">Borrowing capacity</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.6] not-italic relative shrink-0 text-[18px] w-full">Test different debt arrangements and understand the impact on your position.</p>
    </div>
  );
}

function Column4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-center min-w-px relative" data-name="Column">
      <div className="relative shrink-0 size-[48px]" data-name="simulation">
        <div className="absolute inset-[16.02%_3.52%_13.81%_3.54%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44.61 33.6819">
            <path d={svgPaths.p378d7340} fill="var(--fill-0, white)" id="Vector" />
          </svg>
        </div>
      </div>
      <Content18 />
    </div>
  );
}

function Content19() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0 text-center text-white w-full" data-name="Content">
      <p className="font-['Montserrat:Bold',sans-serif] font-bold leading-[1.2] relative shrink-0 text-[40px] tracking-[0.4px] w-full">Bridging finance</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.6] not-italic relative shrink-0 text-[18px] w-full">See what non-bank finance actually costs and how long the process takes.</p>
    </div>
  );
}

function Column5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-center min-w-px relative" data-name="Column">
      <div className="relative shrink-0 size-[48px]" data-name="finance">
        <div className="absolute inset-[11.93%_11.63%_11.65%_11.65%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36.825 36.6815">
            <path d={svgPaths.p207ab650} fill="var(--fill-0, white)" id="Vector" />
          </svg>
        </div>
      </div>
      <Content19 />
    </div>
  );
}

function Content20() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0 text-center text-white w-full" data-name="Content">
      <p className="font-['Montserrat:Bold',sans-serif] font-bold leading-[1.2] relative shrink-0 text-[40px] tracking-[0.4px] w-full">Development feasibility</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.6] not-italic relative shrink-0 text-[18px] w-full">Assess your ability to service debt across different scenarios and structures.</p>
    </div>
  );
}

function Column6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-center min-w-px relative" data-name="Column">
      <div className="relative shrink-0 size-[48px]" data-name="service_toolbox">
        <div className="absolute inset-[11.55%_7.69%_16.04%_7.71%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40.61 34.7535">
            <path d={svgPaths.p36825e80} fill="var(--fill-0, white)" id="Vector" />
          </svg>
        </div>
      </div>
      <Content20 />
    </div>
  );
}

function Row2() {
  return (
    <div className="content-stretch flex gap-[48px] h-[276px] items-start relative shrink-0 w-full" data-name="Row">
      <Column4 />
      <Column5 />
      <Column6 />
    </div>
  );
}

function Content17() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Content">
      <Row2 />
    </div>
  );
}

function Actions4() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Actions">
      <div className="relative rounded-[6px] shrink-0" data-name="Button">
        <div className="content-stretch flex items-center justify-center overflow-clip px-[24px] py-[10px] relative rounded-[inherit] size-full">
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.6] not-italic relative shrink-0 text-[18px] text-white whitespace-nowrap">Explore calculators</p>
        </div>
        <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.2)] border-b-4 border-l-[1.5px] border-r-[1.5px] border-solid border-t-[1.5px] inset-[-1.5px_-1.5px_-4px_-1.5px] pointer-events-none rounded-[7.5px]" />
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col gap-[80px] items-center max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <SectionTitle2 />
      <Content17 />
      <Actions4 />
    </div>
  );
}

function Layout() {
  return (
    <div className="bg-[#020205] relative shrink-0 w-full" data-name="Layout / 237 /">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center px-[64px] py-[112px] relative size-full">
          <Container4 />
        </div>
      </div>
    </div>
  );
}

function TaglineWrapper3() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Tagline Wrapper">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.5] not-italic relative shrink-0 text-[16px] text-center text-white whitespace-nowrap">Articles</p>
    </div>
  );
}

function Content21() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0 text-center text-white w-full" data-name="Content">
      <p className="font-['Montserrat:Bold',sans-serif] font-bold leading-[1.2] relative shrink-0 text-[60px] tracking-[0.6px] w-full">Recent writing</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.6] not-italic relative shrink-0 text-[20px] w-full">Observations on capital, markets, and the decisions that matter.</p>
    </div>
  );
}

function SectionTitle3() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center max-w-[768px] relative shrink-0 w-full" data-name="Section Title">
      <TaglineWrapper3 />
      <Content21 />
    </div>
  );
}

function Info3() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Info">
      <div className="bg-[rgba(255,255,255,0.1)] content-stretch flex items-start px-[10px] py-[4px] relative rounded-[4px] shrink-0" data-name="Tag">
        <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.6] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">Markets</p>
      </div>
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.6] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">7 min read</p>
    </div>
  );
}

function Content24() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 text-white w-full" data-name="Content">
      <p className="font-['Montserrat:Bold',sans-serif] font-bold leading-[1.2] relative shrink-0 text-[32px] tracking-[0.32px] w-full">When banks step back, opportunity emerges</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.6] not-italic relative shrink-0 text-[18px] w-full">Understanding the cycles that create space for alternative capital solutions.</p>
    </div>
  );
}

function Content23() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Content">
      <Info3 />
      <Content24 />
    </div>
  );
}

function Card6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start min-w-px relative" data-name="Card">
      <div className="aspect-[405.3333435058594/270] relative rounded-[8px] shrink-0 w-full" data-name="Placeholder Image">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full" src={imgPlaceholderImage2} />
      </div>
      <Content23 />
      <div className="content-stretch flex gap-[8px] items-center justify-center relative rounded-[6px] shrink-0" data-name="Button">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.6] not-italic relative shrink-0 text-[18px] text-white whitespace-nowrap">Read more</p>
        <div className="overflow-clip relative shrink-0 size-[24px]" data-name="chevron_right">
          <div className="absolute inset-[25.72%_36.66%_25.88%_35.46%]" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.69159 11.6166">
              <path d={svgPaths.p36daa800} fill="var(--fill-0, white)" id="Vector" stroke="var(--stroke-0, white)" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Info4() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Info">
      <div className="bg-[rgba(255,255,255,0.1)] content-stretch flex items-start px-[10px] py-[4px] relative rounded-[4px] shrink-0" data-name="Tag">
        <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.6] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">Strategy</p>
      </div>
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.6] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">9 min read</p>
    </div>
  );
}

function Content26() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 text-white w-full" data-name="Content">
      <p className="font-['Montserrat:Bold',sans-serif] font-bold leading-[1.2] relative shrink-0 text-[32px] tracking-[0.32px] w-full">The case for layered capital structures</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.6] not-italic relative shrink-0 text-[18px] w-full">Why sophisticated investors combine multiple funding sources for resilience.</p>
    </div>
  );
}

function Content25() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Content">
      <Info4 />
      <Content26 />
    </div>
  );
}

function Card7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start min-w-px relative" data-name="Card">
      <div className="aspect-[405.33331298828125/270] relative rounded-[8px] shrink-0 w-full" data-name="Placeholder Image">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full" src={imgPlaceholderImage3} />
      </div>
      <Content25 />
      <div className="content-stretch flex gap-[8px] items-center justify-center relative rounded-[6px] shrink-0" data-name="Button">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.6] not-italic relative shrink-0 text-[18px] text-white whitespace-nowrap">Read more</p>
        <div className="overflow-clip relative shrink-0 size-[24px]" data-name="chevron_right">
          <div className="absolute inset-[25.72%_36.66%_25.88%_35.46%]" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.69159 11.6166">
              <path d={svgPaths.p36daa800} fill="var(--fill-0, white)" id="Vector" stroke="var(--stroke-0, white)" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Info5() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Info">
      <div className="bg-[rgba(255,255,255,0.1)] content-stretch flex items-start px-[10px] py-[4px] relative rounded-[4px] shrink-0" data-name="Tag">
        <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.6] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">Lending</p>
      </div>
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.6] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">5 min read</p>
    </div>
  );
}

function Content28() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 text-white w-full" data-name="Content">
      <p className="font-['Montserrat:Bold',sans-serif] font-bold leading-[1.2] relative shrink-0 text-[32px] tracking-[0.32px] w-full">Speed versus certainty in capital decisions</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.6] not-italic relative shrink-0 text-[18px] w-full">How to think about the trade-offs when you need capital quickly.</p>
    </div>
  );
}

function Content27() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Content">
      <Info5 />
      <Content28 />
    </div>
  );
}

function Card8() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start min-w-px relative" data-name="Card">
      <div className="aspect-[405.33331298828125/270] relative rounded-[8px] shrink-0 w-full" data-name="Placeholder Image">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full" src={imgPlaceholderImage1} />
      </div>
      <Content27 />
      <div className="content-stretch flex gap-[8px] items-center justify-center relative rounded-[6px] shrink-0" data-name="Button">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.6] not-italic relative shrink-0 text-[18px] text-white whitespace-nowrap">Read more</p>
        <div className="overflow-clip relative shrink-0 size-[24px]" data-name="chevron_right">
          <div className="absolute inset-[25.72%_36.66%_25.88%_35.46%]" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.69159 11.6166">
              <path d={svgPaths.p36daa800} fill="var(--fill-0, white)" id="Vector" stroke="var(--stroke-0, white)" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Row3() {
  return (
    <div className="content-stretch flex gap-[32px] items-start relative shrink-0 w-full" data-name="Row">
      <Card6 />
      <Card7 />
      <Card8 />
    </div>
  );
}

function Content22() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Content">
      <Row3 />
    </div>
  );
}

function Actions5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Actions">
      <div className="content-stretch flex items-center justify-center px-[24px] py-[10px] relative rounded-[6px] shrink-0" data-name="Button">
        <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.2)] border-b-4 border-l-[1.5px] border-r-[1.5px] border-solid border-t-[1.5px] inset-[-1.5px_-1.5px_-4px_-1.5px] pointer-events-none rounded-[7.5px]" />
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.6] not-italic relative shrink-0 text-[18px] text-white whitespace-nowrap">View all</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col gap-[80px] items-center max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <SectionTitle3 />
      <Content22 />
      <Actions5 />
    </div>
  );
}

function Blog1() {
  return (
    <div className="bg-[#1b1b1e] relative shrink-0 w-full" data-name="Blog / 34 /">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center px-[64px] py-[112px] relative size-full">
          <Container5 />
        </div>
      </div>
    </div>
  );
}

function Column7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Column">
      <p className="font-['Montserrat:Bold',sans-serif] font-bold leading-[1.2] relative shrink-0 text-[60px] text-white tracking-[0.6px] w-full">Next steps</p>
    </div>
  );
}

function Actions6() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0" data-name="Actions">
      <div className="bg-[#cd722d] content-stretch flex items-center justify-center px-[24px] py-[10px] relative rounded-[6px] shrink-0" data-name="Button">
        <div aria-hidden="true" className="absolute border-[#a45b24] border-b-4 border-l-[1.5px] border-r-[1.5px] border-solid border-t-[1.5px] inset-[-1.5px_-1.5px_-4px_-1.5px] pointer-events-none rounded-[7.5px]" />
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.6] not-italic relative shrink-0 text-[18px] text-white whitespace-nowrap">Explore</p>
      </div>
      <div className="content-stretch flex items-center justify-center px-[24px] py-[10px] relative rounded-[6px] shrink-0" data-name="Button">
        <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.2)] border-b-4 border-l-[1.5px] border-r-[1.5px] border-solid border-t-[1.5px] inset-[-1.5px_-1.5px_-4px_-1.5px] pointer-events-none rounded-[7.5px]" />
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.6] not-italic relative shrink-0 text-[18px] text-white whitespace-nowrap">Contact</p>
      </div>
    </div>
  );
}

function Column8() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[32px] items-start min-w-px relative" data-name="Column">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.6] min-w-full not-italic relative shrink-0 text-[20px] text-white w-[min-content]">Explore our resources or speak with our team about your situation.</p>
      <Actions6 />
    </div>
  );
}

function Content29() {
  return (
    <div className="content-stretch flex gap-[80px] items-start relative shrink-0 w-full" data-name="Content">
      <Column7 />
      <Column8 />
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col gap-[80px] items-start max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <Content29 />
      <div className="aspect-[1280/738] relative rounded-[8px] shrink-0 w-full" data-name="Placeholder Image">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full" src={imgPlaceholderImage4} />
      </div>
    </div>
  );
}

function Cta() {
  return (
    <div className="bg-[#020205] relative shrink-0 w-full" data-name="CTA / 21 /">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center px-[64px] py-[112px] relative size-full">
          <Container6 />
        </div>
      </div>
    </div>
  );
}

function Column9() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip relative" data-name="Column">
      <div className="h-[44px] relative shrink-0 w-[84px]" data-name="Company Logo">
        <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgCompanyLogo1} />
      </div>
    </div>
  );
}

function Link5() {
  return (
    <div className="content-stretch flex items-start py-[8px] relative shrink-0 w-full" data-name="Link">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[1.6] min-w-px not-italic relative text-[16px] text-white">Borrow Capital</p>
    </div>
  );
}

function Link6() {
  return (
    <div className="content-stretch flex items-start py-[8px] relative shrink-0 w-full" data-name="Link">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[1.6] min-w-px not-italic relative text-[16px] text-white">Fund Capital</p>
    </div>
  );
}

function Link7() {
  return (
    <div className="content-stretch flex items-start py-[8px] relative shrink-0 w-full" data-name="Link">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[1.6] min-w-px not-italic relative text-[16px] text-white">Subscribe</p>
    </div>
  );
}

function Link8() {
  return (
    <div className="content-stretch flex items-start py-[8px] relative shrink-0 w-full" data-name="Link">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[1.6] min-w-px not-italic relative text-[16px] text-white">Account Login</p>
    </div>
  );
}

function Link9() {
  return (
    <div className="content-stretch flex items-start py-[8px] relative shrink-0 w-full" data-name="Link">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[1.6] min-w-px not-italic relative text-[16px] text-white">Waitlist</p>
    </div>
  );
}

function FooterLinks() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Footer Links">
      <Link5 />
      <Link6 />
      <Link7 />
      <Link8 />
      <Link9 />
    </div>
  );
}

function Column10() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-w-px overflow-clip relative" data-name="Column">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.6] not-italic relative shrink-0 text-[18px] text-white w-full">Capital</p>
      <FooterLinks />
    </div>
  );
}

function Link10() {
  return (
    <div className="content-stretch flex items-start py-[8px] relative shrink-0 w-full" data-name="Link">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[1.6] min-w-px not-italic relative text-[16px] text-white">Guides</p>
    </div>
  );
}

function Link11() {
  return (
    <div className="content-stretch flex items-start py-[8px] relative shrink-0 w-full" data-name="Link">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[1.6] min-w-px not-italic relative text-[16px] text-white">Resources</p>
    </div>
  );
}

function Link12() {
  return (
    <div className="content-stretch flex items-start py-[8px] relative shrink-0 w-full" data-name="Link">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[1.6] min-w-px not-italic relative text-[16px] text-white">Calculators</p>
    </div>
  );
}

function Link13() {
  return (
    <div className="content-stretch flex items-start py-[8px] relative shrink-0 w-full" data-name="Link">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[1.6] min-w-px not-italic relative text-[16px] text-white">Charles A.I</p>
    </div>
  );
}

function FooterLinks1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Footer Links">
      <Link10 />
      <Link11 />
      <Link12 />
      <Link13 />
    </div>
  );
}

function Column11() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-w-px overflow-clip relative" data-name="Column">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.6] not-italic relative shrink-0 text-[18px] text-white w-full">{`Insights & Resources`}</p>
      <FooterLinks1 />
    </div>
  );
}

function Link14() {
  return (
    <div className="content-stretch flex items-start py-[8px] relative shrink-0 w-full" data-name="Link">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[1.6] min-w-px not-italic relative text-[16px] text-white">About us</p>
    </div>
  );
}

function Link15() {
  return (
    <div className="content-stretch flex items-start py-[8px] relative shrink-0 w-full" data-name="Link">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[1.6] min-w-px not-italic relative text-[16px] text-white">Contact us</p>
    </div>
  );
}

function Link16() {
  return (
    <div className="content-stretch flex items-start py-[8px] relative shrink-0 w-full" data-name="Link">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[1.6] min-w-px not-italic relative text-[16px] text-white">Join Investors Network</p>
    </div>
  );
}

function FooterLinks2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Footer Links">
      <Link14 />
      <Link15 />
      <Link16 />
    </div>
  );
}

function Column12() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-w-px overflow-clip relative" data-name="Column">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.6] not-italic relative shrink-0 text-[18px] text-white w-full">Connect</p>
      <FooterLinks2 />
    </div>
  );
}

function Links() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[40px] items-start min-w-px relative" data-name="Links">
      <Column9 />
      <Column10 />
      <Column11 />
      <Column12 />
    </div>
  );
}

function Content30() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start leading-[1.6] not-italic relative shrink-0 text-[18px] text-white w-full" data-name="Content">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 w-full">Connect</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 w-full">Receive insights on private finance, market shifts, and Capital Unique updates.</p>
    </div>
  );
}

function Form() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Form">
      <div className="bg-[rgba(255,255,255,0.1)] flex-[1_0_0] min-w-px relative rounded-[6px]" data-name="Text input">
        <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-[-1px] pointer-events-none rounded-[7px]" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[12px] py-[8px] relative size-full">
            <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[1.6] min-w-px not-italic relative text-[18px] text-[rgba(255,255,255,0.6)]">Your email address</p>
          </div>
        </div>
      </div>
      <div className="content-stretch flex items-center justify-center px-[24px] py-[10px] relative rounded-[6px] shrink-0" data-name="Button">
        <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.2)] border-b-4 border-l-[1.5px] border-r-[1.5px] border-solid border-t-[1.5px] inset-[-1.5px_-1.5px_-4px_-1.5px] pointer-events-none rounded-[7.5px]" />
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.6] not-italic relative shrink-0 text-[18px] text-white whitespace-nowrap">Join</p>
      </div>
    </div>
  );
}

function Actions7() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Actions">
      <Form />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.6] not-italic relative shrink-0 text-[12px] text-white w-full">By subscribing you agree to our Privacy Policy</p>
    </div>
  );
}

function Newslatter() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-[400px]" data-name="Newslatter">
      <Content30 />
      <Actions7 />
    </div>
  );
}

function Card9() {
  return (
    <div className="bg-[#020205] relative rounded-[8px] shrink-0 w-full" data-name="Card">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex gap-[128px] items-start p-[48px] relative size-full">
        <Links />
        <Newslatter />
      </div>
    </div>
  );
}

function Credits1() {
  return (
    <div className="content-stretch flex font-['Inter:Regular',sans-serif] font-normal gap-[24px] items-center leading-[1.6] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap" data-name="Credits">
      <p className="relative shrink-0">© 2025 Capital Unique. All rights reserved.</p>
      <p className="[text-decoration-skip-ink:none] decoration-solid relative shrink-0 underline">Privacy policy</p>
      <p className="[text-decoration-skip-ink:none] decoration-solid relative shrink-0 underline">Terms and conditions</p>
      <p className="[text-decoration-skip-ink:none] decoration-solid relative shrink-0 underline">Cookie settings</p>
    </div>
  );
}

function SocialLinks() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0" data-name="Social Links">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Facebook">
        <div className="absolute inset-[9.34%_8.33%_7.32%_8.33%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <path d={svgPaths.p2c56c980} fill="var(--fill-0, white)" id="Vector" />
          </svg>
        </div>
      </div>
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Instagram">
        <div className="absolute inset-[13.51%_12.5%_11.49%_12.5%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
            <path clipRule="evenodd" d={svgPaths.p9b0b480} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" />
          </svg>
        </div>
      </div>
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="X">
        <div className="absolute inset-[17.68%_12.5%_15.66%_12.5%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 16">
            <path d={svgPaths.pd265900} fill="var(--fill-0, white)" id="Vector" />
          </svg>
        </div>
      </div>
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="LinkedIn">
        <div className="absolute inset-[13.51%_12.5%_11.49%_12.5%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
            <path clipRule="evenodd" d={svgPaths.p56afe80} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" />
          </svg>
        </div>
      </div>
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Youtube">
        <div className="absolute inset-[20.83%_8.33%_20.78%_8.27%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.0141 14.012">
            <path d={svgPaths.p1fcc3d80} fill="var(--fill-0, white)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Row4() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Row">
      <Credits1 />
      <SocialLinks />
    </div>
  );
}

function Credits() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Credits">
      <Row4 />
    </div>
  );
}

function Component2() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full" data-name="Component">
      <Card9 />
      <Credits />
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <Component2 />
    </div>
  );
}

function Footer() {
  return (
    <div className="bg-[#1b1b1e] relative shrink-0 w-full" data-name="Footer / 10 /">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center px-[64px] py-[80px] relative size-full">
          <Container7 />
        </div>
      </div>
    </div>
  );
}

function InsightsResourcesDesktop() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 overflow-clip top-0 w-[1440px]" data-name="Insights & Resources • Desktop">
      <Navbar />
      <Header />
      <Layout1 />
      <Blog />
      <Layout />
      <Blog1 />
      <Cta />
      <Footer />
    </div>
  );
}

export default function Frame() {
  return (
    <div className="relative size-full">
      <InsightsResourcesDesktop />
    </div>
  );
}