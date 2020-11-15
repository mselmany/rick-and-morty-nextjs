import { memo } from "react";
import Link from "next/link";

export default memo(({ children, style, ...rest }) => {
  return (
    <Link {...rest} passHref>
      <a style={style}>{children}</a>
    </Link>
  );
});
