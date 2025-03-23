import * as React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  title?: string;
  titleId?: string;
}

const FirebaseIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
        {title ? <title id={titleId}>{title}</title> : null}

        <path d="M8.56 4.94l-6.02 10.4L5.545 1.147C5.642.69 6.257.603 6.476 1.016L8.56 4.94zM9.67 7.02L10.87 9.27 5.34 14.5zM14.16 6.15l-1.79 1.7-1.52-2.86.973-1.674c.198-.341.694-.329.876.021L14.16 6.15zM21.13 18.74l-8.8 5.12C12.18 23.96 12 24 11.83 24c-.17 0-.35-.04-.5-.13l-8.05-4.65L18.647 4.657c.291-.276.771-.114.837.281L21.61 17.71C21.68 18.12 21.49 18.53 21.13 18.74z"></path>
      </svg>
    );
  },
);

export default FirebaseIcon;
