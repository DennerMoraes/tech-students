type TeaserMessageProps = {
    title: string;
    desc: string;
    buttonText: string
};

export default function TeaserMessage({ title, desc, buttonText }: TeaserMessageProps) {
    return (
        <div className="relative bg-orange flex flex-col justify-center items-center gap-8 h-auto px-4 py-[86px]">
            <h2 className="text-white font-roboto text-[32px] lg:text-[56px] font-[700] leading-[1.1] max-w-[350px] lg:max-w-[100%] text-center">
                {title}
            </h2>
            <p className="text-[16px] lg:text-[32px] text-white font-roboto font-[300] leading-[1.6] lg:leading-[1.6] text-center">
                {desc}
            </p>
            <form
                className="flex flex-col gap-4 max-w-[550px] w-full mx-auto"
                aria-label="Contact form"
            >
                <label htmlFor="email" className="text-white text-[18px] leading-[1] font-[500]">
                    Email
                </label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    required
                    aria-required="true"
                    aria-label="Email"
                    className="bg-white text-[14px] leading-[1] py-4 px-6 font-roboto rounded-[12px]"
                />

                <label htmlFor="message" className="text-white text-[18px] leading-[1] font-[500]">
                    Message
                </label>
                <textarea
                    id="message"
                    name="message"
                    placeholder="What are you say?"
                    required
                    aria-required="true"
                    aria-label="Message"
                    className="bg-white text-[14px] leading-[1] py-4 px-6 font-roboto rounded-[12px]"
                />
                <div className="mx-auto pt-4">
                    <button
                        type="submit"
                        className="px-7 lg:px-12 py-3 lg:py-5 text-[16px] lg:text-[24px] leading-[24px] inline-flex items-center justify-center rounded-lg font-[700] font-roboto transition-colors duration-300 text-white bg-blueText hover:bg-blueLink"
                        aria-label="Send message"
                    >
                        {buttonText}
                    </button>
                </div>

            </form>
        </div>
    );
}