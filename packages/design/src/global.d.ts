declare module "*.scss" {
  const content: { [className: string]: string };
  export = content;
}
declare module "*.svg" {
  import React = require("react");
  export const ReactComponent: React.FC<React.SVGProps<SVGElement>>;
  const src: string;
  export default src;
}
declare module "*.tsx" {
  const content: { src: any };
  export default content;
}
declare module "*.png" {
  const content: { src: any };
  export default content;
}

declare module "*.gif" {
  const content: { src: any };
  export default content;
}
