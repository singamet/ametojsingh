import * as React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  title?: string;
  titleId?: string;
}

const VSCodeIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ title, titleId, ...props }, ref) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden={!title ? "true" : undefined}
        ref={ref}
        aria-labelledby={titleId}
        {...props}
      >
        {title ? <title id={titleId}>{title}</title> : null}{" "}
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="m21.292 4.103-4.118-1.98a1.232 1.232 0 0 0-.489-.121L16.643 2h-.036a1.248 1.248 0 0 0-.862.364L7.869 9.55 4.437 6.947a.83.83 0 0 0-1.064.047L2.272 7.995A.83.83 0 0 0 2 8.607v.004c0 .225.09.451.272.616l2.976 2.715-2.976 2.715a.834.834 0 0 0 .001 1.232l1.101 1.001a.828.828 0 0 0 1.065.047l3.432-2.603 7.876 7.186a1.24 1.24 0 0 0 .764.358l.012.001c.018.002.037.002.055.003.025.001.05.002.075.001l.027-.001c.169-.006.337-.045.496-.122l4.118-1.98c.431-.207.706-.645.706-1.125V5.229c0-.481-.275-.918-.708-1.126zm-4.298 12.369-5.972-4.531 5.972-4.531v9.062z"
        ></path>
      </svg>
    );
  },
);

export default VSCodeIcon;
