import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'src/data/posts');

export interface BlogPost {
    slug: string;
    title: string;
    date: string;
    description: string;
    tags?: string[];
    content: string;
}

export function getSortedPostsData(): Omit<BlogPost, 'content'>[] {
    // Get file names under /posts
    const fileNames = fs.readdirSync(postsDirectory);
    const allPostsData = fileNames
        .filter((fileName) => fileName.endsWith('.md'))
        .map((fileName) => {
            // Remove ".md" from file name to get id
            const slug = fileName.replace(/\.md$/, '');

            // Read markdown file as string
            const fullPath = path.join(postsDirectory, fileName);
            const fileContents = fs.readFileSync(fullPath, 'utf8');

            // Use gray-matter to parse the post metadata section
            const matterResult = matter(fileContents);

            // Combine the data with the id
            return {
                slug,
                title: matterResult.data.title,
                date: matterResult.data.date,
                description: matterResult.data.description,
                tags: matterResult.data.tags || [],
            };
        });

    // Sort posts by date
    return allPostsData.sort((a, b) => {
        if (a.date < b.date) {
            return 1;
        } else {
            return -1;
        }
    });
}

export function getPostData(slug: string): BlogPost {
    const fullPath = path.join(postsDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Combine the data with the id
    return {
        slug,
        content: matterResult.content,
        title: matterResult.data.title,
        date: matterResult.data.date,
        description: matterResult.data.description,
        tags: matterResult.data.tags || [],
    };
}
