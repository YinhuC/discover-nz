import { FiArrowDown } from "react-icons/fi";
import { useCursorHover } from "../../Cursor/Context/CursorContext";
import { Main } from "./style";
import { isReducedMotion } from "../../../Utils/motion";

export const DownArrow = ({ targetId }) => {
  const cursorProps = useCursorHover();

  return (
    <Main
      href={`#${targetId}`}
      aria-label="Scroll to the next section"
      onClick={(event) => {
        event.preventDefault();
        document.getElementById(targetId)?.scrollIntoView({
          behavior: isReducedMotion() ? "auto" : "smooth",
        });
      }}
      {...cursorProps}
    >
      <FiArrowDown aria-hidden="true" />
    </Main>
  );
};
