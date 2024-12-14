import { NewsType } from '@/types/newsTypes';
import FeatureHorizontalCard from './FeatureHorizontalCard';
import FeatureNewsMiddle from './FeatureNewsMiddle';

const FeaturedNews = ({ news }: { news: NewsType[] }) => {
    //Get the most readed news from the current category
    const newsByReadingCount = news?.sort((a: NewsType, b: NewsType) => b.readingCount - a.readingCount);
    const mostReadedThree = newsByReadingCount.slice(0, 3);
    const topFiveHeadline = newsByReadingCount.slice(3, 8);

    //Get the Top 3 news from bangladesh category and exclude the top 3 most
    const top3NewsFromBangladesh = news
        ?.filter((n: NewsType) => n?.category?.slug === 'bangladesh')
        .filter(
            (n: NewsType) =>
                !mostReadedThree.includes(n) && !topFiveHeadline.includes(n)
        );
    //Get News from Opinion and World Category
    const opinionNews = news?.filter((n: NewsType) => (n?.category?.slug === 'opinion')).filter(
        (n: NewsType) =>
            !mostReadedThree.includes(n) && !topFiveHeadline.includes(n)
    ).slice(0, 2);

    const worldNews = news?.filter((n: NewsType) => (n?.category?.slug === 'world')).filter(
        (n: NewsType) =>
            !mostReadedThree.includes(n) && !topFiveHeadline.includes(n)
    ).slice(0, 2).slice(0, 2);

    //Combined the opinonNews and WorldNews
    const opinionAndWorldNews = [...opinionNews, ...worldNews];

    //Get the Entertainment News
    const entertainNews = news?.filter((n: NewsType) => (n?.category?.slug === 'entertainment')).filter(
        (n: NewsType) =>
            !mostReadedThree.includes(n) && !topFiveHeadline.includes(n)
    );

    const politicsNews = news?.filter((n: NewsType) => (n?.category?.slug === 'politics')).filter(
        (n: NewsType) =>
            !mostReadedThree.includes(n) && !topFiveHeadline.includes(n)
    );
    return (
        <div className='flex flex-col md:flex-row gap-3'>
            <div className='w-full md:w-1/4'>
                {/* Top three most readed news */}
                {mostReadedThree.map((n: NewsType) => <FeatureHorizontalCard
                    key={n._id}
                    news={n}
                    isOnlyTitle={false}
                />)}
                {/* //Top 5 Headlines */}
                {topFiveHeadline.map((n: NewsType) => <FeatureHorizontalCard
                    key={n._id}
                    news={n}
                    isOnlyTitle={true}
                />)}
            </div>
            <FeatureNewsMiddle
                top3NewsFromBangladesh={top3NewsFromBangladesh}
                entertainNews={entertainNews}
                politicsNews={politicsNews}
            />

            {/* Featured News Right Sidebar -- Opinion and World News */}
            <div className='w-full md:w-1/4'>
                {
                    opinionAndWorldNews.map((n: NewsType) => <FeatureHorizontalCard
                        key={n._id}
                        news={n}
                        isOnlyTitle={false}
                    />)
                }
            </div>
        </div>
    )
}

export default FeaturedNews