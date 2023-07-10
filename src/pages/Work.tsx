import WorkHeroImage from "@/assets/image/work_page_hero.png";
import { Tabs, TabsContent, TabsList } from "@/components/ui/tabs";
import { TabsTrigger } from "@radix-ui/react-tabs";
import MeshImage from '@/assets/image/mesh-gradient_2.png'
import { ArrowUpRight } from "lucide-react";
import { FC } from "react";

const Work: FC = () => {
  interface WorkTabs {
    label: string,
    key: string
  }
  const tab: WorkTabs[] = [
    {
      key: 'softdev',
      label: 'Software Development',
    },
    {
      key: 'network',
      label: 'Networking Server',
    },
    {
      key: 'mulmed',
      label: 'Multimedia',
    },
    {
      key: 'techconsult',
      label: 'Technology Consulting',
    }
  ]
  return (
    <>
      <section className="grid grid-cols-2 min-h-[600px] container max-w-7xl">
        <img src={WorkHeroImage} alt="hero image" className="my-auto mx-auto" />
        <div className="my-auto">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-slate-800">
            Mark our services if you wish to market your products.
          </h1>
          <p className="leading-7 [&:not(:first-child)]:mt-6 text-slate-800 mb-6 text-xl">
            Call us up and we will line up our best design to promote your products. We create impressive professional media and precise digital marketing management.
          </p>
        </div>
      </section>

      <section className="container max-w-7xl py-16">
        <Tabs defaultValue="softdev">
          <TabsList className="gap-8 mb-2 justify-start w-full">
            {tab.map((item) => (
              <TabsTrigger key={item.key} value={item.key} className="data-[state=active]:bg-background data-[state=active]:text-slate-900 py-3 rounded px-6 data-[state=active]:border-b border-gray-300">
                {item.label}
              </TabsTrigger>
            ))}
          </TabsList>
          {tab.map((item) => (
            <TabsContent key={item.key} value={item.key} className="p-6">
              <div className="grid grid-cols-3 gap-8">
                {[...Array(6)].map((_, index) => (
                  <div key={index} className="gap-8 border bg-white border-slate-100 rounded-2xl cardShadow hover:border-0 overflow-hidden group w-full aspect-square relative cursor-pointer">
                    <div className="hidden absolute bg-black/20 backdrop-blur-md inset-0 group-hover:grid place-items-center z-10 text-white">
                      <div className="flex items-center justify-center gap-1">
                        <span className="font-bold text-lg">Visit</span>
                        <ArrowUpRight className="w-8 h-8" />
                      </div>
                    </div>
                    <img src={MeshImage} alt="" />
                  </div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </section>
    </>
  );
}

export default Work;