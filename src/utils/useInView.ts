import { useEffect, useState, type RefObject } from 'react';

/**
 * Returns true once the referenced element enters the viewport.
 * @param ref A React ref object pointing to the element to observe.
 * @param options IntersectionObserver options.
 * @returns A boolean indicating whether the element is in view.
 */
export const useInView = (
  ref: RefObject<Element | null>,
  options: IntersectionObserverInit = {}
): boolean => {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    if (!ref?.current) {
      setIsInView(false);
      return;
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true);
        observer.disconnect();
      }
    }, options);

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [ref]);

  return isInView;
};
