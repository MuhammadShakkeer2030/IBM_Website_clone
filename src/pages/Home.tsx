import { HomeBanner, AboutIBM } from '../paths'
import { ProductCardList } from '../components/ProductCardList'

const Home = () => {
  return (
    <div>
      <HomeBanner />
      <ProductCardList key={0} item={[]} width={""} />
      <AboutIBM />
    </div>
  )
}

export default Home