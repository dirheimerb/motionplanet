import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

interface DotLinkProps {
    [key: number]: any;
    [name: string]: any;
}

export default function Dotnav() {
    const [active, setActive] = React.useState(0);
    const router = useRouter();

    const dotLinks: DotLinkProps = {
        0: {
            href: "/",
            label: "Home",
        },
        1: {
            href: "/about",
            label: "About",
        },
        2: {
            href: "/contact",
            label: "Contact",
        },
    };

    React.useEffect(() => {
        const path = router.pathname;
        const index = Object.keys(dotLinks).find(
            (key) => dotLinks[key].href === path
        );
        setActive(parseInt(index!));
    }, [router.pathname]);

  return (
    <ul className="uk-dotnav">
    {Object.keys(dotLinks).map((key) => {
        const { href, label } = dotLinks[key];
        return (
        <li key={key} className={active === parseInt(key) ? "uk-active" : ""}>
            <Link href={href}>{label}</Link>
        </li>
        );
    })}
    </ul>
    );
}
