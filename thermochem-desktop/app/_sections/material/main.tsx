import React from "react";

/**
 * Page that renders a background image of a material page.
 *
 * This page is intended to be used as a root layout for the material section
 * of the website. It renders a background image of a material page, which
 * should provide a visually appealing and consistent design across all
 * material-related pages.
 *
 * The background image is set to take up the full height of the viewport
 * and is centered horizontally. The image is also set to cover the entire
 * width of the viewport, while maintaining its aspect ratio.
 *
 * @returns {React.ReactElement} The rendered page.
 */
export default function MainMaterialPage() {
  return (
    <div className="min-h-[100dvh] bg-[url('/assets/materi-page.png')] bg-cover bg-center"></div>
  );
}
