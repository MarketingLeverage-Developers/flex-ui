import React, { useRef, useState } from 'react';

type ImageUploadInputProps = {
    value: string;
    onInputChange: (images: FileList) => void;
};

const ImageUploadInput = ({ value, onInputChange }: ImageUploadInputProps) => {
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files as FileList;

        // 이미지 업로드 API 호출

        onInputChange(files);
    };

    const handleUploadClick = () => {
        fileInputRef.current?.click();
    };

    return (
        <div>
            {/* 숨겨진 input */}
            <input
                type="file"
                accept="image/*"
                ref={fileInputRef}
                style={{ display: 'none' }}
                onChange={handleFileChange}
            />

            {/* 대체 UI */}
            <div
                onClick={handleUploadClick}
                style={{
                    display: 'inline-block',
                    padding: '10px 20px',
                    backgroundColor: '#f0f0f0',
                    border: '1px solid #ccc',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    textAlign: 'center',
                }}
            >
                이미지 업로드
            </div>

            {/* 이미지 미리보기 */}
            {value && (
                <div style={{ marginTop: '10px' }}>
                    <img src={value} alt="미리보기" style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px' }} />
                </div>
            )}
        </div>
    );
};

export default ImageUploadInput;
