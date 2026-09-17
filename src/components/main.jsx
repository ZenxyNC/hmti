import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

// Components
import AboutUsBox from "./components/about-us-boxes";
import Button from "./components/uiverse-button";
import MissionBox from "./components/mission-boxes";
import { DivisionBoxDesktop, DivisionBoxMobile } from "./components/division-box";

// Icons
import { FaDoorOpen, FaCamera, FaClipboardList, FaWallet } from "react-icons/fa";
import { MdWarehouse } from "react-icons/md";
import { LuBrainCircuit } from "react-icons/lu";
import { BiSolidBrain } from "react-icons/bi";
import { BsFillPeopleFill } from "react-icons/bs";
import { RiGlobalLine } from "react-icons/ri";
import ProkerCard from "./components/proker-card";
import ContactBox from "./components/contact-boxes";
import ProkerModal from "./components/proker-modal";

export default function Main() {
  const [openDivisionIndex, setOpenDivisionIndex] = useState(0);

  const location = useLocation();
  const isModalOpen = location.hash === "#showcase-program-kerja";

  const DataProker = [
    { image: `${import.meta.env.BASE_URL}noodle-party.jpg`, title: "Noodle Party", date: "Agustus 2026", description: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Autem repellendus eaque dolorem accusantium labore, rerum impedit perspiciatis natus est minima tempore, deleniti illo, maxime iusto tempora voluptas adipisci debitis quas." },
    { image: `${import.meta.env.BASE_URL}diesnatalis.jpg`, title: "Dies Natalis TI", date: "Agustus 2026", description: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Autem repellendus eaque dolorem accusantium labore, rerum impedit perspiciatis natus est minima tempore, deleniti illo, maxime iusto tempora voluptas adipisci debitis quas." },
    { image: `${import.meta.env.BASE_URL}techxplore.jpg`, title: "TechXplore", date: "September 2026", description: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Autem repellendus eaque dolorem accusantium labore, rerum impedit perspiciatis natus est minima tempore, deleniti illo, maxime iusto tempora voluptas adipisci debitis quas." },
  ];

  const [DataProkerIndex, setDataProkerIndex] = useState(0);

  const divisions = [
    {
      icon: <RiGlobalLine size={24} />,
      name: "Web Holder",
      sector: "Engineering & Tech",
      description: "Mengelola, memelihara, dan mengembangkan infrastruktur platform digital serta website resmi HMTI SCU.",
      responsibility: [
        "Mengembangkan & memperbarui fitur website organisasi",
        "Memastikan uptime, keandalan server, dan keamanan data",
        "Berkolaborasi dengan divisi eksternal untuk publikasi materi"
      ]
    },
    {
      icon: <FaCamera size={22} />,
      name: "Eksternal",
      sector: "Media & Creative",
      description: "Ujung tombak branding visual, pengelolaan media sosial, videografi, fotografi, serta publikasi kreatif HMTI.",
      responsibility: [
        "Merancang materi visual, poster, spanduk & konten promosi",
        "Memproduksi video aftermovie & dokumentasi liputan acara",
        "Mengelola arsip media digital dan akun media sosial resmi"
      ]
    },
    {
      icon: <LuBrainCircuit size={22} />,
      name: "PSDM",
      sector: "Talent Development",
      description: "Mengembangkan potensi intelektual, kaderisasi, serta memfasilitasi mahasiswa berprestasi ke ajang kompetisi & magang.",
      responsibility: [
        "Mengelola regenerasi & proses rekrutmen pengurus baru",
        "Membina talenta lomba & pameran karya teknologi"
      ]
    },
    {
      icon: <BsFillPeopleFill size={22} />,
      name: "Internal",
      sector: "Culture & Harmony",
      description: "Menjaga keharmonisan, mempererat rasa kekeluargaan, serta memfasilitasi evaluasi dan forum komunikasi internal.",
      responsibility: [
        "Memfasilitasi forum diskusi & feedback pengurus",
        "Menggelar program keakraban internal secara berkala"
      ]
    },
    {
      icon: <FaClipboardList size={22} />,
      name: "Sekretaris",
      sector: "Administration",
      description: "Pusat tata kelola administrasi, surat menyurat, penyusunan proposal, LPJ, serta dokumentasi notulensi rapat.",
      responsibility: [
        "Pengarsipan berkas & surat legalitas organisasi",
        "Manajemen presensi rapat & timeline administrasi"
      ]
    },
    {
      icon: <FaWallet size={22} />,
      name: "Bendahara",
      sector: "Finance & Budget",
      description: "Mengelola arus kas, transparansi anggaran, pencatatan transaksi keuangan, serta menyusun laporan pertanggungjawaban dana.",
      responsibility: [
        "Penyusunan RAB & pelaporan realisasi dana program kerja",
        "Pengawasan kas masuk, keluar, dan penyimpanan dana terpusat"
      ]
    },
    {
      icon: <MdWarehouse size={22} />,
      name: "Inventaris",
      sector: "Assets & Logistics",
      description: "Bertanggung jawab atas pencatatan, pemeliharaan, kesiapan perlengkapan, serta logistik teknis kegiatan HMTI.",
      responsibility: [
        "Manajemen sirkulasi peminjaman aset dan alat organisasi",
        "Pengadaan dan pemeliharaan perlengkapan sarana kegiatan"
      ]
    },
  ];

  const MissionArray = [
    {
      title: "Misi — 01",
      children: "Menciptakan lingkungan organisasi yang nyaman, terbuka, dan mendukung perkembangan setiap mahasiswa Teknik Informatika."
    },
    {
      title: "Misi — 02",
      children: "Memfasilitasi pengembangan hard skills dan soft skills melalui program kerja yang relevan, inovatif, dan berkelanjutan."
    },
    {
      title: "Misi — 03",
      children: "Mempererat hubungan antar mahasiswa, dosen, alumni, dan pihak eksternal melalui kolaborasi yang aktif dan positif."
    },
    {
      title: "Misi — 04",
      children: "Menumbuhkan sikap profesional, bertanggung jawab, dan peduli terhadap sesama dalam setiap kegiatan organisasi."
    },
    {
      title: "Misi — 05",
      children: "Mendorong mahasiswa untuk berkontribusi dan memberikan dampak positif bagi lingkungan kampus maupun masyarakat."
    }
  ]

  return (
    <>
      <main className={`
        relative flex flex-col gap-25 xl:gap-50 overflow-x-hidden
      `}>
        <nav className="
          w-dvw h-15 fixed bg-primary/60 backdrop-blur-md z-50 border-b border-border
          px-4
          md:px-20
          xl:px-30
          2xl:px-75
        ">
          <div className="w-full h-full flex justify-between items-center">
            <div className="w-max h-full py-1 flex gap-1 items-center">
              <img src={`${import.meta.env.BASE_URL}hmti-logo.png`} className="h-full" />
              <span className="font-bold text-xl">HMTI SCU</span>
            </div>
            <button
              className="
                w-max h-max p-0.5 px-3 bg-primary/60 rounded-full border border-border
                cursor-pointer select-none
                transition-[background-color,border-color,transform]
                duration-220 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]
                hover:bg-white/8 hover:border-white/25
                active:scale-[0.95] active:duration-80
              "
              style={{ WebkitTapHighlightColor: 'transparent' }}
              onClick={() => window.location.href = '#kontak'}
            >
              Kontak
            </button>
          </div>
        </nav>

        {/*Background*/}

        <div
          name="texture"
          className="bg-repeat bg-cover bg-center w-dvw h-svh absolute"
          style={{ backgroundImage: `url(${import.meta.env.BASE_URL}texture.svg)` }}
        />

        <div
          name="gradient"
          className="w-dvw h-svh overflow-hidden pointer-events-none absolute top-0 bg-transparent"
        >
          <div className="gradient-sphere" />
        </div>

        {/* Program Kerja Modal */}
        <ProkerModal
          isOpened={isModalOpen}
          image={DataProker[DataProkerIndex].image}
          title={DataProker[DataProkerIndex].title}
          date={DataProker[DataProkerIndex].date}
          description={DataProker[DataProkerIndex].description}
        />

        {/* Landing header */}
        <section
          name="header"
          className="overflow-x-hidden w-svw h-max min-h-svh relative lg:flex lg:items-center lg:justify-center px-6 md:px-20 xl:px-50 2xl:px-100"
        >
          {/*Main header content*/}
          <div className="
            pt-20 flex flex-col gap-4 transition-all ease-in-out duration-700
            lg:pt-0 lg:gap-5
          ">
            {/* Header */}
            <header
              className="w-full text-[52px] leading-16 font-bold lg:text-[80px] lg:leading-26"
            >
              Generasi Informatika<br />
              <span className="bg-accent/40">
                Masa Depan.
              </span>
            </header>

            {/* Quote */}
            <div className="
              w-full h-max px-4 py-2 border-l-3 border-l-accent bg-accent/8 text-accent text-[20px] font-mono font-bold flex items-center
              xl:min-h-10
            ">
              "Veni, Vidi, Vici" — I came, I saw, I conquered.
            </div>

            {/* Bio */}
            <p className="text-[16px] md:text-[20px] lg:text-[20px] leading-6 md:leading-8 text-justify text-text-sec">
              Himpunan Mahasiswa Teknik Informatika SCU adalah wadah kolaboratif dan inklusif bagi mahasiswa Teknik Informatika untuk mengembangkan potensi, integritas, dan kepemimpinan melalui program kerja yang berdaya guna. Semua ini berjalan berlandaskan nilai-nilai Kristiani, demi melahirkan talenta teknologi yang kompeten sekaligus berintegritas.
            </p>

            {/* Button */}
            <Button>Showcase Program Kerja</Button>
          </div>
        </section>

        {/* Tentang Kami */}
        <section id="tentang-kami" className="
          w-full h-max flex flex-col gap-5 px-6 md:px-20 xl:px-30 2xl:px-75
          lg:flex-row lg:gap-10
        ">
          <div className="
            w-full flex flex-col gap-3
          ">
            <h1>Tentang Kami</h1>
            <p className="text-[20px] text-text-pri text-justify">
              Himpunan Mahasiswa Teknik Informatika SCU merupakan wadah bagi seluruh mahasiswa Teknik Informatika SCU untuk belajar dan berkembang. Hadir untuk mengasah potensi, minat, serta bakat setiap mahasiswa. Melalui berbagai kegiatan yang interaktif, kami berkomitmen menciptakan lingkungan kampus yang adaptif, inovatif, dan saling mendukung.
              <br /><br />
              Selain berfokus pada penguatan kemampuan intelektual dan teknis, kami juga aktif membina jiwa kepemimpinan. Pembentukan karakter yang tangguh dan profesional menjadi fondasi penting untuk mencetak lulusan yang berkualitas.
            </p>
          </div>

          <div className="
            w-full h-max bg-secondary/40 rounded-outer border border-border
            lg:min-w-100 lg:w-[70%]
          ">
            <AboutUsBox icon={<FaDoorOpen size={24} />} title="Inklusif dan Sinergis">Menciptakan ekosistem organisasi yang terbuka, nyaman, dan mendukung pertumbuhan setiap anggota.</AboutUsBox>
            <AboutUsBox icon={<BiSolidBrain size={24} />} title="Pengembangan Skill">Memfasilitasi pelatihan, proyek teknologi aplikatif, pameran karya, dan keikutsertaan kompetisi.</AboutUsBox>
            <AboutUsBox icon={<BsFillPeopleFill size={24} />} title="Relasi dan Kemitraan" border="none">Mempererat sinergi antara mahasiswa, dosen, alumni, industri teknologi, dan masyarakat luas.</AboutUsBox>
          </div>

        </section>

        {/* Visi Misi */}
        <section id="visi-misi" className="
          w-full h-max px-6 md:px-20 xl:px-30 2xl:px-75 
        ">
          <h1>Visi & Misi</h1>
          <div className="w-full h-max bg-secondary/40 mt-1 p-4 pt-3 lg:p-5 border border-b-0 border-border rounded-t-outer">
            <h2 className="gradient-text">Visi Utama</h2>
            <p className="font-mono text-[20px] xl:text-[24px] text-text-pri text-justify">
              "Menjadikan HMTI sebagai wadah yang <span className="font-bold">inklusif, kolaboratif, dan berdaya guna</span> dalam <span className="font-bold">mengembangkan potensi</span> mahasiswa Teknik Informatika SCU, serta membangun komunitas yang bertumbuh bersama berdasarkan <span className="font-bold">nilai-nilai Kristiani</span>."
            </p>
          </div>
          <div className="w-full h-max border bg-secondary/40 border-border rounded-b-outer overflow-x-auto flex flex-nowrap snap-x snap-mandatory snap-always md:snap-none">
            {MissionArray.map((item, index) => (
              <MissionBox
                key={index}
                title={item.title}
                border={index === MissionArray.length - 1 ? "none" : ""}
              >
                {item.children}
              </MissionBox>
            ))}
          </div>
        </section>

        {/* Divisi */}
        <section id="divisi" className="
          w-full h-max px-6 md:px-20 xl:px-30 2xl:px-75
        ">
          <h1>Divisi</h1>
          {/* Mobile View */}
          <div className="
            w-full h-max flex flex-col border border-border rounded-outer overflow-hidden mt-1 bg-secondary/40
            lg:hidden
          ">
            {divisions.map((div, index) => (
              <DivisionBoxMobile
                key={index}
                icon={div.icon}
                name={div.name}
                sector={div.sector}
                isExpanded={openDivisionIndex === index}
                onToggle={() => setOpenDivisionIndex(openDivisionIndex === index ? null : index)}
                border={index === divisions.length - 1 ? "none" : ""}
                description={div.description}
                responsibility={div.responsibility}
              />
            ))}
          </div>

          {/* Desktop View */}
          <div className="
            hidden lg:flex
            w-full h-max min-h-50 flex-col gap-0 border border-border rounded-outer bg-secondary/40
          ">
            {/* Top Section — 2*/}
            <div className="grid grid-cols-2">
              <DivisionBoxDesktop
                icon={divisions[0].icon}
                name={divisions[0].name}
                sector={divisions[0].sector}
                description={divisions[0].description}
                responsibility={divisions[0].responsibility}
                className="border-r border-border"
              />
              <DivisionBoxDesktop
                icon={divisions[1].icon}
                name={divisions[1].name}
                sector={divisions[1].sector}
                description={divisions[1].description}
                responsibility={divisions[1].responsibility}
              />
            </div>

            {/* Middle Section — 3*/}
            <div className="grid grid-cols-3 border-t border-border">
              <DivisionBoxDesktop
                icon={divisions[2].icon}
                name={divisions[2].name}
                sector={divisions[2].sector}
                description={divisions[2].description}
                responsibility={divisions[2].responsibility}
                className="border-r border-border"
              />
              <DivisionBoxDesktop
                icon={divisions[3].icon}
                name={divisions[3].name}
                sector={divisions[3].sector}
                description={divisions[3].description}
                responsibility={divisions[3].responsibility}
                className="border-r border-border"
              />
              <DivisionBoxDesktop
                icon={divisions[4].icon}
                name={divisions[4].name}
                sector={divisions[4].sector}
                description={divisions[4].description}
                responsibility={divisions[4].responsibility}
              />
            </div>

            {/* Bottom Section — 2*/}
            <div className="grid grid-cols-2 border-t border-border">
              <DivisionBoxDesktop
                icon={divisions[5].icon}
                name={divisions[5].name}
                sector={divisions[5].sector}
                description={divisions[5].description}
                responsibility={divisions[5].responsibility}
                className="border-r border-border"
              />
              <DivisionBoxDesktop
                icon={divisions[6].icon}
                name={divisions[6].name}
                sector={divisions[6].sector}
                description={divisions[6].description}
                responsibility={divisions[6].responsibility}
              />
            </div>
          </div>
        </section>

        {/* Program Kerja */}
        <section id="program-kerja" className="
          w-full h-max px-6 md:px-20 xl:px-30 2xl:px-75
        ">
          <h1>Program Kerja</h1>
          <div className="w-full h-max mt-1 bg-secondary/40 border border-border rounded-outer grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {DataProker.map((proker, i) => (
              <ProkerCard
                key={i}
                index={i}
                total={DataProker.length}
                image={proker.image}
                title={proker.title}
                date={proker.date}
                setDataProkerIndex={setDataProkerIndex}
              />
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="kontak" className="
          w-full h-max px-6 md:px-20 xl:px-30 2xl:px-75
        ">
          <h1>Kontak</h1>
          <div className="
            w-full h-max border border-border rounded-outer bg-secondary/40 flex flex-col lg:flex-row mt-1
          ">
            <ContactBox
              image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6Si4LTIFuAnLE3IbzrlP6IkbFHsK77nGz1bq52B9uDRtJlA6gmayCdTe8&s=10"
              name="Kaleb"
              role="Contact Person Oprec HMTI"
              instagram="kalebsze"
              whatsapp="0812-2939-3491"
              className="border-border border-b lg:border-r lg:border-b-0"
            />
            <ContactBox
              image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6Si4LTIFuAnLE3IbzrlP6IkbFHsK77nGz1bq52B9uDRtJlA6gmayCdTe8&s=10"
              name="Roki"
              role="Contact Person Oprec HMTI"
              instagram="rain.edd"
              whatsapp="0895-0826-6709"
            />
          </div>
        </section>

        <footer className="w-full h-max bg-secondary/80 p-6 md:pt-10 md:px-20 xl:pt-20 xl:px-30 2xl:px-75 flex flex-col gap-10">
          <div className="flex flex-col gap-10 md:flex-row md:justify-between">
            <div className="">
              <h2 className="text-[32px]! font-bold!">HMTI SCU 2026/2027</h2>
              <span className="text-[16px] text-text-sec"><a
                className="
                  underline cursor-pointer
                  transition-[color,opacity] duration-220 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]
                  hover:text-text-pri
                "
                href="https://www.instagram.com/hmti.scu"
                target="_blank"
                rel="noopener noreferrer"
              >@hmti.scu</a> on Instagram</span>
            </div>
            <div className="flex flex-col gap-10 md:flex-row md:gap-20 lg:gap-50">
              <div className="flex flex-col gap-1.5 w-max">
                <h3 className="text-xl font-semibold">Navigasi</h3>
                <a className="text-text-sec hover:text-text-pri transition-[color] duration-220 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] cursor-pointer" href="#">Beranda</a>
                <a className="text-text-sec hover:text-text-pri transition-[color] duration-220 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] cursor-pointer" href="#tentang-kami">Tentang Kami</a>
                <a className="text-text-sec hover:text-text-pri transition-[color] duration-220 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] cursor-pointer" href="#visi-misi">Visi &amp; Misi</a>
                <a className="text-text-sec hover:text-text-pri transition-[color] duration-220 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] cursor-pointer" href="#divisi">Divisi</a>
                <a className="text-text-sec hover:text-text-pri transition-[color] duration-220 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] cursor-pointer" href="#kontak">Kontak</a>
              </div>
              <div className="flex flex-col gap-1.5 w-max ">
                <h3 className="text-xl font-semibold">Halaman</h3>
                <a className="text-text-sec hover:text-text-pri transition-[color] duration-220 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] cursor-pointer" href="">Utama</a>
                <a className="text-text-sec hover:text-text-pri transition-[color] duration-220 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] cursor-pointer" href="">Admin</a>
              </div>
            </div>
          </div>
          <div className="w-full h-px bg-border" />
          <div className="w-full h-full flex flex-col gap-2 md:flex-row md:justify-between md:gap-6">
            <span className="text-text-sec text-sm">Copyright © 2026 Himpunan Mahasiswa Teknik Informatika SCU. All rights reserved.</span>
            <span className="text-text-sec text-sm opacity-80 min-w-max">Made by <a className="text-accent/40 hover:text-accent transition-[color] duration-220 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] font-semibold underline cursor-pointer" href="https://zenxync.github.io/lucasharel/" target="_blank">Lucas Harel</a></span>
          </div>
        </footer>
      </main>
    </>
  )
}