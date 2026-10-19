/* Third Party */
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import SplitText from '../../../Utils/Split3.min.js';

/* Components */
import { ContactContainer, ContactText, Dash, EmailInfo } from './style';

/* Functions */

function ContactSection() {
  gsap.registerPlugin(ScrollTrigger);

  const headerRef = useRef(null);
  const emailRef = useRef(null);

  useEffect(() => {
    const split = new SplitText('#creator', {
      type: 'lines',
    });

    let ctx = gsap.context(() => {
      gsap.from([split.lines, emailRef.current], {
        duration: 1,
        y: 20,
        opacity: 0,
        stagger: 0.3,
        ease: 'power2',

        scrollTrigger: {
          trigger: headerRef.current,
        },
      });
    });
    return () => ctx.revert();
  });

  return (
    <ContactContainer className="d-flex flex-sm-row flex-column">
      <Dash />
      <div className="d-flex flex-column justify-content-center">
        <ContactText id="creator" ref={headerRef}>
          Contact the creator
        </ContactText>
        <EmailInfo ref={emailRef} href="mailto:yinhucui@gmail.com">
          yinhucui@gmail.com
        </EmailInfo>
      </div>
      <Dash />
    </ContactContainer>
  );
}

export default ContactSection;
