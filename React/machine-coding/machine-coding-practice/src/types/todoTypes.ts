
export interface Todo{
    id: number,
    name: string,
    isTimerRunning: boolean,
    timer: string
};

export type Props = {
    data: Todo,
    onStart: (id: number) => void;
    onReset: (id: number) => void;
    onDelete: (id: number) => void;
};