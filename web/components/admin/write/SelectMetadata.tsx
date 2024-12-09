import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue
} from "@/components/ui/select";
import { CategoryType, UserType } from '@/types/newsTypes';
import { Dispatch, SetStateAction } from 'react';

type Props = {
    data: CategoryType[] | UserType[],
    stateToSaveData: Dispatch<SetStateAction<{}>>
}

const SelectMetadata = ({ data, stateToSaveData }: Props) => {
    const handleSelectCategory = (value: string) => {
        stateToSaveData(JSON.parse(value));
    };
    return (
        <Select onValueChange={handleSelectCategory}>
            <SelectTrigger className="w-full mb-2">
                <SelectValue placeholder="নির্বাচন করুন" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    {data?.map((item: CategoryType | UserType) => (
                        <SelectItem key={item._id} value={JSON.stringify(item)}>
                            {item.name}
                        </SelectItem>
                    ))}
                </SelectGroup>
            </SelectContent>
        </Select>
    );
};

export default SelectMetadata;
