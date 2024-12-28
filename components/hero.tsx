import Image from "next/image";

export function Hero() {
    const today = new Date();

    return (
        <div>
            <div className="p-10 mx-auto w-full flex md:flex-row flex-col justify-between items-center gap-16">
                <div className="flex-1 space-y-4">
                    <h1 className="text-3xl font-bold">Lebanese Youth Foundation </h1>
                    <p className="text-lg text-slate-500">Empowering the Shia community in London and beyond</p>
                    <p className="text-lg text-slate-500">
                        LYF aims to provide educational & religious events to empower & steer the youth towards excellence as well as spreading the teachings of Ahlulbayt
                        AS.
                    </p>

                    {/* Prayer times view */}
                    <div className="flex flex-col space-y-2 text-center pt-10">
                        <p className="text-lg font-bold">Prayer Times</p>
                        <p className="text-lg text-slate-500">Fajr: 5:00 AM</p>
                        <p className="text-lg text-slate-500">Dhuhr: 1:00 PM</p>
                        <p className="text-lg text-slate-500">Asr: 4:00 PM</p>
                        <p className="text-lg text-slate-500">Maghrib: 6:00 PM</p>
                        <p className="text-lg text-slate-500">Isha: 8:00 PM</p>
                    </div>
                </div>
                <div className="flex-1">
                    <Image src="/hero.png" className="rounded-3xl" alt="hero" width={800} height={800} />
                </div>
            </div>
            <div className="flex flex-col space-y-2 p-10 border-t">
                <p className="text-3xl font-bold">Events</p>
                <p className="text-lg text-slate-500">Friday Night Program</p>
                <p className="text-lg text-slate-500">Saturday Morning Program</p>
                <p className="text-lg text-slate-500">Sunday School</p>
            </div>


        </div>
    );
}
