import { ReactNode } from "react";

export type iconButtonProp = {
    children: ReactNode
};

export type todoList = {
    id: string | number,
    content: string,
    state: boolean
}