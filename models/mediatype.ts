export const MediaType = {
    gif: 'gif',
    video: 'video',
    image: 'image'
} as const;

export type MediaTypeValue = typeof MediaType[keyof typeof MediaType];