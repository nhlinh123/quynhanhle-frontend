import MyCarousel, { modelImage } from "@/component/carousel/carousel";
import { GetStaticProps } from "next";

const Exhibition = async ({ data }: { data: modelImage[] }) => {
    data = [
        { url: `/image/1.jpg`, title: 'Legend', alt: 'Legend' },
        { url: `/image/2.jpg`, title: 'Legend', alt: 'Legend' },
        { url: `/image/3.jpg`, title: 'Legend', alt: 'Legend' },
        { url: `/image/4.jpg`, title: 'Legend', alt: 'Legend' },
        { url: `/image/5.jpg`, title: 'Legend', alt: 'Legend' }
    ]
    return (
        <div>
            <p>hello world</p>
            <div className="w-full h-20">
                <MyCarousel data={data} />
            </div>
        </div>
    )
}

export const getStaticProps: GetStaticProps = async () => {
    //chưa chạy được
    const data = new Array(5).fill({ url: `/image/1.jpg`, name: 'Legend' }) || []
    return {
        props: {
            data: data
        }
    }
}


export default Exhibition;

