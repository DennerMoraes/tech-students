import TextBase from "./TextBase";
import { TitleMarked } from "./TitleMarked";
import Image, { StaticImageData } from 'next/image';
import Link from "next/link";
import Icon, { IconName } from "./IconT";

type TeaserButtonProps = {
    title: string;
    highlight: string;
    desc?: string;
    icon: IconName;
    buttonTitle: string;
    teaserList?: { label: string }[];
    src: string | StaticImageData;
    srcMobile?: string | StaticImageData;
    alt: string;
    href: string;
    className?: string;
    classNameImage?: string;
    position?: string;
    iconMobile?: string;
    iconDesktop?: string;
};

export default function TeaserButton({ title, highlight, icon, buttonTitle, desc, teaserList, src, srcMobile, alt, href, className, classNameImage, position, iconMobile, iconDesktop,  }: TeaserButtonProps) {
    return (
        <div>
            <div className="relative mx-auto flex flex-col lg:flex-row justify-between items-start lg:items-center py-12 md:py-20 px-4 max-w-330 gap-12 lg:gap-0 lg:min-h-[707px]">
                <div className={`flex flex-col justify-center max-w-[520px] gap-6 lg:gap-[32px] z-10 ${className}`}>
                    <TitleMarked text={title} highlight={highlight} size="text-[24px] lg:text-[56px]" icon={icon} position={position} iconDesktop={iconDesktop} iconMobile={iconMobile}/>
                    <div>
                        {desc && (
                            <TextBase text={desc} className="text-[16px] lg:text-[20px]" />
                        )}
                        {teaserList && teaserList.map((item, index) => (
                            <div key={index} className="flex flex-row items-start lg:items-center gap-1 lg:gap-3 text-[20px] text-blueText font-roboto leading-[36px]">
                                <div className="w-6 h-6 flex items-center justify-center">
                                    <Icon name="check" />
                                </div>
                                {item.label}
                            </div>
                        ))}
                    </div>
                    <Link className="flex flex-row py-4 items-center justify-start gap-4 font-roboto text-[16px] lg:text-[20px] leading-[24px] font-[600] text-blueLink hover:text-orange transition-all duration-300" href={href}>
                        {buttonTitle}
                        <Icon name="arrowRight" fill="currentColor" />
                    </Link>
                </div>
                <Image className={`lg:absolute lg:right-0 ${classNameImage}`} src={src} alt={alt} />
                {srcMobile && (
                    <Image className="md:hidden" src={srcMobile} alt={alt} />
                )}
            </div>
        </div>
    );
}