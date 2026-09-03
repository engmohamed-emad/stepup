import { FacebookIcon, InstagramIcon } from "../_icons/icons";

export default function Conclusion() {

    return (
        <div className="flex flex-col gap-5 max-w-xs">
            <p className="text-2xl font-black tracking-tight">StepUp</p>
            <p className="text-sm text-white leading-relaxed">
                Lorem Ipsum Dolor Sit Amet, Consectetur
                Adipiscing Elit, Sed Do Eiusmod Tempor
                Incididunt Ut Labore Et Dolore Magna Aliqua.

            </p>
            {/* Social icons */}
            <div className="flex items-center gap-4 mt-1">
                {/* Facebook */}
                <a
                    href="#"
                    aria-label="Facebook"
                    className="w-10 h-10 rounded-full bg-white border border-white flex items-center justify-center transition-colors duration-200"
                >
                    <FacebookIcon />
                </a>
                {/* Instagram */}
                <a
                    href="#"
                    aria-label="Instagram"
                    className="w-10 h-10 rounded-full bg-white border border-white flex items-center justify-center transition-colors duration-200"
                >
                    <InstagramIcon />
                </a>
            </div>
        </div>
    );
}