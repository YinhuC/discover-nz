/* Third Party */
import { FiArrowRight, FiArrowUpRight } from "react-icons/fi";

/* Components */
import { ExternalAnchor, InternalAnchor } from "./style";
import { useCursorHover } from "../Cursor/Context/CursorContext";

/* Functions */

/** Text link with a trailing arrow; `href` opens a new tab, `to` routes in-app. */
function ArrowLink({ to, href, children, className }) {
  const cursorProps = useCursorHover();

  if (href) {
    return (
      <ExternalAnchor
        className={className}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        {...cursorProps}
      >
        {children}
        <FiArrowUpRight aria-hidden="true" />
        <span className="visually-hidden"> (opens in a new tab)</span>
      </ExternalAnchor>
    );
  }

  return (
    <InternalAnchor className={className} to={to} {...cursorProps}>
      {children}
      <FiArrowRight aria-hidden="true" />
    </InternalAnchor>
  );
}

export default ArrowLink;
