/* Third Party */
import { useEffect, useLayoutEffect, useRef } from "react";
import { FiArrowLeft, FiArrowRight, FiX } from "react-icons/fi";

/* Components */
import {
  Dialog,
  Backdrop,
  Frame,
  FrameImage,
  Chrome,
  TopBar,
  Counter,
  IconButton,
  Caption,
  CaptionText,
  RegionName,
  PhotoCaption,
  PhotoCredit,
  Controls,
} from "./style";
import { gsap, isReducedMotion } from "../../../../Utils/motion";

/* Functions */

const TOP_SPACE = 80;
const BOTTOM_SPACE = 150;
const MORPH = { duration: 0.85, ease: "expo.inOut" };

function stageRect(image) {
  const gutter = Math.min(80, Math.max(16, window.innerWidth * 0.05));
  const maxWidth = window.innerWidth - gutter * 2;
  const maxHeight = window.innerHeight - TOP_SPACE - BOTTOM_SPACE;
  const ratio = image.naturalWidth / image.naturalHeight;
  const width = Math.min(maxWidth, maxHeight * ratio);
  const height = width / ratio;
  return {
    left: (window.innerWidth - width) / 2,
    top: TOP_SPACE + (maxHeight - height) / 2,
    width,
    height,
  };
}

function thumbRect(thumb) {
  const { left, top, width, height } = thumb.getBoundingClientRect();
  const isOnScreen = top < window.innerHeight && top + height > 0;
  return isOnScreen ? { left, top, width, height } : null;
}

/** Full-screen photo viewer that grows out of the clicked thumbnail and shrinks back into it. */
function Lightbox({ regions, index, getThumb, onNavigate, onDismiss }) {
  const dialogRef = useRef(null);
  const frameRef = useRef(null);
  const imageRef = useRef(null);
  const isClosingRef = useRef(false);
  const isFirstShowRef = useRef(true);
  const region = regions[index];
  const hasMany = regions.length > 1;

  const step = (offset) => {
    onNavigate((current) => (current + offset + regions.length) % regions.length);
  };

  const close = () => {
    if (isClosingRef.current) {
      return;
    }
    isClosingRef.current = true;
    const thumb = getThumb(index);
    const target = thumb && !isReducedMotion() ? thumbRect(thumb) : null;
    const finish = () => {
      if (thumb) {
        thumb.style.visibility = "";
      }
      dialogRef.current?.close();
      onDismiss(index);
    };

    gsap.to(".lightbox-fade", { opacity: 0, duration: 0.45, ease: "power2.in" });
    if (target) {
      gsap.to(frameRef.current, { ...target, borderRadius: 16, ...MORPH, onComplete: finish });
    } else {
      gsap.to(frameRef.current, { opacity: 0, scale: 0.96, duration: 0.4, onComplete: finish });
    }
  };

  useLayoutEffect(() => {
    dialogRef.current.showModal();
    document.body.classList.add("lightbox-open");
    return () => document.body.classList.remove("lightbox-open");
  }, []);

  useLayoutEffect(() => {
    const frame = frameRef.current;
    const image = imageRef.current;
    const thumb = getThumb(index);
    const isFirstShow = isFirstShowRef.current;
    isFirstShowRef.current = false;
    let isCurrent = true;

    gsap.set(image, { opacity: 0 });
    if (thumb) {
      thumb.style.visibility = "hidden";
    }

    image.decode().catch(() => {}).then(() => {
      if (!isCurrent) {
        return;
      }
      const target = stageRect(image);
      const reduced = isReducedMotion();
      const origin = isFirstShow && !reduced && thumb ? thumbRect(thumb) : null;

      if (isFirstShow) {
        gsap.fromTo(".lightbox-fade", { opacity: 0 }, { opacity: 1, duration: 0.6, delay: 0.15 });
      }
      if (origin) {
        gsap.set(image, { opacity: 1 });
        gsap.fromTo(
          frame,
          { ...origin, borderRadius: 16 },
          { ...target, borderRadius: 4, ...MORPH }
        );
        return;
      }
      if (isFirstShow || reduced) {
        gsap.set(frame, target);
      } else {
        gsap.to(frame, { ...target, ...MORPH, duration: 0.7 });
      }
      gsap.fromTo(
        image,
        { opacity: 0, scale: reduced ? 1 : 1.08 },
        { opacity: 1, scale: 1, duration: 0.7, ease: "expo.out" }
      );
      gsap.fromTo(
        ".lightbox-caption-line",
        { opacity: 0, y: reduced ? 0 : 14 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.05, ease: "expo.out" }
      );
    });

    return () => {
      isCurrent = false;
      if (thumb) {
        thumb.style.visibility = "";
      }
    };
  }, [index, getThumb]);

  useEffect(() => {
    const onResize = () => {
      if (!isClosingRef.current) {
        gsap.set(frameRef.current, stageRect(imageRef.current));
      }
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const onKeyDown = (event) => {
    if (event.key === "ArrowRight" && hasMany) {
      step(1);
    } else if (event.key === "ArrowLeft" && hasMany) {
      step(-1);
    }
  };

  return (
    <Dialog
      ref={dialogRef}
      aria-label={`${region.name} photo viewer`}
      onCancel={(event) => {
        event.preventDefault();
        close();
      }}
      onClose={() => {
        if (!isClosingRef.current) {
          onDismiss(index);
        }
      }}
      onKeyDown={onKeyDown}
    >
      <Backdrop className="lightbox-fade" onClick={close} />
      <Frame ref={frameRef}>
        <FrameImage
          ref={imageRef}
          src={region.image}
          alt={`${region.caption}, ${region.name}`}
        />
      </Frame>

      <Chrome className="lightbox-fade">
        <TopBar>
          <Counter aria-live="polite">
            {index + 1} / {regions.length}
          </Counter>
          <IconButton type="button" onClick={close} aria-label="Close photo viewer">
            <FiX aria-hidden="true" />
          </IconButton>
        </TopBar>

        <Caption>
          <CaptionText>
            <RegionName className="lightbox-caption-line">{region.name}</RegionName>
            <PhotoCaption className="lightbox-caption-line">{region.caption}</PhotoCaption>
            <PhotoCredit className="lightbox-caption-line">
              Photo: {region.credit.artist} · {region.credit.license}
            </PhotoCredit>
          </CaptionText>
          {hasMany && (
            <Controls>
              <IconButton type="button" onClick={() => step(-1)} aria-label="Previous photo">
                <FiArrowLeft aria-hidden="true" />
              </IconButton>
              <IconButton type="button" onClick={() => step(1)} aria-label="Next photo">
                <FiArrowRight aria-hidden="true" />
              </IconButton>
            </Controls>
          )}
        </Caption>
      </Chrome>
    </Dialog>
  );
}

export default Lightbox;
