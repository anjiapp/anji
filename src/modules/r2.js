import {
    S3Client,
    ListBucketsCommand,
    ListObjectsV2Command,
    GetObjectCommand,
    PutObjectCommand
} from "@aws-sdk/client-s3";
import fs from "fs";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

export class R2 {
    constructor(R2Conifg) {
        this.config = R2Conifg;
        this.r2 = null;
        this.initialize();
    }

    async initialize() {
        console.log(this.config)
        this.r2 = new S3Client({
            region: "auto",
            endpoint: `https://${this.config.r2_bucket}.r2.cloudflarestorage.com`,
            credentials: {
                accessKeyId: this.config.R2_ACCESS_KEY_ID,
                secretAccessKey: this.config.R2_SECRET_ACCESS_KEY,
            },
        });
    }


    async getObject(bucketName, key) {
        const data = await this.r2.send(new GetObjectCommand({
            Bucket: bucketName,
            Key: key
        }));
        return data.Body;
    }

    async putObject(bucketName, key, body) {
        const data = await this.r2.send(new PutObjectCommand({
            Bucket: bucketName,
            Key: key,
            Body: body
        }));
        return data;
    }

    async getSignedUrl(bucketName, key) {
        const command = new GetObjectCommand({
            Bucket: bucketName,
            Key: key
        });
        const signedUrl = await getSignedUrl(this.r2, command, {
            expiresIn: 3600
        });
        return signedUrl;
    }

    async listData() {
        return await this.r2.send(new ListObjectsV2Command({ Bucket: 'anji-dev' }))
    }

}