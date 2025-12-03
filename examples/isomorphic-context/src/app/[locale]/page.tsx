import { AppStoreProvider } from "../../stores/app-store";
import { ClientBlock } from "../../components/client-block";
import { ServerNav } from "../../components/server-nav";

type LocaleHomePageProps = {
    params: Promise<{ locale: string }>;
};

const LocaleHomePage: React.FC<LocaleHomePageProps> = async ({ params }) => {
    const { locale } = await params;

    return (
        <AppStoreProvider value={locale}>
            <ServerNav />
            <ClientBlock />
        </AppStoreProvider>
    );
};

export default LocaleHomePage;
