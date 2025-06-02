import { usePagination } from '@/headless/Pagination/Pagination';
import Text from '@/ui-kit/src/components/contents/Text/Text';
import React from 'react';

const TotalText = () => {
    const {
        paginationValue: { total },
    } = usePagination();

    return (
        <Text size={15}>
            전체{' '}
            <Text size={15} color="#e88731" weight={500}>
                {total}
            </Text>{' '}
            건
        </Text>
    );
};

export default TotalText;
