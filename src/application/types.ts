export const INTERVAL = 100;
export const DELAY = 7000;

export interface Slide {
    alias: string;
    data: object;
}

export type SlideTheme = 'light' | 'dark';

export interface State {
    theme: SlideTheme;
    stories: Slide[];
    index: number;
    progress: number;
    pause: boolean;
}

export const descriptors: { [prop: string]: PropertyDescriptor } = {};

export const errors = {
    0: 'Illegal state',
    1: 'Drafts cannot have computed properties',
};
