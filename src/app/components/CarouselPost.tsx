"use client";

import { useCallback, useState } from "react";
import Carousel from "react-multi-carousel";

interface ICarouselPost {
  children: React.ReactNode;
}

function CarouselPost({ children }: ICarouselPost) {
  //   const router = useRouter();

  const [category, setCategory] = useState("All Posts");
  const [isMoving, setIsMoving] = useState(false);

  //   const handlePostsDetail = useCallback(
  //     (id: number) => (e: any) => {
  //       if (!isMoving) {
  //         e.preventDefault();
  //         router.push(`/posts/${id}`);
  //       }
  //     },
  //     [isMoving]
  //   );

  return (
    <Carousel
      ssr
      additionalTransfrom={0}
      arrows
      autoPlaySpeed={3000}
      centerMode={false}
      sliderClass="gap-10"
      className="p-3 m-h-[280px]"
      containerClass="container-with-dots"
      draggable
      focusOnSelect={false}
      infinite
      keyBoardControl
      minimumTouchDrag={80}
      pauseOnHover
      renderArrowsWhenDisabled={false}
      renderButtonGroupOutside={false}
      renderDotsOutside={false}
      responsive={{
        desktop: {
          breakpoint: {
            max: 3000,
            min: 1024,
          },
          items: 4,
          partialVisibilityGutter: 40,
        },
        mobile: {
          breakpoint: {
            max: 464,
            min: 0,
          },
          items: 1,
          partialVisibilityGutter: 30,
        },
        tablet: {
          breakpoint: {
            max: 1024,
            min: 464,
          },
          items: 2,
          partialVisibilityGutter: 30,
        },
      }}
      rewind={false}
      rewindWithAnimation={false}
      shouldResetAutoplay
      showDots={false}
      slidesToSlide={3}
      swipeable
      beforeChange={() => setIsMoving(true)}
      afterChange={() => setIsMoving(false)}
    >
      {children}
    </Carousel>
  );
}

export default CarouselPost;
