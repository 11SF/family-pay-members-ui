import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en" data-theme="cmyk">
      <Head />
      <body className="bg-base-100">
        <Main />
        <NextScript />
        <Script src="/finisher-header.es5.min" type="text/javascript" />
        <Script type="text/javascript">
        {
          // new FinisherHeader({
          //   "count": 4,
          //   "size": {
          //     "min": 1200,
          //     "max": 1500,
          //     "pulse": 0.1
          //   },
          //   "speed": {
          //     "x": {
          //       "min": 0,
          //       "max": 0.2
          //     },
          //     "y": {
          //       "min": 0,
          //       "max": 0.2
          //     }
          //   },
          //   "colors": {
          //     "background": "#ab51ff",
          //     "particles": [
          //       "#ff636b",
          //       "#fbff56",
          //       "#ffc648",
          //       "#ff77ff"
          //     ]
          //   },
          //   "blending": "lighten",
          //   "opacity": {
          //     "center": 0.8,
          //     "edge": 0.2
          //   },
          //   "skew": -2,
          //   "shapes": [
          //     "c",
          //     "t"
          //   ]
          // });
        }
        </Script>
      </body>
    </Html>
  );
}
