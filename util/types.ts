export interface IPost {
    publishedDate: string;
    title: string;
    publishedAt: string;
    description: string;
    status: string;
    slug: string;
    tags?: string;
    tagsAsArray?: string[];
    headlines?: string;
    headlinesAsArray?: string[];
    url: string;
    readingTime: string;
    body?: any
}