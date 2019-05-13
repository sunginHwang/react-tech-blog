const axios = require('axios');

const API = 'https://blog.woolta.com';
const BLOG_API = 'https://api-blog.woolta.com';

const NOW = new Date().toUTCString();
const CATEGORY_PRIORITY = 0.5;

const POSTS_PRIORITY = 1;

 async function makeCategoriesSiteMap() {
    const categories = await getCategories();
    const categoriesSiteMap = await categories.data.data.map(category => makeSiteMapItemXml(
        `${API}/categories/${category.value}`, CATEGORY_PRIORITY));

     return wrapSiteMap(categoriesSiteMap);
};

async function makePostsSiteMap() {
    const newPosts = await getRecentPostList();
    const newPostsSiteMap = await newPosts.data.data.map(post => makeSiteMapItemXml(
        ` ${API}/categories/${post.categoryNo}/posts/${post.postNo}`, POSTS_PRIORITY));

    return wrapSiteMap(newPostsSiteMap);
};


function makeSiteMapItemXml(url, priority) {
    return `<url>
        <loc>${url}</loc>
        <lastmod>${NOW}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>${priority}</priority>
    </url>`
}

function wrapSiteMap(body) {
    return `<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${body}</sitemapindex>`
}

const getRecentPostList = () => {
    return axios.get(`${BLOG_API}/post/categories/new/posts`);
};

const getCategories = () => {
    return axios.get(`${BLOG_API}/post/categories`);
};


module.exports = {
    makeCategoriesSiteMap,
    makePostsSiteMap
};

