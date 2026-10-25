import Card from "./components/Card";
import ContainerFunction from "./components/ContainerFunction";
import ContainerClass from "./components/ContainerClass";
import Container from "./components/Container";
import { PRODUCTS } from "./data/products";

export default function Home() {
  return (
    <>
      <header className="header">
        <h1 className="header-title">Katalog Produk UMKM Pilihan</h1>
        <p className="header-subtitle">
          Berbagai pilihan produk terbaik untuk memenuhi kebutuhan harian dan gaya hidup Anda.
        </p>
      </header>

      {/* Grid Katalog Produk */}
      <main className="product-grid">
        {PRODUCTS.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </main>

            {/*Container */}
      <section style={{ maxWidth: "1200px", margin: "0 auto 16px", padding: "0 24px" }}>
        {/* Functional Component */}
        <ContainerFunction title="Pengumuman (function)">
          Selamat datang di platform UMKM kami! Semua pesanan diproses dengan cepat dan aman.
        </ContainerFunction>

        {/* Class Component */}
        <ContainerClass title="Promo Spesial (class)">
          Dapatkan diskon potongan harga hingga 50% untuk kategori fashion dan kuliner hari ini!
        </ContainerClass>

        {/* Latihan BEM Container */}
        <Container size="small" bordered={false} title="Latihan BEM (Small + No Border)">
          Ini adalah contoh Container yang lebih kecil tanpa border.
        </Container>
        <Container size="medium" bordered={true} title="Medium + Bordered">
          Ini adalah contoh Container yang berukuran medium dengan border.
        </Container>
        <Container size="large" bordered={true} title="Large + Bordered">
          Ini adalah contoh Container yang lebih besar dengan border.
        </Container>
      </section>
    </>
  );
}

