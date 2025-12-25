# Product Gallery Component Overview

This document explains `productView.tsx`, which renders the product image slider and thumbnails.

## Imports
- Uses Next.js `Image` for optimized images.
- Uses React `useState` for local UI state.
- Uses Swiper (`Swiper`, `SwiperSlide`, `Navigation` module) for the carousel.
- Imports four SVG product images.
- Swiper core CSS and navigation CSS are included.

## Data
- `images`: array of the four product images.

## State
- `mainSwiper`: holds the Swiper instance for programmatic navigation.
- `activeIndex`: tracks the currently visible slide for UI indicators and thumb styles.

Derived thumbnail data:
- `visibleThumbs`: first two images to show as thumbnails.
- `remainingCount`: how many images are left after the first two.
- `extraThumbImage`: the image used under the `+X` overlay (third image if it exists).

## Layout
Outer wrapper:
- `relative max-w-md mx-auto p-4 space-y-4 bg-white rounded-[32px]`
- Provides spacing, centers content, and rounds the whole section.

Top progress bar:
- Absolutely positioned gradient overlay on top (`from-black/30 to transparent`).
- Renders one bar per image; the active bar animates to white and fills 100%.

Main carousel:
- Wrapped in a `relative` container with rounded corners and `bg-gray-50`.
- Swiper is initialized without built-in nav buttons (`navigation={false}`) because custom buttons are added.
- `onSwiper` captures the instance; `onSlideChange` updates `activeIndex`.
- Each `SwiperSlide` uses `aspect-square` to set height; images use `fill` and `object-cover` implicitly.

Custom nav buttons:
- Two absolutely positioned circular buttons (left/right), taupe background, white chevrons.
- Click handlers call `mainSwiper?.slidePrev()` and `mainSwiper?.slideNext()`.
- Include visually hidden text for accessibility.

Thumbnails row:
- Horizontal flex with gap.
- Two visible thumbnails:
  - Buttons with rounded corners, light gray background, padding, and `aspect-4/5`.
  - Active thumb gets a gray border; clicking jumps the main swiper via `slideTo`.
- “+X” button:
  - Same sizing as thumbs, shows `extraThumbImage` under a dark overlay with `+{remainingCount}`.
  - Clicking jumps to the next unseen slide (`visibleThumbs.length`).

## Behavior Summary
- Main image can be changed via custom nav buttons or by clicking a thumbnail.
- Progress bars reflect the current slide.
- Thumbs are limited to two; extra items are summarized in a `+X` overlay.

## Customization Tips
- Change section rounding: edit `rounded-[32px]` or the inner `rounded-[28px]`.
- Change arrow colors/sizes: adjust `bg-[#b7928b]`, `h-12 w-12`, or SVG sizes.
- Show more thumbs: change `visibleThumbs` slice or add horizontal scrolling.
- Adjust main image height: change `aspect-square` on `SwiperSlide` to another aspect ratio.

