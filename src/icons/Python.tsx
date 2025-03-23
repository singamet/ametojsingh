import * as React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  title?: string;
  titleId?: string;
}

const PythonIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ title, titleId, ...props }, ref) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 22 22"
        fill="currentColor"
        aria-hidden={!title ? "true" : undefined}
        ref={ref}
        aria-labelledby={titleId}
        {...props}
      >
        {title ? <title id={titleId}>{title}</title> : null}
        <path
          id="rect12"
          d="M10.986 1.693c-2.642 0-4.769 1.064-4.769 2.385v1.88l4.775.019-.02.485h-7.14c-1.32 0-2.383 2.127-2.383 4.77C1.449 13.872 2.512 16 3.833 16H5.74c0-1.202.074-2.112.25-2.815.176-.703.462-1.207.883-1.544.842-.674 2.086-.648 3.875-.648 2.026 0 3.295-.027 4-.55.353-.26.599-.648.765-1.284.166-.637.242-1.514.242-2.697h.477c0 1.203-.074 2.113-.258 2.817-.184.705-.49 1.213-.941 1.547-.905.67-2.259.644-4.285.644-1.789 0-2.929.025-3.577.543-.324.26-.56.65-.719 1.288-.16.638-.235 1.517-.235 2.699v2.384c0 1.321 2.127 2.385 4.77 2.385 2.641 0 4.768-1.064 4.768-2.385v-1.899L11 16.486V16h7.14c1.32 0 2.384-2.127 2.384-4.769 0-2.642-1.064-4.769-2.385-4.769h-2.384V4.078c0-1.321-2.127-2.384-4.769-2.384zm-2.63 1.503h.007a.882.882 0 1 1-.006 0zm5.247 14.306h.006a.882.882 0 1 1-.006 0z"
        ></path>
      </svg>
    );
  },
);

export default PythonIcon;
