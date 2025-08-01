import styles from './UploadPreview.module.scss';

export const UploadPreview = ({ files, onRemove }: { files: File[]; onRemove: (newFiles: File[]) => void }) => {
    const handleRemoveImage = (indexToRemove: number) => {
        const fileToRemove = files[indexToRemove];
        if (fileToRemove) {
            URL.revokeObjectURL(URL.createObjectURL(fileToRemove));
        }
        const updatedFiles = files.filter((_, index) => index !== indexToRemove);
        onRemove(updatedFiles);
    };

    return (
        <div className={styles.previewContainer}>
            <div className={styles.PreviewGrid}>
                {/* 상단 파일 이름 리스트 */}
                <div className={styles.FileListColumn}>
                    {files.map((file, index) => (
                        <div key={`name-${index}`} className={styles.PreviewHeader}>
                            <span className={styles.FileName}>{file.name}</span>
                            <button onClick={() => handleRemoveImage(index)} className={styles.RemoveButton}>
                                <span>X</span>
                            </button>
                        </div>
                    ))}
                </div>
                {/* 하단 미리보기 박스 */}
                <div className={styles.PreviewContainer}>
                    {files.map((file, index) => (
                        <div key={`thumb-${index}`} className={styles.PreviewBox}>
                            <img
                                src={URL.createObjectURL(file)}
                                alt={`미리보기 ${file.name}`}
                                className={styles.ImagePreviewBox}
                            />
                            <span className={styles.PreviewFileName}>{file.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
