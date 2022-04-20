import { loadImage } from 'utils/loadImage';

function SuspenseImage(props: React.ImgHTMLAttributes<HTMLImageElement>): JSX.Element {
  loadImage(props.src as string).read();
  return <img {...props} />;
}

export default SuspenseImage;
