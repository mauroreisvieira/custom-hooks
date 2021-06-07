import * as React from 'react';

export const useLocalStorage = (
        key: string,
        defaulValue: () => void | string,
        {
            serialize = JSON.stringify,
            deserialize = JSON.parse,
        } = {}
    ) => {
    const [state, setState] = React.useState(() => {
        const valueInLocalStorage = window.localStorage.getItem(key);

        if (valueInLocalStorage) return deserialize(valueInLocalStorage);
        return typeof defaulValue === 'function' ? defaulValue() : defaulValue;
    });

    const prevKeyRef = React.useRef(key);

    React.useEffect(() => {
        const prevKey = prevKeyRef.current;
        if (prevKey !== key) window.localStorage.removeItem(prevKey);
        prevKeyRef.current = key;
        window.localStorage.setItem(key, serialize(state));
    }, [key, serialize, state]);

    return [state, setState];
}
