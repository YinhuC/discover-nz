/* Third Party */
import React, { useContext, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

/* Components */
import { ContactContainer, ContactInner, ContactText, Dash, EmailInfo } from "./style";
import { CursorContext } from "../../../Components/Cursor/Context/CursorContext";

/* Functions */

gsap.registerPlugin(ScrollTrigger, SplitText);

function ContactSection() {
  const { setType } = useContext(CursorContext);
  const headerRef = useRef(null);
  const emailRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const split = new SplitText(headerRef.current, { type: "lines" });
      gsap.from([split.lines, emailRef.current], {
        duration: 1,
        y: 20,
        opacity: 0,
        stagger: 0.3,
        ease: "power2",
        scrollTrigger: { trigger: headerRef.current, start: "top 85%" },
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <ContactContainer id="contact" aria-labelledby="contact-title">
      <Dash aria-hidden="true" />
      <ContactInner>
        <ContactText id="contact-title" ref={headerRef}>
          Contact the creator
        </ContactText>
        <EmailInfo
          ref={emailRef}
          href="mailto:yinhucui@gmail.com"
          onMouseEnter={() => setType("expand")}
          onMouseLeave={() => setType("default")}
        >
          yinhucui@gmail.com
        </EmailInfo>
      </ContactInner>
      <Dash aria-hidden="true" />
    </ContactContainer>
  );
}

export default ContactSection;
