/* Third Party */
import React from "react";

/* Components */
import { ErrorSection, ErrorTitle, ErrorText } from "./style";
import ArrowLink from "../../Components/ArrowLink";

/* Functions */

function ErrorPage() {
  return (
    <ErrorSection aria-labelledby="error-title">
      <title>Page not found · Promote Tourism NZ</title>
      <ErrorTitle id="error-title">
        Page <em>not found</em>
      </ErrorTitle>
      <ErrorText>
        I think you went the wrong way. The page you're looking for doesn't
        exist, but there's plenty of New Zealand left to see.
      </ErrorText>
      <ArrowLink to="/">Back to exploring</ArrowLink>
    </ErrorSection>
  );
}

export default ErrorPage;
