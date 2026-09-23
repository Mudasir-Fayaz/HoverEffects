import type { ComponentType } from "react";
import ImageExtra01Preview from "./image-extra-01";
import ImageExtra02Preview from "./image-extra-02";
import ImageExtra03Preview from "./image-extra-03";
import ImageExtra04Preview from "./image-extra-04";
import ImageExtra05Preview from "./image-extra-05";
import ImageExtra06Preview from "./image-extra-06";
import ImageExtra07Preview from "./image-extra-07";
import ImageExtra08Preview from "./image-extra-08";
import ImageExtra09Preview from "./image-extra-09";
import ImageExtra10Preview from "./image-extra-10";
import ImgZoom from "./img-zoom";
import ImgOverlay from "./img-overlay";
import ImgGrayscale from "./img-grayscale";
import ImgBlurReveal from "./img-blur-reveal";
import ImgShine from "./img-shine";
import ImgCaptionSlide from "./img-caption-slide";

export const imagePreviews: Record<string, ComponentType> = {
  "img-zoom": ImgZoom,
  "img-overlay": ImgOverlay,
  "img-grayscale": ImgGrayscale,
  "img-blur-reveal": ImgBlurReveal,
  "img-shine": ImgShine,
  "img-caption-slide": ImgCaptionSlide,
  "image-extra-01": ImageExtra01Preview,
  "image-extra-02": ImageExtra02Preview,
  "image-extra-03": ImageExtra03Preview,
  "image-extra-04": ImageExtra04Preview,
  "image-extra-05": ImageExtra05Preview,
  "image-extra-06": ImageExtra06Preview,
  "image-extra-07": ImageExtra07Preview,
  "image-extra-08": ImageExtra08Preview,
  "image-extra-09": ImageExtra09Preview,
  "image-extra-10": ImageExtra10Preview,
};
