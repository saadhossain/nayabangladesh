import { BASE_URL } from '@/config/site';

export const getNews = async () => {
    const res = await fetch(`${BASE_URL}/news`, { next: { revalidate: 3600 } });
    return res.json();
}

export const getNewsById = async (id: string) => {
    const res = await fetch(`${BASE_URL}/news/${id}`, { next: { revalidate: 3600 } });
    return res.json();
}

//Get News by Category
export const getNewsByCategory = async (category: string) => {
    const res = await fetch(`${BASE_URL}/news/category?cat=${category}`, { next: { revalidate: 3600 } });
    return res.json();
}

//Add/Publish New News
export const addNews = async (data: object) => {
    const res = await fetch(`${BASE_URL}/news`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    });
    return res.json();
}

//const getComments by News
export const getCommentsByNewsId = async (newsId: string) => {
    const res = await fetch(`${BASE_URL}/comment/news/${newsId}`, { next: { revalidate: 3600 } });
    return res.json();
}

//Add a Comment for the news
export const addComment = async (commentData: object) => {
    const res = await fetch(`${BASE_URL}/comment`, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(commentData)
    })
    return res.json();
}


//Partially update news by id
export const updateNewsPartially = async (id: string | undefined, updateData: object) => {
    console.log(id, updateData);
    const res = await fetch(`${BASE_URL}/news/${id}`, {
        method: 'PATCH',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(updateData)
    })
    return res.json();
}

export const getCategory = async () => {
    const res = await fetch(`${BASE_URL}/category`);
    return res.json();
}

export const addNewCategory = async (data: {}) => {
    const res = await fetch(`${BASE_URL}/category`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    return res.json();
}


export const getTag = async () => {
    const res = await fetch(`${BASE_URL}/tag`);
    return res.json();
}

export const addNewTag = async (newTag: string) => {
    const res = await fetch(`${BASE_URL}/tag`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({ name: newTag })
    })
    return res.json();
}


//Get Users
export const getUsers = async () => {
    const res = await fetch(`${BASE_URL}/user`, { next: { revalidate: 3600 } });
    return res.json();
}

export const getUserByEmail = async (email: string) => {
    const res = await fetch(`${BASE_URL}/user/single/${email}`, { next: { revalidate: 3600 } });
    const data = await res.json();
    return data;
}

export const getUserByID = async (id: string | any) => {
    const res = await fetch(`${BASE_URL}/user/${id}`, { next: { revalidate: 3600 } });
    const data = await res.json();
    return data;
}