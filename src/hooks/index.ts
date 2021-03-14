import { useCallback, useEffect } from 'react';

/**
 * Fires the effect/callback when the dependencies change, after waiting for the delay.
 * The delay is reset when the dependencies change.
 * @param effect The effect/callback that should be fired after the delay.
 * @param delay The delay in milliseconds.
 * @param deps The dependencies that will trigger the next callback, and reset the delay.
 */
export const useDebouncedEffect = (
  effect: React.EffectCallback,
  delay: number,
  deps: any[],
) => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const callback = useCallback(effect, deps);

  useEffect(() => {
    const handler = setTimeout(() => {
      callback();
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [callback, delay]);
};
