import svgPaths from "./svg-ztvs5wd78p";

function Group() {
  return (
    <div className="absolute inset-[4.35%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 19">
        <g id="Group">
          <path d={svgPaths.pe157c00} fill="var(--fill-0, #4CAF50)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute inset-[37.55%_33.4%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 5">
        <g id="Group">
          <path d={svgPaths.p2458a500} fill="var(--fill-0, #4CAF50)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents inset-[4.35%]" data-name="Group">
      <Group />
      <Group1 />
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents inset-[4.35%]" data-name="Group">
      <Group2 />
    </div>
  );
}

export default function CircleCheck() {
  return (
    <div className="relative size-full" data-name="circle-check">
      <Group3 />
    </div>
  );
}