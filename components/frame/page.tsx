import * as React from "react";

interface Props {
    children: React.ReactNode;
}

export function MainFrame({ children }: Props) {
    return(
        <div className="flex justify-items-stretch w-3/4 max-h-screen self-center content-center pt-6">
            {children}
        </div>
    );
}