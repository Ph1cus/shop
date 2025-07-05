import { Heading2 } from "./Typography";

type TextSectionProps = {
  title?: string;
  text?: string;
  block?: string[];
};

const TextSection = ({ title, text, block }: TextSectionProps) => {
  return (
    <section className="space-y-2">
      {title && <Heading2>{title}</Heading2>}

      {text && (
        <p
          className="text-gray-700 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: text.replace(/\n/g, "<br/>") }}
        />
      )}

      {block && (
        <ul className="list-disc list-inside text-gray-700 pl-4 space-y-1">
          {block.map((item, index) => (
            <li
              key={index}
              dangerouslySetInnerHTML={{ __html: item }}
              className="text-gray-700"
            />
          ))}
        </ul>
      )}
    </section>
  );
};

export default TextSection;
