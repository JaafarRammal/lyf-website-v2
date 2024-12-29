import Image from "next/image";

export function Hero() {
    return (
        <div
            className="min-h-[80vh] flex items-center"
            style={{ backgroundImage: "url('/hero-slide/hero-4.jpg')", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}
        >
            <div className="max-w-[95rem] md:text-start font-bold text-lg md:text-xl text-center text-white p-10 md:px-40 mx-auto flex md:flex-row flex-col justify-between items-center gap-16">
                <div className="flex-1 space-y-4">
                    <div className="flex flex-col md:flex-row items-center gap-4">
                        <Image src="/logo.png" width={1000} height={1000} alt="logo" className="size-20" />
                        <h1 className="text-4xl font-black">Lebanese Youth Foundation </h1>
                    </div>
                    <p>Empowering the Shia community in London and beyond</p>
                    <p>
                        LYF aims to provide educational & religious events to empower & steer the youth towards excellence as well as spreading the teachings of Ahlulbayt
                        AS.
                    </p>
                </div>
                <div className="flex-1">
                    <div className="flex flex-col space-y-2 text-center pt-10">
                        <p className="text-2xl font-bold">Prayer Times</p>
                        <p>Fajr: 5:00 AM</p>
                        <p>Dhuhr: 1:00 PM</p>
                        <p>Asr: 4:00 PM</p>
                        <p>Maghrib: 6:00 PM</p>
                        <p>Isha: 8:00 PM</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
