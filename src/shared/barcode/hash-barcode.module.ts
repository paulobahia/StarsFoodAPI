import { Module } from '@nestjs/common';

export interface BarcodeGenerator {
    generateBarcode(restaurantId: number, number: number): string;
}

class BarcodeGeneratorImplement implements BarcodeGenerator {
    generateBarcode(restaurantId: number, number: number): string {
        let value = `${restaurantId}-${number}`;

        for (let i = 0; i < 3; i++) {
            value = btoa(value).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
        }

        return value;
    }
}

export const BARCODE_GENERATOR = 'BarcodeGenerator';

@Module({
    providers: [
        {
            provide: BARCODE_GENERATOR,
            useClass: BarcodeGeneratorImplement,
        },
    ],
    exports: [BARCODE_GENERATOR],
})
export class BarcodeModule { }