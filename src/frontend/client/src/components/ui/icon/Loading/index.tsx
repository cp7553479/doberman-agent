import React, { forwardRef } from "react";
import { cn } from "~/utils";
import "./brandSpinner.css";

const ABSOLUTE_URL_PATTERN = /^(https?:|data:|blob:|\/\/)/i;


// Built-in brand image generated from the approved master.
const BUILTIN_LOADING_ASSET = "/assets/doberman-agent/loading.svg";

function withBrandBaseUrl(url = "") {
    if (!url) return "";
    if (ABSOLUTE_URL_PATTERN.test(url)) return url;

    const baseUrl = (__APP_ENV__.BASE_URL || "").replace(/\/$/, "");
    if (baseUrl && (url === baseUrl || url.startsWith(`${baseUrl}/`))) return url;

    const normalizedUrl = url.startsWith("/") ? url : `/${url}`;
    return `${baseUrl}${normalizedUrl}`;
}

function getBrandLoadingIconUrl() {
    return (
        window.BRAND_CONFIG?.URLLoadingIcon
        || window.BRAND_CONFIG?.loadingIcon
        || window.BRAND_CONFIG?.loading?.icon?.url
        || ""
    );
}

/** True when the configured loading icon is the built-in default asset. */
function isBuiltinLoadingIcon(rawUrl: string) {
    return !rawUrl || rawUrl.replace(/[?#].*$/, "").endsWith(BUILTIN_LOADING_ASSET);
}

export const LoadingIcon = forwardRef<
    (SVGSVGElement | HTMLImageElement) & { className: any },
    React.PropsWithChildren<{ className?: string }>
>(({ className, ...props }, ref) => {
    const rawLoadingIcon = getBrandLoadingIconUrl();

    // Custom uploaded icon → <img>. (Cannot be recolored; that is intentional.)
    if (!isBuiltinLoadingIcon(rawLoadingIcon)) {
        return (
            <img
                ref={ref as React.ForwardedRef<HTMLImageElement>}
                src={withBrandBaseUrl(rawLoadingIcon)}
                alt=""
                {...props}
                className={cn('text-primary', className || 'max-w-14', window.BRAND_CONFIG?.loadingAnimation)}
            />
        );
    }

    // Built-in brand image retains its black-on-white appearance.
    return (
        <svg
            ref={ref as React.ForwardedRef<SVGSVGElement>}
            {...props}
            className={cn('bs-tick-spinner text-primary', className)}
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
