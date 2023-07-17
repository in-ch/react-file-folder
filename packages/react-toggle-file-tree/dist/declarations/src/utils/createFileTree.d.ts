export interface File {
    localPath: string;
}
export interface Directory {
    [key: string]: Directory | File[] | [];
    files: File[];
}
/**
 * @params {any[]} list
 * @description 1차원 배열 값을 받아 파일 트리 구조를 만듭니다.
 *              이 때 list안의 객체의 filePath 값은 필수입니다.
 */
export default function createFileTree(list: File[]): Directory;
interface UpdateFileListProps {
    list: any[];
    fileNameKey: string;
    localPathKey: string;
}
/**
 * @params fileNameKey: 사용자 file obj의 fileName에 상응하는 key값
 * @params localPathKey: 사용자 file obj의 localPath에 상응하는 key값
 * @params 사용자 정의 obj로 된 배열 값을 받아 File | Directory 형식에 맡게 변환합니다.
 */
export declare function updateFileList({ list, fileNameKey, localPathKey, }: UpdateFileListProps): any[];
export {};
