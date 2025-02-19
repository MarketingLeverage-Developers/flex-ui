import { css } from '@emotion/react';
import BasicSelect from 'headful/BasicSelect/BasicSelect';
import { FaBook } from 'react-icons/fa';

const PageSizeSelectTrigger = () => {
    return <BasicSelect.Trigger icon={<FaBook width={14} height={14} />} label={'페이지 사이즈'} />;
};

export default PageSizeSelectTrigger;
