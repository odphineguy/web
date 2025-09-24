import React, { useMemo } from 'react';

/**
 * Simple infinite moving cards marquee.
 * Duplicates the items to create a seamless loop.
 */
export default function InfiniteMovingCards({ items = [], speed = 'normal', direction = 'left', className = '' }) {
  const durationMs = useMemo(() => {
    if (speed === 'fast') return 20000;
    if (speed === 'slow') return 50000;
    return 35000;
  }, [speed]);

  const isLeft = direction !== 'right';
  const animClass = isLeft ? 'animate-marquee-left' : 'animate-marquee-right';

  // duplicate list for seamless loop
  const loopItems = useMemo(() => [...items, ...items], [items]);

  return (
    <div className={`relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)] ${className}`}>
      <div
        className={`flex gap-4 ${animClass}`}
        style={{ animationDuration: `${durationMs}ms` }}
      >
        {loopItems?.map((item, idx) => (
          <figure
            key={idx}
            className="shrink-0 w-72 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm hover:shadow-md transition-shadow"
          >
            <blockquote className="font-inter text-sm text-foreground mb-3 line-clamp-5">“{item?.quote}”</blockquote>
            <figcaption className="flex items-center gap-2">
              {item?.avatar || item?.avatarUrl ? (
                <img
                  src={item?.avatar || item?.avatarUrl}
                  alt={item?.name || 'Reviewer'}
                  className="h-8 w-8 rounded-full object-cover"
                  loading="lazy"
                />
              ) : (
                <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center text-xs font-semibold text-green-700">
                  {item?.name?.[0] || 'M'}
                </div>
              )}
              <div>
                <div className="font-poppins text-sm font-semibold text-foreground">{item?.name}</div>
                <div className="font-inter text-xs text-muted-foreground">{item?.title}</div>
              </div>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}


