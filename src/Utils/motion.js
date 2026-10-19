import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);
document.fonts.ready.then(() => ScrollTrigger.refresh());

const EASE = "expo.out";

const isReducedMotion = () =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/** Tween vars that play once when `trigger` scrolls into view; none when there is no trigger. */
export const playOnEnter = (trigger, start = "top 85%") =>
  trigger ? { scrollTrigger: { trigger, start, toggleActions: "play none none none" } } : {};

const fadeIn = (targets, { delay = 0, stagger = 0, trigger } = {}) =>
  gsap.from(targets, { opacity: 0, duration: 0.6, delay, stagger, ...playOnEnter(trigger) });

/** Drops each character of a display heading in from above, one at a time. */
export function dropChars(element, { delay = 0, trigger, stagger = 0.045 } = {}) {
  return SplitText.create(element, {
    type: "words, chars",
    mask: "chars",
    charsClass: "split-char",
    autoSplit: true,
    onSplit: (split) =>
      isReducedMotion()
        ? fadeIn(split.chars, { delay, stagger: 0.02, trigger })
        : gsap.from(split.chars, {
            yPercent: -110,
            duration: 1.1,
            delay,
            stagger,
            ease: EASE,
            ...playOnEnter(trigger),
          }),
  });
}

/** Drops each word of a section heading into place, tilting as it lands. */
export function dropWords(element, { delay = 0, trigger = element } = {}) {
  return SplitText.create(element, {
    type: "words",
    mask: "words",
    wordsClass: "split-word",
    autoSplit: true,
    onSplit: (split) => {
      if (isReducedMotion()) {
        return fadeIn(split.words, { delay, stagger: 0.05, trigger });
      }
      return gsap.from(split.words, {
        yPercent: -120,
        rotate: (index) => (index % 2 ? 8 : -8),
        transformOrigin: "50% 100%",
        duration: 1,
        delay,
        stagger: 0.09,
        ease: EASE,
        ...playOnEnter(trigger),
      });
    },
  });
}

/** Slides each line of a paragraph up out of its own mask. */
export function riseLines(element, { delay = 0, trigger = element } = {}) {
  return SplitText.create(element, {
    type: "lines",
    mask: "lines",
    linesClass: "split-line",
    autoSplit: true,
    onSplit: (split) =>
      isReducedMotion()
        ? fadeIn(split.lines, { delay, trigger })
        : gsap.from(split.lines, {
            yPercent: 105,
            duration: 1,
            delay,
            stagger: 0.08,
            ease: EASE,
            ...playOnEnter(trigger),
          }),
  });
}

/** Lifts a curtain off an image frame while the photo inside settles from a zoom. */
export function revealImage(frame, image, { delay = 0, from = "bottom", trigger = frame } = {}) {
  if (isReducedMotion()) {
    return fadeIn(frame, { delay, trigger });
  }
  const hidden = {
    bottom: "inset(100% 0% 0% 0%)",
    top: "inset(0% 0% 100% 0%)",
  }[from];
  if (hidden === undefined) {
    throw new Error(`revealImage has no curtain direction "${from}"; use bottom or top.`);
  }
  return gsap
    .timeline({ delay, ...playOnEnter(trigger, "top 90%") })
    .fromTo(
      frame,
      { clipPath: hidden },
      { clipPath: "inset(0% 0% 0% 0%)", duration: 1.3, ease: "expo.inOut", clearProps: "clipPath" }
    )
    .from(image, { scale: 1.35, duration: 1.8, ease: EASE, clearProps: "transform" }, 0.1);
}

/** Wipes list rows in from the left, one after another. */
export function wipeRows(rows, { trigger } = {}) {
  if (isReducedMotion()) {
    return fadeIn(rows, { stagger: 0.08, trigger });
  }
  return gsap.fromTo(
    rows,
    { clipPath: "inset(0% 100% 0% 0%)", x: -24 },
    {
      clipPath: "inset(0% 0% 0% 0%)",
      x: 0,
      duration: 1.1,
      stagger: 0.12,
      ease: "expo.inOut",
      clearProps: "clipPath,transform",
      ...playOnEnter(trigger),
    }
  );
}

export { gsap, ScrollTrigger, isReducedMotion };
