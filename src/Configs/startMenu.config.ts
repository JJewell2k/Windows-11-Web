import {} from "../assets/icons/startmenu"

export type PinnedApp = {
    appId?: string
    title: string;
    icon: string;
    action?: () => void;
    isLink?: boolean;
    url?: string;
    pinned?: boolean
}
export const PinnedApps: PinnedApp[] = [{}]

export const Apps = PinnedApps.reduce((acc, app) => {
    return !app.appId && {
        ...acc,
        [app.appId || app.title]: {
            ...app
        }
    }
}, {})