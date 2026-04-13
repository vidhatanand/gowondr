import { Button } from "./Button";
import { Chip } from "./Chip";

interface PricingCardProps {
  plan: string;
  price: string;
  period: string;
  savings?: string;
  highlighted?: boolean;
  features: string[];
  ctaText: string;
  ctaHref: string;
}

export function PricingCard({
  plan,
  price,
  period,
  savings,
  highlighted,
  features,
  ctaText,
  ctaHref,
}: PricingCardProps) {
  return (
    <div
      className={`
        rounded-[24px] p-8 flex flex-col
        ${
          highlighted
            ? "bg-paper border-2 border-terracotta/30 shadow-md"
            : "bg-paper border border-sand shadow-xs"
        }
      `}
    >
      <div className="mb-6">
        <div className="flex items-center gap-3 mb-3">
          <h3 className="font-display text-[24px] text-ink">{plan}</h3>
          {savings && (
            <Chip variant="terracotta">{savings}</Chip>
          )}
        </div>
        <div className="flex items-baseline gap-1">
          <span className="font-display text-[40px] leading-none text-ink">
            {price}
          </span>
          <span className="text-slate text-[15px]">/ {period}</span>
        </div>
      </div>

      <ul className="space-y-3 mb-8 flex-1">
        {features.map((feature, i) => (
          <li
            key={i}
            className="flex items-start gap-2 text-[15px] text-slate"
          >
            <span className="text-strong-ink mt-0.5">&#10003;</span>
            {feature}
          </li>
        ))}
      </ul>

      <Button
        variant={highlighted ? "warm" : "secondary"}
        href={ctaHref}
        className="w-full"
      >
        {ctaText}
      </Button>
    </div>
  );
}
