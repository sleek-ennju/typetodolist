import { ComponentPropsWithoutRef, Dispatch, ReactNode, SetStateAction } from "react";

// todo
export type todo = {
    id: string,
    content: string,
    state: boolean
}

// task component
export type task = {
    id: string,
    content: string,
    state: boolean,
    todoAction: Dispatch<SetStateAction<todo[]>>,
};

// buttons with icon
export type iconButtonProp = {
    children: ReactNode,
    action: Dispatch<SetStateAction<boolean>>, // type for states
};

// type to enable default button props to be passed
export type ButtonProps = ComponentPropsWithoutRef<'button'>;

// button component
export type buttonProp = {
    children: ReactNode,
    action: ()=> void, // type for states
    className: string,
} & ButtonProps;

// modal component
export type modalProp = {
    handleCloseModal: Dispatch<SetStateAction<boolean>>,
    handleCreateTask: Dispatch<SetStateAction<todo[]>>
}

// filter component
export type filterProp = {
    handleFilterEffect: Dispatch<SetStateAction<string>>
}

// search component
export type searchProp = {
    handleSearchEffect: (word:string)=> void ,
    handleClearSearchList: ()=> void,
    searchState: boolean
}

// empty todo list component
export type emptyTodoList = {
    title: string,
    description: string
}
