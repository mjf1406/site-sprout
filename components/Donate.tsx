import KofiDonation from "./third-party-brands/KofiButton";
import PatreonDonation from "./third-party-brands/PatreonButton";

export default function Donate() {
    return (
        <>
            <h2 className="text-2xl font-semibold mb-2">Donations</h2>
            <div className="flex flex-col justify-center items-center gap-5 max-w-lg">
                <div>
                    We have spent a lot of time on this website. If you and/or
                    your students have gotten any use out of it, please consider
                    donating via any of the below methods.
                </div>
                <div className="flex gap-5 justify-center items-center flex-wrap">
                    <KofiDonation />
                    <PatreonDonation />
                </div>
            </div>
        </>
    );
}
