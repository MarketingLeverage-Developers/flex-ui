import React, { useRef, DragEvent, ChangeEvent } from 'react';
import styles from './MultipleImageDraggableInput.module.scss';
import { RiUpload2Fill } from 'react-icons/ri';
import { FaXmark } from 'react-icons/fa6';
import { FaCheck } from 'react-icons/fa';

type ImageDraggableInputProps = {
    imageSources: string[];
    imageNames: string[];
    onInputChange: (images: File[]) => void;
    onDeleteButtonClick: (index: number) => void;
    onImageClick?: (index: number) => void;
    selectedImage?: string;
};

const MultipleImageDraggableInput = ({
    imageSources,
    imageNames,
    onInputChange,
    onDeleteButtonClick,
    onImageClick,
    selectedImage,
}: ImageDraggableInputProps) => {
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleUploadClick = () => {
        fileInputRef.current?.click();
    };

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        const files = Array.from(e.target.files ?? []).filter((f) => f.type.startsWith('image/'));
        if (files.length > 0) {
            onInputChange(files);
        }
    };

    const handleDrop = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        const files = Array.from(e.dataTransfer.files).filter((f) => f.type.startsWith('image/'));
        if (files.length > 0) {
            onInputChange(files);
        }
    };

    const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault();
    };

    return (
        <div className={styles.Wrapper}>
            <div className={styles.ImageDraggableInput} onDrop={handleDrop} onDragOver={handleDragOver}>
                <input
                    type="file"
                    accept="image/*"
                    multiple
                    ref={fileInputRef}
                    style={{ display: 'none' }}
                    onChange={handleFileChange}
                />

                <div className={styles.Content}>
                    <RiUpload2Fill className={styles.Icon} />
                    <div className={styles.Text}>업로드 할 파일을 끌어놓거나</div>
                    <div onClick={handleUploadClick} className={styles.uploadButton}>
                        파일 선택
                    </div>
                </div>
            </div>

            {imageSources.map((src, index) => (
                <div key={index} className={styles.PreviewItem}>
                    <img src={src} alt={`미리보기 ${index + 1}`} onClick={() => onImageClick?.(index)} />
                    {selectedImage === src && (
                        <div className={styles.Check}>
                            <FaCheck className={styles.Icon} />
                        </div>
                    )}
                    <div className={styles.Delete} onClick={() => onDeleteButtonClick(index)}>
                        <FaXmark className={styles.Icon} />
                    </div>
                    <div className={styles.ImageName}>
                        <span>{imageNames[index]}</span>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default MultipleImageDraggableInput;
