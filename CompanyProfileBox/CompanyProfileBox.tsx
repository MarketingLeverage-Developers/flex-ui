import React from 'react';
import styles from './CompanyProfileBox.module.scss';
import classNames from 'classnames';

type CompanyProfileBoxProps = {
    image: string | null;
    text: string;
    isActive: boolean;
    onBoxClick: () => void;
};

const CompanyProfileBox = ({ image, text, onBoxClick, isActive }: CompanyProfileBoxProps) => {
    const className = classNames(styles.CompanyProfileBox, {
        [styles.Active]: isActive,
    });

    return (
        <div className={className} onClick={onBoxClick}>
            {image ? <img src={image} alt="회사 이미지" /> : <div className={styles.Default} />}

            <span>
                {text} {text}
            </span>
        </div>
    );
};

export default CompanyProfileBox;
