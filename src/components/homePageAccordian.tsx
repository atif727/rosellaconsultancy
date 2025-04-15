import { Collapse } from "antd";
import type { CollapseProps } from "antd";

const Sampletext: string = `amarshonar banga
তুমি মিশ্রিত লগ্ন মাধুরীর
জলে ভেজা কবিতায়.
আছো সারোয়ার্দী
শেরেবাংলা ভাসানীর শেষ ইচ্ছায়.
তুমি বঙ্গবন্ধুর রক্তে আগুন জ্বালা
জ্বালাময়ী সে ভাষণ
তুমি ধানের শীষে মিশে
থাকা শহীদ জিয়ার স্বপন
তুমি ছেলে হারা মা
জাহানারা ইমামের একাক্তরের দিনগুলি
তুমি জসিম উদদীনের নকশী কাথার মাঠ
মুঠো মুঠো সোনার ধুলি
তুমি তিরিশ কিংবা তার
অধিক লাখো শহীদের প্রাণ
তুমি শহীদ মিনারের প্রভাতফেরী,
ভাইহারা একুশের গান
আমার সোনার বাংলা
আমি তোমায় ভালোবাসি
জন্ম দিয়েছো তুমি মাগো,
তাই তোমায় ভালোবাসি
`;

const items: CollapseProps["items"] = [
  {
    key: "1",
    label: <p className="text-3xl">first question</p>,
    children: <p className="text-4xl">{Sampletext}</p>,
  },
  {
    key: "2",
    label: <p className="text-3xl">second question</p>,
    children: <p className="text-4xl">{Sampletext}</p>,
  },
  {
    key: "3",
    label: <p className="text-3xl">third question</p>,
    children: <p className="text-4xl">{Sampletext}</p>,
  },
];

function HomePageAccordian() {
  return <Collapse className="w-3/4" size="large" accordion items={items} />;
}

export default HomePageAccordian;
