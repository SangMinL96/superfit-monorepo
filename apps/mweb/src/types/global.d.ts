export {};
declare global {
    interface Window {
        Kakao?: any;
        ReactNativeWebView?: any;
        daum?: any;
        routerBack?: any;
    }
    declare module '*.svg' {
        import React = require('react');
        export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
        const src: string;
        export default src;
    }
}
