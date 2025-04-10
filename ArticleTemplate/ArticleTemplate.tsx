import Flex from 'headful/Flex/Flex';
import styles from './ArticleTemplate.module.scss';
import Block from 'headful/Block/Block';
import Text from 'headful/Text/Text';
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
        <Flex width={'100%'} flexDirection="column" justifyContent="space-between" className={styles.ArticleTemplate}>
            <Block className={styles.Header}>
                <Flex justifyContent="space-between" className={styles.HeaderWrapper}>
                    <Flex alignItems="center" gap={12}>
                        <div className={styles.Label}>{type === 'create' ? '작성하기' : '수정하기'} </div>
                        <Text fontSize="var(--font-size-lg)" fontWeight="var(--font-weight-bold)">
                            {title}
                        </Text>
                    </Flex>
                    {isModal && <BasicModal.Close />}
                </Flex>
                <Flex className={styles.InputWrapper}>
                    <BasicInput
                        placeholder="제목을 입력해주세요."
                        value={title}
                        onChange={onInputChange}
                        className={styles.ArticleInput}
                    />
                </Flex>
                <Block className={styles.EditorWrapper}>
                    <ArticleEditor value={editor} onEditorChange={onEditorChange} onImageUpload={onImageUpload} />
                </Block>
            </Block>

            {/* <Flex flexDirection="column" width={'100%'} className={styles.Main}></Flex> */}
            <Block className={styles.Footer}>
                <BasicButton onClick={onButtonClick} variant="gradient" height={48}>
                    작성하기
                </BasicButton>
            </Block>
        </Flex>
    );
};

export default ArticleTemplate;
