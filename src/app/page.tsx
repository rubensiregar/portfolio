import Card from "@/components/Card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

export default function Home() {
    return (
        <div className="flex flex-col gap-4">
            <section className="h-dvh pattern-isometric pattern-teal-600 pattern-size-20">
                <h1 className="text-9xl">Saya Ruben</h1>
                <div className="p-12">
                    <Carousel className="w-full max-w-sm">
                        <CarouselContent>
                            <CarouselItem className="basis-1/3">
                                <Card />
                            </CarouselItem>
                            <CarouselItem className="basis-1/3">
                                <Card />
                            </CarouselItem>
                            <CarouselItem className="basis-1/3">
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
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </section>
            <section className="border-4 h-dvh m-12"></section>
        </div>
    );
}
