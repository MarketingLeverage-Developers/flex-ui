import SelectA from '@/ui-kit/src/components/contents/Select/A/SelectA';
import BasicSelect from 'headful/BasicSelect/BasicSelect';
import { usePagination } from 'headless/Pagination/Pagination';
import { FaBook } from 'react-icons/fa';
import { Pagination } from 'types/pagination';

type BasicSizeSelectProps = {
    onPageSizeSelectChange?: (paginationValue: Pagination) => void;
};

const BasicSizeSelect = ({ onPageSizeSelectChange }: BasicSizeSelectProps) => {
    const paginationSizes = [5, 10, 20];
    const { changeSize, paginationValue } = usePagination();

    const handleSelectItemClick = async (value: string) => {
        const newPaginationValue = changeSize(parseInt(value));
        if (onPageSizeSelectChange) {
            await onPageSizeSelectChange(newPaginationValue);
        }
    };

    return (
        <SelectA defaultValue={paginationValue.size.toString()}>
            <SelectA.Trigger icon={<FaBook width={14} height={14} />} label={'페이지 사이즈'} />
            <SelectA.Content>
                {paginationSizes.map((pageSize, index) => (
                    <SelectA.Item
                        key={index}
                        value={pageSize.toString()}
                        onItemClick={() => handleSelectItemClick(pageSize.toString())}
                    >
                        {pageSize}
                    </SelectA.Item>
                ))}
            </SelectA.Content>
        </SelectA>
    );
};

export default BasicSizeSelect;
