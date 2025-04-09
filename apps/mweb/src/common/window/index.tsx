const windowOpen = ({ url, name }: { url: string; name: string }) => {
  const width = 600;
  const height = 420;

  const left = Math.ceil((global.window && window.screen.width - width) / 2);
  const top = Math.ceil((global.window && window.screen.height - height) / 2);
  window.open(
    url,
    name,
    `width=${width}, height=${height}, left=${left}, top=${top},menubar=no,scrollbars=no,resizeable=no,location=no,toolbar=no`,
  );
};

export default windowOpen;
export { windowOpen };
