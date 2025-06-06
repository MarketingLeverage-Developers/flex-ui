import SelectA from '@/ui-kit/src/components/contents/Select/A/SelectA';
import { usePagination } from 'headless/Pagination/Pagination';
import { FaBook } from 'react-icons/fa';
import { Pagination } from 'types/pagination';

type BasicSizeSelectProps = {
    onPageSizeSelectChange?: (paginationValue: Pagination) => void;
};

const BasicSizeSelect = ({ onPageSizeSelectChange }: BasicSizeSelectProps) => {
    const paginationSizes = [20, 30, 50, 100, 200];
    const { changeSize, paginationValue } = usePagination();

    const handleSelectItemClick = async (value: string) => {
        const newPaginationValue = changeSize(parseInt(value));
        if (onPageSizeSelectChange) {
            await onPageSizeSelectChange(newPaginationValue);
        }
    };

    return (
        <SelectA
            defaultValue={{
                value: paginationValue.size.toString(),
                label: `${paginationValue.size.toString()}개씩 보기`,
            }}
        >
            <SelectA.Trigger />
            <SelectA.Content>
                {paginationSizes.map((pageSize, index) => (
                    <SelectA.Item
                        key={index}
                        value={{ value: pageSize.toString(), label: `${pageSize.toString()}개씩 보기` }}
                        onSelectGroupItemClick={() => handleSelectItemClick(pageSize.toString())}
                    />
                ))}
            </SelectA.Content>
        </SelectA>
    );
};

export default BasicSizeSelect;
