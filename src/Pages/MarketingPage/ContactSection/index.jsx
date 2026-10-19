/* Third Party */
import React, { useContext, useEffect, useRef } from "react";

/* Components */
import { ContactContainer, ContactInner, ContactText, Dash, EmailInfo } from "./style";
import { CursorContext } from "../../../Components/Cursor/Context/CursorContext";
import { dropWords, gsap } from "../../../Utils/motion";

/* Functions */

function ContactSection() {
  const { setType } = useContext(CursorContext);
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const emailRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      dropWords(headerRef.current);
      gsap.from(emailRef.current, {
        y: 32,
        opacity: 0,
        duration: 1,
        delay: 0.45,
        ease: "expo.out",
        scrollTrigger: { trigger: headerRef.current, start: "top 85%", toggleActions: "play none none none" },
      });
      gsap.from(".contact-dash", {
        scaleX: 0,
        transformOrigin: (index) => (index === 0 ? "100% 50%" : "0% 50%"),
        duration: 1.4,
        ease: "expo.inOut",
        scrollTrigger: { trigger: headerRef.current, start: "top 85%", toggleActions: "play none none none" },
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
          href="mailto:yinhucui@gmail.com"
          onMouseEnter={() => setType("expand")}
          onMouseLeave={() => setType("default")}
        >
          yinhucui@gmail.com
        </EmailInfo>
      </ContactInner>
      <Dash className="contact-dash" aria-hidden="true" />
    </ContactContainer>
  );
}

export default ContactSection;
