import { useState } from 'react';
import svgPaths from "./imports/svg-77jlqsn1tn";
import imgImage34 from "figma:asset/d6bf21fe15e36fa7379e3706acbb1dcbaeaa9b4c.png";
import imgImage35 from "figma:asset/50bfc345994d35d7efe580c06ba6d70a69649bdb.png";

interface Person {
  id: string;
  name: string;
  role: string;
  image: string;
  imagePosition: string;
}

const people: Person[] = [
  { id: '1', name: 'Ксюша Кадак', role: 'UX-designer', image: imgImage34, imagePosition: 'top-[-135.29%]' },
  { id: '2', name: 'Никита Савельев', role: 'UX-designer', image: imgImage34, imagePosition: 'top-[-260.7%]' },
  { id: '3', name: 'Андрей Базарнов', role: 'UX-designer', image: imgImage34, imagePosition: 'top-[-386.48%]' },
  { id: '4', name: 'Макс Муратов', role: 'UX-designer', image: imgImage34, imagePosition: 'top-[-511.75%]' },
  { id: '5', name: 'Тамила Ахмедова', role: 'UX-designer', image: imgImage34, imagePosition: 'top-[-762.57%]' },
  { id: '6', name: 'Виталя Туров', role: 'UX-designer', image: imgImage34, imagePosition: 'top-[-888.54%]' },
  { id: '7', name: 'Настя Квасова', role: 'UX-designer', image: imgImage34, imagePosition: 'top-[-1013.45%]' },
  { id: '8', name: 'Стася Алексеева', role: 'UX-designer', image: imgImage35, imagePosition: 'top-[-146.97%]' },
  { id: '9', name: 'Андрей Наринский', role: 'UI-designer', image: imgImage35, imagePosition: 'top-[-398.18%]' },
  { id: '10', name: 'Марго Борович', role: 'UХ-designer', image: imgImage35, imagePosition: 'top-[-523.76%]' },
  { id: '11', name: 'Тим Цаликов', role: 'UХ-designer', image: imgImage35, imagePosition: 'top-[-648.98%]' },
  { id: '12', name: 'Суфия Багаутдинова', role: 'UХ-designer', image: imgImage35, imagePosition: 'top-[-774.57%]' },
  { id: '13', name: 'Буза Серёжа', role: 'React-developer', image: imgImage35, imagePosition: 'top-[-272.4%]' },
  { id: '14', name: 'Григорьев Андрей', role: 'UX-researcher', image: imgImage35, imagePosition: 'top-[-21.19%]' },
  { id: '15', name: 'Лев Бруев', role: 'Python-developer', image: imgImage34, imagePosition: 'top-[-637.3%]' },
];

interface PersonCardProps {
  person: Person;
  isSelected: boolean;
  isHighlighted?: boolean;
  onClick: () => void;
}

function PersonCard({ person, isSelected, isHighlighted, onClick }: PersonCardProps) {
  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // Предотвращаем всплытие события
    onClick();
  };

  return (
    <div 
      className={`box-border content-stretch flex flex-col gap-[10px] items-start p-[10px] relative rounded-[12px] shrink-0 w-[242px] cursor-pointer transition-all ${
        isSelected 
          ? 'bg-[#2a2a2d] ring-2 ring-[#2977FF]' 
          : isHighlighted
          ? 'bg-[#2a2a2d] ring-2 ring-[#2977FF] animate-pulse'
          : 'bg-[#1a1a1d] hover:bg-[#222225]'
      }`}
      onClick={handleClick}
    >
      <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full">
        <div className="relative rounded-[100px] shrink-0 size-[32px]">
          <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[100px]">
            <img 
              alt={person.name} 
              className="absolute max-w-none"
              style={{
                height: person.image === imgImage34 ? '1117.65%' : '902.17%',
                left: person.image === imgImage34 ? '-7.84%' : '-21.74%',
                top: person.imagePosition.replace('top-[', '').replace(']', ''),
                width: person.image === imgImage34 ? '119.61%' : '713.29%'
              }}
              src={person.image} 
            />
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[2px] items-start not-italic relative self-stretch shrink-0 text-nowrap whitespace-pre">
          <p className="font-['Inter_Display:700',sans-serif] leading-[20px] relative shrink-0 text-[#f4f4f6] text-[14px] tracking-[0.38px]">
            {person.name}
          </p>
          <p className="font-['Inter:400',sans-serif] leading-[16px] relative shrink-0 text-[12px] text-[rgba(244,244,246,0.66)]">
            {person.role}
          </p>
        </div>
      </div>
    </div>
  );
}

function PlayCard() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="play-card">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="play-card">
          <path d={svgPaths.p1bcbe600} id="Vector" stroke="var(--stroke-0, #F4F4F6)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.3" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

export default function App() {
  const [selectedPersonId, setSelectedPersonId] = useState<string | null>(null);
  const [reviewer, setReviewer] = useState<Person | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [highlightedPersonId, setHighlightedPersonId] = useState<string | null>(null);

  const handleSelectPerson = (personId: string) => {
    // Если кликнули на уже выбранную карточку, снимаем выделение
    if (selectedPersonId === personId) {
      setSelectedPersonId(null);
    } else {
      setSelectedPersonId(personId);
    }
    setReviewer(null);
  };

  const handleFindReviewer = () => {
    if (!selectedPersonId) return;
    
    setIsAnimating(true);
    setReviewer(null);
    
    // Исключаем выбранного человека из списка возможных ревьюеров
    const availableReviewers = people.filter(p => p.id !== selectedPersonId);
    const randomIndex = Math.floor(Math.random() * availableReviewers.length);
    const selectedReviewer = availableReviewers[randomIndex];
    
    // Анимация перебора карточек
    let currentIndex = 0;
    let iterationCount = 0;
    const maxIterations = 20; // Количество переключений
    
    const interval = setInterval(() => {
      // Выбираем случайную карточку из доступных
      const randomPerson = availableReviewers[currentIndex % availableReviewers.length];
      setHighlightedPersonId(randomPerson.id);
      
      currentIndex++;
      iterationCount++;
      
      // Останавливаем анимацию
      if (iterationCount >= maxIterations) {
        clearInterval(interval);
        
        // Показываем финальный результат
        setTimeout(() => {
          setHighlightedPersonId(null);
          setReviewer(selectedReviewer);
          setIsAnimating(false);
        }, 300);
      }
    }, 80); // Скорость переключения карточек
  };

  const column1 = people.slice(0, 4);
  const column2 = people.slice(4, 8);
  const column3 = people.slice(8, 12);
  const column4 = people.slice(12, 15);

  const handleBackgroundClick = () => {
    // Снимаем выделение при клике на пустое место
    setSelectedPersonId(null);
    setReviewer(null);
  };

  return (
    <div className="bg-[#111113] relative size-full" data-name="MacBook Pro 14' - 4" onClick={handleBackgroundClick}>
      <div className="absolute content-stretch flex gap-[36px] items-start left-1/2 top-[210px] translate-x-[-50%]">
        <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0">
          {column1.map(person => (
            <PersonCard
              key={person.id}
              person={person}
              isSelected={selectedPersonId === person.id}
              isHighlighted={highlightedPersonId === person.id}
              onClick={() => handleSelectPerson(person.id)}
            />
          ))}
        </div>
        
        <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0">
          {column2.map(person => (
            <PersonCard
              key={person.id}
              person={person}
              isSelected={selectedPersonId === person.id}
              isHighlighted={highlightedPersonId === person.id}
              onClick={() => handleSelectPerson(person.id)}
            />
          ))}
        </div>
        
        <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-[242px]">
          {column3.map(person => (
            <PersonCard
              key={person.id}
              person={person}
              isSelected={selectedPersonId === person.id}
              isHighlighted={highlightedPersonId === person.id}
              onClick={() => handleSelectPerson(person.id)}
            />
          ))}
        </div>
        
        <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-[242px]">
          {column4.map(person => (
            <PersonCard
              key={person.id}
              person={person}
              isSelected={selectedPersonId === person.id}
              isHighlighted={highlightedPersonId === person.id}
              onClick={() => handleSelectPerson(person.id)}
            />
          ))}
        </div>
      </div>

      <p className="absolute font-['Inter:400',sans-serif] leading-[24px] left-1/2 not-italic text-[16px] text-[rgba(244,244,246,0.66)] text-center text-nowrap top-[146px] translate-x-[-50%] whitespace-pre">
        {`Выбираем себя   →   жмём кнопку   →   получаем ревьюера`}
      </p>
      
      <p 
        className="absolute bg-clip-text font-['Inter_Display:SemiBold',sans-serif] leading-[44px] left-[calc(50%-235px)] not-italic text-[48px] text-nowrap top-[80px] whitespace-pre" 
        style={{ 
          background: 'linear-gradient(45deg, #1A3373 14.64%, #2977FF 85.36%)',
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}
      >
        Cross-review roulette
      </p>
      
      <button
        onClick={handleFindReviewer}
        disabled={!selectedPersonId || isAnimating}
        className={`absolute box-border content-stretch flex gap-[12px] items-center justify-center left-1/2 overflow-clip px-[32px] py-[16px] rounded-[16px] top-[542px] translate-x-[-50%] transition-all ${
          selectedPersonId && !isAnimating
            ? 'bg-[#2977FF] cursor-pointer hover:bg-[#1e5fd9]'
            : 'bg-[rgba(198,195,223,0.2)] cursor-not-allowed'
        }`}
      >
        <PlayCard />
        <div className={`flex flex-col font-['Inter:400',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-nowrap ${
          selectedPersonId && !isAnimating ? 'text-[#f4f4f6]' : 'text-[rgba(244,244,246,0.3)]'
        }`}>
          <p className="leading-[20px] whitespace-pre">
            {isAnimating ? 'Подб��раем...' : 'Подобрать ревьюера'}
          </p>
        </div>
      </button>

      {reviewer && (
        <div className="absolute left-1/2 top-[610px] translate-x-[-50%] flex flex-col items-center gap-[12px] animate-in fade-in slide-in-from-bottom-4 duration-500">
          <p className="font-['Inter:400',sans-serif] text-[14px] text-[rgba(244,244,246,0.66)]">
            Ваш ревьюер:
          </p>
          <div className="relative">
            {/* Эффект свечения */}
            <div className="absolute inset-[-123.46%_-35.71%]" style={{ "--fill-0": "rgba(71, 139, 255, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 480 281">
                <g filter="url(#filter0_f_5_3404)" id="Ellipse 850">
                  <ellipse cx="240" cy="140.5" fill="var(--fill-0, #478BFF)" rx="140" ry="40.5" />
                </g>
                <defs>
                  <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="281" id="filter0_f_5_3404" width="480" x="0" y="0">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                    <feGaussianBlur result="effect1_foregroundBlur_5_3404" stdDeviation="50" />
                  </filter>
                </defs>
              </svg>
            </div>
            
            <div className="relative bg-[#2a2a2d] box-border content-stretch flex gap-[12px] items-center px-[20px] py-[12px] rounded-[12px] ring-2 ring-[#2977FF]">
              <div className="relative rounded-[100px] shrink-0 size-[40px]">
                <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[100px]">
                  <img 
                    alt={reviewer.name}
                    className="absolute max-w-none"
                    style={{
                      height: reviewer.image === imgImage34 ? '1117.65%' : '902.17%',
                      left: reviewer.image === imgImage34 ? '-7.84%' : '-21.74%',
                      top: reviewer.imagePosition.replace('top-[', '').replace(']', ''),
                      width: reviewer.image === imgImage34 ? '119.61%' : '713.29%'
                    }}
                    src={reviewer.image}
                  />
                </div>
              </div>
              <div className="flex flex-col gap-[2px]">
                <p className="font-['Inter_Display:700',sans-serif] leading-[20px] text-[#f4f4f6] text-[16px] tracking-[0.38px]">
                  {reviewer.name}
                </p>
                <p className="font-['Inter:400',sans-serif] leading-[16px] text-[12px] text-[rgba(244,244,246,0.66)]">
                  {reviewer.role}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}