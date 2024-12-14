'use client'
import { useGetNewsByCategory } from '@/app/hooks/useCategoryNews';
import { NewsType } from '@/types/newsTypes';
import Link from 'next/link';
import Heading from '../headings/Heading';
import HomeNewsCard from '../home/HomeNewsCard';
import NoNewsFound from '../news/NoNewsFound';
import LoadingSpinner from '../spinner/LoadingSpinner';

type Props = { sectionTitle: string, category: string }

const HomeSectionContent = ({ sectionTitle, category }: Props) => {
  const { data, isLoading, isError } = useGetNewsByCategory(category);
  const filteredNews = data?.news?.slice(0, 9);
  return (
    <>
      {/* If Loading Display the Spinner */}
      {
        isLoading ? < LoadingSpinner /> : <>
          {/* If News Exists Display them otherwise show Error */}
          {
            <section className='mt-10 pt-5 border-t-4 border-gray-300'>
              <Link href={`/${category}`}><Heading title={sectionTitle} /></Link>
              {
                filteredNews?.length < 1 ? <NoNewsFound /> : <div className='grid grid-cols-1 xs:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5'>
                  {
                    filteredNews?.map((news: NewsType, idx: number) => <HomeNewsCard
                      key={news._id}
                      news={news}
                      noBorder={idx === data?.news?.length - 3}
                      isExcerptVisible={true}
                    />)
                  }
                </div>
              }
            </section>
          }
        </>
      }
    </>
  )
}

export default HomeSectionContent