import type { GroupMeta, HoverEffect } from "../types";
import { expandedEffectsByCategory } from "../expanded-effects";
import { iconPathWrite } from "./icon-path-write";
import { iconSegmentRelay } from "./icon-segment-relay";
import { iconPixelResolve } from "./icon-pixel-resolve";
import { iconGridAlign } from "./icon-grid-align";
import { iconLayerFan } from "./icon-layer-fan";
import { iconCodeBracketSpread } from "./icon-code-bracket-spread";
import { iconCopyPageOffset } from "./icon-copy-page-offset";
import { iconDownloadStemReach } from "./icon-download-stem-reach";
import { iconCloudDetailDraw } from "./icon-cloud-detail-draw";
import { iconFolderTabOpen } from "./icon-folder-tab-open";
import { iconBookPageRiffle } from "./icon-book-page-riffle";
import { iconMapPanelSpread } from "./icon-map-panel-spread";
import { iconCompassNeedleAlign } from "./icon-compass-needle-align";
import { iconApertureBlades } from "./icon-aperture-blades";
import { iconWaveformBreathe } from "./icon-waveform-breathe";
import { iconEqualizerRelay } from "./icon-equalizer-relay";
import { iconVolumeDetailTrace } from "./icon-volume-detail-trace";
import { iconSparkleDetailWrite } from "./icon-sparkle-detail-write";
import { iconPuzzleAlign } from "./icon-puzzle-align";
import { iconChainDetailSettle } from "./icon-chain-detail-settle";
import { iconThreadStitch } from "./icon-thread-stitch";
import { iconBarcodeDetailScan } from "./icon-barcode-detail-scan";
import { iconQrCellRelay } from "./icon-qr-cell-relay";
import { iconCircuitRoute } from "./icon-circuit-route";
import { iconHexTileDock } from "./icon-hex-tile-dock";
import { iconCubeStackSettle } from "./icon-cube-stack-settle";
import { iconPrismRegister } from "./icon-prism-register";
import { iconRulerTickRelay } from "./icon-ruler-tick-relay";
import { iconCalendarDetailTrace } from "./icon-calendar-detail-trace";
import { iconClockDetailSettle } from "./icon-clock-detail-settle";
import { iconShieldSeamWrite } from "./icon-shield-seam-write";
import { iconFingerprintRoute } from "./icon-fingerprint-route";
import { iconPointerDetailParallax } from "./icon-pointer-detail-parallax";
import { iconDirectionalDetailAccent } from "./icon-directional-detail-accent";
import { iconConnectorEndpointFollow } from "./icon-connector-endpoint-follow";
export { iconPathWrite } from "./icon-path-write";
export { iconSegmentRelay } from "./icon-segment-relay";
export { iconPixelResolve } from "./icon-pixel-resolve";
export { iconGridAlign } from "./icon-grid-align";
export { iconLayerFan } from "./icon-layer-fan";
export { iconCodeBracketSpread } from "./icon-code-bracket-spread";
export { iconCopyPageOffset } from "./icon-copy-page-offset";
export { iconDownloadStemReach } from "./icon-download-stem-reach";
export { iconCloudDetailDraw } from "./icon-cloud-detail-draw";
export { iconFolderTabOpen } from "./icon-folder-tab-open";
export { iconBookPageRiffle } from "./icon-book-page-riffle";
export { iconMapPanelSpread } from "./icon-map-panel-spread";
export { iconCompassNeedleAlign } from "./icon-compass-needle-align";
export { iconApertureBlades } from "./icon-aperture-blades";
export { iconWaveformBreathe } from "./icon-waveform-breathe";
export { iconEqualizerRelay } from "./icon-equalizer-relay";
export { iconVolumeDetailTrace } from "./icon-volume-detail-trace";
export { iconSparkleDetailWrite } from "./icon-sparkle-detail-write";
export { iconPuzzleAlign } from "./icon-puzzle-align";
export { iconChainDetailSettle } from "./icon-chain-detail-settle";
export { iconThreadStitch } from "./icon-thread-stitch";
export { iconBarcodeDetailScan } from "./icon-barcode-detail-scan";
export { iconQrCellRelay } from "./icon-qr-cell-relay";
export { iconCircuitRoute } from "./icon-circuit-route";
export { iconHexTileDock } from "./icon-hex-tile-dock";
export { iconCubeStackSettle } from "./icon-cube-stack-settle";
export { iconPrismRegister } from "./icon-prism-register";
export { iconRulerTickRelay } from "./icon-ruler-tick-relay";
export { iconCalendarDetailTrace } from "./icon-calendar-detail-trace";
export { iconClockDetailSettle } from "./icon-clock-detail-settle";
export { iconShieldSeamWrite } from "./icon-shield-seam-write";
export { iconFingerprintRoute } from "./icon-fingerprint-route";
export { iconPointerDetailParallax } from "./icon-pointer-detail-parallax";
export { iconDirectionalDetailAccent } from "./icon-directional-detail-accent";
export { iconConnectorEndpointFollow } from "./icon-connector-endpoint-follow";

export const iconEffects: HoverEffect[] = [
  ...expandedEffectsByCategory.icons,
  iconPathWrite,
  iconSegmentRelay,
  iconPixelResolve,
  iconGridAlign,
  iconLayerFan,
  iconCodeBracketSpread,
  iconCopyPageOffset,
  iconDownloadStemReach,
  iconCloudDetailDraw,
  iconFolderTabOpen,
  iconBookPageRiffle,
  iconMapPanelSpread,
  iconCompassNeedleAlign,
  iconApertureBlades,
  iconWaveformBreathe,
  iconEqualizerRelay,
  iconVolumeDetailTrace,
  iconSparkleDetailWrite,
  iconPuzzleAlign,
  iconChainDetailSettle,
  iconThreadStitch,
  iconBarcodeDetailScan,
  iconQrCellRelay,
  iconCircuitRoute,
  iconHexTileDock,
  iconCubeStackSettle,
  iconPrismRegister,
  iconRulerTickRelay,
  iconCalendarDetailTrace,
  iconClockDetailSettle,
  iconShieldSeamWrite,
  iconFingerprintRoute,
  iconPointerDetailParallax,
  iconDirectionalDetailAccent,
  iconConnectorEndpointFollow,
];

export const iconsMeta: GroupMeta = {
  slug: "icons",
  shortTitle: "Icons",
  title: "Icon Hover Effects",
  description: "Ring, spin, bloom, and glow effects for circular icons",
  longDescription:
    "Circular icon hover effects with settling rings, spins, blooms, sonar pulses, and soft glows. Great for toolbars, nav items, and social links.",
  keywords: [
    "icon hover effects",
    "CSS icon animations",
    "hover icon rotate",
    "icon bounce effect",
    "SVG icon hover",
    "UI icon micro interactions",
    "Tailwind CSS icons",
  ],
  ogImage: "/og/icons.png",
  icon: "Sparkles",
  image: "/images/illustration/icons.png",
  schema: {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Icon Hover Effects",
    description:
      "Premium CSS and React icon hover effects for modern web interfaces.",
    url: "https://hovereffects.in/category/icons",
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://hovereffects.in",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Icon Hover Effects",
          item: "https://hovereffects.in/category/icons",
        },
      ],
    },
  },
};
