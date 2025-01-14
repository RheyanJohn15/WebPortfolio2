import Card from "./subcomponents/cards"

export default function Experience() {

    const items = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"];

    return (
        <div className="w-full overflow-hidden">

            <div className="exp">
                {items.map((item, i) => (
                    <Card key={i} text={item} index={i} />
                ))}
            </div>
        </div>
    )
}