import * as multerS3 from 'multer-s3';
import { S3Client } from '@aws-sdk/client-s3';
import * as path from 'path';
import { v4 as uuidv4 } from 'uuid';

const s3Config = new S3Client({
    region: process.env.AWS_S3_REGION!,
    credentials: {
        accessKeyId: process.env.AWS_ACESS_KEY!,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
    },
});

const s3UploadProductsImageConfig = {
    storage: multerS3({
        s3: s3Config,
        bucket: 'stars-food',
        contentType: multerS3.AUTO_CONTENT_TYPE,
        acl: 'public-read',
        key: (req, file, cb) => {
            const fileName = path.parse(file.originalname).name.replace(/\s/g, '') + '-' + uuidv4();

            const extension = path.parse(file.originalname).ext;
            cb(null, `products/${fileName}${extension}`);

        },
    }),
};

const s3UploadUsersImageConfig = {
    storage: multerS3({
        s3: s3Config,
        bucket: 'stars-food',
        contentType: multerS3.AUTO_CONTENT_TYPE,
        acl: 'public-read',
        key: (req, file, cb) => {
            const fileName = path.parse(file.originalname).name.replace(/\s/g, '') + '-' + uuidv4();

            const extension = path.parse(file.originalname).ext;
            cb(null, `users/${fileName}${extension}`);

        },
    }),
};

export { s3UploadProductsImageConfig, s3UploadUsersImageConfig };