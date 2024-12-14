import HomeSectionContent from '@/components/content/HomeSectionContent';
import FeaturedNews from '@/components/home/FeaturedNews';
import NoNewsFound from '@/components/news/NoNewsFound';
import { getNews } from './utils/apis';

const Home = async () => {
  const news = await getNews();
  return (
    <div className='container mx-auto p-4'>
      {
        news?.length < 1 ? <NoNewsFound /> : <div>
          <FeaturedNews news={news} />
          <HomeSectionContent
            sectionTitle='বাংলাদেশ'
            category='bangladesh'
          />
          <HomeSectionContent
            sectionTitle='খেলাধুলা'
            category='sports'
          />
          <HomeSectionContent
            sectionTitle='আন্তর্জাতিক বিশ্ব'
            category='world'
          />
          <HomeSectionContent
            sectionTitle='বিনোদন জগত'
            category='entertainment'
          />
          <HomeSectionContent
            sectionTitle='মতামত'
            category='opinion'
          />
          <HomeSectionContent
            sectionTitle='ব্যবসায়-বানিজ্য'
            category='business'
          />
          <HomeSectionContent
            sectionTitle='জুলাই বিপ্লব'
            category='july-revolution'
          />
          <HomeSectionContent
            sectionTitle='জীবনযাপন'
            category='lifestyle'
          />
        </div>
      }
    </div>
  )
}

export default Home