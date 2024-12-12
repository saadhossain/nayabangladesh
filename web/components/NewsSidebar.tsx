'use client'
import { useGetNewsByCategory } from '@/app/hooks/useCategoryNews'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CategoryType, NewsType } from '@/types/newsTypes'
import HorizontalNewsCard from './HorizontalNewsCard'
import Loading from './spinner/Loading'

const NewsSidebar = ({ newsId, newsCategory }: { newsId: string, newsCategory: CategoryType }) => {

    //Get News By Category
    const { data, isLoading } = useGetNewsByCategory(newsCategory?.slug);
    //Get the rest of the news except the current opened one
    const newsExludingCurrent = data?.news?.filter((d: NewsType) => d._id !== newsId);
    //Get the most readed news from the current category
    const mostReaded = data?.news?.sort((a: NewsType, b: NewsType) => b.readingCount - a.readingCount);
    return (
        <div className='sticky top-20 bg-gray-100 dark:bg-gray-800 rounded p-5'>
            <Tabs defaultValue="related">
                <TabsList>
                    <TabsTrigger value="related">
                        <h4 className='font-semibold'><span className='font-bold text-lg text-primary mr-2'>{newsCategory?.name}</span>বিভাগের আরো খবর</h4>
                    </TabsTrigger>
                    <TabsTrigger value="mostReaded">
                        <h4 className='font-semibold'>সর্বাধিক পঠিত</h4>
                    </TabsTrigger>
                </TabsList>
                {/* Related to Current News or More news from same category */}
                <TabsContent value="related">
                    {
                        isLoading ? <Loading />
                            : <div>
                                {newsExludingCurrent?.map((news: NewsType) => <HorizontalNewsCard key={news._id} news={news} />)}
                            </div>

                    }
                </TabsContent>
                {/* Most Readed News from the Current Category */}
                <TabsContent value="mostReaded">
                    {
                        isLoading ? <Loading />
                            : <div>
                                {mostReaded?.map((news: NewsType) => <HorizontalNewsCard key={news._id} news={news} />)}
                            </div>

                    }
                </TabsContent>
            </Tabs>
        </div>
    )
}

export default NewsSidebar