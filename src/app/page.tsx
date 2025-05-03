import TeaserButton from "@/components/TeaserButton";
import TeaserHero from "@/components/TeaserHero";
import teaserButtonImage from "../../public/Brand/teaserButtonImage.png";
import teaserButtonImageMobile from "../../public/Brand/teaserButtonImageMobile.png";
import Right from "../../public/Brand/Right.png";
import Col from "../../public/Brand/Col.png";
import CounterList from "@/components/Counter";
import { CounterItem } from '@/components/Counter';
import CardCarousel, { Card } from "@/components/Carousel";
import Hellen from "../../public/Carousel/hellen.png";
import Hellena from "../../public/Carousel/Hellena.png";
import Ralph from "../../public/Carousel/Ralph.png";
import TeaserYellow from "@/components/TeaserYellow";
import TeaserMessage from "@/components/TeaserMessage";
import CarouselYellow from "@/components/CarouselYellow/CarouselYellow";
import Picture from "../../public/CarouselYellow/Picture.png"
import FadeInWhenVisible from "@/components/FadeInWhenVisible";


export default function Home() {
  const teaserList = [
    { label: "Est et in pharetra magna adipiscing ornare aliquam." },
    { label: "Tellus arcu sed consequat ac velit ut eu blandit." },
    { label: "Ullamcorper ornare in et egestas dolor orci." },
  ]

  const counterList: CounterItem[] = [
    { number: 195, desc: 'user countries', icon: 'heart' },
    { number: 1, desc: 'valued teachers', icon: 'diamond', unit: "M" },
    { number: 17, desc: 'happy students', icon: 'graduation', unit: "M" },
  ];

  const cards: Card[] = [
    { name: 'Hellen Jummy', subtitle: 'Financial Counselor', image: Hellen, description: 'Lacus vestibulum ultricies mi risus, duis non, volutpat nullam non. Magna congue nisi maecenas elit aliquet eu sed consectetur. Vitae quis cras vitae praesent morbi adipiscing purus consectetur mi.' },
    { name: 'Ralph Edwards', subtitle: 'Math Teacher', image: Ralph, description: 'Odio rhoncus ornare ut quam. Molestie vel duis quis scelerisque ut id. In tortor turpis viverra sagittis ultrices nisi, nec tortor. Vestibulum, ultrices ultricies neque, hac ultricies dolor.' },
    { name: 'Hellena John', subtitle: 'Psychology Student', image: Hellena, description: 'Sagittis nunc egestas leo et malesuada urna risus. Morbi proin et cras aliquam. Diam tellus, amet, hac imperdiet. Tellus mi volutpat tellus, congue malesuada sit nisl donec a.' },
    { name: 'Hellen Jummy', subtitle: 'Financial Counselor', image: Hellen, description: 'Lacus vestibulum ultricies mi risus, duis non, volutpat nullam non. Magna congue nisi maecenas elit aliquet eu sed consectetur. Vitae quis cras vitae praesent morbi adipiscing purus consectetur mi.' },
    { name: 'Ralph Edwards', subtitle: 'Math Teacher', image: Ralph, description: 'Odio rhoncus ornare ut quam. Molestie vel duis quis scelerisque ut id. In tortor turpis viverra sagittis ultrices nisi, nec tortor. Vestibulum, ultrices ultricies neque, hac ultricies dolor.' },
    { name: 'Hellena John', subtitle: 'Psychology Student', image: Hellena, description: 'Sagittis nunc egestas leo et malesuada urna risus. Morbi proin et cras aliquam. Diam tellus, amet, hac imperdiet. Tellus mi volutpat tellus, congue malesuada sit nisl donec a.' },
  ];

  const testimony: Card[] = [
    { name: 'Marie Poirot,', subtitle: 'Bigapp', image: Picture, description: 'Id urna, nisl, ut quam. Diam suspendisse fringilla quam arcu mattis est velit in. Nibh in purus sit convallis phasellus ut. At vel erat ultricies commodo. Neque suspendisse a habitasse commodo.' },
    { name: 'Marie Poirot,', subtitle: 'Bigapp', image: Picture, description: 'Id urna, nisl, ut quam. Diam suspendisse fringilla quam arcu mattis est velit in. Nibh in purus sit convallis phasellus ut. At vel erat ultricies commodo. Neque suspendisse a habitasse commodo.' },
    { name: 'Marie Poirot,', subtitle: 'Bigapp', image: Picture, description: 'Id urna, nisl, ut quam. Diam suspendisse fringilla quam arcu mattis est velit in. Nibh in purus sit convallis phasellus ut. At vel erat ultricies commodo. Neque suspendisse a habitasse commodo.' },
    { name: 'Marie Poirot,', subtitle: 'Bigapp', image: Picture, description: 'Id urna, nisl, ut quam. Diam suspendisse fringilla quam arcu mattis est velit in. Nibh in purus sit convallis phasellus ut. At vel erat ultricies commodo. Neque suspendisse a habitasse commodo.' },
  ];

  return (
    <div className="overflow-hidden">
      <FadeInWhenVisible>
        <TeaserHero />
      </FadeInWhenVisible>

      <FadeInWhenVisible delay={0.1}>
        <TeaserButton title="An all-in-one app that makes it easier" highlight="all-in-one" icon="stroke" buttonTitle="Find more about the app" teaserList={teaserList} src={teaserButtonImage} srcMobile={teaserButtonImageMobile} alt="video play in tablet" href="#" classNameImage="hidden md:block" iconDesktop="hidden lg:block" />
      </FadeInWhenVisible>

      <CarouselYellow items={testimony} />

      <FadeInWhenVisible delay={0.2}>
        <TeaserButton title="Meet international students & teachers" highlight="international" icon="plane" desc="Morbi sit egestas dignissim pharetra, sed amet. Tempus justo senectus risus ac vel, velit, nunc. Eget commodo eget in aliquam facilisi facilisi nec magna hendrerit. Placerat ipsum sit tellus urna, faucibus aenean lorem faucibus integer." buttonTitle="Explore teachers and students" src={Col} alt="students and teachers" href="#" className="max-w-[600px] lg:order-1" classNameImage="lg:order-0 lg:relative" iconMobile="hidden" iconDesktop="block" position="top-[-60px] right-0 left-auto lg:top-[-45px] lg:right-[-20px]" />
      </FadeInWhenVisible>

      <CounterList items={counterList} />

      <CardCarousel items={cards} title="What everyone says" />

      <FadeInWhenVisible delay={0.3}>
        <TeaserButton title="All the cool features" highlight="features" icon="strokeTeach" desc="Mauris consequat, cursus pharetra et, habitasse rhoncus quis odio ac. In et dolor eu donec maecenas nulla. Cum sed orci, sit pellentesque quisque feugiat cras ullamcorper. Ultrices in amet, ullamcorper non viverra a, neque orci." buttonTitle="View all the features" src={Right} alt="design for how people think" href="#" className="max-w-[600px]" iconDesktop="hidden lg:block" />
      </FadeInWhenVisible>

      <FadeInWhenVisible delay={0.4}>
      <TeaserYellow title="Join a world of learning" desc="Malesuada ut aliquam at ac est nisi, interdum etiam dignissim. Risus elit et fringilla habitant ut facilisi." buttonText="Sign Up Now" />
      </FadeInWhenVisible>

      <TeaserMessage title="Ready for your next project?" desc="Sit elit feugiat turpis sed integer integer accumsan turpis." buttonText="Request Demo" />
    </div>
  );
}
