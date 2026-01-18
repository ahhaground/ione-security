import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-slate-950 py-16 text-slate-400 text-sm border-t border-slate-900">
      <div className="container mx-auto px-6">
        
        {/* 상단: 로고와 정보가 왼쪽으로 나란히 배치 */}
        <div className="flex flex-col md:flex-row justify-start items-center gap-10 mb-10">
          
          {/* 1. 로고 */}
          <Link href="/" className="shrink-0 relative h-10 w-32">
            <Image 
              src="/img/logo.png" 
              alt="아이원시큐리티" 
              fill
              sizes="(max-width: 768px) 100px, 128px"
              className="object-contain grayscale opacity-70"
              loading="lazy"
            />
          </Link>

          {/* 2. 회사 정보 (왼쪽 정렬, 폰트 크기 조정) */}
          <div className="text-left space-y-1">
            <p className="font-bold text-white text-[15px]">(주)아이원시큐리티</p>
            <div className="text-[13px] leading-relaxed">
              <p>사업자 등록번호: 338-88-01668 <span className="mx-2 text-slate-700">|</span> 대표: 서성원</p>
              <p>04799 서울특별시 성동구 아차산로17길 48, 608호 (성수 SK V1 CENTER)</p>
            </div>
          </div>
          
        </div>

        {/* 하단: 저작권 (중앙 정렬) */}
        <div className="border-t border-slate-800/50 pt-8 text-center text-[13px] text-slate-500">
          <p>&copy; 2026 아이원시큐리티. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
}
