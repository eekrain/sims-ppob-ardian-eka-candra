import { TBanner } from "@/lib/constant";
import { useBreakpointEffect } from "@/lib/utils";
import { CarouselProvider, Image, Slide, Slider } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { useState } from "react";

type Props = {
  promoList: TBanner[];
};

export const PromoCarousel = ({ promoList }: Props) => {
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

  return (
    <div className="mt-12">
      <h3 className="text-sm font-medium mb-6">Temukan promo menarik</h3>
      <CarouselProvider
        visibleSlides={visibleSlides}
        step={visibleSlides}
        totalSlides={promoList.length}
        naturalSlideWidth={270}
        naturalSlideHeight={110}
        interval={3000}
        isPlaying={true}
      >
        <Slider>
          {promoList.map((item, i) => (
            <Slide key={item.title} tag="a" index={i}>
              <Image
                src={item.img}
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
