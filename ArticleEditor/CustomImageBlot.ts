import Quill from 'quill';

const ImageBlot = Quill.import('formats/image');

interface CustomImageValue {
    src: string;
    uuid: string;
}

class CustomImageBlot extends ImageBlot {
    static create(value: string | CustomImageValue): HTMLElement {
        let node: HTMLElement;
        if (typeof value === 'string') {
            node = super.create(value);
        } else {
            node = super.create(value.src);
            node.setAttribute('data-uuid', value.uuid);
        }
        return node;
    }

    static value(node: HTMLElement): CustomImageValue {
        return {
            src: node.getAttribute('src') || '',
            uuid: node.getAttribute('data-uuid') || '',
        };
    }
}

// blotName과 tagName을 재정의 (타입스크립트에서는 as any로 캐스팅)
(CustomImageBlot as any).blotName = 'customImage';
(CustomImageBlot as any).tagName = 'img';

// Quill에 커스텀 블롯 등록
Quill.register(CustomImageBlot);

export default CustomImageBlot;
