type TextBaseProps = {
    text: string;
    className?: string;
};

export default function TextBase({ text, className }: TextBaseProps) {
    return <p className={`text-blueText font-[400] ${className}`}>{text}</p>;
}