import { useEffect, useRef, useState } from 'react';

export const useScrollAnimation = () => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !entry.target.dataset.animated) {
            // Add animation only first time
            entry.target.style.opacity = '0';
            entry.target.style.animation = 'fadeInUp 0.6s ease-out forwards';
            entry.target.dataset.animated = 'true';
            setIsVisible(true);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return ref;
};

// Enhanced scroll animation with parallax
export const useParallaxScroll = (speed = 0.5) => {
  const ref = useRef(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        const elementTop = rect.top;
        const windowHeight = window.innerHeight;

        // Calculate parallax offset
        if (elementTop < windowHeight && elementTop > -rect.height) {
          const scrolled = window.scrollY;
          const elementOffset = ref.current.offsetTop;
          setOffset((scrolled - elementOffset) * speed);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return { ref, offset };
};

// Stagger children animation
export const useStaggerAnimation = (delay = 0.1) => {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !entry.target.dataset.animated) {
            const children = entry.target.children;
            Array.from(children).forEach((child, idx) => {
              child.style.animation = `fadeInUp 0.6s ease-out ${idx * delay}s forwards`;
              child.style.opacity = '0';
            });
            entry.target.dataset.animated = 'true';
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [delay]);

  return ref;
};
