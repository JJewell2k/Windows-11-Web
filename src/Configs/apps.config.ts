
export type App = {
    [key: string]: {
        title: string;
        isActive: boolean;
        icon: string
        pinned?: boolean,
        Component?: any,
        height?: number,
        width?: number
    }
}

export const AppsConfig: App = {} as const