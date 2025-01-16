import Card from "./subcomponents/cards";
import { textVal } from "@/data/text";
import BoxReveal from "./ui/box-reveal";

export default function Experience() {

    const items = [
        {
            header: textVal.experience.header,
            desc: 'none',
            image: 'none',
            isHeader: true,
        },
        {
            header: textVal.experience.exp1,
            desc: textVal.experience.expDesc1,
            image: "/portf/react-django.png",
            isHeader: false,
        },
        {
            header: textVal.experience.exp2,
            desc: textVal.experience.expDesc2,
            image: "/portf/laravel.png",
            isHeader: false,
        },
        {
            header: textVal.experience.exp3,
            desc: textVal.experience.expDesc3,
            image: "/portf/vue-laravel.png",
            isHeader: false,
        },
        {
            header: textVal.experience.exp4,
            desc: textVal.experience.expDesc4,
            image: "/portf/laravel.png",
            isHeader: false,
        },
        {
            header: textVal.experience.exp5,
            desc: textVal.experience.expDesc5,
            image: "/portf/php.png",
            isHeader: false,
        },
        {
            header: textVal.experience.exp6,
            desc: textVal.experience.expDesc6,
            image: "/portf/asp.jpg",
            isHeader: false,
        },
    ];

    return (
        <div className="w-full overflow-hidden">
      
            <div className="exp px-8">
                {items.map((item, i) => (
                    <Card key={i} header={item.header} image={item.image} desc={item.desc} isHeader={item.isHeader} index={i} />
                ))}
            </div>
        </div>
    )
}