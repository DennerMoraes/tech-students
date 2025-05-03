import { Button } from "./ButtonT";
import TextBase from "./TextBaseT";
import { TitleMarked } from "./TitleMarked";
import icon1 from "@/Icons/icon1.png";
import icon2 from "@/Icons/icon2.png";
import icon3 from "@/Icons/icon3.png";
import icon4 from "@/Icons/icon4.png";
import icon5 from "@/Icons/icon5.png";
import Image from 'next/image';
import Link from "next/link";
import Icon from "./IconT";
import TeaserImage from "../../public/Brand/teaserImage.png";

export default function TeaserHero() {
    return (
        <div>
            <div className="mx-auto flex flex-col lg:flex-row justify-between items-start lg:items-center py-12 md:py-20 px-4 max-w-330 gap-12 lg:gap-0">
                <div className="flex flex-col justify-center max-w-[575px] gap-6 lg:gap-[32px]">
                    <TitleMarked text="Teach students worldwide" highlight="Teach" size="text-[40px] lg:text-[72px]" icon="strokeTeach" iconDesktop="hidden lg:block"/>
                    <TextBase text="Amet nunc diam orci duis ut sit diam arcu, nec. Eleifend proin massa tincidunt viverra lectus pulvinar. Nunc ipsum est pellentesque turpis ultricies." className="text-[16px] lg:text-[24px]"/>
                    <div className="flex flex-row gap-8">
                        <Button href="/home" variant="orange">Sign Up Now</Button>
                        <Link className="flex flex-row items-center justify-center gap-4 font-roboto text-[16px] lg:text-[20px] leading-[24px] font-[600] text-blueLink hover:text-orange transition-all duration-300" href="/demo">
                            <Icon name="playIcon" fill="currentColor"/>View Demo
                        </Link>
                    </div>
                    <div className="flex flex-col lg:flex-row flex-wrap items-start lg:items-center gap-4 lg:gap-12">
                        <p className="lg:max-w-[135px] text-blueGray font-[16px]">Trusted by <br className="hidden lg:block"/> leading companies</p>
                        <div className="flex flex-row gap-6 lg:gap-12 h-8">
                            <Image src={icon1} alt="brand one" className="object-cover" width={32} height={32}/>
                            <Image src={icon2} alt="brand two"/>
                            <Image src={icon3} alt="brand three"/>
                            <Image src={icon4} alt="brand four"/>
                            <Image src={icon5} alt="brand five"/>
                        </div>
                    </div>
                </div>
                <Image src={TeaserImage} alt="People in talking in the chat"/>
            </div>
        </div>
    );
}