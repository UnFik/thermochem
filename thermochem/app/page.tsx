import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Flame, BookOpen, Target, List, ChevronRight } from "lucide-react";
import Image from "next/image";

export default function ThermoChem() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-green-100">
      <header className="container mx-auto px-4 py-8">
        <h1 className="text-6xl font-extrabold text-center text-blue-600 bungee-regular">
          ThermoChem
        </h1>
        <p className="text-xl text-center text-gray-600 mt-2">
          Pembelajaran Termokimia dengan Gamifikasi
        </p>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Bagian Hero */}
        <section className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">
            Kuasai Termokimia dengan Cara yang Menyenangkan dan Interaktif
          </h2>
          <p className="text-xl mb-8">
            Thermochem adalah media pembelajaran berbasis website yang inovatif.
            Thermochem ini dirancang untuk membantu siswa SMA kelas 11 dalam
            mempelajari materi Termokimia dengan lebih interaktif dan
            menyenangkan sehingga pembelajaran dikelas akan menjadi lebih
            efektif
          </p>
          <a href="/materi">
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              Mulai Sekarang <ChevronRight className="ml-2" />
            </Button>
          </a>
        </section>

        {/* Bagian Fitur */}
        <section className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">Fitur Utama</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="flex flex-col items-center p-6">
                <Flame className="w-12 h-12 text-orange-500 mb-4" />
                <h4 className="text-xl font-semibold mb-2">
                  Pembelajaran Interaktif
                </h4>
                <p className="text-center">
                  Terlibat dengan konten dinamis dan simulasi
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex flex-col items-center p-6">
                <BookOpen className="w-12 h-12 text-green-500 mb-4" />
                <h4 className="text-xl font-semibold mb-2">
                  Konten Komprehensif
                </h4>
                <p className="text-center">
                  Mencakup semua topik penting Termokimia
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex flex-col items-center p-6">
                <Target className="w-12 h-12 text-blue-500 mb-4" />
                <h4 className="text-xl font-semibold mb-2">Gamifikasi</h4>
                <p className="text-center">
                  Belajar melalui tantangan dan pencapaian
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Bagian Maskot Baru */}
        <section className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">
            Introducing Our Mascots
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="flex flex-col items-center p-6 gap-2 justify-center">
                <h4 className="text-3xl font-extrabold mb-2 text-center w-full pe-10">
                  Rey
                </h4>
                <Image
                  src="/mascots/rey.png"
                  alt="Rey"
                  width={150}
                  height={150}
                  className="mx-auto "
                />
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex flex-col items-center p-6 gap-2 justify-center">
                <h4 className="text-3xl font-extrabold mb-2 text-center w-full">
                  Bella
                </h4>
                <Image
                  src="/mascots/bella.png"
                  alt="Bella"
                  width={165}
                  height={200}
                  className="mx-auto"
                />
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex flex-col items-center p-6 gap-2 justify-center">
                <h4 className="text-3xl font-extrabold mb-2 text-center w-full">
                  Vanila
                </h4>
                <Image
                  src="/mascots/vanila.png"
                  alt="Vanila"
                  width={150}
                  height={150}
                  className="mx-auto "
                />
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Bagian Capaian Pembelajaran */}
        <section className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">
            Capaian Pembelajaran
          </h3>
          <ul className="space-y-4">
            <li className="flex items-start">
              <ChevronRight className="w-6 h-6 text-green-500 mr-2 flex-shrink-0" />
              <p>
                Mengamati, menyelidiki, dan menjelaskan fenomena sehari-hari
                sesuai kaidah kerja ilmiah dalam menjelaskan konsep termokimia
              </p>
            </li>
            <li className="flex items-start">
              <ChevronRight className="w-6 h-6 text-green-500 mr-2 flex-shrink-0" />
              <p>
                Menerapkan operasi matematika dalam penentuan harga entalpi
                dalam reaksi kimia
              </p>
            </li>
            <li className="flex items-start">
              <ChevronRight className="w-6 h-6 text-green-500 mr-2 flex-shrink-0" />
              <p>
                Menafsirkan harga entalpi yang didapatkan dan interpretasinya
              </p>
            </li>
          </ul>
        </section>

        {/* Bagian Topik */}
        <section className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">
            Topik Utama yang Dibahas
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            <Card>
              <CardContent className="p-4">
                <List className="w-6 h-6 text-blue-500 mb-2" />
                <p>Hukum kekekalan energi</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <List className="w-6 h-6 text-blue-500 mb-2" />
                <p>Sistem dan lingkungan</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <List className="w-6 h-6 text-blue-500 mb-2" />
                <p>Reaksi eksoterm dan endoterm</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <List className="w-6 h-6 text-blue-500 mb-2" />
                <p>Persamaan termokimia</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <List className="w-6 h-6 text-blue-500 mb-2" />
                <p>Jenis-jenis perubahan entalpi</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <List className="w-6 h-6 text-blue-500 mb-2" />
                <p>Perubahan ΔH reaksi</p>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <footer className="bg-gray-100 py-6 mt-16">
        <p className="text-center text-gray-600">
          © 2023 ThermoChem. Hak cipta dilindungi undang-undang.
        </p>
      </footer>
    </div>
  );
}
