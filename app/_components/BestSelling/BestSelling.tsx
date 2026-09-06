"use client";
import BlackButton from "@/app/_components/Generic/BlackButton";
import { use, useState } from "react";
import ShoeCard2 from "@/app/_components/Generic/ShoeCard2";
import { Shoe, ShoeCard2Props } from "@/app/_types/types";
import { useAllShoes } from "@/app/_hooks/shoesQuery";
export default function BestSelling() {

    const [chosen, setChosen] = useState([true, false, false, false]);
    function handleClick(index: number) {
        const newChosen = [false, false, false, false];
        newChosen[index] = true;
        setChosen(newChosen);
    }
    function onArrowClick() {
        console.log("Arrow clicked!");
    }

    const { data: products, isLoading, error } = useAllShoes();
    return (
        <section className="w-full my-10 lg:my-15">
            <div className="flex items-center justify-center gap-2">
                <span className="h-0.5 w-6 bg-neutral-800" />
                <p className="text-3xl font-semibold text-black tracking-tight text-center">Best Selling </p>
                <span className="h-0.5 w-6 bg-neutral-800" />
            </div>
            <div className="flex items-center justify-center gap-6 lg:gap-15 mt-8 lg:mt-10 flex-wrap">
                <BlackButton size="small" text="Man" handleClick={() => handleClick(0)} chosen={chosen[0]} />
                <BlackButton size="small" text="Woman" handleClick={() => handleClick(1)} chosen={chosen[1]} />
                <BlackButton size="small" text="Boys" handleClick={() => handleClick(2)} chosen={chosen[2]} />
                <BlackButton size="small" text="Girls" handleClick={() => handleClick(3)} chosen={chosen[3]} />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10 mt-8 lg:mt-10 px-6 lg:px-20 xl:px-40">
                {isLoading ? (
                    <p className="text-center text-gray-500">Loading...</p>
                ) : error ? (
                    <p className="text-center text-red-500">Error: {error.message}</p>
                ) : (
                    products?.slice(0, 8).map((product: Shoe) => (
                        <ShoeCard2
                            key={product.id}
                            id={product.id}
                            name={product.name}
                            img={product.img}
                            price={product.price}
                            originalprice={product.originalprice}
                            section={product.section}
                            createdAt={product.createdAt}
                            onArrowClick={onArrowClick}
                        />
                    ))
                )}
            </div>

        </section>
    );
}