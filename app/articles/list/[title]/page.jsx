"use client";
import { useState, useEffect, use } from "react";
import Stack, { onEntryChange } from "@/lib/cstack";
import Header from "@/components/header";

export default function ArticleList({ params }) {
    const [entry, setEntry] = useState({});
    const [articles, setArticles] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const { title } = use(params);

    const getContent = async () => {
        const entry = await Stack.getElementByUrl(
            "article_list",
            "/articles/list/" + title,
            "en-us"
        );
        console.log("articles", entry);
        setEntry(entry);

        if (entry?.taxonomies?.length > 0) {
            const articles = await Stack.getElementByTypeByTaxonomy(
                "article",
                "en-us",
                //['focus_news', 'focus_15', 'industry_news']
                [...new Set(entry.taxonomies.map((tax) => tax.term_uid))]
            );
            console.log("article list", articles);
            setArticles(articles[0]);
        }
        setIsLoading(false);
    };

    useEffect(() => {
        onEntryChange(getContent);
    }, []);

    if (isLoading) return;

    return (
        <div>
            <Header />

            <div className="max-w-[720px] md:max-w-[960px] lg:max-w-[1400px] xl:max-w-8xl mx-auto px-2 mt-16 flex flex-col items-center">
                <p className="text-[80px] font-medium font-oswald uppercase">{entry?.list_title}</p>

                <div className="mt-16 grid grid-cols-3 gap-5">
                    {articles?.map((item, index) => (
                        <a
                            key={index}
                            href={item.url}
                        >
                            <div className="overflow-hidden h-[121px] md:h-[166px] lg:h-[248px] xl:h-[331px]">
                                <img className="object-cover object-center hover:scale-110 transition-all duration-300" src={item.image?.url} />
                            </div>
                            <p className="text-[24px] lg:text-[28px] xl:text-[32px] font-oswald mt-3">{item.headline}</p>
                            <p className="text-[18px] lg:text-[18px] xl:text-[20px] font-spectral mt-3 lg:mt-0">{item.teaser}</p>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    )
}