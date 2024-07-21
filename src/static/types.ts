import { ComponentPropsWithoutRef, Dispatch, ReactNode, SetStateAction } from "react";

export type todo = {
    id: string,
    content: string,
    state: boolean
}

export type task = {
    id: string,
    content: string,
    state: boolean,
    todoAction: Dispatch<SetStateAction<todo[]>>
};

export type iconButtonProp = {
    children: ReactNode,
    action: Dispatch<SetStateAction<boolean>>, // type for states
};

export type ButtonProps = ComponentPropsWithoutRef<'button'>;

export type buttonProp = {
    children: ReactNode,
    action: ()=> void, // type for states
    className: string,
} & ButtonProps;


export type modalProp = {
    handleCloseModal: Dispatch<SetStateAction<boolean>>,
    handleCreateTask: Dispatch<SetStateAction<todo[]>>
}

export type filterProp = {
    handleFilterEffect: Dispatch<SetStateAction<todo[]>>
}
