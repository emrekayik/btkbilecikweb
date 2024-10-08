"use client";
import { Boxes } from "@/components/ui/background-boxes";
import { Twitter, ChevronRight, Router } from "lucide-react";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { useRouter } from "next/navigation";

export function Hero() {
  const router = useRouter();
  return (
    <div className="relative overflow-hidden">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10">
        <svg
          className="absolute sm:-bottom-30 -bottom-20 start-1/2 w-full transform -translate-x-1/2"
          width="2745"
          height="488"
          viewBox="0 0 2745 488"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title> </title>
          <path
            d="M0.5 330.864C232.505 403.801 853.749 527.683 1482.69 439.719C2111.63 351.756 2585.54 434.588 2743.87 487"
            className="stroke-muted-foreground/30"
            stroke="currentColor"
          />
          <path
            d="M0.5 308.873C232.505 381.81 853.749 505.692 1482.69 417.728C2111.63 329.765 2585.54 412.597 2743.87 465.009"
            className="stroke-muted-foreground/30"
            stroke="currentColor"
          />
          <path
            d="M0.5 286.882C232.505 359.819 853.749 483.701 1482.69 395.738C2111.63 307.774 2585.54 390.606 2743.87 443.018"
            className="stroke-muted-foreground/30"
            stroke="currentColor"
          />
          <path
            d="M0.5 264.891C232.505 337.828 853.749 461.71 1482.69 373.747C2111.63 285.783 2585.54 368.615 2743.87 421.027"
            className="stroke-muted-foreground/30"
            stroke="currentColor"
          />
          <path
            d="M0.5 242.9C232.505 315.837 853.749 439.719 1482.69 351.756C2111.63 263.792 2585.54 346.624 2743.87 399.036"
            className="stroke-muted-foreground/30"
            stroke="currentColor"
          />
          <path
            d="M0.5 220.909C232.505 293.846 853.749 417.728 1482.69 329.765C2111.63 241.801 2585.54 324.633 2743.87 377.045"
            className="stroke-muted-foreground/30"
            stroke="currentColor"
          />
          <path
            d="M0.5 198.918C232.505 271.855 853.749 395.737 1482.69 307.774C2111.63 219.81 2585.54 302.642 2743.87 355.054"
            className="stroke-muted-foreground/30"
            stroke="currentColor"
          />
          <path
            d="M0.5 176.927C232.505 249.864 853.749 373.746 1482.69 285.783C2111.63 197.819 2585.54 280.651 2743.87 333.063"
            className="stroke-muted-foreground/30"
            stroke="currentColor"
          />
          <path
            d="M0.5 154.937C232.505 227.873 853.749 351.756 1482.69 263.792C2111.63 175.828 2585.54 258.661 2743.87 311.072"
            className="stroke-muted-foreground/30"
            stroke="currentColor"
          />
          <path
            d="M0.5 132.946C232.505 205.882 853.749 329.765 1482.69 241.801C2111.63 153.837 2585.54 236.67 2743.87 289.082"
            className="stroke-muted-foreground/30"
            stroke="currentColor"
          />
          <path
            d="M0.5 110.955C232.505 183.891 853.749 307.774 1482.69 219.81C2111.63 131.846 2585.54 214.679 2743.87 267.091"
            className="stroke-muted-foreground/30"
            stroke="currentColor"
          />
          <path
            d="M0.5 88.9639C232.505 161.901 853.749 285.783 1482.69 197.819C2111.63 109.855 2585.54 192.688 2743.87 245.1"
            className="stroke-muted-foreground/30"
            stroke="currentColor"
          />
          <path
            d="M0.5 66.9729C232.505 139.91 853.749 263.792 1482.69 175.828C2111.63 87.8643 2585.54 170.697 2743.87 223.109"
            className="stroke-muted-foreground/30"
            stroke="currentColor"
          />
          <path
            d="M0.5 44.9819C232.505 117.919 853.749 241.801 1482.69 153.837C2111.63 65.8733 2585.54 148.706 2743.87 201.118"
            className="stroke-muted-foreground/30"
            stroke="currentColor"
          />
          <path
            d="M0.5 22.991C232.505 95.9276 853.749 219.81 1482.69 131.846C2111.63 43.8824 2585.54 126.715 2743.87 179.127"
            className="stroke-muted-foreground/30"
            stroke="currentColor"
          />
          <path
            d="M0.5 1C232.505 73.9367 853.749 197.819 1482.69 109.855C2111.63 21.8914 2585.54 104.724 2743.87 157.136"
            className="stroke-muted-foreground/30"
            stroke="currentColor"
          />
        </svg>
        <div className="mt-5 max-w-2xl text-center mx-auto">
          <h1 className="block font-bold text-gray-800 text-4xl md:text-5xl lg:text-6xl">
            <span className="bg-clip-text bg-gradient-to-tl from-second to-first text-transparent">
              Bilgisayar ve Teknoloji Kulübü
            </span>
          </h1>
        </div>

        <div className="mt-5 max-w-3xl text-center mx-auto">
          <p className="md:text-lg text-md  text-muted-foreground">
            Biz, üniversite öğrencilerine yazılım geliştirme alanında fırsatlar
            sunan, üyeler arasında işbirliği ve bilgi paylaşımını artıran,
            teknoloji ve yazılım alanlarında öğrenme ve keşfetme ortamı yaratan,
            kariyer etkinlikleriyle staj ve iş fırsatlarından faydalanmalarını
            sağlayan, üyelerin gelişimini destekleyen ve projelerle deneyim
            kazanmalarını sağlayan bir yazılım ve teknoloji kulübüyüz.
          </p>
        </div>

        <div className="mt-8 gap-3 flex justify-center">
          <HoverBorderGradient
            containerClassName="rounded-full"
            as="button"
            className="flex items-center space-x-2"
            onClick={() => router.push("/giris")}
          >
            Şimdi Üye Ol
            <span className="py-1.5 px-2.5 inline-flex justify-center items-center gap-x-2 rounded-full font-semibold text-sm">
              <ChevronRight className="shrink-0 size-4" />
            </span>
          </HoverBorderGradient>
        </div>
      </div>
    </div>
  );
}
