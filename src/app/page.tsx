import Card from "@/components/Card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

export default function Home() {
    return (
        <div className="flex flex-col gap-4">
            <section className="h-dvh bg-[url('https://images.unsplash.com/photo-1730456588662-3d95038308f9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]">
                <div className="flex justify-center w-full p-12">
                    <h1 className="text-9xl text-black ">Saya Ruben</h1>
                </div>
                <div className="hidden size-1/4">
                    <Image
                        src="/nahi.jpg"
                        width={500}
                        height={500}
                        alt="lalala"
                    />
                </div>
                <div className="p-16 flex">
                    <Carousel className="w-dvw ">
                        <CarouselContent>
                            {}
                            <CarouselItem className="basis-1/1 md:basis-1/3">
                                <Card />
                            </CarouselItem>
                            <CarouselItem className="basis-1/1 md:basis-1/3">
                                <Card />
                            </CarouselItem>
                            <CarouselItem className="basis-1/1 md:basis-1/3">
                                <Card />
                            </CarouselItem>
                            <CarouselItem className="basis-1/1 md:basis-1/3">
                                <Card />
                            </CarouselItem>
                            <CarouselItem className="basis-1/1 md:basis-1/3">
                                <Card />
                            </CarouselItem>
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>
                </div>
            </section>
            <section>
                <div className="flex flex-wrap gap-4 justify-center">
                    <Card />
                    <Card />
                </div>
            </section>
            <section className="border-4 h-dvh m-12"></section>
        </div>
    );
}
