import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Autoplay } from "swiper/modules"

type Project = {
  slug: string
  data: { name: string; cover: string; description: string }
}

export default function PortfolioSwiper({ projects }: { projects: Project[] }) {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={25}
      loop={true}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination, Autoplay]}
      autoplay={{
        delay: 3000,
        disableOnInteraction: true,
      }}
    >
      {projects.map(({ slug, data }) => (
        <SwiperSlide key={slug}>
          <a
            href={`/project/${slug}`}
            id={slug}
            className="flex justify-end items-center px-10 py-4 rounded-2xl border 
            border-white/10 h-[600px] bg-cover bg-center"
            style={{ backgroundImage: `url(/images/${data.cover})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[76%] to-black/100"></div>
            <div
              className="flex flex-col gap-4 p-4 rounded-2xl z-50 bg-slate-600/30 backdrop-blur-md
             border border-white/10 min-w-full md:min-w-lg"
            >
              <h3 className="text-[36px] md:text-[56px] font-bold">
                {data.name}
              </h3>
              <span className="prose prose-invert text-wrap text-white">
                {data.description}
              </span>
            </div>
          </a>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
