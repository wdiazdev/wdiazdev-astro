import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Autoplay } from "swiper/modules"

type Project = {
  slug: string
  data: { name: string; cover: string; description: string }
}

export const PortfolioSwiper = ({ projects }: { projects: Project[] }) => {
  const hasMultiple = projects && projects.length ? true : false
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={25}
      loop={hasMultiple}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination, Autoplay]}
      autoplay={
        hasMultiple ? { delay: 3000, disableOnInteraction: true } : false
      }
    >
      {projects.map(({ slug, data }) => (
        <SwiperSlide key={slug}>
          <a
            href={`/project/${slug}`}
            id={slug}
            className="flex items-end justify-center md:justify-end px-10 py-4 rounded-2xl border 
            border-white/10 h-[500px] md:h-[600px] bg-cover bg-center"
            style={{ backgroundImage: `url(/images/${data.cover})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[76%] to-black/100"></div>
            <div
              className="flex flex-col gap-4 p-4 rounded-2xl z-50 bg-slate-600/30 
              backdrop-blur-md border border-white/10 min-w-full md:min-w-lg
              shadow-lg shadow-lime-300/10"
            >
              <h3 className="text-[36px] md:text-[56px] font-bold">
                {data.name}
              </h3>
              <span className="prose prose-invert text-wrap text-white text-sm md:text-base">
                {data.description}
              </span>
            </div>
          </a>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export const ProjectImagesSwiper = ({
  images,
  slug,
}: {
  images: string[] | undefined
  slug: string
}) => {
  if (!images?.length) return null
  const hasMultiple = images && images.length ? true : false
  return (
    <Swiper
      className="w-full min-w-0 h-[25svh] md:h-[38svh]"
      slidesPerView={1}
      spaceBetween={25}
      loop={hasMultiple}
      pagination={{ clickable: true }}
      modules={[Pagination, Autoplay]}
      autoplay={
        hasMultiple ? { delay: 3000, disableOnInteraction: true } : false
      }
    >
      {images.map((item, index) => (
        <SwiperSlide key={`${slug}-${index}`}>
          <div
            className="w-full h-full rounded-2xl overflow-hidden border border-white/10
                 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(/images/${item})` }}
            aria-label={`${slug} screenshot ${index + 1}`}
            role="img"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
