"use client";
import { useState, useEffect } from "react";
import Stack, { onEntryChange } from "@/lib/cstack";
import Header from "@/components/header";
import Marquee from "@/components/marquee";
import ImageAndText from "@/components/imageAndText";
import Articles from "@/components/articles";
import NewReleases from "@/components/newReleases";
import HalfSquares from "@/components/halfSquares";
import ProductBanner from "@/components/productBanner";
import Footer from "@/components/footer";

export default function Home() {
  const [entry, setEntry] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const getContent = async () => {
    const entry = await Stack.getElementByTypeWtihRefs(
      "homepage",
      "en-us",
      [
        'modular_blocks.marquee.images.page',
        'modular_blocks.image_and_text_banner.page',
        'modular_blocks.article_banner.page',
        'modular_blocks.article_banner.article',
        'modular_blocks.new_releases.page',
        'modular_blocks.new_releases.movies.page',
        'modular_blocks.cta_banner.page',
        'modular_blocks.product_banner.page'
      ]
    );
    console.log('homepage', entry[0][0]);
    setEntry(entry[0][0]);
    setIsLoading(false);
  };

  useEffect(() => {
    onEntryChange(getContent);
  }, []);


  if (isLoading) return;

  return (
    <div className="">
      <Header />

      <div className={entry?.modular_blocks?.length === 0 ? "visual-builder__empty-block-parent" : ""} {...entry?.$?.modular_blocks}>
        {entry?.modular_blocks.map((block, index) => (
          <div key={index} {...entry?.$?.['modular_blocks__' + index]}>
            {block.hasOwnProperty("marquee") &&
              <Marquee key={index} content={block.marquee} />
            }
            {block.hasOwnProperty("image_and_text_banner") &&
              <ImageAndText key={index} content={block.image_and_text_banner} />
            }
            {block.hasOwnProperty("article_banner") &&
              <Articles key={index} content={block.article_banner} />
            }
            {block.hasOwnProperty("new_releases") &&
              <NewReleases key={index} content={block.new_releases} />
            }
            {block.hasOwnProperty("cta_banner") &&
              <HalfSquares key={index} content={block.cta_banner} />
            }
            {block.hasOwnProperty("product_banner") &&
              <ProductBanner key={index} content={block.product_banner} />
            }
          </div>
        ))}

        <Footer />

      </div>
    </div>
  )
}
