import { classNames } from "../../../../lib/classNames";

export default function MainPageSelector({items, handleClick}) {
    return (
        <div className="h-full w-36 shrink-0 flex flex-col">
            {items.map((val, i) => (
                <div
                    key={i}
                    className={classNames('flex-1 w-full cursor-pointer', 'bg-' + (i + 1))}
                    onClick={(e) => handleClick(e, i)}
                >

                </div>
            ))}
        </div>
    )
}