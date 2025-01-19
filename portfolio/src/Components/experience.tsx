import Card from "./subcomponents/cards";
import { textVal } from "@/data/text";

export default function Experience() {

    const items = [
        {
            header: textVal.experience.header,
            desc: 'none',
            image: 'none',
            isHeader: true,
            pos: 'none',
            comp: 'none',
            year: 'none',
        },
        {
            header: textVal.experience.exp1,
            desc: textVal.experience.expDesc1,
            image: "/portf/react-django.png",
            isHeader: false,
            comp: textVal.experience.company1,
            pos: textVal.experience.position1,
            year: textVal.experience.exp1Year,
        },
        {
            header: textVal.experience.exp2,
            desc: textVal.experience.expDesc2,
            image: "/portf/laravel.png",
            isHeader: false,
            comp: textVal.experience.company1,
            pos: textVal.experience.position1,
            year: textVal.experience.exp2Year,
        },
        {
            header: textVal.experience.exp3,
            desc: textVal.experience.expDesc3,
            image: "/portf/vue-laravel.png",
            isHeader: false,
            comp: textVal.experience.company1,
            pos: textVal.experience.position1,
            year: textVal.experience.exp3Year,
        },
        {
            header: textVal.experience.exp4,
            desc: textVal.experience.expDesc4,
            image: "/portf/laravel.png",
            isHeader: false,
            comp: textVal.experience.company1,
            pos: textVal.experience.position1,
            year: textVal.experience.exp4Year,
        },
        {
            header: textVal.experience.exp5,
            desc: textVal.experience.expDesc5,
            image: "/portf/php.png",
            isHeader: false,
            comp: textVal.experience.company1,
            pos: textVal.experience.position1,
            year: textVal.experience.exp5Year,
        },
        {
            header: textVal.experience.exp6,
            desc: textVal.experience.expDesc6,
            image: "/portf/asp.jpg",
            isHeader: false,
            comp: textVal.experience.company1,
            pos: textVal.experience.position1,
            year: textVal.experience.exp6Year,
        },
    ];

    return (
        <div id="experience" className="w-full overflow-hidden">
      
            <div className="exp px-8">
                {items.map((item, i) => (
                    <Card key={i} header={item.header} year={item.year} position={item.pos} company={item.comp} image={item.image} desc={item.desc} isHeader={item.isHeader} index={i} />
                ))}
            </div>
        </div>
    )
}