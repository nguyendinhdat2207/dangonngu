// @spec C3-03
import { ArrowCounterClockwise, Check } from '@phosphor-icons/react';
import { Button } from './Button';

export function RatePair({ locked, onReview, onKnown }: { locked: boolean; onReview: () => void; onKnown: () => void }) {
  return (
    <div className="rate-pair">
      <Button className="btn--rate-review" locked={locked} onClick={onReview} icon={<ArrowCounterClockwise size={24} aria-hidden />} shortcut="1">
        Cần ôn lại
      </Button>
      <Button className="btn--rate-known" locked={locked} onClick={onKnown} icon={<Check size={24} aria-hidden />} shortcut="2">
        Tôi nhớ
      </Button>
    </div>
  );
}
