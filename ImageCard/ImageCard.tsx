import React from 'react';
import styles from './ImageCard.module.scss';
import { HiXMark } from 'react-icons/hi2';
import { LiaDownloadSolid } from 'react-icons/lia';

type ImageCardProps = {
    text: string;
    onDeleteButtonClick?: () => void;
    onDownloadButtonClick?: () => void;
};

const ImageCard = ({ text, onDeleteButtonClick, onDownloadButtonClick }: ImageCardProps) => {
    return (
        <div className={styles.ImageCard}>
            <div className={styles.ImageBox}>
                <img
                    src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSspJMMw50HdlEKlIBVHtPEy7FuPKUUB4tgIg&s'}
                    alt="이미지"
                />
                {onDeleteButtonClick && (
                    <button className={styles.Delete}>
                        <HiXMark className={styles.Icon} />
                    </button>
                )}
                {onDownloadButtonClick && (
                    <button className={styles.Download}>
                        <LiaDownloadSolid className={styles.Icon} />
                    </button>
                )}
            </div>
            <div className={styles.Text}>
                <span>{text}</span>
            </div>
        </div>
    );
};

export default ImageCard;
