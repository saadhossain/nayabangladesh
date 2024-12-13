export interface NewsType {
    _id?: string,
    title: string,
    excerpt?: string,
    story: string,
    category: CategoryType,
    tags: TagType,
    reporter: UserType,
    featuredImg: string,
    readingCount: number,
    createdAt?: string,
    updatedAt?: string
}

export interface CategoryType {
    _id: string,
    name: string,
    slug: string,
    createdAt: string,
    updatedAt: string
}
export interface TagType {
    _id: string,
    name: string,
    createdAt: string,
    updatedAt: string
}

export interface UserType {
    _id: string,
    email: string,
    name: string,
    password: string,
    image: string,
    role: string,
    location: string,
    createdAt: string,
    updatedAt: string,
}

export interface CommentType {
    _id?: string,
    newsId: string,
    readerName: string,
    email: string,
    comment: string,
    image: string,
    createdAt: string,
    updatedAt: string
}