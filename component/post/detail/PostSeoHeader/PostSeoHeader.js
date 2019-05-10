import React from "react";
import Head from "next/head";


export default ({
                    title,
                    postNo,
                    content,
                    categoryNo,
                }) => {
    const thumbnail = `https://image.woolta.com/3fed2d102ca753c6.png`;
    const URL = `https://blog.woolta.com`;
    const isAllowUrl = categoryNo !== undefined && postNo !== undefined;

    const convertToPlainText = markdown => {
        if (!markdown) return '';
        return markdown.replace(/\n/g, ' ')
            .replace(/```(.*)```/g, '')
            .replace(/#/g, '')
            .replace(/[*]/g, '')
            .replace(/[![*]/g, ' ')
            .replace(/[(.*)]/g, ' ')
    }

    return (
        <Head>
            {title && <title>{title}</title>}
            {title && <meta property="og:title" content={title}/>}
            {title && <meta name="twitter:title" content={title}/>}
            {content && <meta name="description" content={convertToPlainText(content)}/>}
            {content && <meta property="og:description" content={convertToPlainText(content)}/>}
            {content && <meta name="twitter:description" content={convertToPlainText(content)}/>}
            {isAllowUrl && <meta property="og:url" content={`${URL}/categories/${categoryNo}/posts/${postNo}`}/>}
            <meta property="og:image" content={thumbnail}/>
            <meta name="twitter:image" content={thumbnail}/>
            <meta name="twitter:card" content="summary_large_image"/>
            <meta property="og:type" content="article"/>
        </Head>
    )
};



