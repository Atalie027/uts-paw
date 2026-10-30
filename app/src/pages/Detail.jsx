import { Link, useParams } from 'react-router-dom'
import useKoleksi from '../hooks/useKoleksi.js'

export default function Detail() {
  const { id } = useParams()
  const { items, loading } = useKoleksi()
  const item = items.find((i) => String(i.id) === id)

  if (loading) return <p>Memuat data...</p>
  if (!item) {
    return (
      <section>
        <h1>Item tidak ditemukan</h1>
        <Link to="/koleksi">Kembali ke koleksi</Link>
      </section>
    )
  }

  return (
    <section>
      <h1>{item.judul}</h1>
      <dl>
        <dt>Kategori</dt>
        <dd>{item.kategori}</dd>
        <dt>Alamat</dt>
        <dd>{item.alamat}</dd>
        <dt>Harga Rata-rata (Rp)</dt>
        <dd>{item.hargaRataRata}</dd>
        <dt>Jam Buka</dt>
        <dd>{item.jamBuka}</dd>
      </dl>
      <Link to="/koleksi">Kembali</Link>
    </section>
  )
}