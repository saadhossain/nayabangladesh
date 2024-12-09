
export const getNews = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/news`);
    return res.json();
}

//Add/Publish New News
export const addNews = async (data: {}) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/news`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    });
    return res.json();
}

export const getCategory = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/category`);
    return res.json();
}

export const addNewCategory = async (data: {}) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/category`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    return res.json();
}


export const getTag = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/tag`);
    return res.json();
}

export const addNewTag = async (newTag: string) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/tag`, {
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
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/user`);
    return res.json();
}

export const getUserByEmail = async (email: string) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/user/single/${email}`);
    const data = await res.json();
    return data;
}

export const getUserByID = async (id: string | any) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/user/${id}`);
    const data = await res.json();
    return data;
}