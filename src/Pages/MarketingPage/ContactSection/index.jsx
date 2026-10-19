/* Third Party */
import React, { useEffect, useRef } from "react";

/* Components */
import { ContactContainer, ContactInner, ContactText, Dash, EmailInfo } from "./style";
import { useCursorHover } from "../../../Components/Cursor/Context/CursorContext";
import { dropWords, gsap, playOnEnter, ScrollTrigger } from "../../../Utils/motion";

/* Functions */

const SNAP_FROM = 0.3;

function ContactSection() {
  const cursorProps = useCursorHover();
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const emailRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top bottom",
        end: "top top",
        snap: {
          snapTo: (progress, self) =>
            self.direction > 0 && progress > SNAP_FROM ? 1 : progress,
          delay: 0.08,
          duration: { min: 0.4, max: 0.9 },
          ease: "power3.inOut",
        },
      });
      dropWords(headerRef.current);
      gsap.from(emailRef.current, {
        y: 32,
        opacity: 0,
        duration: 1,
        delay: 0.45,
        ease: "expo.out",
        ...playOnEnter(headerRef.current),
      });
      gsap.from(".contact-dash", {
        scaleX: 0,
        transformOrigin: (index) => (index === 0 ? "100% 50%" : "0% 50%"),
        duration: 1.4,
        ease: "expo.inOut",
        ...playOnEnter(headerRef.current),
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <ContactContainer
      id="contact"
      ref={sectionRef}
      aria-labelledby="contact-title"
    >
      <Dash className="contact-dash" aria-hidden="true" />
      <ContactInner>
        <ContactText id="contact-title" ref={headerRef}>
          Contact the creator
        </ContactText>
        <EmailInfo
          ref={emailRef}
          href="mailto:yinhucui@hotmail.com"
          {...cursorProps}
        >
          yinhucui@hotmail.com
        </EmailInfo>
      </ContactInner>
      <Dash className="contact-dash" aria-hidden="true" />
    </ContactContainer>
  );
}

export default ContactSection;
