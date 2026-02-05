// Cloudinary configuration and helpers

export const cloudinaryConfig = {
    cloudName: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
    apiKey: process.env.CLOUDINARY_API_KEY,
    apiSecret: process.env.CLOUDINARY_API_SECRET,
};

// Generate Cloudinary URL with transformations
export function getCloudinaryUrl(
    publicId: string,
    options: {
        width?: number;
        height?: number;
        quality?: 'auto' | number;
        format?: 'auto' | 'webp' | 'jpg' | 'png';
        crop?: 'fill' | 'fit' | 'scale' | 'thumb';
    } = {}
): string {
    const { width, height, quality = 'auto', format = 'auto', crop = 'fill' } = options;

    const transforms: string[] = [];

    if (width) transforms.push(`w_${width}`);
    if (height) transforms.push(`h_${height}`);
    if (crop) transforms.push(`c_${crop}`);
    transforms.push(`q_${quality}`);
    transforms.push(`f_${format}`);

    const transformString = transforms.join(',');

    return `https://res.cloudinary.com/${cloudinaryConfig.cloudName}/image/upload/${transformString}/${publicId}`;
}

// Generate responsive image srcset
export function getCloudinarySrcSet(publicId: string, widths: number[] = [320, 640, 960, 1280]): string {
    return widths
        .map((w) => `${getCloudinaryUrl(publicId, { width: w })} ${w}w`)
        .join(', ');
}
