import { ChangeEventHandler, DragEvent, useState } from 'react';
import InputA from '@/ui-kit/src/components/contents/Input/A/InputA';
import styles from './UploadForm.module.scss';
import UploadIcon from '@/assets/images/uploadicon.svg';

export const UploadForm = ({ onUpload }: { onUpload: (updateFn: (prev: File[]) => File[]) => void }) => {
    const [isDragOver, setIsDragOver] = useState(false);

    const handleImageUpload: ChangeEventHandler<HTMLInputElement> = (e) => {
        const fileList = e.target.files;
        if (!fileList || fileList.length === 0) return;

        const filesArray = Array.from(fileList);
        onUpload((prev) => [...prev, ...filesArray]);
    };
    // 이미지 드래그
    const handleDrop = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDragOver(false);

        const fileList = e.dataTransfer.files;
        if (!fileList || fileList.length === 0) return;

        const filesArray = Array.from(fileList).filter((file) => file.type.startsWith('image/'));
        if (filesArray.length > 0) {
            onUpload((prev) => [...prev, ...filesArray]);
        }
    };

    return (
        <div
            className={`${styles.ImageForm} ${isDragOver ? styles.DragOver : ''}`}
            onDragOver={(e) => {
                e.preventDefault();
                setIsDragOver(true);
            }}
            // 이미지 드래그
            onDragLeave={() => setIsDragOver(false)}
            onDrop={handleDrop}
        >
            <label htmlFor="case-image-upload" className={styles.CustomFileupload}>
                <img className={styles.Logo} src={UploadIcon} alt="Upload Icon" />
                <span>업로드할 파일 놓기 또는</span>
                <span>파일 선택</span>
            </label>
            <InputA
                id="case-image-upload"
                type="file"
                multiple
                accept="image/*"
                onChange={handleImageUpload}
                className={styles.ImageInput}
            />
        </div>
    );
};
