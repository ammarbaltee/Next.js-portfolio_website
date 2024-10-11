import Image from 'next/image'


const DevImg = ({containerStyles, ImgSrc}) => {
  return (
    <div className={`${containerStyles}`}>
        <Image src={ImgSrc} fill priority alt='' />
    </div>
  )
}

export default DevImg