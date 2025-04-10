import { useMemo, useRef } from 'react';
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
};

const ArticleEditor = ({ value, onEditorChange, onImageUpload }: ArticleEditorProps) => {
    const quillRef = useRef<ReactQuill>(null);

    const handleImageUploadButtonClick = async () => {
        const input = document.createElement('input');
        input.setAttribute('type', 'file');
        input.setAttribute('accept', 'image/*');
        input.setAttribute('multiple', 'true'); // 여러 파일 선택 허용
        input.click();

        input.onchange = async () => {
            const files = input.files;
            if (!files || files.length === 0) {
                // 파일이 선택되지 않은 경우 처리
                return;
            }

            if (quillRef.current) {
                const editor = quillRef.current.getEditor();
                // 선택 영역이 없으면 에디터 끝으로 기본 설정
                let range = editor.getSelection();
                if (!range) {
                    range = { index: editor.getLength(), length: 0 };
                }

                const images = await onImageUpload(files);
                console.log('images: ', images);
                // 선택한 각 파일을 순차적으로 처리
                for (let i = 0; i < images.length; i++) {
                    // const file = files[i];
                    const image = images[i];

                    // 1. 서버 업로드 (옵션)
                    // 이미지 업로드 API 호출해서 imagePath를 받아올 수 있음

                    // 필요한 경우 아래 삽입 시 imagePath 사용 가능

                    // 2. FileReader를 이용해 Base64 변환 (또는 서버 URL을 사용하는 방식도 가능)
                    // const base64Image = await new Promise((resolve, reject) => {
                    //     const reader = new FileReader();
                    //     reader.onload = (e) => resolve(e?.target?.result);
                    //     reader.onerror = (e) => reject(e);
                    //     reader.readAsDataURL(file);
                    // });

                    // 3. 현재 커서 위치에 이미지 삽입
                    editor.insertEmbed(range.index, 'customImage', {
                        src: 'https://yt3.googleusercontent.com/1Et_2yOD9ItQ18tWvIQLDTHW5Y9b7yKSrKJ8-DOSrOtQfHk5-2H1utSGvkt5BYflTpCMake5=s900-c-k-c0x00ffffff-no-rj',
                        uuid: image.uuid,
                    });
                    // 삽입 후 커서 위치를 업데이트 (각 이미지가 1칸씩 증가한다고 가정)
                    range.index += 1;
                }

                // 모든 이미지 삽입 후 커서 위치를 마지막 위치로 설정
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
                    ['underline', 'strike', 'bold', 'italic'],
                    [{ list: 'ordered' }, { list: 'bullet' }],
                    ['link', 'image'],
                ],
                handlers: {
                    image: handleImageUploadButtonClick, // 올바르게 구현된 함수 사용
                },
                ImageResize: {
                    modules: ['Resize'],
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
                'width',
                'height',
            ]}
        />
    );
};

export default ArticleEditor;
