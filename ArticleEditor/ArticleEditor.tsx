import { useEffect, useMemo, useRef, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import styles from './ArticleEditor.module.scss';

type ArticleEditorProps = {
    value: string;
    onEditorChange: (value: string) => void;
};

const ArticleEditor = ({ value, onEditorChange }: ArticleEditorProps) => {
    const quillRef = useRef<ReactQuill>(null);

    const handleImageUploadButtonClick = async () => {
        const input = document.createElement('input');
        input.setAttribute('type', 'file');
        input.setAttribute('accept', 'image/*');
        input.click();
        // 파일 선택 후 처리
        input.onchange = async () => {
            const files = input.files;
            if (!files || files.length === 0) {
                // 파일이 선택되지 않은 경우 처리
                return;
            }
            const file = files[0];
            if (file) {
                // 예시: FileReader를 사용해 이미지를 Base64로 변환
                const reader = new FileReader();
                reader.onload = (e) => {
                    if (quillRef.current) {
                        const editor = quillRef.current.getEditor();
                        const range = editor.getSelection();
                        // 에디터에 이미지 삽입 (Base64 URL 사용)
                        if (range) {
                            // 에디터에 이미지 삽입 (Base64 URL 사용)
                            editor.insertEmbed(
                                range.index,
                                'image',
                                'https://images.mypetlife.co.kr/content/uploads/2023/04/18094901/xuan-nguyen-zr0beNrnvgQ-unsplash-768x512-1.jpg'
                            );
                            // 선택 커서를 이미지 다음으로 이동
                            editor.setSelection({
                                index: range.index + 1,
                                length: 0,
                            });
                        } else {
                            // 선택 영역이 null일 때의 처리: 예를 들어, 에디터의 끝에 삽입
                            editor.insertEmbed(
                                editor.getLength(),
                                'image',
                                'https://images.mypetlife.co.kr/content/uploads/2023/04/18094901/xuan-nguyen-zr0beNrnvgQ-unsplash-768x512-1.jpg'
                            );
                            editor.setSelection({ index: editor.getLength(), length: 0 });
                        }
                    }
                };
                reader.readAsDataURL(file);
            }
        };
    };

    const modules = useMemo(
        () => ({
            toolbar: {
                container: [
                    [{ header: [1, 2, false] }],
                    ['bold', 'italic', 'underline', 'strike'],
                    [{ list: 'ordered' }, { list: 'bullet' }],
                    ['link', 'image'],
                ],
                handlers: {
                    image: handleImageUploadButtonClick, // 올바르게 구현된 함수 사용
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
        />
    );
};

export default ArticleEditor;
