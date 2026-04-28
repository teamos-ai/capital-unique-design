import svgPaths from "./svg-h63uaqhcm9";
import imgCompanyLogo from "./adadad985495d47cf71d8987c95a80328e7662a4.png";
import imgPlaceholderImage8 from "./d04cb1698b0e32222a4e44f21b631a7129c5afcd.png";
import imgPlaceholderImage from "./b0f121f912c6fa8d03bd53e4e3b3b306a1fa2b78.png";
import imgPlaceholderImage1 from "./641315cb2aa3c1375f78ca8817b964498e45ae73.png";
import imgPlaceholderImage2 from "./9ce7edb3df88e85c26badb9e0a9eefac6e58f7d6.png";
import imgPlaceholderImage3 from "./4d90b916cb1f44ef9852687ee8d8b4fbec6293dd.png";
import imgPlaceholderImage4 from "./676cb6ab7503778928d3e65c2e18a669319395ff.png";
import imgAvatarImage from "./6815e41018de7677da56d44c49c66bd77ca0f3db.png";
import imgAvatarImage1 from "./231d45a2e30c3f040542294090c478087991425d.png";
import imgPlaceholderImage5 from "./0866ec1176b18b0ea27a016769cf7c85ad454a8e.png";
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
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative self-stretch" data-name="Column">
      <p className="font-['Montserrat:Bold',sans-serif] font-bold leading-[1.1] relative shrink-0 text-[84px] text-white tracking-[0.84px] w-full">Capital designed around your strategy.</p>
    </div>
  );
}

function Actions() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0" data-name="Actions">
      <div className="bg-[#cd722d] content-stretch flex items-center justify-center px-[24px] py-[10px] relative rounded-[6px] shrink-0" data-name="Button">
        <div aria-hidden="true" className="absolute border-[#a45b24] border-b-4 border-l-[1.5px] border-r-[1.5px] border-solid border-t-[1.5px] inset-[-1.5px_-1.5px_-4px_-1.5px] pointer-events-none rounded-[7.5px]" />
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.6] not-italic relative shrink-0 text-[18px] text-white whitespace-nowrap">Book Quick Call</p>
      </div>
      <div className="content-stretch flex items-center justify-center px-[24px] py-[10px] relative rounded-[6px] shrink-0" data-name="Button">
        <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.2)] border-b-4 border-l-[1.5px] border-r-[1.5px] border-solid border-t-[1.5px] inset-[-1.5px_-1.5px_-4px_-1.5px] pointer-events-none rounded-[7.5px]" />
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.6] not-italic relative shrink-0 text-[18px] text-white whitespace-nowrap">Charles A.I</p>
      </div>
    </div>
  );
}

function Content2() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start justify-end relative shrink-0 w-full" data-name="Content">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.6] min-w-full not-italic relative shrink-0 text-[20px] text-white w-[min-content]">We provide tailored funding solutions for businesses, developers, and investors who value clarity, speed, and structure. Whether you’re building, acquiring, or repositioning capital, we design finance to match your objectives.</p>
      <Actions />
    </div>
  );
}

function Column3() {
  return (
    <div className="flex-[1_0_0] min-w-px relative self-stretch" data-name="Column">
      <div className="flex flex-col justify-end size-full">
        <div className="content-stretch flex flex-col items-start justify-end pt-[192px] relative size-full">
          <Content2 />
        </div>
      </div>
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex gap-[80px] h-[401px] items-start relative shrink-0 w-full" data-name="Content">
      <Column2 />
      <Column3 />
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col gap-[80px] items-start max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <Content1 />
      <div className="aspect-[1280/738] relative rounded-[8px] shrink-0 w-full" data-name="Placeholder Image 8">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full" src={imgPlaceholderImage8} />
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="bg-[#1b1b1e] relative shrink-0 w-full" data-name="Header / 144 /">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center px-[64px] py-[112px] relative size-full">
          <Container1 />
        </div>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[64px] relative size-full">
          <p className="font-['Inter:Bold',sans-serif] font-bold leading-[1.6] not-italic relative shrink-0 text-[#020205] text-[20px] text-center w-[560px]">{`Trusted by Australia's most discerning investors`}</p>
        </div>
      </div>
    </div>
  );
}

function Content4() {
  return (
    <div className="content-stretch flex gap-[24px] items-center justify-center relative shrink-0" data-name="Content">
      <div className="h-[56px] overflow-clip relative shrink-0 w-[200px]" data-name="Placeholder Logo">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[22.5px] left-[calc(50%-0.01px)] top-1/2 w-[134.98px]" data-name="Logo">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 134.98 22.5">
            <g id="Logo">
              <path clipRule="evenodd" d={svgPaths.p1b194870} fill="var(--fill-0, #020205)" fillRule="evenodd" />
              <path d={svgPaths.p161680} fill="var(--fill-0, #020205)" />
              <path clipRule="evenodd" d={svgPaths.p33439200} fill="var(--fill-0, #020205)" fillRule="evenodd" />
              <path d={svgPaths.p1ac5700} fill="var(--fill-0, #020205)" />
              <path clipRule="evenodd" d={svgPaths.p2c039e00} fill="var(--fill-0, #020205)" fillRule="evenodd" />
              <path d={svgPaths.p1a1b0400} fill="var(--fill-0, #020205)" />
              <path clipRule="evenodd" d={svgPaths.p3036d00} fill="var(--fill-0, #020205)" fillRule="evenodd" />
              <path d={svgPaths.p1eea2c00} fill="var(--fill-0, #020205)" />
            </g>
          </svg>
        </div>
      </div>
      <div className="h-[56px] overflow-clip relative shrink-0 w-[200px]" data-name="Placeholder Logo">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[35.875px] left-[calc(50%+0.26px)] top-[calc(50%+0.44px)] w-[132.515px]" data-name="Logo">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 132.515 35.8748">
            <path clipRule="evenodd" d={svgPaths.p3d7bdf00} fill="var(--fill-0, #020205)" fillRule="evenodd" id="Logo" />
          </svg>
        </div>
      </div>
      <div className="h-[56px] overflow-clip relative shrink-0 w-[200px]" data-name="Placeholder Logo">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[22.5px] left-[calc(50%-0.01px)] top-1/2 w-[134.98px]" data-name="Logo">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 134.98 22.5">
            <g id="Logo">
              <path clipRule="evenodd" d={svgPaths.p1b194870} fill="var(--fill-0, #020205)" fillRule="evenodd" />
              <path d={svgPaths.p161680} fill="var(--fill-0, #020205)" />
              <path clipRule="evenodd" d={svgPaths.p33439200} fill="var(--fill-0, #020205)" fillRule="evenodd" />
              <path d={svgPaths.p1ac5700} fill="var(--fill-0, #020205)" />
              <path clipRule="evenodd" d={svgPaths.p2c039e00} fill="var(--fill-0, #020205)" fillRule="evenodd" />
              <path d={svgPaths.p1a1b0400} fill="var(--fill-0, #020205)" />
              <path clipRule="evenodd" d={svgPaths.p3036d00} fill="var(--fill-0, #020205)" fillRule="evenodd" />
              <path d={svgPaths.p1eea2c00} fill="var(--fill-0, #020205)" />
            </g>
          </svg>
        </div>
      </div>
      <div className="h-[56px] overflow-clip relative shrink-0 w-[200px]" data-name="Placeholder Logo">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[35.875px] left-[calc(50%+0.26px)] top-[calc(50%+0.44px)] w-[132.515px]" data-name="Logo">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 132.515 35.8748">
            <path clipRule="evenodd" d={svgPaths.p3d7bdf00} fill="var(--fill-0, #020205)" fillRule="evenodd" id="Logo" />
          </svg>
        </div>
      </div>
      <div className="h-[56px] overflow-clip relative shrink-0 w-[200px]" data-name="Placeholder Logo">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[22.5px] left-[calc(50%-0.01px)] top-1/2 w-[134.98px]" data-name="Logo">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 134.98 22.5">
            <g id="Logo">
              <path clipRule="evenodd" d={svgPaths.p1b194870} fill="var(--fill-0, #020205)" fillRule="evenodd" />
              <path d={svgPaths.p161680} fill="var(--fill-0, #020205)" />
              <path clipRule="evenodd" d={svgPaths.p33439200} fill="var(--fill-0, #020205)" fillRule="evenodd" />
              <path d={svgPaths.p1ac5700} fill="var(--fill-0, #020205)" />
              <path clipRule="evenodd" d={svgPaths.p2c039e00} fill="var(--fill-0, #020205)" fillRule="evenodd" />
              <path d={svgPaths.p1a1b0400} fill="var(--fill-0, #020205)" />
              <path clipRule="evenodd" d={svgPaths.p3036d00} fill="var(--fill-0, #020205)" fillRule="evenodd" />
              <path d={svgPaths.p1eea2c00} fill="var(--fill-0, #020205)" />
            </g>
          </svg>
        </div>
      </div>
      <div className="h-[56px] overflow-clip relative shrink-0 w-[200px]" data-name="Placeholder Logo">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[35.875px] left-[calc(50%+0.26px)] top-[calc(50%+0.44px)] w-[132.515px]" data-name="Logo">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 132.515 35.8748">
            <path clipRule="evenodd" d={svgPaths.p3d7bdf00} fill="var(--fill-0, #020205)" fillRule="evenodd" id="Logo" />
          </svg>
        </div>
      </div>
      <div className="h-[56px] overflow-clip relative shrink-0 w-[200px]" data-name="Placeholder Logo">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[22.5px] left-[calc(50%-0.01px)] top-1/2 w-[134.98px]" data-name="Logo">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 134.98 22.5">
            <g id="Logo">
              <path clipRule="evenodd" d={svgPaths.p1b194870} fill="var(--fill-0, #020205)" fillRule="evenodd" />
              <path d={svgPaths.p161680} fill="var(--fill-0, #020205)" />
              <path clipRule="evenodd" d={svgPaths.p33439200} fill="var(--fill-0, #020205)" fillRule="evenodd" />
              <path d={svgPaths.p1ac5700} fill="var(--fill-0, #020205)" />
              <path clipRule="evenodd" d={svgPaths.p2c039e00} fill="var(--fill-0, #020205)" fillRule="evenodd" />
              <path d={svgPaths.p1a1b0400} fill="var(--fill-0, #020205)" />
              <path clipRule="evenodd" d={svgPaths.p3036d00} fill="var(--fill-0, #020205)" fillRule="evenodd" />
              <path d={svgPaths.p1eea2c00} fill="var(--fill-0, #020205)" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Content3() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Content">
      <Content4 />
    </div>
  );
}

function Logo() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[48px] items-center overflow-clip py-[80px] relative shrink-0 w-full" data-name="Logo / 3 /">
      <Container2 />
      <Content3 />
    </div>
  );
}

function TaglineWrapper() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Tagline Wrapper">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.5] not-italic relative shrink-0 text-[#020205] text-[16px] text-center whitespace-nowrap">Why borrow</p>
    </div>
  );
}

function Content5() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0 text-[#020205] text-center w-full" data-name="Content">
      <p className="font-['Montserrat:Bold',sans-serif] font-bold leading-[1.2] relative shrink-0 text-[60px] tracking-[0.6px] w-full">What sets us apart from traditional lending</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.6] not-italic relative shrink-0 text-[20px] w-full">We approach funding with intent and discipline. Instead of rigid processes, we focus on understanding the deal, assessing risk clearly, and structuring capital that supports real commercial outcomes.</p>
    </div>
  );
}

function SectionTitle() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center max-w-[768px] relative shrink-0 w-full" data-name="Section Title">
      <TaglineWrapper />
      <Content5 />
    </div>
  );
}

function Content7() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0 text-[#020205] text-center w-full" data-name="Content">
      <p className="font-['Montserrat:Bold',sans-serif] font-bold leading-[1.2] relative shrink-0 text-[40px] tracking-[0.4px] w-full">{`It's Clear`}</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.6] not-italic relative shrink-0 text-[18px] w-full">You know where you stand early, with terms and structure explained upfront.</p>
    </div>
  );
}

function Column4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[32px] items-start min-w-px overflow-clip relative" data-name="Column">
      <div className="aspect-[405.3333435058594/240] relative rounded-[8px] shrink-0 w-full" data-name="Placeholder Image">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full" src={imgPlaceholderImage} />
      </div>
      <Content7 />
    </div>
  );
}

function Content8() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0 text-[#020205] text-center w-full" data-name="Content">
      <p className="font-['Montserrat:Bold',sans-serif] font-bold leading-[1.2] relative shrink-0 text-[40px] tracking-[0.4px] w-full">{`It's Fast`}</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.6] not-italic relative shrink-0 text-[18px] w-full">Decisions move at the pace your opportunity demands, not a committee schedule.</p>
    </div>
  );
}

function Column5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[32px] items-start min-w-px overflow-clip relative" data-name="Column">
      <div className="aspect-[405.3333435058594/240] relative rounded-[8px] shrink-0 w-full" data-name="Placeholder Image">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full" src={imgPlaceholderImage1} />
      </div>
      <Content8 />
    </div>
  );
}

function Content9() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0 text-[#020205] text-center w-full" data-name="Content">
      <p className="font-['Montserrat:Bold',sans-serif] font-bold leading-[1.2] relative shrink-0 text-[40px] tracking-[0.4px] w-full">It’s Considered</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.6] not-italic relative shrink-0 text-[18px] w-full">Each deal is assessed on its own merits, with structure and risk carefully thought through.</p>
    </div>
  );
}

function Column6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[32px] items-start min-w-px overflow-clip relative" data-name="Column">
      <div className="aspect-[405.3333435058594/240] relative rounded-[8px] shrink-0 w-full" data-name="Placeholder Image">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full" src={imgPlaceholderImage2} />
      </div>
      <Content9 />
    </div>
  );
}

function Row() {
  return (
    <div className="content-stretch flex gap-[48px] items-start justify-center relative shrink-0 w-full" data-name="Row">
      <Column4 />
      <Column5 />
      <Column6 />
    </div>
  );
}

function Content6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Content">
      <Row />
    </div>
  );
}

function Actions1() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0" data-name="Actions">
      <div className="relative rounded-[6px] shrink-0" data-name="Button">
        <div className="content-stretch flex items-center justify-center overflow-clip px-[24px] py-[10px] relative rounded-[inherit] size-full">
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.6] not-italic relative shrink-0 text-[#020205] text-[18px] whitespace-nowrap">Book Quick Call</p>
        </div>
        <div aria-hidden="true" className="absolute border-[rgba(2,2,5,0.15)] border-b-4 border-l-[1.5px] border-r-[1.5px] border-solid border-t-[1.5px] inset-[-1.5px_-1.5px_-4px_-1.5px] pointer-events-none rounded-[7.5px]" />
      </div>
      <div className="content-stretch flex gap-[8px] items-center justify-center overflow-clip relative rounded-[6px] shrink-0" data-name="Button">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.6] not-italic relative shrink-0 text-[#020205] text-[18px] whitespace-nowrap">Charles A.I</p>
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

function Container3() {
  return (
    <div className="content-stretch flex flex-col gap-[80px] items-center max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <SectionTitle />
      <Content6 />
      <Actions1 />
    </div>
  );
}

function Layout() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Layout / 239 /">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center px-[64px] py-[112px] relative size-full">
          <Container3 />
        </div>
      </div>
    </div>
  );
}

function TaglineWrapper1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Tagline Wrapper">
      <p className="font-['Roboto:SemiBold',sans-serif] font-semibold leading-[1.5] relative shrink-0 text-[16px] text-white whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Tailored
      </p>
    </div>
  );
}

function Content11() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 text-white w-full" data-name="Content">
      <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[1.2] relative shrink-0 text-[48px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Lending shaped around your situation
      </p>
      <div className="font-['Roboto:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[18px] w-full whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] mb-0">No two deals are the same. We design funding structures around your objectives, timelines, and risk considerations—so the capital supports the strategy, not the other way around.</p>
        <p className="leading-[1.5] mb-0">​</p>
        <p className="leading-[1.5]">From development and acquisitions to transitional or short-term requirements, each solution is structured with intent, discipline, and clarity.</p>
      </div>
    </div>
  );
}

function SectionTitle1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Section Title">
      <TaglineWrapper1 />
      <Content11 />
    </div>
  );
}

function Content10() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[560px] relative shrink-0 w-full" data-name="Content">
      <SectionTitle1 />
    </div>
  );
}

function ContentRight() {
  return (
    <div className="flex-[1_0_0] min-w-px relative self-stretch" data-name="Content Right">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center pl-[80px] pr-[64px] py-[112px] relative size-full">
          <Content10 />
        </div>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex h-[720px] items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex-[1_0_0] min-h-[720px] min-w-px relative self-stretch" data-name="Placeholder Image">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgPlaceholderImage3} />
      </div>
      <ContentRight />
    </div>
  );
}

function Layout2() {
  return (
    <div className="bg-[#020205] content-stretch flex flex-col items-center overflow-clip relative shrink-0 w-full" data-name="Layout / 552 /">
      <Container4 />
    </div>
  );
}

function TaglineWrapper2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Tagline Wrapper">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.5] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">The Process</p>
    </div>
  );
}

function Content13() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 text-white w-full" data-name="Content">
      <p className="font-['Montserrat:Bold',sans-serif] font-bold leading-[1.2] relative shrink-0 text-[60px] tracking-[0.6px] w-full">How funding works</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.6] not-italic relative shrink-0 text-[20px] w-full">We start by understanding your objectives and assessing the opportunity with care. From there, we structure the right solution and guide the process through to funding with clarity at every stage. The approach is deliberate, transparent, and designed to move forward with confidence.</p>
    </div>
  );
}

function SectionTitle2() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Section Title">
      <TaglineWrapper2 />
      <Content13 />
    </div>
  );
}

function Actions2() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0" data-name="Actions">
      <div className="relative rounded-[6px] shrink-0" data-name="Button">
        <div className="content-stretch flex items-center justify-center overflow-clip px-[24px] py-[10px] relative rounded-[inherit] size-full">
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.6] not-italic relative shrink-0 text-[18px] text-white whitespace-nowrap">Book Quick Chat</p>
        </div>
        <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.2)] border-b-4 border-l-[1.5px] border-r-[1.5px] border-solid border-t-[1.5px] inset-[-1.5px_-1.5px_-4px_-1.5px] pointer-events-none rounded-[7.5px]" />
      </div>
      <div className="content-stretch flex gap-[8px] items-center justify-center overflow-clip relative rounded-[6px] shrink-0" data-name="Button">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.6] not-italic relative shrink-0 text-[18px] text-white whitespace-nowrap">Charles A.I</p>
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

function Content12() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[32px] items-start min-w-px relative" data-name="Content">
      <SectionTitle2 />
      <Actions2 />
    </div>
  );
}

function Content15() {
  return (
    <div className="bg-[#020205] relative rounded-[8px] shrink-0 w-full" data-name="Content">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[32px] relative size-full">
        <div className="relative shrink-0 size-[48px]" data-name="handshake">
          <div className="absolute inset-[7.86%_3.59%_7.76%_3.64%]" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44.5272 40.5">
              <path d={svgPaths.p34b8ca80} fill="var(--fill-0, white)" id="Vector" />
            </svg>
          </div>
        </div>
        <p className="font-['Montserrat:Bold',sans-serif] font-bold leading-[1.2] min-w-full relative shrink-0 text-[32px] text-white tracking-[0.32px] w-[min-content]">01 Understand the deal</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.6] min-w-full not-italic relative shrink-0 text-[18px] text-white w-[min-content]">We discuss your objectives, timing, and structure so we can understand what you’re trying to achieve.</p>
      </div>
    </div>
  );
}

function Content16() {
  return (
    <div className="bg-[#020205] relative rounded-[8px] shrink-0 w-full" data-name="Content">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[32px] relative size-full">
        <div className="relative shrink-0 size-[48px]" data-name="search_check">
          <div className="absolute inset-[11.97%_13.46%_13.41%_11.93%]" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35.8165 35.8165">
              <path d={svgPaths.p20292200} fill="var(--fill-0, white)" id="Vector" />
            </svg>
          </div>
        </div>
        <p className="font-['Montserrat:Bold',sans-serif] font-bold leading-[1.2] min-w-full relative shrink-0 text-[32px] text-white tracking-[0.32px] w-[min-content]">02 Assess options</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.6] min-w-full not-italic relative shrink-0 text-[18px] text-white w-[min-content]">We review the information and identify the most suitable funding approach based on your needs.</p>
      </div>
    </div>
  );
}

function Content17() {
  return (
    <div className="bg-[#020205] relative rounded-[8px] shrink-0 w-full" data-name="Content">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[32px] relative size-full">
        <div className="relative shrink-0 size-[48px]" data-name="checklist_rtl">
          <div className="absolute inset-[17.75%_9.22%_23.13%_7.81%]" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 39.8246 28.3772">
              <path d={svgPaths.p38a76c00} fill="var(--fill-0, white)" id="Vector" />
            </svg>
          </div>
        </div>
        <p className="font-['Montserrat:Bold',sans-serif] font-bold leading-[1.2] min-w-full relative shrink-0 text-[32px] text-white tracking-[0.32px] w-[min-content]">03 Confirm terms</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.6] min-w-full not-italic relative shrink-0 text-[18px] text-white w-[min-content]">We clearly explain the proposed terms, costs, and conditions before anything moves forward.</p>
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="overflow-clip relative shrink-0 size-[48px]" data-name="Icon">
      <div className="absolute left-0 size-[48px] top-0" data-name="money_bag">
        <div className="absolute inset-[11.85%_11.75%_11.88%_11.88%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36.66 36.61">
            <path d={svgPaths.p29239f00} fill="var(--fill-0, white)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Content18() {
  return (
    <div className="bg-[#020205] relative rounded-[8px] shrink-0 w-full" data-name="Content">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[32px] relative size-full">
        <Icon />
        <p className="font-['Montserrat:Bold',sans-serif] font-bold leading-[1.2] min-w-full relative shrink-0 text-[32px] text-white tracking-[0.32px] w-[min-content]">04 Deploy funding</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.6] min-w-full not-italic relative shrink-0 text-[18px] text-white w-[min-content]">Once agreed, we manage the process through to funding and remain involved as the capital is deployed.</p>
      </div>
    </div>
  );
}

function Content14() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[32px] items-start min-w-px relative" data-name="Content">
      <Content15 />
      <Content16 />
      <Content17 />
      <Content18 />
    </div>
  );
}

function Component() {
  return (
    <div className="content-stretch flex gap-[80px] items-start relative shrink-0 w-full" data-name="Component">
      <Content12 />
      <Content14 />
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <Component />
    </div>
  );
}

function Layout1() {
  return (
    <div className="bg-[#1b1b1e] relative shrink-0 w-full" data-name="Layout / 353 /">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center px-[64px] py-[112px] relative size-full">
          <Container5 />
        </div>
      </div>
    </div>
  );
}

function SectionTitle3() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center max-w-[768px] relative shrink-0 text-[#020205] text-center w-full" data-name="Section Title">
      <p className="font-['Montserrat:Bold',sans-serif] font-bold leading-[1.2] relative shrink-0 text-[60px] tracking-[0.6px] w-full">Our work</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.6] not-italic relative shrink-0 text-[20px] w-full">{`Projects we've funded across Australia`}</p>
    </div>
  );
}

function Wrapper() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Wrapper">
      <SectionTitle3 />
    </div>
  );
}

function Content20() {
  return (
    <div className="content-stretch flex gap-[32px] items-start relative shrink-0" data-name="Content">
      <div className="h-[720px] relative rounded-[8px] shrink-0 w-[1120px]" data-name="Placeholder Image 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full" src={imgPlaceholderImage4} />
      </div>
      <div className="h-[720px] relative rounded-[8px] shrink-0 w-[1120px]" data-name="Placeholder Image 2">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full" src={imgPlaceholderImage4} />
      </div>
      <div className="h-[720px] relative rounded-[8px] shrink-0 w-[1120px]" data-name="Placeholder Image 3">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full" src={imgPlaceholderImage4} />
      </div>
    </div>
  );
}

function Content19() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Content">
      <Content20 />
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col gap-[80px] items-start max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <Wrapper />
      <Content19 />
    </div>
  );
}

function Gallery() {
  return (
    <div className="bg-[#f2f2f2] relative shrink-0 w-full" data-name="Gallery / 24 /">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center px-[64px] py-[112px] relative size-full">
          <Container6 />
        </div>
      </div>
    </div>
  );
}

function Content21() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0 text-[#020205] w-full" data-name="Content">
      <p className="font-['Montserrat:Bold',sans-serif] font-bold leading-[1.1] relative shrink-0 text-[84px] tracking-[0.84px] w-full">What clients say</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.6] not-italic relative shrink-0 text-[20px] w-full">{`Those who've worked with us speak to the difference clarity and speed make.`}</p>
    </div>
  );
}

function Actions3() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0" data-name="Actions">
      <div className="content-stretch flex items-center justify-center px-[24px] py-[10px] relative rounded-[6px] shrink-0" data-name="Button">
        <div aria-hidden="true" className="absolute border-[rgba(2,2,5,0.15)] border-b-4 border-l-[1.5px] border-r-[1.5px] border-solid border-t-[1.5px] inset-[-1.5px_-1.5px_-4px_-1.5px] pointer-events-none rounded-[7.5px]" />
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.6] not-italic relative shrink-0 text-[#020205] text-[18px] whitespace-nowrap">Read more</p>
      </div>
      <div className="content-stretch flex gap-[8px] items-center justify-center relative rounded-[6px] shrink-0" data-name="Button">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.6] not-italic relative shrink-0 text-[#020205] text-[18px] whitespace-nowrap">View</p>
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

function Column7() {
  return (
    <div className="flex-[1_0_0] h-full max-w-[560px] min-w-px relative" data-name="Column">
      <div className="flex flex-col justify-center max-w-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[32px] items-start justify-center max-w-[inherit] p-[48px] relative size-full">
          <Content21 />
          <Actions3 />
        </div>
      </div>
    </div>
  );
}

function Stars() {
  return (
    <div className="h-[24px] relative shrink-0 w-[140.329px]" data-name="Stars">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 140.329 24">
        <g clipPath="url(#clip0_1_774)" id="Stars">
          <path d={svgPaths.p4345400} fill="var(--fill-0, #020205)" id="Vector" />
          <path d={svgPaths.p2d594380} fill="var(--fill-0, #020205)" id="Vector_2" />
          <path d={svgPaths.p22697f40} fill="var(--fill-0, #020205)" id="Vector_3" />
          <path d={svgPaths.p91a4000} fill="var(--fill-0, #020205)" id="Vector_4" />
          <path d={svgPaths.p1be16800} fill="var(--fill-0, #020205)" id="Vector_5" />
        </g>
        <defs>
          <clipPath id="clip0_1_774">
            <rect fill="white" height="24" width="140.329" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Content24() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Content">
      <Stars />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.6] min-w-full not-italic relative shrink-0 text-[#020205] text-[20px] w-[min-content]">{`"They understood the deal when banks wouldn't even look at it."`}</p>
    </div>
  );
}

function AvatarContent() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start leading-[1.6] min-w-px not-italic relative text-[#020205] text-[18px]" data-name="Avatar Content">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 w-full">Michael Chen</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 w-full">Developer, Sydney</p>
    </div>
  );
}

function Avatar() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="Avatar">
      <div className="relative shrink-0 size-[56px]" data-name="Avatar Image">
        <img alt="" className="absolute block inset-0 max-w-none size-full" height="56" src={imgAvatarImage} width="56" />
      </div>
      <AvatarContent />
    </div>
  );
}

function Card1() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Card">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-start p-[32px] relative size-full">
          <Content24 />
          <Avatar />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(2,2,5,0.15)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Stars1() {
  return (
    <div className="h-[24px] relative shrink-0 w-[140.329px]" data-name="Stars">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 140.329 24">
        <g clipPath="url(#clip0_1_774)" id="Stars">
          <path d={svgPaths.p4345400} fill="var(--fill-0, #020205)" id="Vector" />
          <path d={svgPaths.p2d594380} fill="var(--fill-0, #020205)" id="Vector_2" />
          <path d={svgPaths.p22697f40} fill="var(--fill-0, #020205)" id="Vector_3" />
          <path d={svgPaths.p91a4000} fill="var(--fill-0, #020205)" id="Vector_4" />
          <path d={svgPaths.p1be16800} fill="var(--fill-0, #020205)" id="Vector_5" />
        </g>
        <defs>
          <clipPath id="clip0_1_774">
            <rect fill="white" height="24" width="140.329" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Content25() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Content">
      <Stars1 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.6] min-w-full not-italic relative shrink-0 text-[#020205] text-[20px] w-[min-content]">{`"Capital Unique moved with precision where others moved with hesitation."`}</p>
    </div>
  );
}

function AvatarContent1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start leading-[1.6] min-w-px not-italic relative text-[#020205] text-[18px]" data-name="Avatar Content">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 w-full">James Morrison</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 w-full">Property developer, Melbourne</p>
    </div>
  );
}

function Avatar1() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="Avatar">
      <div className="relative shrink-0 size-[56px]" data-name="Avatar Image">
        <img alt="" className="absolute block inset-0 max-w-none size-full" height="56" src={imgAvatarImage1} width="56" />
      </div>
      <AvatarContent1 />
    </div>
  );
}

function Card2() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Card">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-start p-[32px] relative size-full">
          <Content25 />
          <Avatar1 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(2,2,5,0.15)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Stars2() {
  return (
    <div className="h-[24px] relative shrink-0 w-[140.329px]" data-name="Stars">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 140.329 24">
        <g clipPath="url(#clip0_1_774)" id="Stars">
          <path d={svgPaths.p4345400} fill="var(--fill-0, #020205)" id="Vector" />
          <path d={svgPaths.p2d594380} fill="var(--fill-0, #020205)" id="Vector_2" />
          <path d={svgPaths.p22697f40} fill="var(--fill-0, #020205)" id="Vector_3" />
          <path d={svgPaths.p91a4000} fill="var(--fill-0, #020205)" id="Vector_4" />
          <path d={svgPaths.p1be16800} fill="var(--fill-0, #020205)" id="Vector_5" />
        </g>
        <defs>
          <clipPath id="clip0_1_774">
            <rect fill="white" height="24" width="140.329" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Content26() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Content">
      <Stars2 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.6] min-w-full not-italic relative shrink-0 text-[#020205] text-[20px] w-[min-content]">{`"The process was transparent from start to finish, no hidden costs or surprises."`}</p>
    </div>
  );
}

function AvatarContent2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start leading-[1.6] min-w-px not-italic relative text-[#020205] text-[18px]" data-name="Avatar Content">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 w-full">Sarah Winters</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 w-full">Business owner, Brisbane</p>
    </div>
  );
}

function Avatar2() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="Avatar">
      <div className="relative shrink-0 size-[56px]" data-name="Avatar Image">
        <img alt="" className="absolute block inset-0 max-w-none size-full" height="56" src={imgAvatarImage} width="56" />
      </div>
      <AvatarContent2 />
    </div>
  );
}

function Card3() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Card">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-start p-[32px] relative size-full">
          <Content26 />
          <Avatar2 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(2,2,5,0.15)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Stars3() {
  return (
    <div className="h-[24px] relative shrink-0 w-[140.329px]" data-name="Stars">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 140.329 24">
        <g clipPath="url(#clip0_1_774)" id="Stars">
          <path d={svgPaths.p4345400} fill="var(--fill-0, #020205)" id="Vector" />
          <path d={svgPaths.p2d594380} fill="var(--fill-0, #020205)" id="Vector_2" />
          <path d={svgPaths.p22697f40} fill="var(--fill-0, #020205)" id="Vector_3" />
          <path d={svgPaths.p91a4000} fill="var(--fill-0, #020205)" id="Vector_4" />
          <path d={svgPaths.p1be16800} fill="var(--fill-0, #020205)" id="Vector_5" />
        </g>
        <defs>
          <clipPath id="clip0_1_774">
            <rect fill="white" height="24" width="140.329" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Content27() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Content">
      <Stars3 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.6] min-w-full not-italic relative shrink-0 text-[#020205] text-[20px] w-[min-content]">{`"They treated our capital with the same care we do, which is rare."`}</p>
    </div>
  );
}

function AvatarContent3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start leading-[1.6] min-w-px not-italic relative text-[#020205] text-[18px]" data-name="Avatar Content">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 w-full">David Rothschild</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 w-full">Investor, Sydney</p>
    </div>
  );
}

function Avatar3() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="Avatar">
      <div className="relative shrink-0 size-[56px]" data-name="Avatar Image">
        <img alt="" className="absolute block inset-0 max-w-none size-full" height="56" src={imgAvatarImage} width="56" />
      </div>
      <AvatarContent3 />
    </div>
  );
}

function Card4() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Card">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-start p-[32px] relative size-full">
          <Content27 />
          <Avatar3 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(2,2,5,0.15)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Stars4() {
  return (
    <div className="h-[24px] relative shrink-0 w-[140.329px]" data-name="Stars">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 140.329 24">
        <g clipPath="url(#clip0_1_774)" id="Stars">
          <path d={svgPaths.p4345400} fill="var(--fill-0, #020205)" id="Vector" />
          <path d={svgPaths.p2d594380} fill="var(--fill-0, #020205)" id="Vector_2" />
          <path d={svgPaths.p22697f40} fill="var(--fill-0, #020205)" id="Vector_3" />
          <path d={svgPaths.p91a4000} fill="var(--fill-0, #020205)" id="Vector_4" />
          <path d={svgPaths.p1be16800} fill="var(--fill-0, #020205)" id="Vector_5" />
        </g>
        <defs>
          <clipPath id="clip0_1_774">
            <rect fill="white" height="24" width="140.329" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Content28() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Content">
      <Stars4 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.6] min-w-full not-italic relative shrink-0 text-[#020205] text-[20px] w-[min-content]">{`"Fast decisions without cutting corners, that's what sets them apart."`}</p>
    </div>
  );
}

function AvatarContent4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start leading-[1.6] min-w-px not-italic relative text-[#020205] text-[18px]" data-name="Avatar Content">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 w-full">Emma Chen</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 w-full">Entrepreneur, Perth</p>
    </div>
  );
}

function Avatar4() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="Avatar">
      <div className="relative shrink-0 size-[56px]" data-name="Avatar Image">
        <img alt="" className="absolute block inset-0 max-w-none size-full" height="56" src={imgAvatarImage} width="56" />
      </div>
      <AvatarContent4 />
    </div>
  );
}

function Card5() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Card">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-start p-[32px] relative size-full">
          <Content28 />
          <Avatar4 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(2,2,5,0.15)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Content23() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] items-start left-0 top-[-108px] w-[336px]" data-name="Content">
      <Card1 />
      <Card2 />
      <Card3 />
      <Card4 />
      <Card5 />
    </div>
  );
}

function Content22() {
  return (
    <div className="flex-[1_0_0] h-full min-w-px overflow-clip relative" data-name="Content">
      <Content23 />
    </div>
  );
}

function Stars5() {
  return (
    <div className="h-[24px] relative shrink-0 w-[140.329px]" data-name="Stars">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 140.329 24">
        <g clipPath="url(#clip0_1_774)" id="Stars">
          <path d={svgPaths.p4345400} fill="var(--fill-0, #020205)" id="Vector" />
          <path d={svgPaths.p2d594380} fill="var(--fill-0, #020205)" id="Vector_2" />
          <path d={svgPaths.p22697f40} fill="var(--fill-0, #020205)" id="Vector_3" />
          <path d={svgPaths.p91a4000} fill="var(--fill-0, #020205)" id="Vector_4" />
          <path d={svgPaths.p1be16800} fill="var(--fill-0, #020205)" id="Vector_5" />
        </g>
        <defs>
          <clipPath id="clip0_1_774">
            <rect fill="white" height="24" width="140.329" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Content31() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Content">
      <Stars5 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.6] min-w-full not-italic relative shrink-0 text-[#020205] text-[20px] w-[min-content]">{`"They listened more than they talked, which told me everything I needed to know."`}</p>
    </div>
  );
}

function AvatarContent5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start leading-[1.6] min-w-px not-italic relative text-[#020205] text-[18px]" data-name="Avatar Content">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 w-full">Robert Keane</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 w-full">Family office director, Adelaide</p>
    </div>
  );
}

function Avatar5() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="Avatar">
      <div className="relative shrink-0 size-[56px]" data-name="Avatar Image">
        <img alt="" className="absolute block inset-0 max-w-none size-full" height="56" src={imgAvatarImage} width="56" />
      </div>
      <AvatarContent5 />
    </div>
  );
}

function Card6() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Card">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-start p-[32px] relative size-full">
          <Content31 />
          <Avatar5 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(2,2,5,0.15)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Stars6() {
  return (
    <div className="h-[24px] relative shrink-0 w-[140.329px]" data-name="Stars">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 140.329 24">
        <g clipPath="url(#clip0_1_774)" id="Stars">
          <path d={svgPaths.p4345400} fill="var(--fill-0, #020205)" id="Vector" />
          <path d={svgPaths.p2d594380} fill="var(--fill-0, #020205)" id="Vector_2" />
          <path d={svgPaths.p22697f40} fill="var(--fill-0, #020205)" id="Vector_3" />
          <path d={svgPaths.p91a4000} fill="var(--fill-0, #020205)" id="Vector_4" />
          <path d={svgPaths.p1be16800} fill="var(--fill-0, #020205)" id="Vector_5" />
        </g>
        <defs>
          <clipPath id="clip0_1_774">
            <rect fill="white" height="24" width="140.329" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Content32() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Content">
      <Stars6 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.6] min-w-full not-italic relative shrink-0 text-[#020205] text-[20px] w-[min-content]">{`"Real partnership, not just a transaction, that's what we found here."`}</p>
    </div>
  );
}

function AvatarContent6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start leading-[1.6] min-w-px not-italic relative text-[#020205] text-[18px]" data-name="Avatar Content">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 w-full">Victoria Lane</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 w-full">Real estate investor, Hobart</p>
    </div>
  );
}

function Avatar6() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="Avatar">
      <div className="relative shrink-0 size-[56px]" data-name="Avatar Image">
        <img alt="" className="absolute block inset-0 max-w-none size-full" height="56" src={imgAvatarImage} width="56" />
      </div>
      <AvatarContent6 />
    </div>
  );
}

function Card7() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Card">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-start p-[32px] relative size-full">
          <Content32 />
          <Avatar6 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(2,2,5,0.15)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Stars7() {
  return (
    <div className="h-[24px] relative shrink-0 w-[140.329px]" data-name="Stars">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 140.329 24">
        <g clipPath="url(#clip0_1_774)" id="Stars">
          <path d={svgPaths.p4345400} fill="var(--fill-0, #020205)" id="Vector" />
          <path d={svgPaths.p2d594380} fill="var(--fill-0, #020205)" id="Vector_2" />
          <path d={svgPaths.p22697f40} fill="var(--fill-0, #020205)" id="Vector_3" />
          <path d={svgPaths.p91a4000} fill="var(--fill-0, #020205)" id="Vector_4" />
          <path d={svgPaths.p1be16800} fill="var(--fill-0, #020205)" id="Vector_5" />
        </g>
        <defs>
          <clipPath id="clip0_1_774">
            <rect fill="white" height="24" width="140.329" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Content33() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Content">
      <Stars7 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.6] min-w-full not-italic relative shrink-0 text-[#020205] text-[20px] w-[min-content]">{`"They delivered exactly what they promised, on time and with integrity."`}</p>
    </div>
  );
}

function AvatarContent7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start leading-[1.6] min-w-px not-italic relative text-[#020205] text-[18px]" data-name="Avatar Content">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 w-full">Marcus Webb</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 w-full">Construction company owner, Gold Coast</p>
    </div>
  );
}

function Avatar7() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="Avatar">
      <div className="relative shrink-0 size-[56px]" data-name="Avatar Image">
        <img alt="" className="absolute block inset-0 max-w-none size-full" height="56" src={imgAvatarImage} width="56" />
      </div>
      <AvatarContent7 />
    </div>
  );
}

function Card8() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Card">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-start p-[32px] relative size-full">
          <Content33 />
          <Avatar7 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(2,2,5,0.15)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Stars8() {
  return (
    <div className="h-[24px] relative shrink-0 w-[140.329px]" data-name="Stars">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 140.329 24">
        <g clipPath="url(#clip0_1_774)" id="Stars">
          <path d={svgPaths.p4345400} fill="var(--fill-0, #020205)" id="Vector" />
          <path d={svgPaths.p2d594380} fill="var(--fill-0, #020205)" id="Vector_2" />
          <path d={svgPaths.p22697f40} fill="var(--fill-0, #020205)" id="Vector_3" />
          <path d={svgPaths.p91a4000} fill="var(--fill-0, #020205)" id="Vector_4" />
          <path d={svgPaths.p1be16800} fill="var(--fill-0, #020205)" id="Vector_5" />
        </g>
        <defs>
          <clipPath id="clip0_1_774">
            <rect fill="white" height="24" width="140.329" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Content34() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Content">
      <Stars8 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.6] min-w-full not-italic relative shrink-0 text-[#020205] text-[20px] w-[min-content]">{`"Capital Unique proved that speed and thoughtfulness aren't mutually exclusive."`}</p>
    </div>
  );
}

function AvatarContent8() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start leading-[1.6] min-w-px not-italic relative text-[#020205] text-[18px]" data-name="Avatar Content">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 w-full">Nicole Hartley</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 w-full">Investment advisor, Canberra</p>
    </div>
  );
}

function Avatar8() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="Avatar">
      <div className="relative shrink-0 size-[56px]" data-name="Avatar Image">
        <img alt="" className="absolute block inset-0 max-w-none size-full" height="56" src={imgAvatarImage} width="56" />
      </div>
      <AvatarContent8 />
    </div>
  );
}

function Card9() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Card">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-start p-[32px] relative size-full">
          <Content34 />
          <Avatar8 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(2,2,5,0.15)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Content30() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] items-start left-0 top-[-279px] w-[336px]" data-name="Content">
      <Card6 />
      <Card7 />
      <Card8 />
      <Card9 />
    </div>
  );
}

function Content29() {
  return (
    <div className="flex-[1_0_0] h-[900px] min-w-px overflow-clip relative" data-name="Content">
      <Content30 />
    </div>
  );
}

function Column8() {
  return (
    <div className="flex-[1_0_0] h-full min-w-px relative" data-name="Column">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[16px] items-center pr-[32px] relative size-full">
          <Content22 />
          <Content29 />
        </div>
      </div>
    </div>
  );
}

function Card() {
  return (
    <div className="bg-[#f2f2f2] h-[900px] relative rounded-[8px] shrink-0 w-full" data-name="Card">
      <div className="content-stretch flex items-center overflow-clip relative rounded-[inherit] size-full">
        <Column7 />
        <Column8 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(2,2,5,0.15)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <Card />
    </div>
  );
}

function Testimonial() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Testimonial / 33 /">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center px-[64px] py-[80px] relative size-full">
          <Container7 />
        </div>
      </div>
    </div>
  );
}

function Content37() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0 text-center text-white w-full" data-name="Content">
      <p className="font-['Montserrat:Bold',sans-serif] font-bold leading-[1.2] relative shrink-0 text-[60px] tracking-[0.6px] w-full">Ready to discuss your scenario</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.6] not-italic relative shrink-0 text-[20px] w-full">{`Let's talk through what you need and how we can help.`}</p>
    </div>
  );
}

function Actions4() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0" data-name="Actions">
      <div className="bg-[#cd722d] content-stretch flex items-center justify-center px-[24px] py-[10px] relative rounded-[6px] shrink-0" data-name="Button">
        <div aria-hidden="true" className="absolute border-[#a45b24] border-b-4 border-l-[1.5px] border-r-[1.5px] border-solid border-t-[1.5px] inset-[-1.5px_-1.5px_-4px_-1.5px] pointer-events-none rounded-[7.5px]" />
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.6] not-italic relative shrink-0 text-[18px] text-white whitespace-nowrap">Enquire</p>
      </div>
      <div className="content-stretch flex items-center justify-center px-[24px] py-[10px] relative rounded-[6px] shrink-0" data-name="Button">
        <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.2)] border-b-4 border-l-[1.5px] border-r-[1.5px] border-solid border-t-[1.5px] inset-[-1.5px_-1.5px_-4px_-1.5px] pointer-events-none rounded-[7.5px]" />
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.6] not-italic relative shrink-0 text-[18px] text-white whitespace-nowrap">Learn</p>
      </div>
    </div>
  );
}

function Content36() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-center max-w-[768px] relative shrink-0 w-full" data-name="Content">
      <Content37 />
      <Actions4 />
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col items-center max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <Content36 />
    </div>
  );
}

function Content35() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center px-[64px] py-[112px] relative size-full">
          <Container8 />
        </div>
      </div>
    </div>
  );
}

function Cta() {
  return (
    <div className="bg-[#020205] content-stretch flex flex-col items-center overflow-clip relative shrink-0 w-full" data-name="CTA / 65 /">
      <Content35 />
      <div className="aspect-[1440/810] relative shrink-0 w-full" data-name="Placeholder Image">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgPlaceholderImage5} />
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

function Content38() {
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

function Actions5() {
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
      <Content38 />
      <Actions5 />
    </div>
  );
}

function Card10() {
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

function Component1() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full" data-name="Component">
      <Card10 />
      <Credits />
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <Component1 />
    </div>
  );
}

function Footer() {
  return (
    <div className="bg-[#1b1b1e] relative shrink-0 w-full" data-name="Footer / 10 /">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center px-[64px] py-[80px] relative size-full">
          <Container9 />
        </div>
      </div>
    </div>
  );
}

function OverviewDesktop() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 overflow-clip top-0 w-[1440px]" data-name="Overview • Desktop">
      <Navbar />
      <Header />
      <Logo />
      <Layout />
      <Layout2 />
      <Layout1 />
      <Gallery />
      <Testimonial />
      <Cta />
      <Footer />
    </div>
  );
}

export default function Frame() {
  return (
    <div className="relative size-full">
      <OverviewDesktop />
    </div>
  );
}