// src/routes/api/posts/+server.js
import { fetchMarkdownPosts } from '$lib/utils'
import { json } from '@sveltejs/kit'

export const GET = async () => {
    try {
        const allPosts = await fetchMarkdownPosts()
        const sortedPosts = allPosts.sort((a, b) => {
            return new Date(b.meta.date) - new Date(a.meta.date)
        })

        return json(sortedPosts)
    } catch(err) {
        return json('Something went wrong, please try again later')
    };

}