import { ReactElement, ReactNode } from "react";

export interface TabItemProps {
    label: string;
    children: ReactNode;
}

export interface TabListProps {
    classCss?: string;
    activeTabIndex: number;
    children: ReactElement<TabItemProps> | ReactElement<TabItemProps>[];
}