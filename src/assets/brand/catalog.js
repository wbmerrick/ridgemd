import imgAlpine from "../ridgemd-alpine-atmosphere.webp";
import imgOgShare from "./ridgemd-og-share.webp";
import imgPortrait from "./ridgemd-alpine-portrait.webp";
import imgCareDawn from "./ridgemd-care-dawn.webp";
import imgShopDusk from "./ridgemd-shop-dusk.webp";
import imgMarkField from "./ridgemd-mark-field.webp";
import imgTnRidge from "./ridgemd-tn-ridge.webp";
import imgHawaiiMark from "./ridgemd-hawaii-mark.webp";
import imgHawaiiLagoon from "./ridgemd-hawaii-lagoon.webp";
import imgHawaiiPortrait from "./ridgemd-hawaii-portrait.webp";
import imgHawaiiDawn from "./ridgemd-hawaii-dawn.webp";
import imgHawaiiDawnPortrait from "./ridgemd-hawaii-dawn-portrait.webp";

/**
 * RidgeMD brand photography kit — Grok-graded plates for future surfaces.
 * `src` is the Vite-bundled URL. `publicPath` is the static /brand copy
 * for OG tags, email, and CSS that cannot import modules.
 */
export const brandPlates = {
  alpine: {
    id: "alpine",
    src: imgAlpine,
    publicPath: "/brand/ridgemd-alpine-atmosphere.webp",
    ratio: "16:9",
    use: "Landing hero, close CTA, and dashboard atmosphere",
  },
  og: {
    id: "og",
    src: imgOgShare,
    publicPath: "/brand/ridgemd-og-share.webp",
    ratio: "16:9",
    use: "Open Graph and Twitter share card — left third is shadowed for type",
  },
  portrait: {
    id: "portrait",
    src: imgPortrait,
    publicPath: "/brand/ridgemd-alpine-portrait.webp",
    ratio: "9:16",
    use: "Mobile hero, stories, splash, and app lock screens",
  },
  care: {
    id: "care",
    src: imgCareDawn,
    publicPath: "/brand/ridgemd-care-dawn.webp",
    ratio: "16:9",
    use: "Doctor / PCP, sign-in, about — calmer dawn mist",
  },
  shop: {
    id: "shop",
    src: imgShopDusk,
    publicPath: "/brand/ridgemd-shop-dusk.webp",
    ratio: "16:9",
    use: "Marketplace and shop banners — warmer dusk",
  },
  mark: {
    id: "mark",
    src: imgMarkField,
    publicPath: "/brand/ridgemd-mark-field.webp",
    ratio: "1:1",
    use: "App-icon field, avatar, PWA, and square social crops",
  },
  tn: {
    id: "tn",
    src: imgTnRidge,
    publicPath: "/brand/ridgemd-tn-ridge.webp",
    ratio: "16:9",
    use: "Tennessee service-area and delivery storytelling",
  },
  hawaii: {
    id: "hawaii",
    src: imgHawaiiMark,
    publicPath: "/brand/ridgemd-hawaii-mark.webp",
    ratio: "1:1",
    use: "Paradise mark field — Hawaiian remake of the peak-and-reflection emblem",
  },
  hawaiiWide: {
    id: "hawaiiWide",
    src: imgHawaiiLagoon,
    publicPath: "/brand/ridgemd-hawaii-lagoon.webp",
    ratio: "16:9",
    use: "Dusk paradise still — catalog reuse for banners and close CTA",
  },
  hawaiiPortrait: {
    id: "hawaiiPortrait",
    src: imgHawaiiPortrait,
    publicPath: "/brand/ridgemd-hawaii-portrait.webp",
    ratio: "9:16",
    use: "Mobile stories and splash — Hawaiian peak-and-lagoon",
  },
  hawaiiDawn: {
    id: "hawaiiDawn",
    src: imgHawaiiDawn,
    publicPath: "/brand/ridgemd-hawaii-dawn.webp",
    ratio: "16:9",
    use: "Site background — golden dawn peak with turquoise lagoon reflection",
  },
  hawaiiDawnPortrait: {
    id: "hawaiiDawnPortrait",
    src: imgHawaiiDawnPortrait,
    publicPath: "/brand/ridgemd-hawaii-dawn-portrait.webp",
    ratio: "9:16",
    use: "Mobile stories and splash — uploaded dawn peak-and-reflection still",
  },
};

export const brandPlateList = Object.values(brandPlates);
