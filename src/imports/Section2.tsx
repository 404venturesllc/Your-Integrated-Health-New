import svgPaths from "./svg-gpi4zhaybb";

function ButtoN() {
  return (
    <div className="absolute contents inset-[67.87%_17.93%_7.27%_71.65%]" data-name="Butto n">
      <div className="absolute inset-[67.87%_17.93%_12.64%_71.65%]" data-name="Background">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="Background"></g>
        </svg>
      </div>
      <div className="absolute inset-[72.7%_19.39%_21.73%_79.3%]" data-name="Arrow">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 24">
          <path d={svgPaths.p25e13700} fill="var(--fill-0, white)" id="Arrow" />
        </svg>
      </div>
      <p className="absolute font-['Poppins:SemiBold',_sans-serif] inset-[73.19%_20.95%_7.27%_71.65%] leading-[normal] not-italic text-[13.19px] text-white uppercase">Start The Quiz</p>
    </div>
  );
}

function ButtoN1() {
  return (
    <div className="absolute contents inset-[21.74%_10.98%_35.77%_64.14%]" data-name="Butto n">
      <div className="absolute inset-[28.02%_10.98%_59.9%_64.14%]" data-name="Background">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 394 50">
          <path d={svgPaths.p3f58d3b2} fill="var(--fill-0, white)" id="Background" />
        </svg>
      </div>
      <p className="absolute font-['Poppins:Regular',_sans-serif] inset-[21.74%_26.77%_65.72%_64.58%] leading-[normal] not-italic text-[12px] text-white">Name</p>
      <p className="absolute font-['Poppins:Regular',_sans-serif] inset-[32.13%_26.45%_55.34%_64.9%] leading-[normal] not-italic text-[#bdbdbd] text-[12px]">Name</p>
      <p className="absolute font-['Poppins:Regular',_sans-serif] inset-[51.69%_26.58%_35.77%_64.77%] leading-[normal] not-italic text-[#bdbdbd] text-[12px]">Name</p>
    </div>
  );
}

function ButtoN2() {
  return (
    <div className="absolute contents inset-[42.75%_10.98%_35.77%_64.14%]" data-name="Butto n">
      <div className="absolute inset-[47.83%_10.98%_40.1%_64.14%]" data-name="Background">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 394 50">
          <path d={svgPaths.p3f58d3b2} fill="var(--fill-0, white)" id="Background" />
        </svg>
      </div>
      <p className="absolute font-['Poppins:Regular',_sans-serif] inset-[42.75%_26.77%_44.71%_64.58%] leading-[normal] not-italic text-[12px] text-white">Email</p>
      <p className="absolute font-['Poppins:Regular',_sans-serif] inset-[51.69%_26.58%_35.77%_64.77%] leading-[normal] not-italic text-[#aeaeae] text-[12px]">Email</p>
    </div>
  );
}

function Buttons() {
  return (
    <div className="absolute contents inset-[21.74%_10.98%_7.27%_64.14%]" data-name="Buttons">
      <ButtoN />
      <ButtoN1 />
      <ButtoN2 />
    </div>
  );
}

export default function Section2() {
  return (
    <div className="relative size-full" data-name="Section -2">
      <div className="absolute inset-0" data-name="Background">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1584 414">
          <path d={svgPaths.p25a97000} fill="url(#paint0_linear_1_1175)" id="Background" opacity="0.93" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_1175" x1="2141" x2="2155.18" y1="1118" y2="-51.3335">
              <stop stopColor="white" />
              <stop offset="0.383068" stopColor="#61A94E" stopOpacity="0.37" />
              <stop offset="0.909333" stopColor="#236189" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <Buttons />
      <p className="absolute font-['Poppins:Regular',_sans-serif] inset-[55.31%_48.48%_14.73%_17.36%] leading-[normal] not-italic text-[24px] text-white">Take our $97 Hormone Health Quiz to get clarity and get a personalized report.</p>
      <p className="absolute font-['Poppins:SemiBold',_sans-serif] inset-[19.75%_44.57%_60.81%_17.23%] leading-[normal] not-italic text-[38px] text-white uppercase">Is Hormone imbalance affecting you?</p>
    </div>
  );
}