const Service = () => {
  return (
    <div className="w-full h-full xl:px-24 lg:px-8 bg-[#081264] py-12 sm:mb-12 sm:px-4">
      <div className="text-primary xl:text-6xl lg:text-4xl sm:text-2xl">
        Bizning xizmatlarimiz
      </div>
      <div className="xl:w-[650px] text-2xl lg:text-xl sm:text-sm font-sans text-secondary">
        Mijozlar ehtiyojidan kelib chiqqan holda, xizmatlar taklif qilamiz.
      </div>
      <div className="mt-8 xl:flex xl:justify-between lg:grid lg:grid-cols-2 sm:flex sm:flex-col  sm:gap-4 gap-8">
        <div className="w-72 sm:w-80 ">
          <div
            className="border-l-8 sm:border-l-[6px] xl:text-4xl sm:text-xl
           h-12 sm:h-10 text-primary border-secondary"
          >
            <h1 className="pl-4 sm:pl-3">IT</h1>
          </div>
          <div className="xl:mt-4 text-secondary ml-4 sm:text-sm font-light">
            Mobile progmmalar, veb saytlardan tortib CRM sistemasini
            tizimlashtirishgacha bo'lgan sifatli xizmatlar
          </div>
        </div>
        <div className="w-72 sm:w-80 ">
          <div
            className="border-l-8 sm:border-l-[6px] xl:text-4xl sm:text-xl
           h-12 sm:h-10 text-primary border-secondary"
          >
            <h1 className="pl-4 sm:pl-3">Veb sayt</h1>
          </div>
          <div className="xl:mt-4 text-secondary ml-4 sm:text-sm font-light">
            Sayt dizaynini loyihalash, funksionalligini oshirish, brauzerlarda
            to'g'ri ishlashini taminlash va shu qator vazifalarni o'z ichiga
            oladi
          </div>
        </div>
        <div className="w-72 sm:w-80 ">
          <div
            className="border-l-8 sm:border-l-[6px] xl:text-4xl sm:text-xl
           h-12 sm:h-10 text-primary border-secondary"
          >
            <h1 className="pl-4 sm:pl-3">Ta'lim</h1>
          </div>
          <div className="xl:mt-4 text-secondary ml-4 sm:text-sm font-light">
            MIT ni mutaxasislardan o'rganing. Uzoq masofadan kelishingiz shart
            emas, siz shunchaki ro'yhatdan o'ting, biz oldingizga borib ilm
            ulashamiz
          </div>
        </div>
        <div className="w-72 sm:w-80 ">
          <div
            className="border-l-8 sm:border-l-[6px] xl:text-4xl sm:text-xl
           h-12 sm:h-10 text-primary border-secondary"
          >
            <h1 className="pl-4 sm:pl-3">Cyber sport</h1>
          </div>
          <div className="xl:mt-4 text-secondary ml-4 sm:text-sm font-light">
            Ommabop va adrinalinga boy bo'lgan musobaqalar.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
