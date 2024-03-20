export const TGIFrame = () => {
  const url = `https://oauth.telegram.org/embed/${process.env.TG_BOT_NAME}?origin=${process.env.HOST}&request_access=write`;
  return (
    <iframe
      src={url}
      width="100%"
      height="100%"
      frameBorder="0"
      scrolling="no"
    />
  );
};
