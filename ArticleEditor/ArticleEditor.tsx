import { useEffect, useMemo, useRef } from 'react';
import ReactQuill, { Quill } from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import styles from './ArticleEditor.module.scss';
import { ImageActions } from '@xeger/quill-image-actions';
import './CustomImageBlot';

Quill.register('modules/imageActions', ImageActions);

type ArticleEditorProps = {
    value: string;
    onEditorChange: (value: string) => void;
    onImageUpload: (files: FileList) => Promise<any>;
    disabled?: boolean;
};

const ArticleEditor = ({ value, onEditorChange, onImageUpload, disabled = false }: ArticleEditorProps) => {
    const quillRef = useRef<ReactQuill>(null);

    const handleImageUploadButtonClick = async () => {
        const input = document.createElement('input');
        input.setAttribute('type', 'file');
        input.setAttribute('accept', 'image/*');
        input.setAttribute('multiple', 'true');
        input.click();

        input.onchange = async () => {
            const files = input.files;
            if (!files || files.length === 0) return;

            if (quillRef.current) {
                const editor = quillRef.current.getEditor();
                let range = editor.getSelection();
                if (!range) {
                    range = { index: editor.getLength(), length: 0 };
                }

                const images = await onImageUpload(files);

                for (let i = 0; i < images.length; i++) {
                    const image = images[i];

                    editor.insertEmbed(range.index, 'customImage', {
                        src: image.path,
                        uuid: image.uuid,
                    });

                    range.index += 1;
                }

                editor.setSelection(range.index, 0);
            }
        };
    };

    const modules = useMemo(
        () => ({
            imageActions: {},
            toolbar: {
                container: [
                    [{ header: [1, 2, false] }],
                    ['bold', 'italic', 'underline', 'strike'],
                    [{ list: 'ordered' }, { list: 'bullet' }],
                    [{ color: [] }, { background: [] }], // ✅ 색상 선택 추가
                    ['link', 'image'],
                ],
                handlers: {
                    image: handleImageUploadButtonClick,
                },
            },
        }),
        []
    );

    return (
        <ReactQuill
            className={styles.Editor}
            ref={quillRef}
            value={value}
            readOnly={disabled}
            onChange={onEditorChange}
            theme="snow"
            modules={modules}
            placeholder="내용을 입력하세요..."
            formats={[
                'header',
                'bold',
                'italic',
                'strike',
                'underline',
                'list',
                'bullet',
                'link',
                'customImage',
                'color', // ✅ 추가
                'background', // ✅ 추가
                'width',
                'height',
            ]}
        />
    );
};

export default ArticleEditor;
