import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue
} from "@/components/ui/select";
import { CategoryType } from '@/types/newsTypes';
import { Dispatch, SetStateAction } from 'react';

const SelectCategory = ({
    data,
    setSelectedCat
}: {
    data: CategoryType[],
    setSelectedCat: Dispatch<SetStateAction<string>>
}) => {
    const handleSelectCategory = (value: string) => {
        setSelectedCat(value);
    };

    return (
        <Select onValueChange={handleSelectCategory}>
            <SelectTrigger className="w-full mb-2">
                <SelectValue placeholder="Select a category" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    {data?.map((cat: CategoryType) => (
                        <SelectItem key={cat._id} value={cat.slug}>
                            {cat.name}
                        </SelectItem>
                    ))}
                </SelectGroup>
            </SelectContent>
        </Select>
    );
};

export default SelectCategory;
