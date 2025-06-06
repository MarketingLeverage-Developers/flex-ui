import React from 'react';
import SelectA from '@/ui-kit/src/components/contents/Select/A/SelectA';
import BasicSelect from '../BasicSelect/BasicSelect';

type InquiryStatusSelectProps = {
    status: string;
};

const InquiryStatusSelect = ({ status }: InquiryStatusSelectProps) => {
    const inquiryStatuses = ['정상', '비정상'];
    return (
        <SelectA defaultValue={status ? '정상' : '비정상'}>
            <SelectA.Trigger />
            <SelectA.Content>
                {inquiryStatuses.map((status, index) => (
                    <SelectA.Item key={index} value={status} />
                ))}
            </SelectA.Content>
        </SelectA>
    );
};

export default InquiryStatusSelect;
