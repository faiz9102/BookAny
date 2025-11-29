import { dashboard, login, register } from '@/routes';
import { Head, Link, usePage } from '@inertiajs/react';
import HomePage from "../components/HomePage";

export default function Welcome({ canRegister = true, }) {
    const { auth } = usePage().props;

    return (<>
            <Head title="Welcome">
                <link rel="preconnect" href="https://fonts.bunny.net"/>
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet"/>
            </Head>
            <HomePage/>
        </>);
}

