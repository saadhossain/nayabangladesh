"use client"
import { CategoryType, TagType } from '@/types/newsTypes';
import { ChangeEvent, Dispatch, SetStateAction } from 'react';

type CheckboxProps = {
    data: CategoryType[] | TagType[],
    stateToSaveData: Dispatch<SetStateAction<string[]>>
}

export function MultiCheckbox({ data, stateToSaveData }: CheckboxProps) {
    const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { value, checked } = event.target;
        if (checked) {
            stateToSaveData((prev: string[]) => [...prev, value]);
        } else {
            stateToSaveData((prev: string[]) => prev.filter((item: string) => item !== value));
        }
    };
    return (
        <div className='max-h-[70px] overflow-y-auto mb-2'>
            {data?.map((item: TagType) => (
                <div key={item._id} className="flex items-center gap-2">
                    <input
                        type="checkbox"
                        value={item.name}
                        onChange={handleCheckboxChange}
                        id={item._id}
                        className="cursor-pointer"
                    />
                    <label htmlFor={item._id} className="cursor-pointer">{item.name}</label>
                </div>
            ))}
        </div>
    )
}