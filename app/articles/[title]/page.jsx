"use client";
import { useState, useEffect } from "react";
import Stack, { onEntryChange } from "@/lib/cstack";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { jsonToHtml } from "@contentstack/json-rte-serializer";

export default function Article({ params }) {
    const [entry, setEntry] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const getContent = async () => {
        const entry = await Stack.getElementByUrl(
            "article",
            "/articles/" + params.title,
            "en-us"
        );
        console.log("article", entry);
        setEntry(entry);
        setIsLoading(false);
       // jstag.send({"taxonomy" : entry?.taxonomies[0]?.term_uid});
    };

    useEffect(() => {
        onEntryChange(getContent);
    }, []);

    if (isLoading) 
        return;

    return (
        <div>
            <Header/>

            <div className="bg-white px-6 pt-8 pb-32 lg:px-8">
                <div className="mx-auto max-w-3xl text-base leading-7 text-neutral-700">
                    <p className="mb-6 text-sm font-semibold leading-7 text-cyan-600 uppercase">
                        <a href="/en/articles">ARTICLES</a> / {entry?.headline}
                        {/* ARTICLES / {entry.taxonomies[0].term_uid} */}
                    </p>
                    {!entry?.image?.url &&
                        <div className="h-[300px] w-full bg-gray-400 flex items-center justify-center" {...entry?.$?.image}>
                            <svg className="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                                <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
                            </svg>
                        </div>
                    }
                    {entry?.image?.url &&
                        <img src={entry?.image?.url} className="mb-10" {...entry?.image?.$?.url}></img>
                    }

                    <h1 className="mt-5 text-4xl font-medium uppercase tracking-wider  sm:text-5xl text-neutral-700" {...entry?.$?.headline}>
                        {entry?.headline}
                    </h1>
                    <p className="mt-6 font-paragraph font-light text-md text-left whitespace-pre-wrap tracking-wide leading-8 text-neutral-700 italic" {...entry?.$?.teaser}>
                        {entry?.teaser}
                    </p>
                    {entry &&
                        <div>
                            {entry.body.children.length === 1 && entry.body.children[0].children[0].text === "" &&
                                <div className="mt-10 max-w-3xl article" {...entry?.$?.body}>Article body</div>
                            }
                            {entry.body &&
                                <div className="mt-10 max-w-3xl whitespace-break-spaces article" dangerouslySetInnerHTML={{ __html: jsonToHtml(entry?.body) }} {...entry?.$?.body}></div>
                            }
                        </div>
                    }
                </div>
            </div>

            <Footer />
        </div>
    );
}