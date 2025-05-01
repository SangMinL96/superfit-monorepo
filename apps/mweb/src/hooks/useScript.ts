import { useEffect, useState } from 'react';

function useScript(src: string) {
    const [status, setStatus] = useState(false);

    useEffect(() => {
        if (!src) {
            setStatus(false);
            return;
        }

        let script = document.querySelector(`script[src="${src}"]`) as HTMLScriptElement;

        if (!script) {
            script = document.createElement('script');
            script.src = src;
            script.async = true;
            script.setAttribute('data-status', 'loading');

            document.body.appendChild(script);
            const setAttributeFromEvent = (event: any) => {
                script.setAttribute('data-status', event.type === 'load' ? 'loaded' : '');
            };

            script.addEventListener('load', setAttributeFromEvent);
            script.addEventListener('error', setAttributeFromEvent);
        } else {
            setStatus(script.getAttribute('data-status') === 'loaded');
        }
        const setStateFromEvent = (event: { type: string }) => {
            setStatus(event.type === 'load');
        };
        script.addEventListener('load', setStateFromEvent);
        script.addEventListener('error', setStateFromEvent);
        return () => {
            if (script) {
                script.removeEventListener('load', setStateFromEvent);
                script.removeEventListener('error', setStateFromEvent);
            }
        };
    }, [src]);

    return status;
}

export default useScript;
