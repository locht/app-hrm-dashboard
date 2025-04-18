import { useEffect } from "react";

const useContextLogger = (state: any, contextName: string) => {
    useEffect(() => {
        console.log(`${contextName} State:`, state);
    }, [state]);
};

export default useContextLogger;
