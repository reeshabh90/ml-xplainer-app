export const Animation = {
    line: 'line',
    bar: 'bar',
    scatter: 'scatter',
    composite: 'composite'
} as const;

export type AnimationType = typeof Animation[keyof typeof Animation];