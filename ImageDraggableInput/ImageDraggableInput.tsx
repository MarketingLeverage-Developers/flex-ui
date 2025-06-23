import React, { useRef, useState, DragEvent, ChangeEvent } from 'react';
import styles from './ImageDraggableInput.module.scss';
import { RiUpload2Fill } from 'react-icons/ri';
import { FaXmark } from 'react-icons/fa6';

type ImageDraggableInputProps = {
    imageSource: string;
    imageName: string;
    onInputChange: (image: File) => void;
    onDeleteButtonClick: () => void;
};

const ImageDraggableInput = ({
    imageSource,
    imageName,
    onInputChange,
    onDeleteButtonClick,
}: ImageDraggableInputProps) => {
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [preview, setPreview] = useState<string | null>(null);

    const imageSrc = imageSource || preview;

    const handleUploadClick = () => {
        fileInputRef.current?.click();
    };

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0] as File;
        if (file && file.type.startsWith('image/')) {
            const url = URL.createObjectURL(file);
            setPreview(url);
            onInputChange(file);
        }
    };

    const handleDrop = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        const file = e.dataTransfer.files?.[0];
        if (file && file.type.startsWith('image/')) {
            const url = URL.createObjectURL(file);
            setPreview(url);
            onInputChange(file);
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
                    ref={fileInputRef}
                    style={{ display: 'none' }}
                    onChange={handleFileChange}
                />

                <div className={styles.Content}>
                    <RiUpload2Fill className={styles.Icon} />
                    <div className={styles.Text}>업로드 할 파일 놓기</div>
                    <div className={styles.Text}>또는</div>
                    <div onClick={handleUploadClick} className={styles.uploadButton}>
                        파일 선택
                    </div>
                </div>
            </div>

            {imageSrc && (
                <div className={styles.Preview}>
                    <img src={imageSrc} alt="미리보기" />
                </div>
            )}
            {imageName && (
                <div className={styles.Footer}>
                    <span className={styles.ImageName}>{imageName}</span>
                    <div className={styles.Delete} onClick={onDeleteButtonClick}>
                        <FaXmark className={styles.Icon} />
                    </div>
                </div>
            )}
        </div>
    );
};

export default ImageDraggableInput;
