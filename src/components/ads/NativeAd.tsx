"use client";

import Script from "next/script";

interface NativeAdProps {
    /** "A" untuk Set A, "B" untuk Set B */
    set?: "A" | "B";
    className?: string;
}

/**
 * NativeAd
 */
export function NativeAd({ set = "A", className }: NativeAdProps) {
    return (
        <div className={className}>
            <Script async data-cfasync="false" src="https://latherachelesscatastrophe.com/5260f675994abff0ea23f09cbf357e89/invoke.js" strategy="afterInteractive" />
            <div id="container-5260f675994abff0ea23f09cbf357e89" />
        </div>
    );
}
