import React from 'react';
import styles from './ImageCard.module.scss';
import { HiXMark } from 'react-icons/hi2';
import { LiaDownloadSolid } from 'react-icons/lia';

type ImageCardProps = {
    text: string;
    image: string;
    onDeleteButtonClick?: () => void;
    onDownloadButtonClick?: () => void;
};

const ImageCard = ({ text, image, onDeleteButtonClick, onDownloadButtonClick }: ImageCardProps) => {
    return (
        <div className={styles.ImageCard}>
            <div className={styles.ImageBox}>
                <img src={image} alt="이미지" />
                {onDeleteButtonClick && (
                    <button
                        className={styles.Delete}
                        onClick={(e) => {
                            e.stopPropagation();
                            onDeleteButtonClick();
                        }}
                    >
                        <HiXMark className={styles.Icon} />
                    </button>
                )}
                {onDownloadButtonClick && (
                    <button
                        className={styles.Download}
                        onClick={(e) => {
                            e.stopPropagation();
                            onDownloadButtonClick();
                        }}
                    >
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
