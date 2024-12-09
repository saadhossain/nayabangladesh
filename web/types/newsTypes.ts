export interface NewsType {
    _id: string,
    title: string,
    story: string,
    selectedCat: string[],
    selectedTag: string[],
    featuredImg: string,
    createdAt: string
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
    slug?: string,
    createdAt: string,
    updatedAt: string
}