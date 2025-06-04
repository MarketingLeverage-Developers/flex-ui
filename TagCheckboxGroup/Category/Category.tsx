import { Tag } from '@/types/model/tag';
import React from 'react';
import styles from './Category.module.scss';

type CategoryProps = {
    text: string;
    tags: Tag[];
    component: (tags: Tag) => React.ReactNode;
};

const Category = ({ text, tags, component }: CategoryProps) => {
    return (
        <div className={styles.Category}>
            <div className={styles.Text}>
                <span>{text}</span>
            </div>
            {tags.map((tag) => component(tag))}
        </div>
    );
};

export default Category;
