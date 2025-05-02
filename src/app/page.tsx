import TeaserButton from "@/components/teaserButton";
import TeaserHero from "@/components/teaserHero";
import teaserButtonImage from "../../public/Brand/teaserButtonImage.png";
import teaserButtonImageMobile from "../../public/Brand/teaserButtonImageMobile.png";
import Right from "../../public/Brand/Right.png";
import Col from "../../public/Brand/Col.png";
import CounterList from "@/components/counter";
import  { CounterItem } from '@/components/counter';
import CardCarousel, {Card} from "@/components/carousel";
import Hellen from "../../public/carousel/hellen.png";
import Hellena from "../../public/carousel/Hellena.png";
import Ralph from "../../public/carousel/Ralph.png";
import TeaserYellow from "@/components/teaserYellow";
import TeaserMessage from "@/components/teaserMessage";


export default function Home() {
  const teaserList = [
    { label: "Est et in pharetra magna adipiscing ornare aliquam." },
    { label: "Tellus arcu sed consequat ac velit ut eu blandit." },
    { label: "Ullamcorper ornare in et egestas dolor orci." },
  ]

  const counterList: CounterItem[] = [
    { number: 195, desc: 'user countries', icon: 'heart' },
    { number: 1, desc: 'valued teachers', icon: 'diamond', unit:"M" },
    { number: 17, desc: 'happy students', icon: 'graduation', unit:"M" },
  ];

  const cards: Card[] = [
    { name: 'Hellen Jummy', subtitle: 'Financial Counselor', image: Hellen, description: 'Lacus vestibulum ultricies mi risus, duis non, volutpat nullam non. Magna congue nisi maecenas elit aliquet eu sed consectetur. Vitae quis cras vitae praesent morbi adipiscing purus consectetur mi.' },
    { name: 'Ralph Edwards', subtitle: 'Math Teacher', image: Ralph, description: 'Odio rhoncus ornare ut quam. Molestie vel duis quis scelerisque ut id. In tortor turpis viverra sagittis ultrices nisi, nec tortor. Vestibulum, ultrices ultricies neque, hac ultricies dolor.' },
    { name: 'Hellena John', subtitle: 'Psychology Student', image: Hellena, description: 'Sagittis nunc egestas leo et malesuada urna risus. Morbi proin et cras aliquam. Diam tellus, amet, hac imperdiet. Tellus mi volutpat tellus, congue malesuada sit nisl donec a.' },
    { name: 'Hellen Jummy', subtitle: 'Financial Counselor', image: Hellen, description: 'Lacus vestibulum ultricies mi risus, duis non, volutpat nullam non. Magna congue nisi maecenas elit aliquet eu sed consectetur. Vitae quis cras vitae praesent morbi adipiscing purus consectetur mi.' },
    { name: 'Ralph Edwards', subtitle: 'Math Teacher', image: Ralph, description: 'Odio rhoncus ornare ut quam. Molestie vel duis quis scelerisque ut id. In tortor turpis viverra sagittis ultrices nisi, nec tortor. Vestibulum, ultrices ultricies neque, hac ultricies dolor.' },
    { name: 'Hellena John', subtitle: 'Psychology Student', image: Hellena, description: 'Sagittis nunc egestas leo et malesuada urna risus. Morbi proin et cras aliquam. Diam tellus, amet, hac imperdiet. Tellus mi volutpat tellus, congue malesuada sit nisl donec a.' },
  ];

  return (
    <div className="overflow-hidden">
      <TeaserHero />
      <TeaserButton title="An all-in-one app that makes it easier" highlight="all-in-one" icon="stroke" buttonTitle="Find more about the app" teaserList={teaserList} src={teaserButtonImage} srcMobile={teaserButtonImageMobile} alt="video play in tablet" href="#" classNameImage="hidden md:block" iconDesktop="hidden lg:block"/>

      <TeaserButton title="Meet international students & teachers" highlight="international" icon="plane" desc="Morbi sit egestas dignissim pharetra, sed amet. Tempus justo senectus risus ac vel, velit, nunc. Eget commodo eget in aliquam facilisi facilisi nec magna hendrerit. Placerat ipsum sit tellus urna, faucibus aenean lorem faucibus integer." buttonTitle="Explore teachers and students" src={Col} alt="students and teachers" href="#" className="max-w-[600px] lg:order-1" classNameImage="lg:order-0 lg:relative" iconMobile="hidden" iconDesktop="block" position="top-[-60px] right-0 left-auto lg:top-[-45px] lg:right-[-20px]" />

      <CounterList items={counterList}/>

      <CardCarousel items={cards} title="What everyone says"/>

      <TeaserButton title="All the cool features" highlight="features" icon="strokeTeach" desc="Mauris consequat, cursus pharetra et, habitasse rhoncus quis odio ac. In et dolor eu donec maecenas nulla. Cum sed orci, sit pellentesque quisque feugiat cras ullamcorper. Ultrices in amet, ullamcorper non viverra a, neque orci." buttonTitle="View all the features" src={Right} alt="design for how people think" href="#" className="max-w-[600px]" iconDesktop="hidden lg:block"/>


      <TeaserYellow title="Join a world of learning" desc="Malesuada ut aliquam at ac est nisi, interdum etiam dignissim. Risus elit et fringilla habitant ut facilisi." buttonText="Sign Up Now"/>

      <TeaserMessage title="Ready for your next project?" desc="Sit elit feugiat turpis sed integer integer accumsan turpis." buttonText="Request Demo"/>
    </div>
  );
}
