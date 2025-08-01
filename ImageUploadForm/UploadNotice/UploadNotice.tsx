import { useState, useEffect } from 'react';
import styles from './UploadNotice.module.scss';
import { useCaseCreateProvider } from '@/pages/sites/pages/reviews/pages/CasePage/components/CaseCreateProvider/CaseCreateProvider';

export const UploadNotice = () => {
    const { setFile } = useCaseCreateProvider();
    const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);

    useEffect(() => {
        setFile(uploadedFiles);
    }, [uploadedFiles, setFile]);

    return (
        <div className={styles.UploadNotice}>
            <span className={styles.Exclamation}>!</span>
            <span>500MB 이하의 파일만 업로드 가능합니다. (jpg, gif, png)</span>
        </div>
    );
};
