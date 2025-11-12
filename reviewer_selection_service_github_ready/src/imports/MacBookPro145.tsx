import imgImage34 from "figma:asset/d6bf21fe15e36fa7379e3706acbb1dcbaeaa9b4c.png";

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start not-italic relative self-stretch shrink-0 text-nowrap whitespace-pre">
      <p className="font-['Inter_Display:700',sans-serif] leading-[20px] relative shrink-0 text-[#f4f4f6] text-[14px] tracking-[0.38px]">Лев Бруев</p>
      <p className="font-['Inter:400',sans-serif] leading-[16px] relative shrink-0 text-[12px] text-[rgba(244,244,246,0.66)]">Python-developer</p>
    </div>
  );
}

function AvatarNameCard() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="Avatar / Name card">
      <div className="relative rounded-[100px] shrink-0 size-[32px]" data-name="image 34">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[100px]">
          <img alt="" className="absolute h-[1117.65%] left-[-7.84%] max-w-none top-[-637.3%] w-[119.61%]" src={imgImage34} />
        </div>
      </div>
      <Frame />
    </div>
  );
}

function Component() {
  return (
    <div className="absolute bg-[#1a1a1d] box-border content-stretch flex flex-col gap-[10px] items-start left-[80px] p-[10px] rounded-[12px] top-[67px] w-[242px]" data-name="Григорьев Андрей">
      <AvatarNameCard />
    </div>
  );
}

export default function MacBookPro() {
  return (
    <div className="bg-[#111113] relative size-full" data-name="MacBook Pro 14' - 5">
      <Component />
    </div>
  );
}