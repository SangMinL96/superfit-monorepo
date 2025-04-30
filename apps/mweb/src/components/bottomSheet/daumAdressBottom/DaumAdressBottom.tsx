import DaumAddress from '@src/common/daumAddress/DaumAddress';
import React from 'react';
type Props = {
    onResult: (result: boolean) => void;
};
function DaumAdressBottom({ onResult }: Props) {
    return <DaumAddress onConfirm={onResult} />;
}

export default DaumAdressBottom;
