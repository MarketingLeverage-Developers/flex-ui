import Box from '@/ui-kit/src/components/layouts/Box/Box';
import Flex from '@/ui-kit/src/components/layouts/Flex/Flex';
import { ReactNode } from 'react';
import FileUploadInput from '@/headful/FileUploadInput/FileUploadInput';
import styles from './FileUploadBox.module.scss';
import { FaRegImage } from 'react-icons/fa';
import { AiOutlineFileZip } from 'react-icons/ai';

type FileUploadBoxProps = {
    children: [ReactNode, ReactNode];
    fileChange: (files: FileList) => {};
    fileValue: string | string[];
    multiple?: boolean;
    disabled?: boolean;
    file?: boolean;
};

const FileUploadBox = ({ children, fileChange, multiple, disabled, fileValue, file }: FileUploadBoxProps) => {
    const [icon, text] = children;

    return (
        <div className={styles.FileUploadBox}>
            <div className={styles.BoxContent}>
                {file ? <AiOutlineFileZip color="#7B7B7B" size={24} /> : <FaRegImage color="#7B7B7B" size={24} />}
                {text}
                <FileUploadInput
                    disabled={disabled}
                    multiple={multiple}
                    size="2xs"
                    backgroundColor="#1A73E8"
                    textColor="#fff"
                    value={fileValue}
                    fileChange={fileChange}
                />
            </div>
        </div>
    );
};

export default FileUploadBox;
