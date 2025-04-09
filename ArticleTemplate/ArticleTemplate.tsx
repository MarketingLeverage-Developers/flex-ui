import styles from './ArticleTemplate.module.scss';
import ArticleEditor from 'headful/ArticleEditor/ArticleEditor';
import { ChangeEventHandler } from 'react';
import BasicInput from 'headful/BasicInput/BasicInput';
import BasicButton from 'headful/BasicButton/BasicButton';
import BasicModal from 'headful/BasicModal/BasicModal';
import { Category } from 'types/model/content';
import TabGroup from 'headless/TabGroup/TabGroup';
import RadioTab from 'headful/RadioTab/RadioTab';
import BasicTab from 'headful/BasicTab/BasicTab';

type ArticleTemplateProps = {
    isModal?: boolean;
    type: 'create' | 'update';
    title: string;
    editor: string;
    category?: Category;
    onButtonClick: () => void;
    onInputChange: ChangeEventHandler<HTMLInputElement>;
    onEditorChange: React.Dispatch<React.SetStateAction<string>>;
    onImageUpload: (files: FileList) => Promise<any>;
    onTabChange?: (value: string) => void;
};

const ArticleTemplate = ({
    type,
    title,
    editor,
    category,
    onButtonClick,
    onInputChange,
    onEditorChange,
    onImageUpload,
    onTabChange,
    isModal,
}: ArticleTemplateProps) => {
    return (
        <div className={styles.ArticleTemplate}>
            <div className={styles.HeaderWrapper}>
                <div className={styles.Header}>
                    <div className={styles.Left}>
                        <div className={styles.Label}>{type === 'create' ? '작성하기' : '수정하기'} </div>
                        <span className={styles.Title}>{title}</span>
                    </div>
                    <div className={styles.Right}>
                        {/* {category && onTabChange && (
                            <BasicTab defaultValue={category}>
                                <BasicTab.Item value={Category.REVIEW} onTabGroupItemClick={onTabChange}>
                                    리뷰
                                </BasicTab.Item>
                                <BasicTab.Item value={Category.ESTIMATE} onTabGroupItemClick={onTabChange}>
                                    견적
                                </BasicTab.Item>
                                <BasicTab.Item value={Category.CASE} onTabGroupItemClick={onTabChange}>
                                    사례
                                </BasicTab.Item>
                            </BasicTab>
                        )} */}
                        {isModal && <BasicModal.Close />}
                    </div>
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
