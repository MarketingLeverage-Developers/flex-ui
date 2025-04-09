import styles from './ArticleTemplate.module.scss';
import ArticleEditor from 'headful/ArticleEditor/ArticleEditor';
import { ChangeEventHandler } from 'react';
import BasicInput from 'headful/BasicInput/BasicInput';
import BasicButton from 'headful/BasicButton/BasicButton';
import BasicModal from 'headful/BasicModal/BasicModal';

type ArticleTemplateProps = {
    isModal?: boolean;
    type: 'create' | 'update';
    title: string;
    editor: string;
    onButtonClick: () => void;
    onInputChange: ChangeEventHandler<HTMLInputElement>;
    onEditorChange: React.Dispatch<React.SetStateAction<string>>;
    onImageUpload: (files: FileList) => Promise<any>;
};

const ArticleTemplate = ({
    type,
    title,
    editor,
    onButtonClick,
    onInputChange,
    onEditorChange,
    onImageUpload,
    isModal,
}: ArticleTemplateProps) => {
    return (
        <div className={styles.ArticleTemplate}>
            <div className={styles.Head}>
                <div className={styles.HeaderWrapper}>
                    <div className={styles.Header}>
                        <div className={styles.Label}>{type === 'create' ? '작성하기' : '수정하기'} </div>
                        <span className={styles.Title}>{title}</span>
                    </div>
                    {isModal && <BasicModal.Close />}
                </div>
                <div className={styles.InputWrapper}>
                    <BasicInput
                        placeholder="제목을 입력해주세요."
                        value={title}
                        onChange={onInputChange}
                        className={styles.ArticleInput}
                    />
                </div>
                <div className={styles.EditorWrapper}>
                    <ArticleEditor value={editor} onEditorChange={onEditorChange} onImageUpload={onImageUpload} />
                </div>
            </div>

            <div className={styles.Footer}>
                <BasicButton onClick={onButtonClick} variant="gradient" height={48}>
                    작성하기
                </BasicButton>
            </div>
        </div>
    );
};

export default ArticleTemplate;
