import Image from 'next/image'
import useWindowSize from '../hooks/useWindowSize';

const DevImg = ({containerStyles, ImgSrc}) => {
  const { width } = useWindowSize();
  return (
    <div className={`${containerStyles}`}>
      <Image 
        src={ImgSrc} 
        width={505}
        height={505}
        loading={width < 768 ? "lazy" : "eager"}
        decoding="async"
        priority={width >= 768} // Set priority for larger screens 
      />
    </div>
  )
}

export default DevImg