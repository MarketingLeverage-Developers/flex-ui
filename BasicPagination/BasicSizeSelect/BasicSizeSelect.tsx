import BasicSelect from 'headful/BasicSelect/BasicSelect';
import { usePagination } from 'headless/Pagination/Pagination';
import React from 'react';
import { FaBook } from 'react-icons/fa';
import { Pagination } from 'types/pagination';

type BasicSizeSelectProps = {
    onPageSizeSelectChange: (paginationValue: Pagination) => Promise<void>;
};

const BasicSizeSelect = ({ onPageSizeSelectChange }: BasicSizeSelectProps) => {
    const paginationSizes = [5, 10, 20];
    const { changeSize, paginationValue } = usePagination();

    const handleSelectItemClick = async (value: string) => {
        const newPaginationValue = changeSize(parseInt(value));
        await onPageSizeSelectChange(newPaginationValue);
    };

    return (
        <BasicSelect defaultValue={paginationValue.size.toString()}>
            <BasicSelect.Trigger icon={<FaBook width={14} height={14} />} label={'페이지 사이즈'} />
            <BasicSelect.Content>
                {paginationSizes.map((pageSize, index) => (
                    <BasicSelect.Item
                        key={index}
                        value={pageSize.toString()}
                        onBasicSelectItemClick={() => handleSelectItemClick(pageSize.toString())}
                    >
                        {pageSize}
                    </BasicSelect.Item>
                ))}
            </BasicSelect.Content>
        </BasicSelect>
    );
};

export default BasicSizeSelect;
