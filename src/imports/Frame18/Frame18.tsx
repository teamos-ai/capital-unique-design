import svgPaths from "./svg-lgq2cofzo2";
import imgCompanyLogo from "./adadad985495d47cf71d8987c95a80328e7662a4.png";
import imgHeader60 from "./a3f756a1361c5c49cf0b1a533db61509837c8912.png";
import imgPlaceholderImage from "./9badfd5ba6ede8ae244a1576da245601cc6ed940.png";
import imgPlaceholderImage1 from "./4d90b916cb1f44ef9852687ee8d8b4fbec6293dd.png";
import imgPlaceholderImage2 from "./cf2fedef4eb85c5076ad7cf56e1888372f327a8c.png";
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
      <p className="font-['Montserrat:Bold',sans-serif] font-bold leading-[1.1] relative shrink-0 text-[84px] text-white tracking-[0.84px] w-full">Our Unique Guides.</p>
    </div>
  );
}

function Column3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Column">
      <div className="font-['Inter:Regular',sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[20px] text-white w-full">
        <p className="leading-[1.6] mb-0">Practical frameworks for borrowers and investors navigating complex capital decisions.</p>
        <p className="leading-[1.6]">Clear thinking. No sales language. Built from real scenarios.</p>
      </div>
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
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Tagline Wrapper">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.5] not-italic relative shrink-0 text-[#020205] text-[16px] text-center whitespace-nowrap">Guides</p>
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0 text-[#020205] text-center w-full" data-name="Content">
      <p className="font-['Montserrat:Bold',sans-serif] font-bold leading-[1.2] relative shrink-0 text-[60px] tracking-[0.6px] w-full">Get the fundamentals</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.6] not-italic relative shrink-0 text-[20px] w-full">Straightforward frameworks designed to help you understand structure, risk, and decision-making in non-standard capital scenarios.</p>
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

function Info() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Info">
      <div className="bg-[rgba(2,2,5,0.05)] content-stretch flex items-start px-[10px] py-[4px] relative rounded-[4px] shrink-0" data-name="Tag">
        <div aria-hidden="true" className="absolute border border-[rgba(2,2,5,0.15)] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.6] not-italic relative shrink-0 text-[#020205] text-[16px] whitespace-nowrap">Borrower</p>
      </div>
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.6] not-italic relative shrink-0 text-[#020205] text-[16px] whitespace-nowrap">8 min read</p>
    </div>
  );
}

function Content4() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 text-[#020205] w-full" data-name="Content">
      <p className="font-['Montserrat:Bold',sans-serif] font-bold leading-[1.2] relative shrink-0 text-[32px] tracking-[0.32px] w-full">Understanding cost beyond interest</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.6] not-italic relative shrink-0 text-[18px] w-full">A practical breakdown of total funding cost, including fees, timing, and opportunity trade-offs.</p>
    </div>
  );
}

function Content3() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Content">
      <Info />
      <Content4 />
    </div>
  );
}

function Card() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start min-w-px relative" data-name="Card">
      <div className="aspect-[405.3333435058594/270] relative rounded-[8px] shrink-0 w-full" data-name="Placeholder Image">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full" src={imgPlaceholderImage} />
      </div>
      <Content3 />
      <div className="content-stretch flex gap-[8px] items-center justify-center relative rounded-[6px] shrink-0" data-name="Button">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.6] not-italic relative shrink-0 text-[#020205] text-[18px] whitespace-nowrap">Download</p>
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

function Info1() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Info">
      <div className="bg-[rgba(2,2,5,0.05)] content-stretch flex items-start px-[10px] py-[4px] relative rounded-[4px] shrink-0" data-name="Tag">
        <div aria-hidden="true" className="absolute border border-[rgba(2,2,5,0.15)] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.6] not-italic relative shrink-0 text-[#020205] text-[16px] whitespace-nowrap">Investor</p>
      </div>
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.6] not-italic relative shrink-0 text-[#020205] text-[16px] whitespace-nowrap">10 min read</p>
    </div>
  );
}

function Content6() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 text-[#020205] w-full" data-name="Content">
      <p className="font-['Montserrat:Bold',sans-serif] font-bold leading-[1.2] relative shrink-0 text-[32px] tracking-[0.32px] w-full">How private investors assess risk</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.6] not-italic relative shrink-0 text-[18px] w-full">A clear framework for evaluating downside, protections, and deal structure in private lending.</p>
    </div>
  );
}

function Content5() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Content">
      <Info1 />
      <Content6 />
    </div>
  );
}

function Card1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start min-w-px relative" data-name="Card">
      <div className="aspect-[405.33331298828125/270] relative rounded-[8px] shrink-0 w-full" data-name="Placeholder Image">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full" src={imgPlaceholderImage1} />
      </div>
      <Content5 />
      <div className="content-stretch flex gap-[8px] items-center justify-center relative rounded-[6px] shrink-0" data-name="Button">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.6] not-italic relative shrink-0 text-[#020205] text-[18px] whitespace-nowrap">Download</p>
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

function Info2() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Info">
      <div className="bg-[rgba(2,2,5,0.05)] content-stretch flex items-start px-[10px] py-[4px] relative rounded-[4px] shrink-0" data-name="Tag">
        <div aria-hidden="true" className="absolute border border-[rgba(2,2,5,0.15)] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.6] not-italic relative shrink-0 text-[#020205] text-[16px] whitespace-nowrap">Borrower</p>
      </div>
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.6] not-italic relative shrink-0 text-[#020205] text-[16px] whitespace-nowrap">6 min read</p>
    </div>
  );
}

function Content8() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 text-[#020205] w-full" data-name="Content">
      <p className="font-['Montserrat:Bold',sans-serif] font-bold leading-[1.2] relative shrink-0 text-[32px] tracking-[0.32px] w-full">Preparing for funding</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.6] not-italic relative shrink-0 text-[18px] w-full">What information matters, how to present it clearly, and why preparation changes outcomes more than rates.</p>
    </div>
  );
}

function Content7() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Content">
      <Info2 />
      <Content8 />
    </div>
  );
}

function Card2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start min-w-px relative" data-name="Card">
      <div className="aspect-[405.33331298828125/270] relative rounded-[8px] shrink-0 w-full" data-name="Placeholder Image">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full" src={imgPlaceholderImage2} />
      </div>
      <Content7 />
      <div className="content-stretch flex gap-[8px] items-center justify-center relative rounded-[6px] shrink-0" data-name="Button">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.6] not-italic relative shrink-0 text-[#020205] text-[18px] whitespace-nowrap">Download</p>
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

function Row() {
  return (
    <div className="content-stretch flex gap-[32px] items-start relative shrink-0 w-full" data-name="Row">
      <Card />
      <Card1 />
      <Card2 />
    </div>
  );
}

function Content2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Content">
      <Row />
    </div>
  );
}

function Actions() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Actions">
      <div className="content-stretch flex items-center justify-center px-[24px] py-[10px] relative rounded-[6px] shrink-0" data-name="Button">
        <div aria-hidden="true" className="absolute border-[rgba(2,2,5,0.15)] border-b-4 border-l-[1.5px] border-r-[1.5px] border-solid border-t-[1.5px] inset-[-1.5px_-1.5px_-4px_-1.5px] pointer-events-none rounded-[7.5px]" />
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.6] not-italic relative shrink-0 text-[#020205] text-[18px] whitespace-nowrap">View all</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col gap-[80px] items-center max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <SectionTitle />
      <Content2 />
      <Actions />
    </div>
  );
}

function Blog() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Blog / 34 /">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center px-[64px] py-[112px] relative size-full">
          <Container2 />
        </div>
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col font-['Montserrat:Bold',sans-serif] font-bold items-center leading-[1.1] relative shrink-0 text-[84px] tracking-[0.84px]" data-name="Heading">
      <p className="relative shrink-0 w-[768px]">Access our</p>
      <p className="relative shrink-0 w-[768px]">complete library</p>
    </div>
  );
}

function Content9() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0 text-center text-white w-full" data-name="Content">
      <Heading />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.6] min-w-full not-italic relative shrink-0 text-[20px] w-[min-content]">Receive curated guides, frameworks, and insights delivered directly to your inbox.</p>
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
            <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[1.6] min-w-px not-italic relative text-[18px] text-[rgba(255,255,255,0.6)]">Enter your email</p>
          </div>
        </div>
      </div>
      <div className="bg-[#cd722d] content-stretch flex items-center justify-center px-[24px] py-[10px] relative rounded-[6px] shrink-0" data-name="Button">
        <div aria-hidden="true" className="absolute border-[#a45b24] border-b-4 border-l-[1.5px] border-r-[1.5px] border-solid border-t-[1.5px] inset-[-1.5px_-1.5px_-4px_-1.5px] pointer-events-none rounded-[7.5px]" />
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.6] not-italic relative shrink-0 text-[18px] text-white whitespace-nowrap">Get access</p>
      </div>
    </div>
  );
}

function Actions1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[513px]" data-name="Actions">
      <Form />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.6] not-italic relative shrink-0 text-[12px] text-center text-white w-full">By signing up, you agree to our Terms and Conditions and Privacy Policy.</p>
    </div>
  );
}

function Column4() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-center max-w-[768px] relative shrink-0 w-full" data-name="Column">
      <Content9 />
      <Actions1 />
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col items-center max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <Column4 />
    </div>
  );
}

function Cta() {
  return (
    <div className="bg-[#020205] relative shrink-0 w-full" data-name="CTA / 58 /">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center px-[64px] py-[112px] relative size-full">
          <Container3 />
        </div>
      </div>
    </div>
  );
}

function Content10() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 text-[#020205] w-full" data-name="Content">
      <p className="font-['Montserrat:Bold',sans-serif] font-bold leading-[1.2] relative shrink-0 text-[60px] tracking-[0.6px] w-full">Questions</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.6] not-italic relative shrink-0 text-[20px] w-full">Clarity on our guides, access, and approach to financial education.</p>
    </div>
  );
}

function Actions2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Actions">
      <div className="content-stretch flex items-center justify-center px-[24px] py-[10px] relative rounded-[6px] shrink-0" data-name="Button">
        <div aria-hidden="true" className="absolute border-[rgba(2,2,5,0.15)] border-b-4 border-l-[1.5px] border-r-[1.5px] border-solid border-t-[1.5px] inset-[-1.5px_-1.5px_-4px_-1.5px] pointer-events-none rounded-[7.5px]" />
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.6] not-italic relative shrink-0 text-[#020205] text-[18px] whitespace-nowrap">Contact</p>
      </div>
    </div>
  );
}

function SectionTitle1() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-[500px]" data-name="Section Title">
      <Content10 />
      <Actions2 />
    </div>
  );
}

function Question() {
  return (
    <div className="relative shrink-0 w-full" data-name="Question">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[24px] items-center px-[24px] py-[20px] relative size-full">
          <p className="flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[1.6] min-w-px not-italic relative text-[#020205] text-[20px]">Who are these guides for?</p>
          <div className="overflow-clip relative shrink-0 size-[24px]" data-name="close">
            <div className="absolute inset-[22.6%]" data-name="Vector">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.15 13.15">
                <path d={svgPaths.p23282800} fill="var(--fill-0, #020205)" id="Vector" stroke="var(--stroke-0, #020205)" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Answer() {
  return (
    <div className="relative shrink-0 w-full" data-name="Answer">
      <div className="content-stretch flex items-start pb-[24px] px-[24px] relative size-full">
        <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[1.6] min-w-px not-italic relative text-[#020205] text-[18px]">Our guides serve borrowers navigating non-bank lending, developers structuring complex deals, and investors building private lending portfolios. Each guide addresses real scenarios where traditional finance falls short.</p>
      </div>
    </div>
  );
}

function Accordion() {
  return (
    <div className="bg-[#f2f2f2] content-stretch flex flex-col items-start relative rounded-[8px] shrink-0 w-full" data-name="Accordion">
      <div aria-hidden="true" className="absolute border border-[rgba(2,2,5,0.15)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Question />
      <Answer />
    </div>
  );
}

function Question1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Question">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[24px] items-center px-[24px] py-[20px] relative size-full">
          <p className="flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[1.6] min-w-px not-italic relative text-[#020205] text-[20px]">Do I need to register to download?</p>
          <div className="overflow-clip relative shrink-0 size-[24px]" data-name="close">
            <div className="absolute inset-[22.6%]" data-name="Vector">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.15 13.15">
                <path d={svgPaths.p23282800} fill="var(--fill-0, #020205)" id="Vector" stroke="var(--stroke-0, #020205)" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Answer1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Answer">
      <div className="content-stretch flex items-start pb-[24px] px-[24px] relative size-full">
        <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[1.6] min-w-px not-italic relative text-[#020205] text-[18px]">Yes. Registration ensures we can deliver guides tailored to your situation and keep you informed of new resources. It takes a moment and opens access to our complete library.</p>
      </div>
    </div>
  );
}

function Accordion1() {
  return (
    <div className="bg-[#f2f2f2] content-stretch flex flex-col items-start relative rounded-[8px] shrink-0 w-full" data-name="Accordion">
      <div aria-hidden="true" className="absolute border border-[rgba(2,2,5,0.15)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Question1 />
      <Answer1 />
    </div>
  );
}

function Question2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Question">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[24px] items-center px-[24px] py-[20px] relative size-full">
          <p className="flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[1.6] min-w-px not-italic relative text-[#020205] text-[20px]">How current are these frameworks?</p>
          <div className="overflow-clip relative shrink-0 size-[24px]" data-name="close">
            <div className="absolute inset-[22.6%]" data-name="Vector">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.15 13.15">
                <path d={svgPaths.p23282800} fill="var(--fill-0, #020205)" id="Vector" stroke="var(--stroke-0, #020205)" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Answer2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Answer">
      <div className="content-stretch flex items-start pb-[24px] px-[24px] relative size-full">
        <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[1.6] min-w-px not-italic relative text-[#020205] text-[18px]">Our guides reflect current Australian lending practices and regulatory environments. We update them regularly as market conditions and lending structures evolve.</p>
      </div>
    </div>
  );
}

function Accordion2() {
  return (
    <div className="bg-[#f2f2f2] content-stretch flex flex-col items-start relative rounded-[8px] shrink-0 w-full" data-name="Accordion">
      <div aria-hidden="true" className="absolute border border-[rgba(2,2,5,0.15)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Question2 />
      <Answer2 />
    </div>
  );
}

function Question3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Question">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[24px] items-center px-[24px] py-[20px] relative size-full">
          <p className="flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[1.6] min-w-px not-italic relative text-[#020205] text-[20px]">Can I share these with my team?</p>
          <div className="overflow-clip relative shrink-0 size-[24px]" data-name="close">
            <div className="absolute inset-[22.6%]" data-name="Vector">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.15 13.15">
                <path d={svgPaths.p23282800} fill="var(--fill-0, #020205)" id="Vector" stroke="var(--stroke-0, #020205)" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Answer3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Answer">
      <div className="content-stretch flex items-start pb-[24px] px-[24px] relative size-full">
        <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[1.6] min-w-px not-italic relative text-[#020205] text-[18px]">Guides are for your personal use. If your team needs access, contact us and we can discuss options that suit your situation.</p>
      </div>
    </div>
  );
}

function Accordion3() {
  return (
    <div className="bg-[#f2f2f2] content-stretch flex flex-col items-start relative rounded-[8px] shrink-0 w-full" data-name="Accordion">
      <div aria-hidden="true" className="absolute border border-[rgba(2,2,5,0.15)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Question3 />
      <Answer3 />
    </div>
  );
}

function Question4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Question">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[24px] items-center px-[24px] py-[20px] relative size-full">
          <p className="flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[1.6] min-w-px not-italic relative text-[#020205] text-[20px]">What if I need specific advice?</p>
          <div className="overflow-clip relative shrink-0 size-[24px]" data-name="close">
            <div className="absolute inset-[22.6%]" data-name="Vector">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.15 13.15">
                <path d={svgPaths.p23282800} fill="var(--fill-0, #020205)" id="Vector" stroke="var(--stroke-0, #020205)" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Answer4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Answer">
      <div className="content-stretch flex items-start pb-[24px] px-[24px] relative size-full">
        <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[1.6] min-w-px not-italic relative text-[#020205] text-[18px]">These guides provide education and frameworks, not personal financial advice. For scenarios specific to your circumstances, our team is ready to discuss your situation directly.</p>
      </div>
    </div>
  );
}

function Accordion4() {
  return (
    <div className="bg-[#f2f2f2] content-stretch flex flex-col items-start relative rounded-[8px] shrink-0 w-full" data-name="Accordion">
      <div aria-hidden="true" className="absolute border border-[rgba(2,2,5,0.15)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Question4 />
      <Answer4 />
    </div>
  );
}

function AccordionList() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-w-px relative" data-name="Accordion List">
      <Accordion />
      <Accordion1 />
      <Accordion2 />
      <Accordion3 />
      <Accordion4 />
    </div>
  );
}

function Component1() {
  return (
    <div className="content-stretch flex gap-[80px] items-start relative shrink-0 w-full" data-name="Component">
      <SectionTitle1 />
      <AccordionList />
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <Component1 />
    </div>
  );
}

function Faq() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="FAQ / 6 /">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center px-[64px] py-[112px] relative size-full">
          <Container4 />
        </div>
      </div>
    </div>
  );
}

function Column5() {
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

function Column6() {
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

function Column7() {
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

function Column8() {
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
      <Column5 />
      <Column6 />
      <Column7 />
      <Column8 />
    </div>
  );
}

function Content11() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start leading-[1.6] not-italic relative shrink-0 text-[18px] text-white w-full" data-name="Content">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 w-full">Connect</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 w-full">Receive insights on private finance, market shifts, and Capital Unique updates.</p>
    </div>
  );
}

function Form1() {
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

function Actions3() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Actions">
      <Form1 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.6] not-italic relative shrink-0 text-[12px] text-white w-full">By subscribing you agree to our Privacy Policy</p>
    </div>
  );
}

function Newslatter() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-[400px]" data-name="Newslatter">
      <Content11 />
      <Actions3 />
    </div>
  );
}

function Card3() {
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

function Row1() {
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
      <Row1 />
    </div>
  );
}

function Component2() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full" data-name="Component">
      <Card3 />
      <Credits />
    </div>
  );
}

function Container5() {
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
          <Container5 />
        </div>
      </div>
    </div>
  );
}

function GuidesDesktop() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 overflow-clip top-0 w-[1440px]" data-name="Guides • Desktop">
      <Navbar />
      <Header />
      <Blog />
      <Cta />
      <Faq />
      <Footer />
    </div>
  );
}

export default function Frame() {
  return (
    <div className="relative size-full">
      <GuidesDesktop />
    </div>
  );
}