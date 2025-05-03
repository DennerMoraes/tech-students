import { Button } from "./Button";
import Image from 'next/image';
import YellowPhotos from "../../public/Brand/YellowPhotos.png";
import YellowPhotosMobile from "../../public/Brand/YellowPhotosMobile.png";
import YellowPhotos2 from "../../public/Brand/YellowPhotos2.png";
import YellowPhotosMobile2 from "../../public/Brand/YellowPhotosMobile2.png"

type TeaserYellowProps = {
    title: string;
    desc: string;
    buttonText: string
};

export default function TeaserYellow({ title, desc, buttonText }: TeaserYellowProps) {
    return (
        <div className="relative bg-yellow flex flex-col justify-center items-center gap-8 h-auto lg:h-[779px] p-4">
            <Image className="hidden lg:block absolute left-0" src={YellowPhotos} alt="photos people"/>
            <Image className="lg:hidden" src={YellowPhotosMobile} alt="photos people"/>
            <h2 className="text-blueText font-roboto text-[24px] lg:text-[56px] font-[700] leading-[1.1]">{title}</h2>
            <p className="text-[16px] lg:text-[20px] text-blueText font-roboto font-[400] leading-[1.6] lg:leading-[1.8] max-w-[360px] lg:max-w-[560px] text-center z-1">{desc}</p>
            <Button href="/signup">
                {buttonText}
            </Button>
            <Image className="hidden lg:block absolute right-0" src={YellowPhotos2} alt="photos people two"/>
            <Image className="lg:hidden" src={YellowPhotosMobile2} alt="photos people two"/>
        </div>
    );
}