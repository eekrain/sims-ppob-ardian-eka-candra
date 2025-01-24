import { useBreakpointEffect } from "@/lib/utils";
import { useAppDispatch, useAppSelector } from "@/store";
import { getAllBanners } from "@/store/information";
import { CarouselProvider, Image, Slide, Slider } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { useEffect, useState } from "react";

type Props = {};

export const BannerCarousel = ({}: Props) => {
  const dispatch = useAppDispatch();
  const banners = useAppSelector((state) => state.information.banners);

  useEffect(() => {
    dispatch(getAllBanners());
  }, []);

  const [visibleSlides, setVisibleSlides] = useState(1);

  useBreakpointEffect("sm", (match) => {
    if (match) setVisibleSlides(1);
  });
  useBreakpointEffect("md", (match) => {
    if (match) setVisibleSlides(2);
  });
  useBreakpointEffect("lg", (match) => {
    if (match) setVisibleSlides(4);
  });

  if (banners.length === 0) return null;

  return (
    <div className="mt-12">
      <h3 className="mb-6 text-sm font-medium">Temukan promo menarik</h3>
      <CarouselProvider
        visibleSlides={visibleSlides}
        step={visibleSlides}
        totalSlides={banners.length}
        naturalSlideWidth={270}
        naturalSlideHeight={110}
        interval={3000}
        isPlaying={true}
      >
        <Slider>
          {banners.map((item, i) => (
            <Slide key={item.banner_name} tag="a" index={i}>
              <Image
                src={item.banner_image}
                className="object-contain"
                hasMasterSpinner={false}
              />
            </Slide>
          ))}
        </Slider>
      </CarouselProvider>
    </div>
  );
};
