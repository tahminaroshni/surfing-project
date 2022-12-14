import gsap, { Expo } from "gsap"
import { useEffect } from "react"
import ScrollTrigger from "gsap/src/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const useGsapRightStagger = (arr, delay = 0) => {
  useEffect(() => {
    const el = arr.map(item => item.current);

    gsap.fromTo(
      el,
      {
        x: '-100%',
        opacity: 0
      },
      {
        x: 0,
        opacity: 1,
        stagger: 0.3,
        ease: Expo.easeInOut,
        delay: delay,
        duration: 1
      })
  }, [])
}

export const useGsapLeftStagger = (arr, delay = 0) => {
  useEffect(() => {
    const el = arr.map(item => item.current);

    gsap.fromTo(
      el,
      {
        x: '100%',
        opacity: 0
      },
      {
        x: 0,
        opacity: 1,
        stagger: 0.1,
        ease: Expo.easeInOut,
        delay: delay,
        duration: 2
      })
  }, [])
}

export const useGsapDownStagger = (arr, delay = 0) => {
  useEffect(() => {
    const el = arr.map(item => item.current);

    gsap.fromTo(
      el,
      {
        y: '-100%',
        opacity: 0
      },
      {
        y: 0,
        opacity: 1,
        stagger: 0.1,
        ease: Expo.easeInOut,
        delay: delay,
        duration: 1
      })
  }, [])
}

export const useGsapShutterUnveil = (item, delay = 0, trig) => {
  useEffect(() => {
    const el = item.current;

    gsap.fromTo(el,
      {
        x: 0
      },
      {
        x: '100%',
        duration: 2,
        delay: delay,
        ease: Expo.easeInOut,
        scrollTrigger: {
          trigger: trig.current,
          toggleActions: 'play reverse play reverse'
        }
      })
  }, [])
}

export const useGsapMiddleShutterUnveil = (item, delay = 0, trig) => {
  useEffect(() => {
    const el = item.current;

    gsap.fromTo(el,
      {
        width: '100%',
      },
      {
        width: 0,
        duration: 2,
        delay: delay,
        ease: Expo.easeInOut,
        scrollTrigger: {
          trigger: trig.current,
          toggleActions: 'play reverse play reverse'
        }
      })
  }, [])
}

export const useGsapPhotoDropping = (arr, delay = 0) => {
  useEffect(() => {
    const el = arr.map(item => item.current);

    gsap.fromTo(el,
      {
        y: '-100vh',
        scale: 0
      },
      {
        y: 0,
        scale: 1,
        duration: 2,
        stagger: 0.3,
        ease: Expo.easeInOut,
        delay: delay
      })
  }, [])
}

export const useGsapPhotoLevitate = (arr, trig) => {
  useEffect(() => {
    const el = arr.map(item => item.current);

    gsap.fromTo(el,
      {
        y: 0
      },
      {
        y: '50%',
        duration: 2,
        stagger: 0.2,
        ease: Expo.easeIn,
        scrollTrigger: {
          scrub: 1,
          trigger: trig.current
        }
      })
  }, [])
}

export const useGsapFeaturedLeftShutter = (item, trig) => {
  useEffect(() => {
    const el = item.current;

    gsap.fromTo(
      el,
      {
        height: "100%",
      },
      {
        height: 0,
        duration: 1.2,
        ease: Expo.easeInOut,
        scrollTrigger: {
          trigger: trig.current,
          start: "top center",
          end: "bottom center",
          toggleActions: "play reverse play reverse",
        },
      }
    );
  }, []);
};

export const useGsapFeaturedRightShutter = (item, trig) => {
  useEffect(() => {
    const el = item.current;

    gsap.fromTo(
      el,
      {
        width: "100%",
      },
      {
        width: 0,
        duration: 1.2,
        delay: 0.2,
        ease: Expo.easeInOut,
        scrollTrigger: {
          trigger: trig.current,
          start: "top center",
          end: "bottom center",
          toggleActions: "play reverse play reverse",
        },
      }
    );
  }, []);
};


export const useGsapFooterReveal = (item, trig) => {
  useEffect(() => {
    const el = item.current;

    gsap.fromTo(
      el,
      {
        x: '-100%',
        opacity: 0
      },
      {
        x: 0,
        opacity: 1,
        ease: Expo.easeInOut,
        duration: 1.5,
        scrollTrigger: {
          trigger: trig.current,
          toggleActions: 'play'
        }
      })
  }, [])
}

// not hook

export const gsapHoverAnimation = (item) => {
  const el = item.current;

  gsap.to(el,
    {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: Expo.easeInOut,
    })
}

export const gsapHoverRotateAnimation = (item) => {
  const el = item.current;

  gsap.fromTo(el,
    {
      rotate: 0
    },
    {
      y: 100,
      rotate: 90,
      opacity: 1,
      duration: 2,
      ease: Expo.easeInOut,
    })
}

export const gsapMouseLeaveAnimation = (item) => {

  const el = item.current;

  gsap.to(el,
    {
      y: '-100%',
      opacity: 0,
      duration: 1,
      ease: Expo.easeInOut
    })

}

