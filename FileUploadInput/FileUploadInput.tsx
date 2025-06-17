import ButtonB from '@/ui-kit/src/components/contents/Button/B/ButtonB';
import ButtonE from '@/ui-kit/src/components/contents/Button/E/ButtonE';
import React, { useRef } from 'react';

type FileUploadInputProps = React.ComponentProps<typeof ButtonE> & {
    value: string | string[];
    fileChange: (files: FileList) => void;
    multiple?: boolean;
};

const FileUploadInput = ({ value, fileChange, multiple, ...props }: FileUploadInputProps) => {
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files as FileList;

        // 이미지 업로드 API 호출

        fileChange(files);
    };

    const handleUploadClick = () => {
        fileInputRef.current?.click();
    };
    return (
        <div>
            {/* 숨겨진 input */}
            <input
                type="file"
                accept="image/*"
                ref={fileInputRef}
                style={{ display: 'none' }}
                onChange={handleFileChange}
                multiple={multiple}
            />

            {/* 대체 UI */}
            <ButtonE {...props} onClick={handleUploadClick}>
                파일 선택
            </ButtonE>
        </div>
    );
};

export default FileUploadInput;
