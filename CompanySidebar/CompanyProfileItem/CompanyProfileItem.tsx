import React from 'react';
import styles from './CompanyProfileItem.module.scss';
import classNames from 'classnames';

type CompanyProfileItemProps = {
    image: string | null;
    text: string;
    isActive: boolean;
    onBoxClick: () => void;
};

const CompanyProfileItem = ({ image, text, onBoxClick, isActive }: CompanyProfileItemProps) => {
    const className = classNames(styles.CompanyProfileItem, {
        [styles.Active]: isActive,
    });

    return (
        <div className={className} onClick={onBoxClick}>
            {image ? <img src={image} alt="회사 이미지" /> : <div className={styles.Default} />}
            <span>{text}</span>
        </div>
    );
};

export default CompanyProfileItem;
