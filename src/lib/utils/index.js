export const fetchMarkdownPosts = async () => {
    const allPostFiles = import.meta.glob('/src/routes/blog/*.md')
    const iterablePostFiles = Object.entries(allPostFiles)
    
    const allPosts = await Promise.all(
      iterablePostFiles.map(async ([path, resolver]) => {
        const { metadata } = await resolver()
        // every post's path begins with /src/routes/ 
        // remove those first 11 chars and last 3 chars to get the actual relative path to the post 
        const postPath = path.slice(11, -3)
  
        return {
          meta: metadata,
          path: postPath,
        }
      })
    )
  
    return allPosts
  }