import React, { forwardRef } from "react";
import { cname } from "../../bs-ui/utils";
import "./brandSpinner.css";


// Built-in brand image generated from the approved master.
export const BUILTIN_LOADING_ASSET = "/assets/doberman-agent/loading.svg";

/** True when the configured loading icon is the built-in default asset. */
export function isBuiltinLoadingIcon(rawUrl: string) {
    return !rawUrl || rawUrl.replace(/[?#].*$/, "").endsWith(BUILTIN_LOADING_ASSET);
}

/** Built-in brand image with the existing loading dimensions. */
export const BrandTickSpinner = forwardRef<
    SVGSVGElement & { className: any },
    React.PropsWithChildren<{ className?: string }>
>(({ className, ...props }, ref) => {
    return (
        <svg
            ref={ref}
            {...props}
            className={cname("bs-tick-spinner", className)}
            viewBox="0 0 400 400"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            width="80"
            height="80"
            aria-hidden="true"
        >
            <image href={`${(__APP_ENV__.BASE_URL || "").replace(/\/$/, "")}${BUILTIN_LOADING_ASSET}`} width="400" height="400" />
        </svg>
    );
});
