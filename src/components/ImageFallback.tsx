"use client";

import { useState, useEffect } from "react";
import Image, { ImageProps } from "next/image";
import IconSVG from "./IconSVG";

type ImageFallbackProps = ImageProps & {
  fallbackSrc?: string;
};

const defaultFallbackSvg = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 600 400'%3E%3Crect fill='%23f0f0f0' width='600' height='400' /%3E%3Cpath fill='%23cccccc' d='M276 210L328 210 328 254 276 254z'/%3E%3Cpath fill='%23cccccc' d='M302 158.5a31.8 31.8 0 0 1 0 63.5 31.8 31.8 0 0 1 0 -63.5z'/%3E%3Cpath fill='%23cccccc' d='M236.3 289.7c0-24.7 29.4-44.8 65.7-44.8 36.2 0 65.7 20 65.7 44.8 0 0 2 40.3-65.7 40.3 -67.7 0-65.7-40.3-65.7-40.3z'/%3E%3Ctext x='300' y='350' text-anchor='middle' font-family='Arial' font-size='18' fill='%23999999'%3EImage Not Found%3C/text%3E%3C/svg%3E`;

// List of known valid image paths/directories
const validDirectories = [
  "/images/banner/",
  "/images/blog/",
  "/images/component/",
  "/images/member/",
  "/images/partner/",
  "/images/slider/",
  "/images/flags/",
];

// Map of invalid paths to fallback alternatives
const fallbackMap: Record<string, string> = {
  // About section fallbacks
  "/images/about/about-1.png": "/images/component/960x680.png",
  "/images/about/about-2.png": "/images/component/960x644.png",
  "/images/about/about-3.png": "/images/component/472x354.png",
  "/images/about/about-4.png": "/images/component/thumbnail4.png",
};

// Use SVG icons for specific paths
const iconPaths = [
  "/images/icon/service-1.png",
  "/images/icon/service-2.png",
  "/images/icon/service-3.png",
  "/images/icon/service-4.png",
  "/images/icon/service-5.png",
  "/images/icon/service-6.png",
];

export default function ImageFallback({
  src,
  fallbackSrc,
  alt,
  ...rest
}: ImageFallbackProps) {
  const [imgSrc, setImgSrc] = useState<string | null>(null);
  const [useIconSVG, setUseIconSVG] = useState<boolean>(false);
  const [iconType, setIconType] = useState<
    | "service-1"
    | "service-2"
    | "service-3"
    | "service-4"
    | "service-5"
    | "service-6"
    | null
  >(null);

  useEffect(() => {
    if (typeof src === "string") {
      // Check if this is an icon path that should use SVG
      const isIconPath = iconPaths.includes(src);

      if (isIconPath) {
        setUseIconSVG(true);
        // Extract the icon type (e.g., service-1) from the path
        const match = src.match(/\/images\/icon\/(service-\d+)\.png/);
        if (match && match[1]) {
          setIconType(
            match[1] as
              | "service-1"
              | "service-2"
              | "service-3"
              | "service-4"
              | "service-5"
              | "service-6"
          );
        }
        return;
      }

      // Check if the image is in a valid directory or has a specific fallback
      const isValidDirectory = validDirectories.some((dir) =>
        src.startsWith(dir)
      );

      if (isValidDirectory) {
        setImgSrc(src);
      } else if (fallbackMap[src]) {
        // Use the mapped fallback for known invalid paths
        setImgSrc(fallbackMap[src]);
      } else if (fallbackSrc) {
        // Use provided fallback
        setImgSrc(fallbackSrc);
      } else {
        // Use default SVG fallback
        setImgSrc(defaultFallbackSvg);
      }
    } else {
      // For non-string sources (like StaticImageData), pass through
      setImgSrc(src as any);
    }
  }, [src, fallbackSrc]);

  // Return SVG icon for icon paths
  if (useIconSVG && iconType) {
    const { width, height } = rest;
    const size = typeof width === "number" ? width : 32;
    return <IconSVG type={iconType} size={size} />;
  }

  // Only render when we have determined the src
  if (!imgSrc) return null;

  return <Image src={imgSrc} alt={alt || "Image"} {...rest} />;
}
