export const RichTextImage = (props) => {
  const { node } = props;

  const image = node?.fields?.image;
  const float = node?.fields?.float?.toLowerCase();

  /**
   * If the upload is not an image, return a link to the upload
   */
  if (!image?.mimeType?.startsWith("image")) {
    return (
      <a href={image.url} rel="noopener noreferrer">
        {image.filename}
      </a>
    );
  }

  return (
    <img
      className={float ? float : '' }
      alt={image?.filename}
      height={image?.height}
      src={image?.url}
      width={image?.width}
    />
  );
};

export default RichTextImage;